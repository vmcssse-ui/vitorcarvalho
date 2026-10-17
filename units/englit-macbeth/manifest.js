// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE English Literature 8702 · Paper 1 Section A · Macbeth · schema astra/2
// Quotation convention: every Shakespeare quotation is wrapped in curly double quotes “…” (line breaks shown as " / ").
// Curly single quotes ‘…’ are used for single words and terms. verify.py checks every “…” against its stored reference text.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["englit-macbeth"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "englit-macbeth",
    subjectKey: "englit",
    subject: "English Literature",
    board: "AQA",
    spec: "8702",
    specRef: "Paper 1: Shakespeare and the 19th-century novel · Section A: Shakespeare (Macbeth)",
    year: 10,
    tier: "GCSE (one tier)",
    title: "Macbeth",
    sub: "From a brave soldier to a dead butcher: the whole play, its world and the exam question, one act at a time.",
    bigQuestion: "What is the plot, context and key themes of Shakespeare's play Macbeth, and how does Shakespeare turn a hero into a tyrant?",
    lessonCount: 26,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer.
    spacing: [2, 7, 30],
    // astra/2: one star per chapter on the Heath plate, in the sky above the figures (x 0.22–0.47, y 0.40–0.80)
    // and left of the moon (about 0.76, 0.26). Chapter 1 low on the left, rising to chapter 6 near the moon.
    constellation: [[0.08, 0.70], [0.10, 0.42], [0.22, 0.22], [0.40, 0.14], [0.56, 0.18], [0.62, 0.40]]
  },

  lessons: [
    { n: 1, title: "Introduction to Shakespeare's Macbeth: context", question: "What is meant by context, and what were the beliefs and ideas of Shakespeare's society?", keywords: ["context", "social context", "historical context", "literary context"] },
    { n: 2, title: "Introduction to Macbeth: the plot and the opening", question: "Can I summarise the main plot and apply context to the opening of the play?", keywords: ["plot", "rhyming couplets", "trochaic tetrameter"] },
    { n: 3, title: "Act 1 Scene 1: the witches", question: "How does Shakespeare present the witches in the opening act?", keywords: ["rhyming couplets", "trochaic tetrameter", "pathetic fallacy"] },
    { n: 4, title: "Act 1 Scene 2: Brave Macbeth", question: "How is Macbeth introduced to the audience?", keywords: ["imagery", "semantic field", "foreshadow", "tragic hero"] },
    { n: 5, title: "Act 1 Scene 3: Macbeth and the witches", question: "How do Macbeth and Banquo react to the witches, and what does this reveal?", keywords: ["hamartia", "hubris", "fate"] },
    { n: 6, title: "Act 1 Scene 3 part 2: Macbeth's asides", question: "How does Shakespeare present Macbeth's state of mind in the second half of the scene?", keywords: ["hamartia", "hubris", "aside"] },
    { n: 7, title: "Presentation of Macbeth in Act 1 Scenes 1–3", question: "How does Shakespeare present Macbeth in the opening scenes of the play?", keywords: ["tragic hero", "hamartia", "fate and free will"] },
    { n: 8, title: "Act 1 Scene 4: Kingship", question: "How does Shakespeare introduce the idea of kingship?", keywords: ["treason", "regicide", "divine right of kings", "succession"] },
    { n: 9, title: "Act 1 Scene 5: Lady Macbeth", question: "How does Shakespeare present Lady Macbeth as a controversial character?", keywords: ["subvert", "soliloquy", "imperative"] },
    { n: 10, title: "Act 1 Scene 5 part 2: Macbeth's entrance", question: "How does Shakespeare present the relationship between Macbeth and Lady Macbeth in Act 1 Scene 5?", keywords: ["subvert", "control", "appearance and reality"] },
    { n: 11, title: "Act 1 Scenes 6–7: Manipulation and masculinity", question: "Why is Lady Macbeth's manipulation of Macbeth so effective?", keywords: ["sacrilegious", "euphemism", "emasculate", "soliloquy"] },
    { n: 12, title: "Act 2 Scene 1: The dagger scene", question: "To what extent is Macbeth in control of his actions?", keywords: ["manifest", "hallucination", "soliloquy"] },
    { n: 13, title: "Act 2 Scene 2: After the murder", question: "How is guilt explored in this scene?", keywords: ["sacrilegious", "Jacobean tragedy", "imagery of sleep, water and blood"] },
    { n: 14, title: "Mid-unit assessment preparation (with Revising Lady Macbeth)", question: "How do I approach the exam-style question, from the extract to the whole play?", keywords: ["extract", "whole play", "AO1", "AO2", "AO3"] },
    { n: 15, title: "Act 2 Scene 3: The Porter's scene", question: "What impact does the king's death have on different characters?", keywords: ["duplicitous", "dramatic irony", "Great Chain of Being"] },
    { n: 16, title: "Act 2 Scene 4: The Everyman", question: "What is the role of the Everyman?", keywords: ["Everyman", "foreshadowing", "symbolism"] },
    { n: 17, title: "Act 3 Scene 1: Macbeth and the murderers", question: "How does this scene introduce the turning point in the play?", keywords: ["imagery", "persuasion", "turning point"] },
    { n: 18, title: "Act 3 Scenes 2–3: Macbeth's deterioration and Banquo's murder", question: "How has Macbeth's state of mind developed from the beginning of the play to this point?", keywords: ["paranoia", "power dynamic", "transformation"] },
    { n: 19, title: "Act 3 Scene 4: The banquet scene", question: "How does Shakespeare communicate Macbeth's mental deterioration?", keywords: ["mental deterioration", "hallucination", "hierarchy"] },
    { n: 20, title: "Act 3 Scene 5: Hecate", question: "What is the purpose of the Hecate scene?", keywords: ["supernatural", "rhyming couplets", "interlude"] },
    { n: 21, title: "Act 3 Scene 6: Lennox", question: "How does Shakespeare present Lennox's internal struggle?", keywords: ["fealty", "loyalty", "recap scene"] },
    { n: 22, title: "Act 4 Scene 1: The second set of prophecies", question: "To what extent is Macbeth manipulated by the witches?", keywords: ["resolute", "tyranny", "hubris", "apparition"] },
    { n: 23, title: "Act 4 Scenes 2–3: Murder and revenge", question: "What is the dramatic function of the Macduff scenes?", keywords: ["foil", "patriotism", "kingship"] },
    { n: 24, title: "Act 5 Scene 1: The sleepwalking scene", question: "What has happened to Lady Macbeth?", keywords: ["subconscious", "God's justice", "motif"] },
    { n: 25, title: "Act 5 Scenes 2–5: ‘Life's but a walking shadow’", question: "How far does Shakespeare want us to feel sympathy for Macbeth?", keywords: ["hubris", "seven deadly sins", "soliloquy"] },
    { n: 26, title: "Act 5 Scenes 6–9: The last stand", question: "What thoughts are the audience left with at the play's conclusion?", keywords: ["falling action", "catastrophe", "catharsis"] }
  ],

  glossary: [
    { term: "context", means: "The world a text was written in: its beliefs, its history and the other writing around it.", chapter: "world-of-the-play" },
    { term: "Jacobean", means: "From the reign of James I of England (1603–1625). Macbeth is a Jacobean play.", chapter: "world-of-the-play" },
    { term: "Great Chain of Being", means: "The belief that God set everything in a fixed order, from angels down to rocks.", chapter: "world-of-the-play" },
    { term: "divine right of kings", means: "The belief that a king is chosen by God, so nobody may question or remove him.", chapter: "world-of-the-play" },
    { term: "regicide", means: "Killing a king. To a Jacobean audience, a crime against God as well as people.", chapter: "guilt-sleep-blood" },
    { term: "treason", means: "Betraying your king or your country.", chapter: "witches-and-ambition" },
    { term: "tragic hero", means: "A great, noble character who falls because of a flaw in himself.", chapter: "world-of-the-play" },
    { term: "hamartia", means: "A tragic hero's fatal flaw. Macbeth's is usually read as ambition.", chapter: "witches-and-ambition" },
    { term: "hubris", means: "Too much pride: believing you are above danger or above the rules.", chapter: "tyranny-and-kingship" },
    { term: "soliloquy", means: "A speech a character makes alone on stage, so we hear their private thoughts.", chapter: "lady-macbeth-and-gender" },
    { term: "aside", means: "A short line spoken to the audience that other characters on stage do not hear.", chapter: "witches-and-ambition" },
    { term: "dramatic irony", means: "When the audience knows something a character on stage does not.", chapter: "witches-and-ambition" },
    { term: "patriarchal", means: "Run by men, with women expected to obey fathers and husbands.", chapter: "lady-macbeth-and-gender" },
    { term: "tyrant", means: "A ruler who governs through fear and violence, not justice.", chapter: "tyranny-and-kingship" },
    { term: "motif", means: "An image or idea that keeps coming back, such as blood, sleep or darkness.", chapter: "guilt-sleep-blood" },
    { term: "fate and free will", means: "The question of whether our lives are already decided, or whether we choose.", chapter: "witches-and-ambition" }
  ],

  // astra/2: the Connections game. Four groups of four, all sixteen drawn from the glossary above.
  connections: [
    { group: "The world of 1606", terms: ["context", "Jacobean", "Great Chain of Being", "patriarchal"] },
    { group: "Crimes against a king", terms: ["divine right of kings", "regicide", "treason", "tyrant"] },
    { group: "The shape of a tragedy", terms: ["tragic hero", "hamartia", "hubris", "fate and free will"] },
    { group: "How the stage speaks to us", terms: ["soliloquy", "aside", "dramatic irony", "motif"] }
  ],

  chapters: [
    // ───────────────────────────── CHAPTER 1 ─────────────────────────────
    {
      key: "world-of-the-play", n: 1,
      title: "The world of the play",
      lead: "This chapter gives you the beliefs of Shakespeare's audience, so the rest of the play makes sense.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "context", means: "the world a story was written in", sentence: "Knowing the context helps you see why the audience feared the witches." },
          { word: "Jacobean", means: "from the time of King James I", sentence: "A Jacobean audience believed that witches were real." },
          { word: "order", means: "everything in its right place", sentence: "People believed God had set the world in order." },
          { word: "traitor", means: "someone who betrays their king", sentence: "A traitor who tried to kill the king could be executed." },
          { word: "patriarchal", means: "run by men", sentence: "In a patriarchal society, wives were expected to obey their husbands." }
        ],
        passage: [
          "Macbeth is a play by William Shakespeare.",
          "He wrote it in about 1606.",
          "The story is set in Scotland, long ago.",
          "When Shakespeare wrote it, James I was King of England.",
          "James was also King of Scotland.",
          "James believed in witches and wrote a book about them.",
          "Many people believed God had put the whole world in order.",
          "They called this order the Great Chain of Being.",
          "The king sat high on the chain, close to God.",
          "So killing a king meant breaking God's order.",
          "In 1605, a group of plotters tried to blow up the king.",
          "We call this the Gunpowder Plot.",
          "Shakespeare's audience feared traitors, witches and chaos.",
          "Keep these fears in mind as you read the play."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "العالم الذي كُتبت فيه القصة (context)",
            "من زمن الملك جيمس الأول (Jacobean)",
            "كل شيء في مكانه الصحيح (order)",
            "شخص يخون ملكه (traitor)",
            "يحكمه الرجال (patriarchal)"
          ],
          "passage": [
            "ماكبث مسرحية كتبها ويليام شكسبير.",
            "كتبها نحو عام 1606.",
            "تدور القصة في سكوتلندا، منذ زمن بعيد.",
            "عندما كتبها شكسبير، كان جيمس الأول ملك إنجلترا.",
            "وكان جيمس أيضاً ملك سكوتلندا.",
            "كان جيمس يؤمن بالساحرات وكتب كتاباً عنهن.",
            "كان كثير من الناس يؤمنون بأن الله رتّب العالم كله.",
            "وسمّوا هذا الترتيب سلسلة الوجود الكبرى (Great Chain of Being).",
            "كان الملك في مكان عالٍ في السلسلة، قريباً من الله.",
            "لذلك كان قتل الملك يعني الإخلال بنظام الله.",
            "في عام 1605، حاولت مجموعة من المتآمرين تفجير الملك.",
            "نسمّي هذا مؤامرة البارود (Gunpowder Plot).",
            "كان جمهور شكسبير يخاف من الخونة والساحرات والفوضى.",
            "ضع هذه المخاوف في ذهنك وأنت تقرأ المسرحية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "świat, w którym powstała historia (context)",
            "z czasów króla Jakuba I (Jacobean)",
            "wszystko na swoim właściwym miejscu (order)",
            "ktoś, kto zdradza swojego króla (traitor)",
            "rządzony przez mężczyzn (patriarchal)"
          ],
          "passage": [
            "Makbet to sztuka Williama Szekspira.",
            "Napisał ją około roku 1606.",
            "Historia dzieje się w Szkocji, dawno temu.",
            "Kiedy Szekspir ją pisał, Jakub I był królem Anglii.",
            "Jakub był też królem Szkocji.",
            "Jakub wierzył w czarownice i napisał o nich książkę.",
            "Wielu ludzi wierzyło, że Bóg ułożył cały świat w porządku.",
            "Nazywali ten porządek Wielkim Łańcuchem Bytów (Great Chain of Being).",
            "Król stał wysoko na tym łańcuchu, blisko Boga.",
            "Dlatego zabicie króla oznaczało złamanie Bożego porządku.",
            "W 1605 roku grupa spiskowców próbowała wysadzić króla w powietrze.",
            "Nazywamy to spiskiem prochowym (Gunpowder Plot).",
            "Widzowie Szekspira bali się zdrajców, czarownic i chaosu.",
            "Pamiętaj o tych lękach, kiedy czytasz sztukę."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o mundo em que uma história foi escrita (context)",
            "do tempo do rei James I (Jacobean)",
            "tudo no seu lugar certo (order)",
            "alguém que traiu o seu rei (traitor)",
            "governado por homens (patriarchal)"
          ],
          "passage": [
            "Macbeth é uma peça de teatro de William Shakespeare.",
            "Ele escreveu a peça por volta de 1606.",
            "A história acontece na Escócia, há muito tempo.",
            "Quando Shakespeare escreveu a peça, James I era o rei da Inglaterra.",
            "James também era rei da Escócia.",
            "James acreditava em bruxas e escreveu um livro sobre elas.",
            "Muitas pessoas acreditavam que Deus tinha posto o mundo inteiro em ordem.",
            "Essa ordem tinha o nome de Grande Cadeia do Ser (Great Chain of Being).",
            "O rei estava no alto da cadeia, perto de Deus.",
            "Por isso, matar um rei era quebrar a ordem de Deus.",
            "Em 1605, um grupo de conspiradores tentou fazer explodir o rei.",
            "Esse acontecimento é conhecido como a Conspiração da Pólvora (Gunpowder Plot).",
            "O público de Shakespeare tinha medo de traidores, bruxas e caos.",
            "Lembre-se desses medos enquanto lê a peça."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "adduunka sheekada lagu qoray (context)",
            "xilligii Boqor James I (Jacobean)",
            "wax walba meeshiisa saxda ah (order)",
            "qof boqorkiisa khiyaameeya (traitor)",
            "rag maamulaan (patriarchal)"
          ],
          "passage": [
            "Macbeth waa riwaayad uu qoray William Shakespeare.",
            "Wuxuu qoray qiyaastii sannadkii 1606.",
            "Sheekadu waxay ka dhacday Scotland, waa hore.",
            "Markii Shakespeare qoray, James I wuxuu ahaa Boqorka England.",
            "James sidoo kale wuxuu ahaa Boqorka Scotland.",
            "James wuxuu rumaysnaa saaxiriin, buugna wuxuu ka qoray.",
            "Dad badan waxay rumaysnaayeen in Ilaahay adduunka oo dhan u habeeyay nidaam.",
            "Nidaamkaas waxay ugu yeedheen Great Chain of Being.",
            "Boqorku wuxuu ku fadhiyey meel sare silsiladda, Ilaahay u dhow.",
            "Sidaas darteed boqor dilistu waxay ahayd jebinta nidaamka Ilaahay.",
            "Sannadkii 1605, koox shirqoolayaal ah waxay isku dayeen inay boqorka qarxiyaan.",
            "Tan waxaan ugu yeedhnaa Gunpowder Plot.",
            "Daawadayaasha Shakespeare waxay ka baqayeen khaa'imiin, saaxiriin iyo qalalaase.",
            "Cabsiyadaas maskaxda ku hay markaad riwaayadda akhrinayso."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "світ, у якому була написана історія",
            "з часів короля Якова I (James I)",
            "усе на своєму місці",
            "той, хто зраджує свого короля",
            "керований чоловіками"
          ],
          "passage": [
            "«Макбет» — це п’єса Вільяма Шекспіра.",
            "Він написав її приблизно в 1606 році.",
            "Дія відбувається в Шотландії, дуже давно.",
            "Коли Шекспір писав її, королем Англії був Яків I.",
            "Яків був також королем Шотландії.",
            "Яків вірив у відьом і написав про них книгу.",
            "Багато людей вірили, що Бог упорядкував увесь світ.",
            "Цей порядок називали Великим ланцюгом буття (Great Chain of Being).",
            "Король стояв високо на цьому ланцюгу, близько до Бога.",
            "Тому вбити короля означало зламати Божий порядок.",
            "У 1605 році група змовників спробувала підірвати короля.",
            "Ми називаємо це Пороховою змовою (Gunpowder Plot).",
            "Глядачі Шекспіра боялися зрадників, відьом і хаосу.",
            "Пам’ятайте про ці страхи, коли читаєте п’єсу."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ دنیا جس میں کہانی لکھی گئی (context)",
            "بادشاہ جیمز اول کے زمانے کا (Jacobean)",
            "ہر چیز اپنی صحیح جگہ پر (order)",
            "وہ شخص جو اپنے بادشاہ سے غداری کرے (traitor)",
            "مردوں کے چلائے ہوئے (patriarchal)"
          ],
          "passage": [
            "میکبیث ولیم شیکسپیئر کا ایک ڈرامہ ہے۔",
            "اس نے یہ تقریباً 1606 میں لکھا۔",
            "کہانی بہت پہلے کے سکاٹ لینڈ میں ہوتی ہے۔",
            "جب شیکسپیئر نے یہ لکھا، جیمز اول انگلینڈ کا بادشاہ تھا۔",
            "جیمز سکاٹ لینڈ کا بادشاہ بھی تھا۔",
            "جیمز جادوگرنیوں پر یقین رکھتا تھا اور اس نے ان کے بارے میں ایک کتاب لکھی۔",
            "بہت سے لوگ مانتے تھے کہ خدا نے پوری دنیا کو ایک ترتیب میں رکھا ہے۔",
            "وہ اس ترتیب کو Great Chain of Being کہتے تھے۔",
            "بادشاہ اس زنجیر میں اونچی جگہ پر، خدا کے قریب تھا۔",
            "اس لیے بادشاہ کو قتل کرنا خدا کی ترتیب توڑنے کے برابر تھا۔",
            "1605 میں سازشیوں کے ایک گروہ نے بادشاہ کو بارود سے اڑانے کی کوشش کی۔",
            "ہم اسے Gunpowder Plot کہتے ہیں۔",
            "شیکسپیئر کے ناظرین غداروں، جادوگرنیوں اور بدنظمی سے ڈرتے تھے۔",
            "ڈرامہ پڑھتے ہوئے ان خوفوں کو ذہن میں رکھیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "A king who feared witches",
          paragraphs: [
            "When Elizabeth I died in 1603, James VI of Scotland became James I of England. Shakespeare's company was soon renamed the King's Men, so James was not just the king: he was their patron. A play about Scotland, kings and witches was a play about things James cared about deeply.",
            "James took witchcraft seriously. In 1590 he was involved in the North Berwick witch trials, where people were accused of raising storms against his ship. In 1597 he published Daemonologie, a book arguing that witches were real servants of the devil. For a Jacobean audience, the witches on stage were not a joke in a pointed hat. They were a real and frightening danger."
          ],
          quote: { text: "By the pricking of my thumbs, / Something wicked this way comes.", source: "4.1.44–45" },
          tip: "Context is only worth marks when you link it to a moment in the play. Never write a history lesson on its own."
        },
        {
          heading: "Order, kings and the Gunpowder Plot",
          paragraphs: [
            "Shakespeare's audience was taught that God had placed everything in a fixed order: God and the angels at the top, then kings, then ordinary people, then animals, plants and rocks. This was the Great Chain of Being. Closely linked was the divine right of kings: a king was chosen by God, so to kill one was a sin as well as a crime.",
            "On 5 November 1605, Catholic plotters, including Guy Fawkes, planned to blow up Parliament with the king inside. The Gunpowder Plot failed, but it left the country nervous about traitors hiding behind friendly faces. When Macduff finds Duncan's body, he describes the murder as an attack on something holy. That is how Shakespeare's audience would have felt about regicide."
          ],
          quote: { text: "Most sacrilegious murder hath broke ope / The Lord's anointed temple", source: "2.3.76–77" },
          tip: "‘Anointed’ means blessed with holy oil at a coronation. Macduff is calling the king's body a temple of God."
        },
        {
          heading: "Women, heroes and tragedy",
          paragraphs: [
            "Jacobean England was patriarchal. Women were expected to obey their fathers and husbands, and they were not allowed to act on the public stage, so boy actors played Lady Macbeth and the witches. Many people still blamed Eve for the first sin in the Bible, and women were the people most often accused of witchcraft.",
            "Macbeth is a tragedy. A tragic hero starts high and falls because of a flaw inside him, his hamartia. Shakespeare starts Macbeth at the very top: the first time we hear about him, he is the bravest soldier in Scotland. The higher he starts, the further he has to fall."
          ],
          quote: { text: "For brave Macbeth (well he deserves that name)", source: "1.2.18" },
          tip: "Shakespeare took the story from Holinshed's Chronicles (1587). The real Macbeth was King of Scotland from 1040 to 1057."
        }
      ],
      gate: [
        { kind: "mcq", q: "Who was King of England when Shakespeare wrote Macbeth?", options: ["Henry VIII", "James I", "Charles I", "Richard III"], answer: 1, why: "James VI of Scotland became James I of England in 1603. Macbeth was written in about 1606.",
          feedback: [
            "Wrong century. Henry VIII reigned from 1509 to 1547, before Shakespeare was even born in 1564. Macbeth was written in about 1606, under James I.",
            "",
            "Wrong generation. Charles I was James's son and did not become king until 1625, nine years after Shakespeare died. In 1606 his father James I was on the throne.",
            "You have mixed up a king Shakespeare wrote about with the king he wrote for. Richard III died in 1485. Macbeth was written in about 1606 for the court of James I."
          ] },
        { kind: "gap", q: "The belief that God set a fixed order for everything is called the Great Chain of ___.", answer: "Being", options: ["Being", "Kings", "Command"], why: "The Great Chain of Being ran from God and the angels down to rocks. Kings sat near the top.",
          feedback: {
            "Kings": "You have run the Great Chain of Being together with the divine right of kings. They are linked beliefs, but the Chain is the order of everything that exists, from God down to rocks; kings are only one link in it.",
            "Command": "A chain of command is a modern phrase for who gives orders to whom. The Jacobean belief was the Great Chain of Being: a fixed order for all of creation, not just for people."
          } },
        { kind: "mcq", q: "What was the Gunpowder Plot of 1605?", options: ["A plan to blow up Parliament and the king", "A war between England and Scotland", "A witch trial in Scotland", "A fire at Shakespeare's theatre"], answer: 0, why: "Plotters planned to blow up Parliament with James inside. It made traitors a fresh, real fear for the audience.",
          feedback: [
            "",
            "By 1605 England and Scotland shared one king, James, so there was no war between them. The Plot was a plan by English Catholic plotters to blow up Parliament with the king inside.",
            "You are thinking of the North Berwick witch trials of 1590, which James took part in. The Gunpowder Plot of 1605 was about treason, not witchcraft: a plan to blow up Parliament and the king.",
            "The Globe did burn down, but in 1613, by accident, during a performance. The Gunpowder Plot of 1605 was a deliberate plan to blow up Parliament and the king."
          ] }
      ],
      modules: [
        {
          title: "The plot in eight steps",
          task: {
            kind: "order",
            q: "Put these eight events from Macbeth in the order they happen in the play.",
            items: [
              "Three witches greet Macbeth and Banquo with prophecies.",
              "Lady Macbeth reads Macbeth's letter and plans the murder.",
              "Macbeth kills King Duncan in his sleep.",
              "Macbeth sends murderers to kill Banquo and his son Fleance.",
              "Banquo's ghost appears at Macbeth's feast.",
              "Macbeth has Macduff's wife and children killed.",
              "Lady Macbeth walks and talks in her sleep.",
              "Macduff kills Macbeth and Malcolm becomes king."
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the event that starts everything: who gives Macbeth the idea of being king?",
                "Find the event that ends everything: how does Macbeth die?",
                "Place the two murders Macbeth arranges after he becomes king. Who is the first threat he removes?",
                "Fill the gaps: when do the ghost and the sleepwalking happen? Remember that guilt grows over time."
              ],
              example: {
                q: "Practice: put these moments from Act 1 Scene 3 in order: Ross names Macbeth Thane of Cawdor; the witches greet Macbeth; the witches vanish; Banquo asks about his own future.",
                steps: [
                  "The scene opens with the witches, so their greeting comes first.",
                  "Banquo asks what they have for him once Macbeth has heard his prophecies.",
                  "The witches vanish before Ross arrives.",
                  "Ross brings the news last, and the first prophecy comes true."
                ],
                answer: "The witches greet Macbeth; Banquo asks about his future; the witches vanish; Ross names Macbeth Thane of Cawdor."
              }
            },
            core: { hint: "Think of three stages: Act 1–2 Macbeth gets the crown, Act 3–4 he kills to keep it, Act 5 he loses it." },
            stretch: { extend: "Which single event on the list is the turning point of the play? Justify your choice in two sentences, then say which event a Jacobean audience would find most shocking and why." }
          },
          why: "The play moves in three stages: winning the crown (Acts 1–2), holding it through more murder (Acts 3–4), and losing it (Act 5). Every later chapter fits into this shape.",
          explain: "Say, in one sentence, why Banquo's ghost must come after Banquo's murder and before the sleepwalking."
        },
        {
          title: "Context to meaning",
          task: {
            kind: "match",
            q: "Match each piece of context to the moment in the play it helps you understand.",
            pairs: [
              ["James I's Daemonologie (1597)", "Why the witches would frighten, not amuse, the first audience"],
              ["The Gunpowder Plot (1605)", "Why a smiling traitor like Macbeth feels so dangerous"],
              ["The divine right of kings", "Why killing Duncan is a sin against God, not only a crime"],
              ["A patriarchal society", "Why Lady Macbeth's commanding voice would shock"],
              ["The genre of tragedy", "Why Macbeth begins as a brave and admired hero"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read the left-hand side and say in your own words what each piece of context is.",
                "Ask: what would someone who believed this feel when watching the play?",
                "Find the moment on the right that would trigger that feeling."
              ],
              example: {
                q: "Practice: which moment does the Great Chain of Being help you understand: (a) the witches' rhyme or (b) Macduff calling the murder ‘sacrilegious’?",
                steps: ["The Great Chain puts the king close to God.", "‘Sacrilegious’ means an attack on something holy.", "So the Chain explains why Macduff uses religious words."],
                answer: "(b) Macduff calling the murder ‘sacrilegious’."
              }
            },
            core: { hint: "Each piece of context explains a feeling the first audience would have had. Match the belief to the feeling." },
            stretch: { extend: "Pick one pair and turn it into a single exam sentence that names the moment, quotes three or four words, and weaves in the context in the same sentence." }
          },
          why: "Context earns marks (AO3) only when it explains why a moment matters. Each pair here is one link you can reuse in an essay.",
          explain: "Pick one pair and say, in one sentence, what the first audience would have felt at that moment and why."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 2 ─────────────────────────────
    {
      key: "witches-and-ambition", n: 2,
      title: "Witches, a brave soldier and ambition (Act 1)",
      lead: "This chapter takes you from the witches' first chant to the moment Macbeth hides his black desires.",
      covers: [3, 4, 5, 6, 8],
      pretext: {
        words: [
          { word: "prophecy", means: "a prediction about the future", sentence: "The witches' prophecy says Macbeth will be king." },
          { word: "paradox", means: "a statement that seems to contradict itself", sentence: "‘Fair is foul’ is a paradox, because fair and foul are opposites." },
          { word: "ambition", means: "a strong wish for power or success", sentence: "Macbeth's ambition makes him think about murder." },
          { word: "aside", means: "a line only the audience hears", sentence: "In an aside, Macbeth tells us his secret hopes." },
          { word: "irony", means: "when words mean more than the speaker knows", sentence: "It is ironic that Duncan trusts Macbeth so much." }
        ],
        passage: [
          "The play opens with three witches in a storm.",
          "They speak in rhymes, like a spell.",
          "They plan to meet a soldier called Macbeth.",
          "Next, we hear that Macbeth has won a battle for King Duncan.",
          "Everyone calls him brave and loyal.",
          "On his way home, Macbeth meets the witches with his friend Banquo.",
          "They say Macbeth will be Thane of Cawdor, and then king.",
          "They say Banquo's children will be kings.",
          "Soon, Macbeth is made Thane of Cawdor.",
          "The first prophecy has come true.",
          "Now Macbeth starts to think about killing the king.",
          "He is scared by his own thoughts.",
          "But he keeps those thoughts a secret."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "تنبّؤ بما سيحدث في المستقبل (prophecy)",
            "عبارة تبدو وكأنها تناقض نفسها (paradox)",
            "رغبة قوية في السلطة أو النجاح (ambition)",
            "كلام لا يسمعه إلا الجمهور (aside)",
            "حين تعني الكلمات أكثر مما يعرفه قائلها (irony)"
          ],
          "passage": [
            "تبدأ المسرحية بثلاث ساحرات في عاصفة.",
            "يتكلمن بكلام مُقفّى، كأنه تعويذة.",
            "يخططن للقاء جندي اسمه ماكبث.",
            "بعد ذلك نسمع أن ماكبث انتصر في معركة من أجل الملك دنكان.",
            "الجميع يصفونه بالشجاعة والوفاء.",
            "في طريق عودته، يلتقي ماكبث بالساحرات ومعه صديقه بانكو.",
            "يقلن إن ماكبث سيصبح سيد كودور (Thane of Cawdor)، ثم ملكاً.",
            "ويقلن إن أبناء بانكو سيصبحون ملوكاً.",
            "وسرعان ما يُعيَّن ماكبث سيداً لكودور.",
            "لقد تحققت النبوءة الأولى.",
            "الآن يبدأ ماكبث يفكر في قتل الملك.",
            "وتخيفه أفكاره هو نفسه.",
            "لكنه يُبقي تلك الأفكار سراً."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przewidywanie przyszłości (prophecy)",
            "zdanie, które wydaje się samo sobie zaprzeczać (paradox)",
            "silne pragnienie władzy lub sukcesu (ambition)",
            "kwestia, którą słyszy tylko publiczność (aside)",
            "kiedy słowa znaczą więcej, niż wie ten, kto je mówi (irony)"
          ],
          "passage": [
            "Sztuka zaczyna się od trzech czarownic w czasie burzy.",
            "Mówią rymami, jak zaklęcie.",
            "Planują spotkać żołnierza o imieniu Makbet.",
            "Potem słyszymy, że Makbet wygrał bitwę dla króla Dunkana.",
            "Wszyscy nazywają go odważnym i wiernym.",
            "W drodze do domu Makbet spotyka czarownice razem ze swoim przyjacielem Bankiem.",
            "Mówią, że Makbet zostanie tanem Cawdoru (Thane of Cawdor), a potem królem.",
            "Mówią, że dzieci Banka będą królami.",
            "Wkrótce Makbet zostaje tanem Cawdoru.",
            "Pierwsza przepowiednia się spełniła.",
            "Teraz Makbet zaczyna myśleć o zabiciu króla.",
            "Własne myśli go przerażają.",
            "Ale trzyma te myśli w tajemnicy."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma previsão sobre o futuro (prophecy)",
            "uma afirmação que parece contradizer-se a si mesma (paradox)",
            "um desejo forte de poder ou de sucesso (ambition)",
            "uma fala que só o público ouve (aside)",
            "quando as palavras querem dizer mais do que quem fala sabe (irony)"
          ],
          "passage": [
            "A peça começa com três bruxas numa tempestade.",
            "Elas falam em rimas, como num feitiço.",
            "Elas têm um plano: encontrar um soldado chamado Macbeth.",
            "A seguir, ouvimos que Macbeth venceu uma batalha pelo rei Duncan.",
            "Todos dizem que ele é corajoso e leal.",
            "A caminho de casa, Macbeth encontra as bruxas com o seu amigo Banquo.",
            "Elas dizem que Macbeth será Thane de Cawdor, e depois rei.",
            "Elas dizem que os filhos de Banquo serão reis.",
            "Pouco depois, Macbeth é nomeado Thane de Cawdor.",
            "A primeira profecia já se cumpriu.",
            "Agora Macbeth começa a pensar em matar o rei.",
            "Ele tem medo dos seus próprios pensamentos.",
            "Mas ele guarda esses pensamentos em segredo."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "saadaal ku saabsan mustaqbalka (prophecy)",
            "odhaah u muuqata inay is burinayso (paradox)",
            "rabitaan xooggan oo awood ama guul (ambition)",
            "hadal daawadayaasha oo keliya maqlaan (aside)",
            "marka erayada ay ka macno badan yihiin inta hadlaha garanayo (irony)"
          ],
          "passage": [
            "Riwaayaddu waxay ku furmaysaa saddex saaxirad oo duufaan ku jira.",
            "Waxay ku hadlaan erayo is-qaafiya, sida sixir.",
            "Waxay qorsheeyaan inay la kulmaan askari la yiraahdo Macbeth.",
            "Xigga, waxaan maqalnaa in Macbeth dagaal ugu guulaystay Boqor Duncan.",
            "Qof walba wuxuu ugu yeedhaa geesi iyo daacad.",
            "Isagoo guriga ku sii jeeda, Macbeth wuxuu la kulmaa saaxiradaha isaga iyo saaxiibkiis Banquo.",
            "Waxay yiraahdaan Macbeth wuxuu noqon doonaa Thane of Cawdor, kadibna boqor.",
            "Waxay yiraahdaan carruurta Banquo waxay noqon doonaan boqorro.",
            "Wax yar kadib, Macbeth waxaa laga dhigay Thane of Cawdor.",
            "Saadaashii ugu horreysay waa rumowday.",
            "Hadda Macbeth wuxuu bilaabaa inuu ka fikiro dilka boqorka.",
            "Fikradihiisa ayaa isaga cabsi geliyaan.",
            "Laakiin fikradahaas sir ayuu u hayaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "передбачення майбутнього",
            "твердження, яке, здається, суперечить саме собі",
            "сильне бажання влади або успіху",
            "репліка, яку чують лише глядачі",
            "коли слова означають більше, ніж знає той, хто їх говорить"
          ],
          "passage": [
            "П’єса починається з трьох відьом під час бурі.",
            "Вони говорять римами, наче закляття.",
            "Вони планують зустріти воїна на ім’я Макбет.",
            "Далі ми чуємо, що Макбет виграв битву для короля Дункана.",
            "Усі називають його хоробрим і вірним.",
            "Дорогою додому Макбет разом зі своїм другом Банко зустрічає відьом.",
            "Вони кажуть, що Макбет стане таном Кавдору (Thane of Cawdor), а потім королем.",
            "Вони кажуть, що діти Банко стануть королями.",
            "Невдовзі Макбета роблять таном Кавдору.",
            "Перше пророцтво здійснилося.",
            "Тепер Макбет починає думати про вбивство короля.",
            "Його лякають власні думки.",
            "Але він тримає ці думки в таємниці."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "مستقبل کے بارے میں پیشین گوئی (prophecy)",
            "ایسا بیان جو خود اپنے خلاف لگتا ہے (paradox)",
            "طاقت یا کامیابی کی شدید خواہش (ambition)",
            "ایسی بات جو صرف ناظرین سنتے ہیں (aside)",
            "جب لفظوں کا مطلب اس سے زیادہ ہو جتنا بولنے والا جانتا ہے (irony)"
          ],
          "passage": [
            "ڈرامہ طوفان میں تین جادوگرنیوں سے شروع ہوتا ہے۔",
            "وہ قافیوں میں بولتی ہیں، جیسے کوئی جادو کا منتر۔",
            "وہ میکبیث نامی ایک سپاہی سے ملنے کا منصوبہ بناتی ہیں۔",
            "پھر ہمیں پتا چلتا ہے کہ میکبیث نے بادشاہ ڈنکن کے لیے ایک جنگ جیت لی ہے۔",
            "سب اسے بہادر اور وفادار کہتے ہیں۔",
            "گھر واپسی پر میکبیث اپنے دوست بینکو کے ساتھ جادوگرنیوں سے ملتا ہے۔",
            "وہ کہتی ہیں کہ میکبیث Thane of Cawdor بنے گا، اور پھر بادشاہ۔",
            "وہ کہتی ہیں کہ بینکو کے بچے بادشاہ بنیں گے۔",
            "جلد ہی میکبیث کو Thane of Cawdor بنا دیا جاتا ہے۔",
            "پہلی پیشین گوئی سچ ہو گئی ہے۔",
            "اب میکبیث بادشاہ کو قتل کرنے کے بارے میں سوچنے لگتا ہے۔",
            "وہ اپنی ہی سوچوں سے ڈر جاتا ہے۔",
            "مگر وہ ان سوچوں کو راز رکھتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The witches open the play (1.1)",
          paragraphs: [
            "Shakespeare opens with thunder and lightning. Storms were one of the powers the first audience believed witches had, so the weather tells them at once that something evil is at work. This is pathetic fallacy: the weather matches the mood.",
            "Listen to the rhythm. The witches speak in short lines of four strong beats, with the stress falling first (trochaic tetrameter), and they rhyme in couplets. Nobody else in the play talks like this, so it sounds like a chant. Their final line is a paradox: good and evil are swapped. It warns us that in this play, nothing is what it seems."
          ],
          quote: { text: "Fair is foul, and foul is fair.", source: "1.1.12" },
          tip: "Learn this line. You can link it to almost any scene where appearance and reality do not match."
        },
        {
          heading: "Brave Macbeth meets the witches (1.2–1.3)",
          paragraphs: [
            "Before we meet Macbeth, a wounded captain describes him in battle. Macbeth cuts an enemy open from the stomach to the jaw and puts his head on the castle walls. In an 11th-century warrior culture, this makes him a hero. But it also shows us, very early, how comfortable he is with blood.",
            "Macbeth's first words echo the witches' paradox, “So foul and fair a day I have not seen”, so Shakespeare ties him to them before they even speak to him. When they hail him as future king, Banquo notices him start with fear. In his asides, Macbeth hopes chance will crown him with no action from him, yet he is already picturing murder. Banquo, by contrast, warns that evil can tell small truths to win us over."
          ],
          quote: { text: "Till he unseamed him from the nave to th' chops, / And fixed his head upon our battlements.", source: "1.2.24–25" },
          tip: "Banquo is Macbeth's foil: he hears the same prophecy but does not act on it. Use him to show that Macbeth chose."
        },
        {
          heading: "Duncan and kingship (1.4)",
          paragraphs: [
            "Duncan has just executed the old Thane of Cawdor for treason. He says sadly that you cannot read a man's mind from his face, and that he had trusted that traitor completely. At that exact moment, Macbeth, the new Thane of Cawdor, walks in. The audience knows what Macbeth is thinking, but Duncan does not. This is dramatic irony.",
            "Duncan is a generous king: he rewards loyalty and speaks of planting Macbeth so that he grows. But when Duncan names his son Malcolm as heir, Macbeth sees a step in his way. Alone, he asks the stars to hide their light. Light was linked with God and goodness, so he is asking for darkness to cover what he wants."
          ],
          quote: { text: "Stars, hide your fires; / Let not light see my black and deep desires.", source: "1.4.57–58" },
          tip: "Notice the rhyming couplet ‘fires / desires’. Macbeth briefly sounds like the witches."
        }
      ],
      gate: [
        { kind: "mcq", q: "What do the witches predict for Banquo?", options: ["He will be Thane of Cawdor", "He will kill Duncan", "His children will be kings", "He will rule England"], answer: 2, why: "Banquo will not be king himself, but his descendants will. This is why Macbeth later fears him.",
          feedback: [
            "You have given Banquo Macbeth's prophecy. Thane of Cawdor is what the witches promise Macbeth, and Ross confirms it minutes later. Banquo is told something different: his children will be kings.",
            "The witches never tell anyone to kill. Banquo kills nobody, and it is Macbeth who murders Duncan, by his own choice rather than by prophecy. Banquo is told that his children will be kings.",
            "",
            "Nobody in the play is promised England. Banquo is told his descendants will be kings of Scotland. In Shakespeare's day James I claimed descent from Banquo, which is why the line would please him."
          ] },
        { kind: "gap", q: "Complete the witches' line: “Fair is foul, and foul is ___.”", answer: "fair", options: ["fair", "foul", "false"], why: "The paradox swaps good and evil, warning that appearances in this play cannot be trusted.",
          feedback: {
            "foul": "The line swaps the two words round: fair becomes foul, and foul becomes fair. Ending on ‘foul’ again loses the paradox, because then nothing has changed places.",
            "false": "‘False’ fits the theme but it is not Shakespeare's word. The witches end on ‘fair’, so that good and evil trade places. That swap is the paradox you can quote."
          } },
        { kind: "mcq", q: "What does the word ‘hamartia’ mean?", options: ["A battle speech", "A tragic hero's fatal flaw", "A type of witch", "A rhyming couplet"], answer: 1, why: "Hamartia is the flaw that brings a tragic hero down. For Macbeth, it is usually read as ambition.",
          feedback: [
            "A speech is something a character says; hamartia is something a character is. It is the term from Greek tragedy for the fault inside the hero that brings him down, usually read as ambition in Macbeth.",
            "",
            "Hamartia has nothing to do with witches, although the word may sound as strange as they do. It is the tragic hero's own fatal flaw. The witches tempt Macbeth, but the flaw that makes him act is his.",
            "A rhyming couplet is a method, two lines that rhyme, and the witches speak in them. Hamartia is about character, not form: the flaw inside a tragic hero."
          ] }
      ],
      modules: [
        {
          title: "Macbeth's reaction to the witches",
          task: {
            kind: "written",
            q: "How does Shakespeare present Macbeth's reaction to the witches in Act 1 Scene 3? Write one developed paragraph.",
            marks: 8,
            criteria: [
              "AO1: a clear point that answers the question about Macbeth's reaction",
              "AO1: at least two short quotations, embedded in your own sentences",
              "AO2: you zoom in on a word or method (imperative, paradox, aside) and explain its effect",
              "AO3: you link the reaction to Jacobean beliefs about witches or to the idea of a tragic hero"
            ],
            model: "Shakespeare presents Macbeth as gripped by the witches from the moment he arrives. His first line, “So foul and fair a day I have not seen”, echoes their chant from the opening scene, so the audience connects him to them before they have even spoken. When they try to leave, he orders, “Stay, you imperfect speakers. Tell me more.” The imperative ‘stay’ shows a man used to commanding, yet the word ‘imperfect’ admits he knows their message is incomplete, and he still wants more. To an audience whose king had written that witches served the devil, this eagerness would look like the first step into damnation, and the first sign of his hamartia: ambition."
          },
          levels: {
            support: {
              steps: [
                "What: write one sentence that says how Macbeth reacts (for example: eager, frightened, spellbound).",
                "How: choose a short quotation and name one method in it (an imperative, a paradox, an aside).",
                "Why: explain what that method shows about Macbeth, then link it to what a Jacobean audience believed about witches.",
                "Check: does your paragraph end by linking back to the question?"
              ],
              example: {
                q: "Practice question: how does Shakespeare present Banquo's reaction to the witches?",
                steps: [
                  "What: Banquo is suspicious and careful.",
                  "How: he warns that “The instruments of darkness tell us truths”.",
                  "Why: ‘instruments of darkness’ names the witches as tools of the devil; he believes small truths can be bait for a bigger lie."
                ],
                answer: "Shakespeare presents Banquo as wary of the witches. He warns that “The instruments of darkness tell us truths”, calling them tools of evil who use small truths to trap people. Unlike Macbeth, he sees the danger, which makes Macbeth's later choice look more clearly his own."
              }
            },
            core: { hint: "Use the What / How / Why structure from your lessons, and make sure your context explains a quotation rather than sitting at the end." },
            stretch: { extend: "Add a sentence that compares Macbeth with Banquo, then judge: is Macbeth already guilty in this scene, or only tempted? Use the idea of fate and free will." }
          },
          why: "A top paragraph moves from a clear point, to a short quotation, to the effect of one word or method, to context that explains why it matters. The model shows each step in that order.",
          explain: "Say which word in your first quotation you would analyse first, and what it suggests about Macbeth.",
          contexts: [
            { label: "Macbeth, 1.3",
              q: "Macbeth, 1.3.73: “Stay, you imperfect speakers. Tell me more.” How does Shakespeare present Macbeth's reaction to the supernatural in this line? Write one developed paragraph.",
              why: "The imperative ‘stay’ shows a soldier used to giving orders, yet he is ordering witches. ‘Imperfect’ admits their message is incomplete, and he still wants more. To an audience whose king had written that witches served the devil, this eagerness is the first step towards damnation." },
            { label: "Macbeth, 2.1",
              q: "Macbeth, 2.1.44–45: “Is this a dagger which I see before me, / The handle toward my hand?” How does Shakespeare present Macbeth's reaction to the supernatural in this line? Write one developed paragraph.",
              why: "The question shows doubt: he cannot tell whether the dagger is real. ‘Toward my hand’ makes the vision seem to offer itself to him, so the supernatural and his own wish are hard to separate. That blur is the heart of the fate and free will debate." },
            { label: "Macbeth, 4.1",
              q: "Macbeth, 4.1.47: “How now, you secret, black, and midnight hags?” How does Shakespeare present Macbeth's reaction to the supernatural in this line? Write one developed paragraph.",
              why: "He now seeks the witches out and insults them with the list ‘secret, black, and midnight hags’, yet in the next breath he demands answers. Compared with 1.3, fear has become dependence: he despises the powers he relies on. Note also that he comes to them, not they to him." }
          ]
        },
        {
          title: "Act 1 quotations and what they show",
          task: {
            kind: "match",
            q: "Match each Act 1 quotation to what it shows about Macbeth.",
            pairs: [
              ["“For brave Macbeth”", "He begins the play praised as a loyal, heroic soldier."],
              ["“Stay, you imperfect speakers. Tell me more.”", "He is hungry for the witches' prophecies."],
              ["“If chance will have me king, why, chance may crown me / Without my stir.”", "He hopes fate will hand him the crown without his acting."],
              ["“Stars, hide your fires; / Let not light see my black and deep desires.”", "He now wants darkness to hide his evil wish."]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each quotation aloud and find who is speaking and to whom.",
                "Underline one key word in each (brave, stay, chance, hide).",
                "Match the key word to the description that fits it best."
              ],
              example: {
                q: "Practice: what does Duncan's line “I have begun to plant thee” show about him?",
                steps: ["Find the key word: ‘plant’.", "A plant is cared for so that it grows.", "So Duncan is promising to reward and promote Macbeth."],
                answer: "Duncan is a generous king who means to reward Macbeth and help him grow."
              }
            },
            core: { hint: "The four quotations are in the order they come in Act 1. Each one shows Macbeth a step further from loyalty." },
            stretch: { extend: "Arrange the four quotations as a ‘journey’ and write one sentence explaining how Act 1 already maps out Macbeth's fall as a tragic hero." }
          },
          why: "Act 1 moves Macbeth from praised soldier, to eager listener, to hopeful waiter on fate, to secret plotter. Learning these four lines gives you his whole first act.",
          explain: "Say, in one sentence, how the four quotations show Macbeth moving one step at a time away from loyalty."
        },
        {
          title: "Dramatic irony in Act 1 Scene 4",
          task: {
            kind: "mcq",
            q: "Duncan says of the traitor Cawdor: “He was a gentleman on whom I built / An absolute trust.” Then Macbeth enters. Why is this dramatic irony?",
            options: [
              "Because Duncan is lying about Cawdor",
              "Because the audience knows Macbeth is already thinking of murder, but Duncan does not",
              "Because Macbeth does not know who Cawdor was",
              "Because Banquo has already warned Duncan"
            ],
            answer: 1,
            feedback: [
              "Duncan is telling the truth: he really did trust Cawdor completely. Dramatic irony is not a character lying; it is the audience knowing something the character on stage does not.",
              "",
              "Macbeth knows exactly who Cawdor was; he has just been given the man's title. The irony lies in what Duncan does not know about his new Thane of Cawdor, not in anything Macbeth does not know.",
              "Banquo has said nothing to Duncan. His warning about the instruments of darkness was spoken to Macbeth in 1.3, out of the king's hearing. Duncan is completely unaware, and that is what makes the moment dramatic irony."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember: dramatic irony is when the audience knows something a character does not.",
                "Ask: what has the audience just heard Macbeth think in Act 1 Scene 3?",
                "Ask: does Duncan know any of that?"
              ],
              example: {
                q: "Practice: in Act 1 Scene 6 Duncan calls Macbeth's castle a pleasant place. Why is that ironic?",
                steps: ["The audience knows the Macbeths plan to kill him there.", "Duncan does not know.", "So his praise is ironic."],
                answer: "The audience knows the castle is where he will be murdered, but Duncan does not."
              }
            },
            core: { hint: "Who knows about Macbeth's black and deep desires at this point: the audience, Duncan, or both?" },
            stretch: { extend: "Explain how this moment links to the Gunpowder Plot and to the play's theme of appearance and reality." }
          },
          why: "Duncan has just learned that a trusted thane was a traitor, and the next man through the door, given the same title, is plotting too. The audience can see it; Duncan cannot.",
          explain: "Say, in one sentence, what the audience knows at this moment that Duncan does not."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 3 ─────────────────────────────
    {
      key: "lady-macbeth-and-gender", n: 3,
      title: "Lady Macbeth: power, gender and persuasion (Act 1, Scenes 5–7)",
      lead: "This chapter shows you how Lady Macbeth breaks every rule for a Jacobean wife, and how she wins the argument.",
      covers: [9, 10, 11],
      pretext: {
        words: [
          { word: "subvert", means: "to turn something upside down", sentence: "Lady Macbeth subverts what people expected of a wife." },
          { word: "soliloquy", means: "a speech made alone on stage", sentence: "In her soliloquy, Lady Macbeth calls on evil spirits." },
          { word: "imperative", means: "a command word", sentence: "‘Come’ is an imperative, because she is giving an order." },
          { word: "manipulate", means: "to control someone in a sneaky way", sentence: "She manipulates Macbeth by calling him a coward." },
          { word: "emasculate", means: "to make a man feel less of a man", sentence: "She tries to emasculate him when he wants to stop." }
        ],
        passage: [
          "Lady Macbeth reads a letter from her husband.",
          "It tells her about the witches.",
          "At once, she wants him to be king.",
          "But she fears he is too kind to kill.",
          "Then she hears that King Duncan is coming to stay.",
          "Alone, she calls on evil spirits.",
          "She asks them to fill her with cruelty.",
          "When Macbeth comes home, she takes charge.",
          "She tells him to smile, but hide his plan.",
          "Later, Macbeth decides not to kill the king.",
          "Lady Macbeth calls him a coward.",
          "She says a real man would do it.",
          "By the end of the scene, he agrees."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "قلب شيء ما رأساً على عقب (subvert)",
            "كلام تقوله شخصية وهي وحدها على المسرح (soliloquy)",
            "كلمة أمر (imperative)",
            "التحكم في شخص بطريقة ماكرة (manipulate)",
            "جعل الرجل يشعر بأنه أقل رجولة (emasculate)"
          ],
          "passage": [
            "تقرأ الليدي ماكبث رسالة من زوجها.",
            "تخبرها الرسالة عن الساحرات.",
            "وعلى الفور، تريده أن يصبح ملكاً.",
            "لكنها تخشى أن يكون أطيب من أن يقتل.",
            "ثم تسمع أن الملك دنكان قادم ليبيت عندهم.",
            "وهي وحدها، تستدعي الأرواح الشريرة.",
            "تطلب منها أن تملأها بالقسوة.",
            "عندما يعود ماكبث إلى البيت، تتولى هي القيادة.",
            "تقول له أن يبتسم، لكن يخفي خطته.",
            "لاحقاً، يقرر ماكبث ألّا يقتل الملك.",
            "تصفه الليدي ماكبث بالجبان.",
            "وتقول إن الرجل الحقيقي يفعلها.",
            "وبنهاية المشهد، يوافق."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wywrócić coś do góry nogami (subvert)",
            "mowa wygłaszana samotnie na scenie (soliloquy)",
            "słowo wyrażające rozkaz (imperative)",
            "sterować kimś w podstępny sposób (manipulate)",
            "sprawić, że mężczyzna czuje się mniej męski (emasculate)"
          ],
          "passage": [
            "Lady Makbet czyta list od swojego męża.",
            "List opowiada jej o czarownicach.",
            "Od razu chce, żeby został królem.",
            "Ale boi się, że jest zbyt dobry, żeby zabić.",
            "Potem słyszy, że król Dunkan przyjeżdża w gościnę.",
            "Sama, wzywa złe duchy.",
            "Prosi je, żeby wypełniły ją okrucieństwem.",
            "Kiedy Makbet wraca do domu, ona przejmuje dowodzenie.",
            "Mówi mu, żeby się uśmiechał, ale ukrywał swój plan.",
            "Później Makbet postanawia nie zabijać króla.",
            "Lady Makbet nazywa go tchórzem.",
            "Mówi, że prawdziwy mężczyzna by to zrobił.",
            "Pod koniec sceny on się zgadza."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "virar algo de cabeça para baixo (subvert)",
            "um discurso feito sozinho no palco (soliloquy)",
            "uma palavra que dá uma ordem (imperative)",
            "controlar alguém de maneira astuta e escondida (manipulate)",
            "fazer um homem sentir-se menos homem (emasculate)"
          ],
          "passage": [
            "Lady Macbeth lê uma carta do marido.",
            "A carta fala sobre as bruxas.",
            "De imediato, ela quer que ele seja rei.",
            "Mas ela tem medo de que ele seja bondoso demais para matar.",
            "Depois, ela ouve que o rei Duncan vem ficar no castelo.",
            "Sozinha, ela chama os espíritos do mal.",
            "Ela pede aos espíritos que a encham de crueldade.",
            "Quando Macbeth volta para casa, ela toma o comando.",
            "Ela diz a Macbeth para sorrir, mas esconder o seu plano.",
            "Mais tarde, Macbeth decide não matar o rei.",
            "Lady Macbeth diz que ele é um covarde.",
            "Ela diz que um verdadeiro homem faria isso.",
            "No fim da cena, ele concorda."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "in wax la rogo oo madaxa hoos loo dhigo (subvert)",
            "hadal qof keligiis masraxa ka jeediyo (soliloquy)",
            "eray amar ah (imperative)",
            "in qof si khiyaano leh loo maamulo (manipulate)",
            "in nin la dareensiiyo inuu nin ka yar yahay (emasculate)"
          ],
          "passage": [
            "Lady Macbeth waxay akhridaa warqad ninkeeda ka timid.",
            "Waxay u sheegaysaa saaxiradaha.",
            "Isla markiiba, waxay rabtaa inuu boqor noqdo.",
            "Laakiin waxay ka baqaysaa inuu aad u naxariis badan yahay si uu wax u dilo.",
            "Kadibna waxay maqashaa in Boqor Duncan imaanayo oo soo degayo.",
            "Iyadoo keligeed ah, waxay u yeedhaa jinniyo shar leh.",
            "Waxay ka codsataa inay naxariis-darro ka buuxiyaan.",
            "Markii Macbeth guriga yimaado, iyada ayaa la wareegta taliska.",
            "Waxay u sheegtaa inuu dhoolla caddeeyo, laakiin qorshihiisa qariyo.",
            "Goor dambe, Macbeth wuxuu go'aansadaa inuusan boqorka dilin.",
            "Lady Macbeth waxay ugu yeedhaa fulay.",
            "Waxay tiraahdaa nin dhab ah wuu samayn lahaa.",
            "Dhammaadka muuqaalka, wuu ogolaadaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "перевернути щось з ніг на голову",
            "промова, яку персонаж виголошує сам на сцені",
            "слово-наказ",
            "хитро керувати кимось",
            "змусити чоловіка почуватися менш мужнім"
          ],
          "passage": [
            "Леді Макбет читає листа від свого чоловіка.",
            "У ньому розповідається про відьом.",
            "Вона одразу хоче, щоб він став королем.",
            "Але вона боїться, що він надто добрий, щоб убити.",
            "Потім вона дізнається, що король Дункан приїде до них у гості.",
            "Залишившись сама, вона кличе злих духів.",
            "Вона просить їх наповнити її жорстокістю.",
            "Коли Макбет повертається додому, вона бере все у свої руки.",
            "Вона каже йому усміхатися, але ховати свій план.",
            "Пізніше Макбет вирішує не вбивати короля.",
            "Леді Макбет називає його трусом.",
            "Вона каже, що справжній чоловік зробив би це.",
            "До кінця сцени він погоджується."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی چیز کو الٹ دینا (subvert)",
            "اسٹیج پر تنہا کی گئی تقریر (soliloquy)",
            "حکم دینے والا لفظ (imperative)",
            "کسی کو چالاکی سے اپنے قابو میں کرنا (manipulate)",
            "کسی مرد کو یہ محسوس کرانا کہ وہ پورا مرد نہیں (emasculate)"
          ],
          "passage": [
            "لیڈی میکبیث اپنے شوہر کا خط پڑھتی ہے۔",
            "خط اسے جادوگرنیوں کے بارے میں بتاتا ہے۔",
            "فوراً ہی وہ چاہتی ہے کہ وہ بادشاہ بنے۔",
            "مگر اسے ڈر ہے کہ وہ قتل کرنے کے لیے بہت نرم دل ہے۔",
            "پھر اسے پتا چلتا ہے کہ بادشاہ ڈنکن ان کے پاس ٹھہرنے آ رہا ہے۔",
            "تنہائی میں وہ بری روحوں کو پکارتی ہے۔",
            "وہ ان سے کہتی ہے کہ اسے ظلم سے بھر دیں۔",
            "جب میکبیث گھر آتا ہے، وہ معاملہ اپنے ہاتھ میں لے لیتی ہے۔",
            "وہ اسے کہتی ہے کہ مسکرائے، مگر اپنا منصوبہ چھپائے۔",
            "بعد میں میکبیث فیصلہ کرتا ہے کہ بادشاہ کو قتل نہیں کرے گا۔",
            "لیڈی میکبیث اسے بزدل کہتی ہے۔",
            "وہ کہتی ہے کہ ایک سچا مرد یہ کام کر دکھاتا۔",
            "منظر کے آخر تک وہ مان جاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The letter and the spirits (1.5)",
          paragraphs: [
            "We first meet Lady Macbeth reading her husband's letter. Her first worry is not whether murder is wrong, but whether Macbeth is too gentle to do it. She fears his nature is “too full o' th' milk of human kindness”. Milk is linked to mothers and care, so she sees kindness as a weakness.",
            "Alone, she calls on spirits to take away her womanhood and fill her with cruelty. Jacobean audiences believed women were weaker and gentler than men, and that women who reached for dark powers were witches. Lady Macbeth's language would have shocked them. She sounds less like a wife and more like a fourth witch."
          ],
          quote: { text: "Come, you spirits / That tend on mortal thoughts, unsex me here", source: "1.5.47–48" },
          tip: "Count her imperatives in this speech: come, unsex, fill, make thick, stop up. She is giving orders to the powers of hell."
        },
        {
          heading: "The flower and the serpent (1.5)",
          paragraphs: [
            "When Macbeth comes home, he barely speaks. Lady Macbeth does almost all the talking and gives the instructions. She tells him that his face is like a book that people can read, so he must learn to hide his thoughts.",
            "Her advice uses a striking image. A flower looks innocent; a serpent hides beneath it. A Christian audience would think of the serpent in the Garden of Eden, which tempted Eve. The scene ends with her taking control of the plan completely: she tells him to leave all the rest to her."
          ],
          quote: { text: "Look like th' innocent flower, / But be the serpent under 't.", source: "1.5.76–77" },
          tip: "Link this to Duncan's words in 1.4 about not being able to read a mind in a face. Appearance and reality is a theme you can track across the whole play."
        },
        {
          heading: "Winning the argument (1.7)",
          paragraphs: [
            "In his soliloquy, Macbeth lists the reasons not to kill Duncan: he is his relative, his king and his guest, and Duncan has been a good ruler. He decides clearly, “We will proceed no further in this business.” Calling murder ‘business’ shows he is trying to keep it at a distance.",
            "Lady Macbeth then uses several methods of persuasion. She asks mocking questions, calls him a coward, and links courage to being a man. Most shocking of all, she says that if she had sworn to, she would kill her own baby. In a warrior culture where a man's honour meant everything, her attack on his manhood works."
          ],
          quote: { text: "When you durst do it, then you were a man", source: "1.7.56" },
          tip: "‘Durst’ means ‘dared’. She says he was only a man when he dared to think of murder."
        }
      ],
      gate: [
        { kind: "mcq", q: "When Lady Macbeth reads the letter, what does she fear about her husband?", options: ["He is too cruel", "He is too kind to kill", "He does not want to be king", "He will tell Banquo"], answer: 1, why: "She says his nature is “too full o' th' milk of human kindness”. She sees his kindness as a weakness.",
          feedback: [
            "You have reversed her worry. She never fears he is too cruel. She fears his nature is “too full o' th' milk of human kindness”: too gentle for murder. Remember that at this point Macbeth has not yet killed anyone.",
            "",
            "She has no doubt that he wants the crown; the letter shows his excitement about the prophecy. Her worry is whether he is hard enough to kill for it.",
            "Banquo does not enter her thoughts in 1.5. Neither the letter nor her speech mentions him. Her fear is about Macbeth's own gentle nature, not about anyone finding out."
          ] },
        { kind: "gap", q: "Complete Lady Macbeth's advice: “Look like th' innocent flower, / But be the ___ under 't.”", answer: "serpent", options: ["serpent", "snake", "viper"], why: "Shakespeare's word is ‘serpent’, which links to the tempter in the Garden of Eden.",
          feedback: {
            "snake": "Right meaning, wrong word. Shakespeare writes ‘serpent’, and the exact word matters here: it echoes the serpent in the Garden of Eden, which a Christian audience would hear at once. ‘Snake’ loses that echo.",
            "viper": "‘Viper’ is not the word in the play. Lady Macbeth says ‘serpent’, the word the Bible uses for the tempter in Eden, and that biblical link is the one an exam answer can build on."
          } },
        { kind: "mcq", q: "When Lady Macbeth asks spirits to ‘unsex’ her, what is she asking for?", options: ["To become a man", "To have her gentleness as a woman taken away, so she can be cruel", "To become invisible", "To be made queen at once"], answer: 1, why: "She links womanhood with gentleness and wants it removed so that nothing stops her purpose.",
          feedback: [
            "She does not ask to become a man. ‘Unsex me’ asks the spirits to strip away what she sees as womanly gentleness, so that nothing soft stops her. Read the lines that follow: she asks to be filled with cruelty, not to be changed into a man.",
            "",
            "Nothing in this speech is about being unseen. Later she does call on thick night to hide the deed, but ‘unsex me’ is about changing her own nature, not about hiding.",
            "Being queen is her aim, but it is not what she asks the spirits for. She asks for the inner change she thinks she needs first: cruelty in place of gentleness. The crown is the end; this is the means."
          ] }
      ],
      modules: [
        {
          title: "A powerful woman in Act 1 Scene 5",
          task: {
            kind: "written",
            q: "How does Shakespeare present Lady Macbeth as a powerful woman in Act 1 Scene 5? Write one developed paragraph.",
            marks: 8,
            criteria: [
              "AO1: a clear point about her power, answered directly",
              "AO1: at least two short quotations from 1.5, embedded",
              "AO2: you analyse a method: imperatives, imagery of darkness, or the soliloquy form",
              "AO3: you link her to Jacobean expectations of women or to beliefs about witches"
            ],
            model: "Shakespeare presents Lady Macbeth as a woman who refuses the role her society gave her. Alone on stage, she cries, “Come, you spirits / That tend on mortal thoughts, unsex me here”. The imperative ‘come’ shows her giving orders, not to a husband but to evil spirits, which a Jacobean audience would link with witchcraft. ‘Unsex me’ suggests she believes that gentleness belongs to women and must be torn out before she can kill. In a patriarchal society that expected wives to obey, this would have shocked an audience in 1606. Her power is real, but Shakespeare makes clear that it comes from darkness."
          },
          levels: {
            support: {
              steps: [
                "What: say what kind of power she has (over herself, over Macbeth, over the plan).",
                "How: pick an imperative from her soliloquy and quote it.",
                "Why: explain who she is commanding and what that says about her.",
                "Context: say how a patriarchal Jacobean audience would react to a woman speaking like this."
              ],
              example: {
                q: "Practice question: how does Shakespeare show Macbeth turning to darkness in Act 1 Scene 4?",
                steps: [
                  "What: Macbeth wants his ambition hidden.",
                  "How: he commands the stars, “Stars, hide your fires”.",
                  "Why: stars and light were linked to heaven, so he asks goodness to look away."
                ],
                answer: "Shakespeare shows Macbeth turning to darkness when he commands, “Stars, hide your fires”. The imperative is aimed at heaven's lights; he wants God's world not to see his plan, which shows he already knows it is evil."
              }
            },
            core: { hint: "Look at who she gives orders to. A wife giving orders to spirits, and then to her husband, breaks two Jacobean rules at once." },
            stretch: { extend: "Is her power real or a performance? Use the fact that she needs to ask spirits for cruelty to argue that, underneath, she may not be as hard as she sounds, and link this to Act 5 Scene 1." }
          },
          why: "The best answers show how her language gives her power and why that power would disturb a Jacobean audience. The model does both in one paragraph.",
          explain: "Say which word in your quotation you would analyse first, and what it suggests about her power."
        },
        {
          title: "Methods of persuasion in Act 1 Scene 7",
          task: {
            kind: "match",
            q: "Match each persuasion method to the line Lady Macbeth uses in Act 1 Scene 7.",
            pairs: [
              ["A mocking question", "“Was the hope drunk / Wherein you dressed yourself?”"],
              ["Calling him a coward", "“And live a coward in thine own esteem”"],
              ["Attacking his manhood", "“When you durst do it, then you were a man”"],
              ["Encouragement and a plan", "“But screw your courage to the sticking place / And we'll not fail.”"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Spot the question mark: which line is a question?",
                "Spot the insult: which line uses the word ‘coward’?",
                "Spot the gender word: which line uses ‘man’?",
                "The last line left is the one that encourages him."
              ],
              example: {
                q: "Practice: in Act 3 Scene 1 Macbeth asks the murderers if they are so religious that they will pray for Banquo. Which method is this?",
                steps: ["It is a question.", "It suggests they are weak if they forgive.", "So it is a mocking question that challenges their pride."],
                answer: "A mocking question that challenges their pride, just as Lady Macbeth challenged his."
              }
            },
            core: { hint: "Each method gets harder: she starts with a question and ends by promising success." },
            stretch: { extend: "Why does the attack on his manhood work best on Macbeth in particular? Link your answer to the warrior culture of Act 1 Scene 2." }
          },
          why: "Lady Macbeth moves from questions, to insults, to an attack on his manhood, to a confident plan. Macbeth, who has just decided to stop, is talked back into murder in one scene.",
          explain: "Say which of the four methods you think works best on Macbeth in particular, and why, in one sentence."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 4 ─────────────────────────────
    {
      key: "guilt-sleep-blood", n: 4,
      title: "Guilt, sleep and blood (Act 2 and Act 5 Scene 1)",
      lead: "This chapter follows the murder and its cost, from a floating dagger to a queen who cannot wash her hands clean.",
      covers: [12, 13, 15, 16, 24],
      pretext: {
        words: [
          { word: "hallucination", means: "seeing something that is not there", sentence: "The floating dagger may be a hallucination." },
          { word: "guilt", means: "the bad feeling after doing wrong", sentence: "Macbeth's guilt stops him from sleeping." },
          { word: "conscience", means: "the inner voice that knows right from wrong", sentence: "His conscience shows him blood on the dagger." },
          { word: "motif", means: "an image that keeps coming back", sentence: "Blood is a motif that returns again and again." },
          { word: "Everyman", means: "a character who stands for ordinary people", sentence: "The Old Man is an Everyman for the people of Scotland." }
        ],
        passage: [
          "It is night in Macbeth's castle.",
          "Macbeth sees a dagger floating in the air.",
          "He cannot touch it, but he can see it.",
          "A bell rings, and he goes to kill the king.",
          "Afterwards, Macbeth is shaking with fear.",
          "He thinks he hears a voice say he will never sleep again.",
          "He looks at the blood on his hands.",
          "Lady Macbeth says a little water will wash it away.",
          "In the morning, Macduff finds the king's body.",
          "Strange things happen in nature, as if the world is sick.",
          "Much later, Lady Macbeth walks in her sleep.",
          "She keeps rubbing her hands.",
          "She cannot wash away the blood she imagines there."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "رؤية شيء غير موجود في الحقيقة (hallucination)",
            "الإحساس السيئ بعد فعل الخطأ (guilt)",
            "الصوت الداخلي الذي يميّز الصواب من الخطأ (conscience)",
            "صورة تتكرر مرة بعد مرة (motif)",
            "شخصية تمثّل الناس العاديين (Everyman)"
          ],
          "passage": [
            "إنه الليل في قلعة ماكبث.",
            "يرى ماكبث خنجراً يطفو في الهواء.",
            "لا يستطيع أن يلمسه، لكنه يراه.",
            "يُقرع جرس، فيذهب ليقتل الملك.",
            "بعد ذلك، يرتجف ماكبث من الخوف.",
            "يظن أنه يسمع صوتاً يقول إنه لن ينام مرة أخرى أبداً.",
            "ينظر إلى الدم على يديه.",
            "تقول الليدي ماكبث إن قليلاً من الماء سيغسله.",
            "في الصباح، يجد ماكدوف جثة الملك.",
            "تحدث أشياء غريبة في الطبيعة، كأن العالم مريض.",
            "بعد وقت طويل، تمشي الليدي ماكبث وهي نائمة.",
            "وتظل تحكّ يديها.",
            "لا تستطيع أن تغسل الدم الذي تتخيّله عليهما."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "widzenie czegoś, czego nie ma (hallucination, halucynacja)",
            "złe uczucie po zrobieniu czegoś złego (guilt, poczucie winy)",
            "wewnętrzny głos, który odróżnia dobro od zła (conscience, sumienie)",
            "obraz, który ciągle powraca (motif, motyw)",
            "postać, która reprezentuje zwykłych ludzi (Everyman)"
          ],
          "passage": [
            "Jest noc w zamku Makbeta.",
            "Makbet widzi sztylet unoszący się w powietrzu.",
            "Nie może go dotknąć, ale go widzi.",
            "Dzwoni dzwon i Makbet idzie zabić króla.",
            "Potem Makbet trzęsie się ze strachu.",
            "Wydaje mu się, że słyszy głos, który mówi, że już nigdy nie zaśnie.",
            "Patrzy na krew na swoich rękach.",
            "Lady Makbet mówi, że trochę wody ją zmyje.",
            "Rano Makduf znajduje ciało króla.",
            "W przyrodzie dzieją się dziwne rzeczy, jakby świat był chory.",
            "Dużo później Lady Makbet chodzi we śnie.",
            "Ciągle trze swoje ręce.",
            "Nie może zmyć krwi, którą sobie tam wyobraża."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "ver algo que não está lá (hallucination)",
            "a sensação má que fica depois de fazer algo errado (guilt)",
            "a voz lá dentro que sabe o que é certo e o que é errado (conscience)",
            "uma imagem que se repete muitas vezes (motif)",
            "uma personagem que representa as pessoas comuns (Everyman)"
          ],
          "passage": [
            "É noite no castelo de Macbeth.",
            "Macbeth vê um punhal que flutua no ar.",
            "Ele não consegue tocar nele, mas consegue vê-lo.",
            "Um sino toca, e ele vai matar o rei.",
            "Depois, Macbeth treme de medo.",
            "Ele pensa que ouve uma voz dizer que ele nunca mais vai dormir.",
            "Ele olha para o sangue nas suas mãos.",
            "Lady Macbeth diz que um pouco de água vai lavar o sangue.",
            "De manhã, Macduff encontra o corpo do rei.",
            "Coisas estranhas acontecem na natureza, como se o mundo estivesse doente.",
            "Muito mais tarde, Lady Macbeth caminha enquanto dorme.",
            "Ela não para de esfregar as mãos.",
            "Ela não consegue lavar o sangue que imagina ali."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "arkid wax aan meesha joogin (hallucination)",
            "dareenka xun ee ka dambeeya samaynta wax khaldan (guilt)",
            "codka gudaha ee kala garta saxda iyo khaladka (conscience)",
            "sawir soo noqnoqda (motif)",
            "jilaa matalaya dadka caadiga ah (Everyman)"
          ],
          "passage": [
            "Waa habeen qalcadda Macbeth.",
            "Macbeth wuxuu arkaa toorey hawada ku sabbaynaysa.",
            "Ma taaban karo, laakiin wuu arki karaa.",
            "Gambaleel ayaa dhawaaqa, wuxuuna u tagaa inuu boqorka dilo.",
            "Kadib, Macbeth cabsi ayuu la gariirayaa.",
            "Wuxuu u malaynayaa inuu maqlay cod sheegaya inuusan mar dambe seexan doonin.",
            "Wuxuu eegaa dhiigga gacmihiisa ku yaal.",
            "Lady Macbeth waxay tiraahdaa biyo yar ayaa maydhi doona.",
            "Subaxdii, Macduff wuxuu helaa meydka boqorka.",
            "Waxyaabo yaab leh ayaa dabeecadda ka dhaca, sida adduunka oo xanuunsan.",
            "Wakhti dheer kadib, Lady Macbeth waxay socotaa iyadoo hurudda.",
            "Waxay sii wadaa inay gacmaheeda isku xoqdo.",
            "Ma maydhi karto dhiigga ay u malaynayso inuu halkaas yaal."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "бачити те, чого насправді немає",
            "погане почуття після того, як зробив щось зле",
            "внутрішній голос, який відрізняє добре від злого",
            "образ, який постійно повторюється",
            "персонаж, який уособлює звичайних людей"
          ],
          "passage": [
            "У замку Макбета ніч.",
            "Макбет бачить кинджал, що висить у повітрі.",
            "Він не може його торкнутися, але бачить його.",
            "Дзвенить дзвін, і він іде вбивати короля.",
            "Після цього Макбет тремтить від страху.",
            "Йому здається, що він чує голос, який каже, що він більше ніколи не засне.",
            "Він дивиться на кров на своїх руках.",
            "Леді Макбет каже, що трохи води змиє її.",
            "Уранці Макдуф знаходить тіло короля.",
            "У природі відбуваються дивні речі, ніби світ захворів.",
            "Набагато пізніше леді Макбет ходить уві сні.",
            "Вона весь час тре свої руки.",
            "Вона не може змити кров, яку уявляє на них."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسی چیز دیکھنا جو وہاں موجود نہیں (hallucination)",
            "غلط کام کرنے کے بعد کا برا احساس (guilt)",
            "اندر کی وہ آواز جو صحیح اور غلط کو جانتی ہے (conscience)",
            "ایسی تصویر یا علامت جو بار بار آتی ہے (motif)",
            "ایسا کردار جو عام لوگوں کی نمائندگی کرتا ہے (Everyman)"
          ],
          "passage": [
            "میکبیث کے قلعے میں رات ہے۔",
            "میکبیث ہوا میں تیرتا ہوا ایک خنجر دیکھتا ہے۔",
            "وہ اسے چھو نہیں سکتا، مگر دیکھ سکتا ہے۔",
            "گھنٹی بجتی ہے، اور وہ بادشاہ کو قتل کرنے جاتا ہے۔",
            "اس کے بعد میکبیث خوف سے کانپ رہا ہوتا ہے۔",
            "اسے لگتا ہے کہ وہ ایک آواز سنتا ہے جو کہتی ہے کہ وہ پھر کبھی نہیں سو سکے گا۔",
            "وہ اپنے ہاتھوں پر لگے خون کو دیکھتا ہے۔",
            "لیڈی میکبیث کہتی ہے کہ تھوڑا سا پانی اسے دھو ڈالے گا۔",
            "صبح کو میکڈف بادشاہ کی لاش دیکھتا ہے۔",
            "فطرت میں عجیب چیزیں ہوتی ہیں، جیسے دنیا بیمار ہو۔",
            "بہت بعد میں لیڈی میکبیث نیند میں چلتی ہے۔",
            "وہ بار بار اپنے ہاتھ رگڑتی رہتی ہے۔",
            "وہ اس خیالی خون کو دھو نہیں سکتی جو اسے اپنے ہاتھوں پر نظر آتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The dagger of the mind (2.1)",
          paragraphs: [
            "Just before the murder, Macbeth sees a dagger in the air, pointing him towards Duncan's room. He tries to grab it and cannot. Shakespeare leaves it open: is it sent by the witches, is it a hallucination from a mind under huge pressure, or is Macbeth creating it to push himself on?",
            "Then blood appears on the blade. His conscience may be showing him what he is about to do. When the bell rings, he treats it as a signal and goes. The speech ends in a rhyming couplet, like the witches' chants, and its last word is ‘hell’."
          ],
          quote: { text: "Is this a dagger which I see before me, / The handle toward my hand?", source: "2.1.44–45" },
          tip: "Your view of the dagger answers the lesson's big question: how far is Macbeth in control of his own actions?"
        },
        {
          heading: "After the murder (2.2–2.4)",
          paragraphs: [
            "Shakespeare does not show Duncan's murder; we see only the shock afterwards. Macbeth is horrified and confused. He has brought the daggers out with him, and he thinks he heard a voice cry that “Macbeth does murder sleep”. Sleep was seen as a gift of peace for the innocent, so losing it is part of his punishment. Lady Macbeth stays practical: she takes the daggers back and tells him “A little water clears us of this deed.”",
            "Next comes knocking at the gate and a drunken Porter, who jokes that he guards the gate of hell. The joke is full of dramatic irony, because the castle now holds a murderer. When Macduff finds the body, his repeated “O horror, horror, horror!” shows the shock of regicide. In Act 2 Scene 4, an Old Man, an Everyman for the Scottish people, describes nature turned upside down. Breaking the Great Chain has thrown the whole world into chaos."
          ],
          quote: { text: "Will all great Neptune's ocean wash this blood / Clean from my hand?", source: "2.2.78–79" },
          tip: "Put Macbeth's ‘ocean’ beside Lady Macbeth's ‘little water’. The contrast shows who feels the guilt first."
        },
        {
          heading: "The sleepwalking queen (5.1)",
          paragraphs: [
            "We have not seen Lady Macbeth since the banquet in Act 3. Now a doctor and a gentlewoman watch her walk in her sleep, rubbing her hands as if washing them. She insists on having a light by her all the time; the woman who once called for thick night now fears the dark.",
            "Her words come out in broken pieces of the past: the spot of blood, the old man's blood, Macduff's wife. She now speaks in prose, not verse, a sign that her control has gone. A Christian audience would see God's justice at work: her secret sin is punishing her from inside. Even she admits the truth: “What's done cannot be undone.”"
          ],
          quote: { text: "Out, damned spot, out, I say!", source: "5.1.37" },
          tip: "This scene is an echo chamber. Almost every line repeats something from Acts 1 to 4. Ask: what is she remembering?"
        }
      ],
      gate: [
        { kind: "mcq", q: "What does Macbeth see just before he kills Duncan?", options: ["Banquo's ghost", "A floating dagger", "Three apparitions", "A moving wood"], answer: 1, why: "In Act 2 Scene 1 he sees a dagger pointing him towards Duncan's room. Banquo's ghost comes later, in Act 3 Scene 4.",
          feedback: [
            "Wrong act. Banquo's ghost appears at the banquet in Act 3 Scene 4, after Banquo has been murdered. Just before Duncan's murder, in Act 2 Scene 1, Macbeth sees a dagger in the air.",
            "",
            "Wrong act. The three apparitions come in Act 4 Scene 1, when Macbeth goes back to the witches as king. In Act 2 Scene 1 the vision is a single dagger.",
            "Wrong act. Birnam Wood seems to move in Act 5, at the very end, when Malcolm's soldiers carry branches. In Act 2 Scene 1 Macbeth sees a dagger."
          ] },
        { kind: "gap", q: "Complete Lady Macbeth's line: “A little ___ clears us of this deed.”", answer: "water", options: ["water", "washing", "wine"], why: "She thinks guilt can be rinsed off. In Act 5 Scene 1 we see that it cannot.",
          feedback: {
            "washing": "You have the idea but not the word. She says ‘a little water’, and the smallness of ‘little’ is the point: she thinks guilt is as easy to rinse away as dirt.",
            "wine": "Wine belongs to a different part of her plan, when she drugs the guards' drinks. This line is about water, which she believes will wash the deed away."
          } },
        { kind: "mcq", q: "In Act 5 Scene 1, why might Lady Macbeth keep a light by her all the time?", options: ["She is reading Macbeth's letters", "She now fears the darkness she once called for", "The doctor ordered it", "She is waiting for Macduff"], answer: 1, why: "In Act 1 she called on thick night to hide the murder. Now the dark frightens her: the motif of light and darkness has turned against her.",
          feedback: [
            "Wrong act. The letter belongs to Act 1 Scene 5, and in 5.1 she is not reading anything: she is asleep. The gentlewoman says she has light by her continually, which points to fear of the dark.",
            "",
            "The doctor has only just arrived to watch her and has ordered nothing. The light is her own command, which is why it tells us about her state of mind rather than about her treatment.",
            "Macduff is in England with Malcolm and never meets Lady Macbeth in the play. The light is about her fear, not about anyone arriving."
          ] }
      ],
      modules: [
        {
          title: "How Lady Macbeth changes",
          task: {
            kind: "written",
            q: "How does Shakespeare show that Lady Macbeth has changed between Act 2 Scene 2 and Act 5 Scene 1? Write one developed paragraph.",
            marks: 8,
            criteria: [
              "AO1: a clear argument about how she changes, not just what happens",
              "AO1: at least one short quotation from each scene",
              "AO2: you analyse a method: the motif of blood or water, sentence structure, or the change from verse to prose",
              "AO3: you link the change to Christian ideas of guilt, sin and God's justice"
            ],
            model: "In Act 2 Scene 2 Lady Macbeth is calm and practical. She tells her husband “A little water clears us of this deed”, as if guilt could be rinsed away like dirt. By Act 5 Scene 1 the same woman cannot stop washing. “Out, damned spot, out, I say!” breaks into short, desperate commands, and she now speaks in prose rather than verse, which shows her control has gone. The motif of blood links the two scenes: the water she trusted has failed her. For a Christian audience this would look like God's justice at work, punishing a sin that nobody else has yet discovered."
          },
          levels: {
            support: {
              steps: [
                "Then: write one sentence about how she behaves after the murder in 2.2, with a short quotation.",
                "Now: write one sentence about how she behaves in 5.1, with a short quotation.",
                "Method: name one thing Shakespeare changes, such as blood and water images, short sentences, or prose instead of verse.",
                "Why: explain what Shakespeare wanted his Christian audience to understand about sin."
              ],
              example: {
                q: "Practice question: how does Shakespeare show Macbeth changing between Act 1 Scene 2 and Act 3 Scene 2?",
                steps: [
                  "Then: he is called “brave Macbeth”, a loyal hero.",
                  "Now: he cries “O, full of scorpions is my mind, dear wife!”",
                  "Method: the scorpion metaphor shows painful, poisonous thoughts.",
                  "Why: the crown has brought fear, not peace, the cost of breaking God's order."
                ],
                answer: "Macbeth begins as “brave Macbeth”, praised by all, but by Act 3 he cries “O, full of scorpions is my mind, dear wife!” The metaphor shows thoughts that sting and poison him, revealing that the crown he killed for has brought him only fear."
              }
            },
            core: { hint: "Pair one image from 2.2 with one from 5.1. Blood and water work best." },
            stretch: { extend: "Argue whether Shakespeare wants us to pity Lady Macbeth in 5.1. Use the gentlewoman's or the doctor's reaction as evidence for how the audience should feel." }
          },
          why: "A strong answer is built on a ‘then and now’ comparison and explains why the change matters, here through the motif of blood and the Christian idea that sin is punished.",
          explain: "Say which word in your Act 5 quotation you would analyse first, and what it suggests has changed in her."
        },
        {
          title: "Images of guilt",
          task: {
            kind: "match",
            q: "Match each image from Act 2 to what it suggests about guilt.",
            pairs: [
              ["“Macbeth does murder sleep”", "He has destroyed his own peace; the innocent can rest, but he cannot."],
              ["“Will all great Neptune's ocean wash this blood / Clean from my hand?”", "His guilt is so great that the whole sea could not remove it."],
              ["“A little water clears us of this deed.”", "She believes guilt is a stain that can simply be washed off."],
              ["“O horror, horror, horror!”", "The shock of regicide is too great for normal words."]
            ]
          },
          levels: {
            support: {
              steps: [
                "Find who says each line: Macbeth, Lady Macbeth or Macduff.",
                "Underline the image in each: sleep, ocean, water, the repeated word.",
                "Ask: is this person overwhelmed by guilt, or brushing it off?"
              ],
              example: {
                q: "Practice: what does the Porter's joke about keeping the gate of hell suggest?",
                steps: ["The Porter does not know about the murder.", "The audience does.", "So the joke suggests the castle has truly become a kind of hell."],
                answer: "That Macbeth's castle has become hell, which the audience understands but the Porter does not."
              }
            },
            core: { hint: "Two of these images are about washing. Who thinks it is easy, and who thinks it is impossible?" },
            stretch: { extend: "Which of these images does Shakespeare bring back in Act 5 Scene 1, and why does the echo make the sleepwalking scene so powerful?" }
          },
          why: "Sleep, water and blood are motifs that return. In Act 2, Macbeth feels the guilt and Lady Macbeth dismisses it; by Act 5, that is reversed.",
          explain: "Say, in one sentence, why Shakespeare gives Macbeth a whole ocean and Lady Macbeth only a little water."
        },
        {
          title: "Reading the dagger",
          task: {
            kind: "mcq",
            q: "Macbeth calls the vision “A dagger of the mind, a false creation”. Which reading does this line support most strongly?",
            options: [
              "The dagger is real and anyone could see it",
              "The dagger is a hallucination produced by Macbeth's troubled mind",
              "Lady Macbeth has hung a dagger in the hall",
              "Banquo has left the dagger as a warning"
            ],
            answer: 1,
            feedback: [
              "Macbeth himself calls it ‘a false creation’, which rules out a real, solid dagger. Nobody else is on stage to see it, and when he reaches for it he cannot touch it.",
              "",
              "Lady Macbeth is not in this scene and has nothing to do with the vision. The words ‘of the mind’ put the dagger inside Macbeth's own head, not in the hall.",
              "Banquo has just gone to bed and has no reason to warn Macbeth with a dagger. Read the words ‘of the mind’: the dagger comes from Macbeth, not from anyone else."
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the key words: ‘of the mind’ and ‘false creation’.",
                "‘Of the mind’ means it exists in his head.",
                "‘False creation’ means something made up, not real."
              ],
              example: {
                q: "Practice: at the banquet, Lady Macbeth tells Macbeth the ghost is like the air-drawn dagger. What is she suggesting?",
                steps: ["‘Air-drawn’ means drawn on the air, not solid.", "She links the ghost to the earlier dagger.", "So she is saying both come from his fear."],
                answer: "That the ghost, like the dagger, is a product of his fear, not something real."
              }
            },
            core: { hint: "Focus on the word ‘mind’. Where is this dagger, according to Macbeth himself?" },
            stretch: { extend: "Your lessons offered three readings: sent by the witches, a hallucination, or created by Macbeth to drive himself on. Argue for the one you find strongest, and explain what it means for how far Macbeth is responsible." }
          },
          why: "Macbeth himself names the dagger as something his mind has made. That supports the hallucination reading, though the play still leaves room for the witches.",
          explain: "Say which two or three words in the line told you where the dagger comes from, and why they settle it."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 5 ─────────────────────────────
    {
      key: "tyranny-and-kingship", n: 5,
      title: "Tyranny and kingship (Acts 3 to 5)",
      lead: "This chapter shows how a king who kills to stay safe becomes a tyrant, and how Scotland is won back.",
      covers: [17, 18, 19, 20, 21, 22, 23, 25, 26],
      pretext: {
        words: [
          { word: "tyrant", means: "a ruler who uses fear and violence", sentence: "Macbeth becomes a tyrant who kills anyone he fears." },
          { word: "paranoia", means: "a fear that everyone is against you", sentence: "His paranoia makes him send murderers after Banquo." },
          { word: "apparition", means: "a ghostly vision", sentence: "The witches show Macbeth three apparitions." },
          { word: "fealty", means: "a promise of loyalty to a lord or king", sentence: "Lennox has sworn fealty, but he no longer trusts the king." },
          { word: "foil", means: "a character who is the opposite of another, so that each shows up the other", sentence: "Macduff is a foil to Macbeth." }
        ],
        passage: [
          "Macbeth is now king, but he does not feel safe.",
          "He fears Banquo, because the witches said Banquo's children would be kings.",
          "He pays murderers to kill Banquo and his son.",
          "Banquo dies, but his son Fleance escapes.",
          "At a feast, Macbeth sees Banquo's ghost in his seat.",
          "The lords begin to whisper about their king.",
          "Macbeth goes back to the witches for more answers.",
          "They tell him no man born of a woman can harm him.",
          "Then he has Macduff's wife and children killed.",
          "Macduff joins Malcolm in England to fight back.",
          "Lady Macbeth dies, and Macbeth feels that life means nothing.",
          "In the last battle, Macduff kills Macbeth.",
          "Malcolm becomes the new king of Scotland."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "حاكم يستخدم الخوف والعنف (tyrant)",
            "خوف من أن الجميع ضدك (paranoia)",
            "رؤية شبحية (apparition)",
            "وعد بالوفاء لسيد أو ملك (fealty)",
            "شخصية تكون عكس شخصية أخرى (foil)"
          ],
          "passage": [
            "ماكبث الآن ملك، لكنه لا يشعر بالأمان.",
            "يخاف من بانكو، لأن الساحرات قلن إن أبناء بانكو سيصبحون ملوكاً.",
            "يدفع المال لقتلة ليقتلوا بانكو وابنه.",
            "يموت بانكو، لكن ابنه فليانس يهرب.",
            "في وليمة، يرى ماكبث شبح بانكو جالساً في مقعده.",
            "يبدأ النبلاء يتهامسون عن ملكهم.",
            "يعود ماكبث إلى الساحرات طلباً لمزيد من الأجوبة.",
            "يقلن له إنه لا يستطيع أي رجل ولدته امرأة أن يؤذيه.",
            "ثم يأمر بقتل زوجة ماكدوف وأطفاله.",
            "ينضم ماكدوف إلى مالكولم في إنجلترا ليردّوا بالقتال.",
            "تموت الليدي ماكبث، ويشعر ماكبث أن الحياة لا معنى لها.",
            "في المعركة الأخيرة، يقتل ماكدوف ماكبث.",
            "يصبح مالكولم ملك سكوتلندا الجديد."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "władca, który rządzi strachem i przemocą (tyrant, tyran)",
            "lęk, że wszyscy są przeciwko tobie (paranoia)",
            "upiorne widzenie, zjawa (apparition)",
            "przyrzeczenie wierności panu lub królowi (fealty)",
            "postać, która jest przeciwieństwem innej postaci (foil)"
          ],
          "passage": [
            "Makbet jest teraz królem, ale nie czuje się bezpiecznie.",
            "Boi się Banka, bo czarownice powiedziały, że dzieci Banka będą królami.",
            "Płaci mordercom, żeby zabili Banka i jego syna.",
            "Banko umiera, ale jego syn Fleance ucieka.",
            "Na uczcie Makbet widzi ducha Banka na swoim miejscu.",
            "Panowie zaczynają szeptać o swoim królu.",
            "Makbet wraca do czarownic po więcej odpowiedzi.",
            "Mówią mu, że nikt zrodzony z kobiety nie może mu zrobić krzywdy.",
            "Potem każe zabić żonę i dzieci Makdufa.",
            "Makduf dołącza do Malkolma w Anglii, żeby walczyć.",
            "Lady Makbet umiera, a Makbet czuje, że życie nic nie znaczy.",
            "W ostatniej bitwie Makduf zabija Makbeta.",
            "Malkolm zostaje nowym królem Szkocji."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um governante que usa o medo e a violência (tyrant)",
            "um medo de que todos estejam contra a própria pessoa (paranoia)",
            "uma visão de fantasma (apparition)",
            "uma promessa de lealdade a um senhor ou a um rei (fealty)",
            "uma personagem que é o oposto de outra (foil)"
          ],
          "passage": [
            "Macbeth agora é rei, mas não se sente seguro.",
            "Ele tem medo de Banquo, porque as bruxas disseram que os filhos de Banquo seriam reis.",
            "Ele dá dinheiro a assassinos para matarem Banquo e o filho dele.",
            "Banquo morre, mas o filho dele, Fleance, escapa.",
            "Num banquete, Macbeth vê o fantasma de Banquo sentado no seu lugar.",
            "Os nobres começam a sussurrar sobre o rei.",
            "Macbeth volta a procurar as bruxas para obter mais respostas.",
            "Elas dizem que nenhum homem nascido de uma mulher pode fazer mal a ele.",
            "Depois, ele manda matar a mulher e os filhos de Macduff.",
            "Macduff une forças com Malcolm na Inglaterra para lutar contra Macbeth.",
            "Lady Macbeth morre, e Macbeth sente que a vida não significa nada.",
            "Na última batalha, Macduff mata Macbeth.",
            "Malcolm passa a ser o novo rei da Escócia."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "taliye isticmaala cabsi iyo rabshad (tyrant)",
            "cabsi ah in qof walba kaa soo horjeedo (paranoia)",
            "muuqaal rooxaan ah (apparition)",
            "ballan daacadnimo loo qaado sayid ama boqor (fealty)",
            "jilaa ka soo horjeeda jilaa kale (foil)"
          ],
          "passage": [
            "Macbeth hadda waa boqor, laakiin ma dareemayo nabadgelyo.",
            "Wuxuu ka baqaa Banquo, sababtoo ah saaxiradaha waxay yiraahdeen carruurta Banquo boqorro ayay noqon doonaan.",
            "Wuxuu lacag siiyaa gacan-ku-dhiiglayaal si ay u dilaan Banquo iyo wiilkiisa.",
            "Banquo wuu dhintaa, laakiin wiilkiisa Fleance wuu baxsadaa.",
            "Xaflad cunto, Macbeth wuxuu arkaa rooxaanta Banquo oo kursigiisa fadhida.",
            "Sayidyadu waxay bilaabaan inay ku hoos-hadlaan boqorkooda.",
            "Macbeth wuxuu dib ugu noqdaa saaxiradaha si uu jawaabo dheeraad ah u helo.",
            "Waxay u sheegaan in nin naag ka dhashay uusan waxyeello u geysan karin.",
            "Kadibna wuxuu amraa in la dilo naagta Macduff iyo carruurtiisa.",
            "Macduff wuxuu ku biiraa Malcolm oo England jooga si ay u dagaallamaan.",
            "Lady Macbeth waxay dhimataa, Macbeth-na wuxuu dareemaa in noloshu waxba macno lahayn.",
            "Dagaalkii ugu dambeeyay, Macduff wuxuu dilaa Macbeth.",
            "Malcolm wuxuu noqdaa boqorka cusub ee Scotland."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "правитель, який використовує страх і насильство",
            "страх, що всі проти тебе",
            "примарне видіння",
            "обіцянка вірності лордові або королю",
            "персонаж, який є протилежністю іншого"
          ],
          "passage": [
            "Макбет тепер король, але він не почувається в безпеці.",
            "Він боїться Банко, бо відьми сказали, що діти Банко стануть королями.",
            "Він платить убивцям, щоб ті вбили Банко і його сина.",
            "Банко гине, але його син Флінс тікає.",
            "На бенкеті Макбет бачить привид Банко на своєму місці.",
            "Лорди починають перешіптуватися про свого короля.",
            "Макбет повертається до відьом за новими відповідями.",
            "Вони кажуть йому, що жоден чоловік, народжений жінкою, не може йому зашкодити.",
            "Потім він наказує вбити дружину і дітей Макдуфа.",
            "Макдуф приєднується до Малкольма в Англії, щоб дати відсіч.",
            "Леді Макбет помирає, і Макбет відчуває, що життя нічого не варте.",
            "В останній битві Макдуф убиває Макбета.",
            "Малкольм стає новим королем Шотландії."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسا حاکم جو خوف اور تشدد سے حکومت کرے (tyrant)",
            "یہ خوف کہ سب آپ کے خلاف ہیں (paranoia)",
            "بھوت جیسی شکل جو نظر آئے (apparition)",
            "کسی سردار یا بادشاہ سے وفاداری کا وعدہ (fealty)",
            "ایسا کردار جو دوسرے کردار کا الٹ ہو (foil)"
          ],
          "passage": [
            "میکبیث اب بادشاہ ہے، مگر وہ خود کو محفوظ محسوس نہیں کرتا۔",
            "وہ بینکو سے ڈرتا ہے، کیونکہ جادوگرنیوں نے کہا تھا کہ بینکو کے بچے بادشاہ بنیں گے۔",
            "وہ بینکو اور اس کے بیٹے کو قتل کرنے کے لیے قاتلوں کو پیسے دیتا ہے۔",
            "بینکو مر جاتا ہے، مگر اس کا بیٹا فلیانس بچ نکلتا ہے۔",
            "ایک دعوت میں میکبیث اپنی کرسی پر بینکو کا بھوت دیکھتا ہے۔",
            "امرا اپنے بادشاہ کے بارے میں چپکے چپکے باتیں کرنے لگتے ہیں۔",
            "میکبیث مزید جواب لینے کے لیے دوبارہ جادوگرنیوں کے پاس جاتا ہے۔",
            "وہ اسے بتاتی ہیں کہ عورت سے پیدا ہونے والا کوئی مرد اسے نقصان نہیں پہنچا سکتا۔",
            "پھر وہ میکڈف کی بیوی اور بچوں کو قتل کرا دیتا ہے۔",
            "میکڈف جوابی لڑائی کے لیے انگلینڈ میں میلکم سے جا ملتا ہے۔",
            "لیڈی میکبیث مر جاتی ہے، اور میکبیث کو لگتا ہے کہ زندگی بے معنی ہے۔",
            "آخری جنگ میں میکڈف میکبیث کو قتل کر دیتا ہے۔",
            "میلکم سکاٹ لینڈ کا نیا بادشاہ بن جاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "A king who is never safe (3.1–3.4)",
          paragraphs: [
            "Once crowned, Macbeth finds that the crown is not enough. He says that being king is nothing unless he is safe: “To be thus is nothing, / But to be safely thus.” He persuades two murderers that Banquo is their enemy, using questions and insults, just as Lady Macbeth once persuaded him.",
            "He now plans without his wife and tells her to stay innocent of the knowledge. At the banquet, Banquo's ghost sits in his place, and Macbeth's terror is seen by all his lords. He knows blood leads to more blood: “It will have blood, they say; blood will have blood.”"
          ],
          quote: { text: "O, full of scorpions is my mind, dear wife!", source: "3.2.41" },
          tip: "Shakespeare shows Banquo's murder on stage but not Duncan's. Ask why: what does the audience now need to see?"
        },
        {
          heading: "Witches, apparitions and a slaughtered family (3.5–4.3)",
          paragraphs: [
            "Macbeth goes back to the witches by choice. This time he does not ask; he demands. Three apparitions give him warnings that sound like promises, and he comes away believing he cannot be beaten. In Act 3 Scene 5 the goddess Hecate appears, angry with the witches; in Act 3 Scene 6 Lennox hints that he no longer trusts the king he swore fealty to.",
            "Macbeth's next act is his cruellest. He orders the killing of “His wife, his babes, and all unfortunate souls” at Macduff's castle. Macduff's young son is brave and witty before he is killed, and the audience's sympathy for Macbeth drains away. In England, Malcolm tests Macduff's loyalty before agreeing to fight, and when Macduff hears the news, his grief turns to a soldier's resolve."
          ],
          quote: { text: "none of woman born / Shall harm Macbeth.", source: "4.1.91–92" },
          tip: "Macduff and Lady Macduff are foils to the Macbeths: a loyal husband and a loving mother. (The department deck says \"counterfoil\"; the exam term is foil.)"
        },
        {
          heading: "Tomorrow, and a tyrant's end (5.3–5.8)",
          paragraphs: [
            "As Malcolm's army closes in, Macbeth is proud and reckless, trusting the prophecies: this is hubris. When he hears that Lady Macbeth is dead, he gives one of Shakespeare's most famous speeches. Time crawls; life is a brief candle and a walking shadow, a story full of noise that means nothing.",
            "Then the prophecies turn against him. Birnam Wood seems to move as soldiers carry branches as cover, and Macduff reveals he was not born in the usual way. Macbeth still refuses to surrender and dies fighting. Malcolm, the rightful king, ends the play by calling him “this dead butcher and his fiend-like queen”, and order is restored."
          ],
          quote: { text: "Tomorrow and tomorrow and tomorrow / Creeps in this petty pace from day to day", source: "5.5.22–23" },
          tip: "Punctuation of this line varies between editions; the words do not. Learn the words, and follow your own edition's commas."
        }
      ],
      gate: [
        { kind: "mcq", q: "In Act 3 Scene 3, what happens when the murderers attack?", options: ["Banquo and Fleance both escape", "Banquo is killed but Fleance escapes", "Fleance is killed but Banquo escapes", "Macduff stops them"], answer: 1, why: "Fleance's escape matters: the prophecy that Banquo's children will be kings is still alive.",
          feedback: [
            "Only one of them escapes. Banquo is cut down and tells his son to fly; Fleance runs into the dark. His escape is what keeps the prophecy about Banquo's children alive.",
            "",
            "You have swapped father and son. Banquo, the father, is killed; Fleance, the son, escapes, which is exactly the outcome Macbeth most feared.",
            "Macduff is not there; he has gone home to Fife and later to England. Nobody stops the murderers. Banquo dies, and Fleance escapes on his own."
          ] },
        { kind: "gap", q: "Complete Macbeth's line: “O, full of ___ is my mind, dear wife!”", answer: "scorpions", options: ["scorpions", "serpents", "spiders"], why: "Scorpions sting and poison, so the image shows thoughts that torment him.",
          feedback: {
            "serpents": "Serpents belong to a different image: Lady Macbeth's serpent under the innocent flower in 1.5. In 3.2 Macbeth's word is ‘scorpions’, creatures whose sting poisons, which is how his thoughts now feel.",
            "spiders": "Spiders are not in the line, and they do not carry the right meaning. Macbeth says ‘scorpions’: a sting that poisons, the image of a mind tormenting itself."
          } },
        { kind: "mcq", q: "What is a tyrant?", options: ["A king chosen by God", "A ruler who governs through fear and violence", "A soldier who fights for his king", "A lord who swears fealty"], answer: 1, why: "By Act 4 Macbeth rules by killing anyone he fears, even women and children. Malcolm and Macduff both call him a tyrant.",
          feedback: [
            "That is the opposite idea. A king chosen by God is the divine right of kings, which describes a rightful ruler such as Duncan. A tyrant rules through fear and violence with no right from God.",
            "",
            "A loyal soldier is what Macbeth was in Act 1, not what he becomes. Do not read the whole play backwards from the ending: the word ‘tyrant’ describes his rule in Acts 4 and 5, when he kills anyone he fears.",
            "A lord who swears fealty is a loyal follower, like Lennox at the start of Act 3. A tyrant is the ruler those lords come to fear and finally turn against."
          ] }
      ],
      modules: [
        {
          title: "Macbeth as a tyrant",
          task: {
            kind: "written",
            q: "How does Shakespeare present Macbeth as a tyrant in Acts 3 and 4? Write one developed paragraph.",
            marks: 8,
            criteria: [
              "AO1: a clear argument about how his tyranny grows, not just a list of murders",
              "AO1: short embedded quotations from Act 3 and Act 4",
              "AO2: you analyse a method, such as a list, an image or a change in his language",
              "AO3: you contrast him with the Jacobean idea of a good, God-given king"
            ],
            model: "In Act 3 Shakespeare shows that the crown has not brought Macbeth peace. He admits, “To be thus is nothing, / But to be safely thus”, so being king means nothing unless he feels secure. That fear turns him into a tyrant: he arranges Banquo's murder and, by Act 4, decides to attack Macduff's castle and kill “His wife, his babes, and all unfortunate souls”. The list of victims spreads wider and wider, showing that his violence has lost any clear purpose. A Jacobean audience who believed that kings were chosen by God would see the gap between Macbeth and Duncan, a rightful king who rewarded loyalty rather than punishing it."
          },
          levels: {
            support: {
              steps: [
                "Point: say what drives his tyranny (fear, paranoia, the prophecies).",
                "Evidence 1: quote a line from Act 3 that shows he does not feel safe.",
                "Evidence 2: quote a line from Act 4 that shows his violence spreading.",
                "Context: compare him with the Jacobean idea of a good king, such as Duncan."
              ],
              example: {
                q: "Practice question: how does Shakespeare present Duncan as a good king in Act 1 Scene 4?",
                steps: [
                  "Point: Duncan rewards loyalty.",
                  "Evidence: “I have begun to plant thee”.",
                  "Method: the metaphor of planting shows care and growth.",
                  "Context: a king ruling as God intended looks after his people."
                ],
                answer: "Shakespeare presents Duncan as a generous king. He tells Macbeth, “I have begun to plant thee”, a metaphor that shows a king who nurtures his subjects so they grow, as a God-given ruler should."
              }
            },
            core: { hint: "Show a pattern: each murder is less necessary than the one before. Which word in your Act 4 quotation shows that?" },
            stretch: { extend: "Bring in Malcolm in Act 4 Scene 3 or Edward the Confessor, the English king said to heal the sick. How does Shakespeare use other kings to show what Macbeth is not?" }
          },
          why: "Tyranny in the play grows step by step out of fear. Shakespeare measures Macbeth against good kings so the audience sees exactly what has been lost.",
          explain: "Say which word in your Act 4 quotation you would analyse first, and what it suggests about how his violence has changed.",
          contexts: [
            { label: "Macbeth, 3.1",
              q: "Macbeth, 3.1.52–53: “To be thus is nothing, / But to be safely thus.” How does Shakespeare use this line to present Macbeth as a tyrant? Write one developed paragraph.",
              why: "‘Thus’ means being king, and he calls it ‘nothing’: the crown he killed for is worthless to him without safety. The word ‘safely’ is the seed of his tyranny, because a king who must feel safe will kill anyone who makes him feel unsafe. The line comes just before he hires Banquo's murderers." },
            { label: "Macbeth, 3.4",
              q: "Macbeth, 3.4.151: “It will have blood, they say; blood will have blood.” How does Shakespeare use this line to present Macbeth as a tyrant? Write one developed paragraph.",
              why: "The repeated ‘blood’ turns one murder into a chain: each killing demands another. Macbeth states the rule of tyranny himself, as if it were a proverb, so the audience sees that he understands what he has become and carries on regardless." },
            { label: "Malcolm, 4.3",
              q: "Malcolm, 4.3.14–15: “This tyrant, whose sole name blisters our tongues, / Was once thought honest.” How does Shakespeare use this line to present Macbeth as a tyrant? Write one developed paragraph.",
              why: "Shakespeare lets another character name him: ‘tyrant’ is the first word, and ‘blisters’ makes even saying his name painful, like a burn. But ‘once thought honest’ keeps the arc in view: Macbeth was not always this, and the gap between the honest soldier and the tyrant is what makes the play a tragedy rather than a villain's tale." }
          ]
        },
        {
          title: "Macbeth's road from Act 3 to Act 5",
          task: {
            kind: "order",
            q: "Put these events from Acts 3 to 5 in the order they happen.",
            items: [
              "Macbeth persuades two murderers to kill Banquo.",
              "Banquo is killed, but Fleance escapes.",
              "Banquo's ghost appears at the banquet.",
              "The witches show Macbeth three apparitions.",
              "Macduff's wife and children are murdered.",
              "Macbeth hears that Lady Macbeth is dead.",
              "Birnam Wood seems to move towards Dunsinane.",
              "Macduff kills Macbeth."
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with Act 3: Banquo must be planned for, then killed, then return as a ghost.",
                "Act 4 opens with the witches; Macbeth acts on what they say.",
                "Act 5 ends with the battle. What news reaches Macbeth before Birnam Wood moves?"
              ],
              example: {
                q: "Practice: order these Act 2 events: Macduff finds the body; Macbeth sees the dagger; the Porter opens the gate; Macbeth returns with bloody hands.",
                steps: ["The dagger comes before the murder.", "He returns afterwards with the daggers and blood.", "The knocking leads to the Porter.", "Macduff then finds the body."],
                answer: "Macbeth sees the dagger; Macbeth returns with bloody hands; the Porter opens the gate; Macduff finds the body."
              }
            },
            core: { hint: "Each act has a pattern: plan, act, consequence. Use that to place the events." },
            stretch: { extend: "Which of these events is Macbeth's last real choice, after which his fate seems sealed? Justify your answer." }
          },
          why: "Act 3 deals with Banquo, Act 4 with the witches and Macduff, and Act 5 with the fall. Knowing this order lets you place any extract you are given in the exam.",
          explain: "Say, in one sentence, why the apparitions must come before the murder of Macduff's family."
        },
        {
          title: "Four kings",
          task: {
            kind: "match",
            q: "Match each king in the play to how Shakespeare presents his rule.",
            pairs: [
              ["Duncan", "Trusting and generous, the rightful king, but blind to traitors"],
              ["Macbeth", "A tyrant who rules through fear and keeps killing to feel safe"],
              ["Malcolm", "Careful and testing, a future king who restores order"],
              ["Edward the Confessor", "A holy English king, said to heal the sick"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Which king is murdered in Act 2? He is the trusting one.",
                "Which king tests Macduff before trusting him?",
                "Which king is only talked about in England, never seen?"
              ],
              example: {
                q: "Practice: which character is presented as an Everyman for the Scottish people?",
                steps: ["An Everyman stands for ordinary people.", "In Act 2 Scene 4 an Old Man describes nature's chaos.", "He has no title, so he speaks for everyone."],
                answer: "The Old Man in Act 2 Scene 4."
              }
            },
            core: { hint: "Think of good kingship as trust plus judgement. Who has one, who has both, who has neither?" },
            stretch: { extend: "Duncan was too trusting; Malcolm learns to test people. What lesson about kingship might Shakespeare have wanted King James to see in this?" }
          },
          why: "Shakespeare shows several kinds of kingship so that the audience can judge Macbeth's rule against the others.",
          explain: "Say, in one sentence, what Duncan and Malcolm each have that Macbeth lacks as a king."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 6 ─────────────────────────────
    {
      key: "exam-essay-skills", n: 6,
      title: "Writing the Macbeth essay",
      lead: "This chapter shows you how to turn everything you know into a planned answer, from the extract to the whole play.",
      covers: [7, 14],
      pretext: {
        words: [
          { word: "extract", means: "a short part of the play printed on the paper", sentence: "Start by reading the extract carefully." },
          { word: "argument", means: "the main idea your whole answer proves", sentence: "A clear argument links every paragraph together." },
          { word: "embed", means: "to fit a quotation inside your own sentence", sentence: "Embed a short quotation instead of copying long lines." },
          { word: "method", means: "a choice the writer makes, like an image or a question", sentence: "Name the method, then explain its effect." },
          { word: "whole play", means: "everything outside the extract", sentence: "You must also write about the whole play." }
        ],
        passage: [
          "In the exam, you answer one question on Macbeth.",
          "The paper gives you a short extract from the play.",
          "You write about the extract, and about the whole play.",
          "You will not have the play with you.",
          "So you need key quotations in your memory.",
          "Spend ten minutes reading and planning first.",
          "Decide your main argument before you write.",
          "Use short quotations and fit them into your sentences.",
          "Explain the effect of one word or method at a time.",
          "Link your ideas to the world of 1606.",
          "Check your spelling, punctuation and grammar at the end."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "جزء قصير من المسرحية مطبوع في ورقة الامتحان (extract)",
            "الفكرة الرئيسية التي تثبتها إجابتك كلها (argument)",
            "إدراج اقتباس داخل جملتك أنت (embed)",
            "اختيار يقوم به الكاتب، مثل صورة أو سؤال (method)",
            "كل ما في المسرحية خارج المقطع المطبوع (whole play)"
          ],
          "passage": [
            "في الامتحان، تجيب عن سؤال واحد عن ماكبث.",
            "تعطيك الورقة مقطعاً قصيراً (extract) من المسرحية.",
            "تكتب عن المقطع، وعن المسرحية كلها.",
            "لن تكون المسرحية معك.",
            "لذلك تحتاج إلى حفظ الاقتباسات المهمة في ذاكرتك.",
            "اقضِ عشر دقائق في القراءة والتخطيط أولاً.",
            "حدّد فكرتك الرئيسية قبل أن تكتب.",
            "استخدم اقتباسات قصيرة وأدرِجها داخل جملك.",
            "اشرح تأثير كلمة واحدة أو أسلوب واحد في كل مرة.",
            "اربط أفكارك بعالم عام 1606.",
            "راجع الإملاء وعلامات الترقيم والقواعد في النهاية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "krótki fragment sztuki wydrukowany w arkuszu (extract)",
            "główna myśl, którą udowadnia cała twoja odpowiedź (argument)",
            "wpleść cytat we własne zdanie (embed)",
            "wybór, którego dokonuje autor, na przykład obraz lub pytanie (method)",
            "wszystko poza fragmentem (whole play)"
          ],
          "passage": [
            "Na egzaminie odpowiadasz na jedno pytanie o Makbecie.",
            "Arkusz daje ci krótki fragment (extract) sztuki.",
            "Piszesz o tym fragmencie i o całej sztuce.",
            "Nie będziesz mieć sztuki przy sobie.",
            "Dlatego musisz mieć kluczowe cytaty w pamięci.",
            "Najpierw poświęć dziesięć minut na czytanie i planowanie.",
            "Zanim zaczniesz pisać, ustal swoją główną tezę.",
            "Używaj krótkich cytatów i wplataj je w swoje zdania.",
            "Wyjaśniaj efekt jednego słowa lub jednej metody naraz.",
            "Łącz swoje pomysły ze światem roku 1606.",
            "Na końcu sprawdź pisownię, interpunkcję i gramatykę."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma parte curta da peça impressa no exame (extract)",
            "a ideia principal que toda a sua resposta prova (argument)",
            "encaixar uma citação dentro da sua própria frase (embed)",
            "uma escolha que o escritor faz, como uma imagem ou uma pergunta (method)",
            "tudo o que está fora do excerto (whole play)"
          ],
          "passage": [
            "No exame, você responde a uma pergunta sobre Macbeth.",
            "O exame dá um excerto curto da peça (extract).",
            "Você escreve sobre o excerto e sobre a peça inteira.",
            "Você não pode levar o livro da peça para o exame.",
            "Por isso, as citações importantes têm de estar na sua memória.",
            "Use dez minutos para ler e fazer um plano primeiro.",
            "Decida o seu argumento principal antes de escrever.",
            "Use citações curtas e coloque-as dentro das suas frases.",
            "Explique o efeito de uma palavra ou de um método de cada vez.",
            "Ligue as suas ideias ao mundo de 1606.",
            "Verifique a ortografia, a pontuação e a gramática no fim."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qayb gaaban oo riwaayadda ka mid ah oo warqadda ku daabacan (extract)",
            "fikradda ugu muhiimsan ee jawaabtaada oo dhan caddeyso (argument)",
            "in xigasho la geliyo gudaha jumladdaada (embed)",
            "doorasho qoraagu sameeyo, sida sawir ama su'aal (method)",
            "wax walba oo ka baxsan qaybta la soo xigtay (whole play)"
          ],
          "passage": [
            "Imtixaanka, waxaad ka jawaabtaa hal su'aal oo ku saabsan Macbeth.",
            "Warqadda waxay ku siinaysaa qayb gaaban (extract) oo riwaayadda ka mid ah.",
            "Waxaad ka qortaa qaybtaas, iyo riwaayadda oo dhan.",
            "Riwaayadda ma haysan doontid.",
            "Sidaas darteed waxaad u baahan tahay xigashooyin muhiim ah oo xusuustaada ku jira.",
            "Marka hore toban daqiiqo ku qaado akhris iyo qorshayn.",
            "Go'aami doodaada ugu muhiimsan ka hor intaadan qorin.",
            "Isticmaal xigashooyin gaagaaban oo geli jumladahaaga.",
            "Sharrax saamaynta hal eray ama hal hab markiiba.",
            "Fikradahaaga ku xir adduunkii 1606.",
            "Dhammaadka hubi higgaaddaada, xarakayntaada iyo naxwahaaga."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "короткий уривок п’єси, надрукований в екзаменаційній роботі",
            "головна думка, яку доводить уся ваша відповідь",
            "вписати цитату у власне речення",
            "вибір, який робить автор, наприклад образ або запитання",
            "усе, що є в п’єсі поза уривком"
          ],
          "passage": [
            "На екзамені ви відповідаєте на одне запитання про «Макбета».",
            "У роботі вам дають короткий уривок (extract) з п’єси.",
            "Ви пишете про уривок і про всю п’єсу.",
            "Тексту п’єси у вас із собою не буде.",
            "Тому ключові цитати потрібно знати напам’ять.",
            "Спочатку витратьте десять хвилин на читання і план.",
            "Визначте свою головну думку, перш ніж писати.",
            "Використовуйте короткі цитати і вписуйте їх у свої речення.",
            "Пояснюйте ефект одного слова або прийому за раз.",
            "Пов’язуйте свої думки зі світом 1606 року.",
            "Наприкінці перевірте правопис, пунктуацію і граматику."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ڈرامے کا ایک چھوٹا حصہ جو پیپر پر چھپا ہوتا ہے (extract)",
            "وہ مرکزی خیال جسے آپ کا پورا جواب ثابت کرتا ہے (argument)",
            "اقتباس کو اپنے جملے کے اندر بٹھانا (embed)",
            "مصنف کا کوئی انتخاب، جیسے کوئی تصویر یا سوال (method)",
            "اقتباس کے باہر کی ہر چیز (whole play)"
          ],
          "passage": [
            "امتحان میں آپ میکبیث پر ایک سوال کا جواب دیتے ہیں۔",
            "پیپر آپ کو ڈرامے سے ایک چھوٹا اقتباس دیتا ہے۔",
            "آپ اقتباس کے بارے میں لکھتے ہیں، اور پورے ڈرامے کے بارے میں بھی۔",
            "ڈرامے کی کتاب آپ کے پاس نہیں ہوگی۔",
            "اس لیے آپ کو اہم اقتباسات یاد ہونے چاہییں۔",
            "سب سے پہلے دس منٹ پڑھنے اور منصوبہ بنانے میں لگائیں۔",
            "لکھنے سے پہلے اپنی مرکزی دلیل طے کریں۔",
            "چھوٹے اقتباسات استعمال کریں اور انھیں اپنے جملوں میں بٹھائیں۔",
            "ایک وقت میں ایک لفظ یا ایک طریقے کا اثر بیان کریں۔",
            "اپنے خیالات کو 1606 کی دنیا سے جوڑیں۔",
            "آخر میں اپنے ہجے، رموزِ اوقاف اور گرامر جانچیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What the question is asking for",
          paragraphs: [
            "The Macbeth question is in Section A of Paper 1. It is worth 30 marks, with 4 more marks for spelling, punctuation and grammar. It is a closed-book exam, so the extract is the only part of the play you will have in front of you.",
            "Your teacher marks four things. AO1: you answer the question with a clear argument and use quotations as evidence. AO2: you analyse how Shakespeare uses language, structure and form, using subject terms. AO3: you show how the play connects to the world it was written in. AO4: your writing is accurate and uses a good range of vocabulary."
          ],
          quote: { text: "We will proceed no further in this business.", source: "1.7.34" },
          tip: "A short quotation like ‘business’ is worth more than a long one: it lets you zoom in on one word and show AO2."
        },
        {
          heading: "From the extract to the whole play",
          paragraphs: [
            "Before you write, place the extract: is it near the beginning, middle or end of the play? Then ask how the character, relationship or theme looks before and after it. This is how you turn one page into an answer about the whole play.",
            "A reliable plan has six parts: an introduction with your argument; two points about the extract; one point about earlier or later in the play; one point about the ending; and a conclusion about what Shakespeare was showing. Bring context into the middle paragraphs, where it can explain a quotation. For the Macbeths, you might track their partnership from Act 1, where they plan together, to Act 3, where Macbeth shuts her out."
          ],
          quote: { text: "Be innocent of the knowledge, dearest chuck", source: "3.2.50" },
          tip: "‘Chuck’ is a pet name, like ‘chick’. It sounds loving, but he is hiding a murder from her."
        },
        {
          heading: "Writing a strong paragraph",
          paragraphs: [
            "Use the What, How, Why structure from your lessons. What: make a point that answers the question. How: give a short, embedded quotation and name the method. Why: explain the effect, zoom in on a word, and say what Shakespeare wanted his audience to think or feel.",
            "Weave context into your analysis instead of adding it at the end. For example, Lady Macbeth tells Macbeth in Act 3 that “What's done is done”. By Act 5 she says that it cannot be undone. Placing those lines side by side, with a sentence about Christian ideas of sin, is a whole-play paragraph in miniature."
          ],
          quote: { text: "What's done cannot be undone.", source: "5.1.74" },
          tip: "If a sentence of context could be pasted into any essay, it is not yet doing its job. Tie it to a word in your quotation."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which assessment objective is about context?", options: ["AO1", "AO2", "AO3", "AO4"], answer: 2, why: "AO3 is the link between the play and the world it was written in.",
          feedback: [
            "AO1 is your argument and your use of quotations as evidence. Context, the link between the play and the world of 1606, is AO3.",
            "AO2 is analysis of Shakespeare's methods: language, structure and form. Context is a separate objective, AO3.",
            "",
            "AO4 is spelling, punctuation and grammar, worth 4 extra marks. Context is AO3."
          ] },
        { kind: "numeric", q: "How many marks is the Macbeth question worth, not counting the 4 marks for spelling, punctuation and grammar?", answer: 30, tolerance: 0, units: "marks", why: "30 marks for your response, plus 4 for AO4, makes 34 marks for the Shakespeare section.",
          misconceptions: [
            { answer: 34, says: "34 is the whole Shakespeare section: 30 for your response plus 4 for spelling, punctuation and grammar. The question asked for the marks without those 4." },
            { answer: 26, says: "You took the 4 AO4 marks away from 30. They are added on top of the 30, not taken out of it, so the response alone is worth 30." },
            { answer: 4, says: "4 is the number of marks for AO4 alone. The question asked about the rest of the marks, which is 30." }
          ] },
        { kind: "mcq", q: "Which sentence embeds a quotation best?", options: [
          "Macbeth is scared. Quote: “O, full of scorpions is my mind, dear wife!”",
          "Macbeth admits his mind is “full of scorpions”, an image of thoughts that sting and poison him.",
          "“O, full of scorpions is my mind, dear wife!” This shows he is scared.",
          "Macbeth says a quote about scorpions in Act 3."
        ], answer: 1, why: "The best option fits a short quotation into the writer's own sentence and explains it straight away.",
          feedback: [
            "Announcing a quotation and then copying the whole line is not embedding. The quotation sits outside your sentence and nothing in it is analysed. Fit a few of its words into your own sentence instead.",
            "",
            "Starting with the full line and then adding a second sentence keeps the quotation and the analysis apart. Embed a short part of the line inside your own sentence and name its effect in the same breath.",
            "There is no quotation here at all, only a report that one exists. The examiner needs Shakespeare's words themselves, kept short and worked into your sentence."
          ] }
      ],
      modules: [
        {
          title: "Plan in the right order",
          task: {
            kind: "order",
            q: "Put these parts of an extract-to-whole-play answer in the order you would write them.",
            items: [
              "Introduction: your argument about how the character or theme develops",
              "First point about the extract",
              "Second point about the extract",
              "A point about the same idea earlier or later in the play",
              "A point about how the idea ends by Act 5",
              "Conclusion: what Shakespeare was showing his audience"
            ]
          },
          levels: {
            support: {
              steps: [
                "Every answer opens with your argument and closes with your conclusion.",
                "The extract comes first, because the question starts there.",
                "Then move out into the play, ending with Act 5."
              ],
              example: {
                q: "Practice: order a single paragraph: explain the effect; make your point; give a quotation; link to context.",
                steps: ["What: the point comes first.", "How: then the quotation.", "Why: then the effect, then context woven in."],
                answer: "Make your point; give a quotation; explain the effect; link to context."
              }
            },
            core: { hint: "Think of zooming: start on the extract, then pull back to show the whole play." },
            stretch: { extend: "If the extract came from Act 5, how would you change this plan? Rewrite the order for that case." }
          },
          why: "The plan moves from the extract outward and ends with Shakespeare's purpose, so that every paragraph serves one argument.",
          explain: "Say, in one sentence, why the points about the extract come before the points about the rest of the play."
        },
        {
          title: "The extract-to-whole-play answer",
          task: {
            kind: "written",
            q: "Begin with Act 1 Scene 7, from Macbeth's line “We will proceed no further in this business” to Lady Macbeth's “But screw your courage to the sticking place / And we'll not fail.” How does Shakespeare present the relationship between Macbeth and Lady Macbeth, in this part of the scene and across the whole play? Write your introduction and first two paragraphs.",
            marks: 30,
            criteria: [
              "AO1: an introduction with a clear argument about how the relationship develops",
              "AO1: short, embedded quotations from the extract and from at least one other scene",
              "AO2: analysis of methods such as questions, insults, imperatives, or pet names, with subject terms",
              "AO3: context woven in, for example warrior culture, gender expectations or the divine right of kings",
              "AO4: accurate spelling, punctuation and grammar"
            ],
            model: "Shakespeare presents the Macbeths' relationship as a partnership that is powerful at first but slowly breaks apart. In this part of Act 1 Scene 7, Lady Macbeth holds the power. When Macbeth announces “We will proceed no further in this business”, the word ‘business’ makes murder sound like a deal he can cancel. She replies with questions and insults, claiming “When you durst do it, then you were a man”. By tying courage to manhood, she turns the values of a warrior culture against him, and within minutes he agrees. Yet by Act 3 Scene 2 he tells her to “Be innocent of the knowledge, dearest chuck”: he now plans murder without her, and the tender word ‘chuck’ hides the fact that she has lost her place beside him."
          },
          levels: {
            support: {
              steps: [
                "Introduction: write one sentence on how the relationship changes from start to end (for example, from her control to his isolation).",
                "Paragraph 1: who has the power in the extract? Quote one line by each of them and analyse one word.",
                "Paragraph 2: jump to Act 3 Scene 2 or Act 3 Scene 4. Who has the power now? Quote and analyse.",
                "Weave in context: warrior culture, Jacobean ideas about wives, or the divine right of kings."
              ],
              example: {
                q: "Practice question (a different relationship): how does Shakespeare present the friendship between Macbeth and Banquo, in Act 1 Scene 3 and across the play?",
                steps: [
                  "Argument: they begin as equals but the prophecy turns Macbeth against his friend.",
                  "Extract: they meet the witches together; Banquo asks why Macbeth starts and seems to fear.",
                  "Later: in Act 3 Scene 1 Macbeth says that being king is nothing unless he is safe, and plans Banquo's murder.",
                  "Context: fealty and loyalty between soldiers mattered deeply in a warrior culture."
                ],
                answer: "Shakespeare presents Macbeth and Banquo as comrades who are split apart by the prophecy. In Act 1 Scene 3 Banquo asks, “Why do you start and seem to fear / Things that do sound so fair?”, noticing his friend's reaction as only a close companion would. By Act 3, Macbeth believes “To be thus is nothing, / But to be safely thus”, and the friend has become a threat to be removed."
              }
            },
            core: { hint: "Find the moment the power shifts. In the extract it moves to her; by Act 3 it has moved back to him, and he no longer shares his plans." },
            stretch: { extend: "Write a conclusion that judges the relationship: is Shakespeare showing a loving marriage destroyed by ambition, or a partnership that was always built on power? Refer to Act 5 Scene 1 and Act 5 Scene 5." }
          },
          why: "Top answers make one argument, start from the extract, then move across the play to show change. Context should explain why a method works, as warrior culture does in the model.",
          explain: "Say which word in the extract you would analyse first, and what it suggests about who holds the power.",
          contexts: [
            { label: "Lady Macbeth, 1.5",
              q: "Begin with Lady Macbeth's instruction to her husband in Act 1 Scene 5 (1.5.76–77): “Look like th' innocent flower, / But be the serpent under 't.” How does Shakespeare present the relationship between Macbeth and Lady Macbeth, in this moment and across the whole play? Write your introduction and first two paragraphs.",
              why: "In 1.5 she instructs and he listens. The imperative ‘look’ and the contrast of ‘flower’ and ‘serpent’ show her teaching him to deceive. An answer that starts here can track the partnership forward to 3.2, where he hides his plans from her, and to 5.1, where she is alone." },
            { label: "Macbeth, 3.2",
              q: "Begin with Macbeth's words to his wife in Act 3 Scene 2 (3.2.50): “Be innocent of the knowledge, dearest chuck”. How does Shakespeare present the relationship between Macbeth and Lady Macbeth, in this moment and across the whole play? Write your introduction and first two paragraphs.",
              why: "The power has shifted. He now gives the orders and keeps her ‘innocent’ of Banquo's murder, and the pet name ‘chuck’ sounds tender while shutting her out. An answer that starts here looks back to 1.5 and 1.7, where she led, and forward to 5.5, where he barely reacts to her death." },
            { label: "Macbeth, 5.5",
              q: "Begin with Macbeth's response to the news of his wife's death in Act 5 Scene 5 (5.5.20–21): “She should have died hereafter; / There would have been a time for such a word.” How does Shakespeare present the relationship between Macbeth and Lady Macbeth, in this moment and across the whole play? Write your introduction and first two paragraphs.",
              why: "By 5.5 the partnership has gone. ‘Hereafter’ and ‘a time for such a word’ treat her death as badly timed news rather than a loss, and the speech turns at once to his own despair. An answer that starts here reads the whole play backwards: from this emptiness to the two voices planning together in Act 1." }
          ]
        },
        {
          title: "Weaving context in",
          task: {
            kind: "mcq",
            q: "Which sentence weaves context in best?",
            options: [
              "Macbeth kills Duncan. In 1606 people believed in the divine right of kings.",
              "Macduff calls the murder “sacrilegious”, a word that turns regicide into an attack on God, as the divine right of kings would lead a Jacobean audience to feel.",
              "The divine right of kings was a belief in Shakespeare's time that kings were chosen by God.",
              "Shakespeare's audience had many beliefs, such as the divine right of kings."
            ],
            answer: 1,
            feedback: [
              "Two separate sentences: a plot point, then a fact about 1606. Nothing joins them, so the context is bolted on rather than woven in. Context earns marks only when it explains a quotation.",
              "",
              "This is a definition of the divine right of kings, not a point about the play. It could be pasted into any Macbeth essay, which is the sign that it is not yet doing its job.",
              "A general statement about the audience, with no quotation and no moment from the play. It lists context rather than using it."
            ]
          },
          levels: {
            support: {
              steps: [
                "Look for the sentence that has a quotation in it.",
                "Check whether the context explains that quotation, or just sits beside it.",
                "Choose the one where context and quotation are joined in the same sentence."
              ],
              example: {
                q: "Practice: which is better? (a) ‘Lady Macbeth is powerful. Women had to obey men.’ (b) ‘Lady Macbeth's imperatives would shock an audience who expected wives to obey.’",
                steps: ["(a) puts two facts side by side.", "(b) joins her language to the audience's beliefs.", "So (b) weaves the context in."],
                answer: "(b), because the context explains her language."
              }
            },
            core: { hint: "Context is woven in when you could not delete it without breaking the sentence's point." },
            stretch: { extend: "Rewrite option A so that it weaves the context in properly, using a short quotation of your own choice." }
          },
          why: "Only option B joins a quotation, its effect and the context in one sentence. The others state context without linking it to the play.",
          explain: "Say, in one sentence, what the context in the best sentence explains that the other three do not."
        }
      ]
    }
  ],

  sources: {
    deckDump: "y10_u1_macbeth.txt",
    decksUsed: ["Macbeth Master NDE.pptx (Year 10 Unit 1, 26 lessons, extracted text)"],
    notes: "Lesson titles, sequence, lesson objectives, key words and skills (What/How/Why paragraphs, AO1–AO4 criteria, extract-to-whole-play planning) are taken from the department's deck. All explanations, questions and model paragraphs are original; none of the deck's WAGOLL or model-answer text is reproduced. Shakespeare quotations follow Folger Shakespeare Library wording and line numbering as recalled by the author, not yet checked against a printed edition: see NOTES.md for the full list. astra/2 (17 October 2026): per-option misconception feedback, explain-it-back prompts, three context-choice modules (three new quotations: 4.1.47, 4.3.14–15, 5.5.20–21), glossary chapters, Connections groups, spacing and constellation added; no widgets (none fits a Shakespeare unit). Context facts: James VI and I acceded 1603; North Berwick trials 1590; Daemonologie 1597; Gunpowder Plot 5 November 1605; play c.1606; source Holinshed's Chronicles (1587)."
  }
};
