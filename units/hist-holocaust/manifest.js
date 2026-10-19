// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 9 Topic 3: The Holocaust · schema astra/2
//
// CARE (this unit is taught the way the department's decks teach it, and the way the Holocaust Educational Trust's
// approach is reflected in them):
//   Victims are people with names and lives before. Eleven named individuals from the decks appear by name and
//   verify.py fails if any of them is removed. Perpetrators made choices; nothing is framed as inevitable, and
//   verify.py allows inevitability wording only inside a wrong multiple-choice option or the feedback that refutes it.
//   No simulation, no "imagine you are", no role-play or empathy-performance writing: every written task asks for
//   explanation and evidence, and verify.py bans the role-play phrasings (including the deck's own "from a Nazi
//   perspective" homework task). No graphic detail beyond the decks; the graphic terms the decks do not need are
//   banned outright and "gas chamber" is restricted to teaching paragraphs.
//   FIGURES: death tolls and camp numbers appear ONLY as stated facts inside a teaching paragraph or a read-along
//   passage, in the deck's own wording. verify.py fails if a figure appears anywhere else, and asserts that no item
//   of kind numeric or gap has an answer that is a victim count.
//   NO QUOTATION AT ALL. The decks print a Himmler speech (1943), a Goebbels diary (1938), a survivor's 2018
//   newspaper interview, a ghetto letter and a modern historian; all are paraphrased and attributed, none is quoted.
//   verify.py bans every quotation mark, requires no `quote` field, fingerprints each of those texts and the decks'
//   two model answers, and fails on any 14-word run of pupil text that also appears in the deck dump.
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   an independent CHRONOLOGY table with slide references holds every date; every year in pupil text must be in it;
//   every named dated event must carry its CHRONOLOGY year; every `order` task is compared with a canonical sequence
//   and dated sequences must be chronological; every number is recomputed; an independent answer key (written from my
//   own reading of the decks) holds every mcq, gap, numeric, order and match answer; language lints enforce
//   "Jewish people", "Roma people", "gay people"; the decks' misspellings are banned; twelve mutations are fed
//   through the checks as a self-test.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` with checks on every numeric; `explain`
//   on every module; `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation;
//   no pretext.l1 (the translation pass follows); no widgets.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-holocaust"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-holocaust",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 9 Topic 3: The Holocaust — foundations for GCSE History 8145 (Germany 1890-1945: Democracy and dictatorship; source and interpretation skills)",
    year: 9,
    tier: "KS3",
    title: "The Holocaust",
    sub: "What the Holocaust was, the people and communities that were destroyed, how persecution grew step by step, and the choices made by those who carried it out, those who watched, and those who resisted.",
    bigQuestion: "What was the Holocaust, how did it happen step by step, and who should be held responsible?",
    lessonCount: 6,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Introduction to the Holocaust and the people involved", question: "What was the Holocaust, why do we study it, and who was involved?", keywords: ["Holocaust", "genocide", "persecution", "victim", "perpetrator", "bystander"] },
    { n: 2, title: "Pre-war Jewish life and early persecution (1933-1939)", question: "What was life like for Jewish people before the Nazis, and how did antisemitism in Germany grow?", keywords: ["antisemitism", "pre-war Jewish life", "Treaty of Versailles", "boycott", "Nuremberg Laws", "waves of persecution"] },
    { n: 3, title: "Kristallnacht and the ghettos", question: "How does Kristallnacht show how the treatment of the Jewish community had changed?", keywords: ["Kristallnacht", "Night of Broken Glass", "propaganda", "ghetto", "segregated", "Warsaw ghetto"] },
    { n: 4, title: "Progress check and the concentration camps", question: "What was a concentration camp, and how did the purpose of the camps change?", keywords: ["concentration camp", "Dachau", "forced labour", "deportation", "deception", "roll call"] },
    { n: 5, title: "1941-1945: the Final Solution and responsibility", question: "How did the treatment of Jewish people change after 1941, and who should be held responsible?", keywords: ["Final Solution", "Einsatzgruppen", "extermination camp", "Wannsee Conference", "Nuremberg Trials", "responsibility"] },
    { n: 6, title: "Review and assessment", question: "Can you use content, nature, origin and purpose to explain what a source tells you about the Holocaust?", keywords: ["content", "nature", "origin", "purpose", "trustworthy", "chronology"] }
  ],

  glossary: [
    { term: "Holocaust", means: "The murder of millions of Jewish people, and of other groups, organised by the Nazi state before and during the Second World War.", chapter: "what-was-the-holocaust" },
    { term: "genocide", means: "The deliberate killing of a large number of people from one nation or ethnic group, meaning to destroy that group.", chapter: "what-was-the-holocaust" },
    { term: "persecution", means: "Cruel and unfair treatment of people, especially because of their race, religion or politics.", chapter: "life-before" },
    { term: "antisemitism", means: "Hostility to or prejudice against Jewish people.", chapter: "life-before" },
    { term: "boycott", means: "Deliberately not doing something, such as not buying from a shop, in the hope that it will change something.", chapter: "persecution-kristallnacht" },
    { term: "propaganda", means: "Information spread to make people believe something, whether or not it is true.", chapter: "persecution-kristallnacht" },
    { term: "Nuremberg Laws", means: "The laws of 1935 that took German citizenship away from Jewish people and shut them out of much of public life.", chapter: "persecution-kristallnacht" },
    { term: "Kristallnacht", means: "The Night of Broken Glass, 9-10 November 1938: organised attacks on Jewish homes, shops, schools and synagogues.", chapter: "persecution-kristallnacht" },
    { term: "ghetto", means: "A part of a town or city, fenced or walled off, where Jewish people were forced to live, separated from everyone else.", chapter: "ghettos" },
    { term: "forced labour", means: "Work people are made to do, for no pay and with no choice, often in dangerous conditions.", chapter: "ghettos" },
    { term: "resistance", means: "Refusing to accept control: an uprising, or the quieter acts of keeping a school, a newspaper or a record going.", chapter: "ghettos" },
    { term: "concentration camp", means: "A camp where the Nazis imprisoned people without trial and forced them to work.", chapter: "camps-final-solution" },
    { term: "extermination camp", means: "A camp built by the Nazis for the purpose of murdering the people brought to it.", chapter: "camps-final-solution" },
    { term: "perpetrator", means: "A person who took part in what was done during the Holocaust.", chapter: "responsibility-sources" },
    { term: "bystander", means: "A person who stood by and let it happen.", chapter: "responsibility-sources" },
    { term: "rescuer", means: "A person who did something to help those who were being persecuted.", chapter: "responsibility-sources" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "Words for what happened", terms: ["Holocaust", "genocide", "persecution", "antisemitism"] },
    { group: "Taking rights away, 1933-1939", terms: ["boycott", "propaganda", "Nuremberg Laws", "Kristallnacht"] },
    { group: "Places people were forced into", terms: ["ghetto", "forced labour", "concentration camp", "extermination camp"] },
    { group: "People, and the choices they made", terms: ["perpetrator", "bystander", "rescuer", "resistance"] }
  ],

  chapters: [
    /* ───────────── 1 · what was the Holocaust ───────────── */
    {
      key: "what-was-the-holocaust", n: 1, title: "What was the Holocaust, and why do we study it?",
      lead: "What the Holocaust was, who the Nazis persecuted, the words historians use for it, and why this part of history is studied so carefully.",
      covers: [1],
      pretext: {
        words: [
          { word: "Holocaust", means: "the murder of millions of Jewish people, and of other groups, organised by the Nazi state", sentence: "The Holocaust took place in Europe before and during the Second World War." },
          { word: "genocide", means: "the deliberate killing of a large number of people from one group, meaning to destroy that group", sentence: "Historians call the Holocaust a genocide because the Nazis set out to destroy a whole people." },
          { word: "persecution", means: "cruel and unfair treatment of people because of their race, religion or politics", sentence: "Persecution began with unfair laws long before it ended in murder." },
          { word: "antisemitism", means: "hostility to or prejudice against Jewish people", sentence: "Antisemitism was not invented by the Nazis, but they built their politics on it." },
          { word: "victim", means: "a person who is harmed, injured or killed by a crime or by someone's actions", sentence: "Every victim of the Holocaust had a name, a family and a life before." }
        ],
        passage: [
          "The Holocaust happened in Europe before and during the Second World War.",
          "Germany's Nazi Party, led by Adolf Hitler, organised it.",
          "Millions of Jewish people were murdered because of who they were.",
          "Roma people, disabled people and gay people were targeted too.",
          "So were political opponents of the Nazis.",
          "About eleven million people were killed in the Holocaust.",
          "Six million of these people were Jewish.",
          "Each one of them had a name and a family.",
          "They had homes, jobs, schools and friends before the Nazis took power.",
          "We study the Holocaust so that those people are not forgotten.",
          "We also study it because it was not an accident.",
          "People planned it, and other people chose to let it happen.",
          "Historians ask who took part, who watched, and who helped."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "قتل ملايين من الناس اليهود، ومن جماعات أخرى، نظّمته الدولة النازية (Holocaust)",
            "القتل المتعمّد لعدد كبير من الناس من جماعة واحدة، بقصد إفناء تلك الجماعة (genocide)",
            "معاملة الناس معاملةً قاسية غير عادلة بسبب عِرقهم أو دينهم أو سياستهم (persecution)",
            "العداء للناس اليهود أو التحامل عليهم (antisemitism)",
            "شخص يُصيبه ضرر أو أذًى أو قتل بجريمة أو بأفعال أحد (victim)"
          ],
          "passage": [
            "حدث الهولوكوست (Holocaust) في أوروبا قبل الحرب العالمية الثانية وفي أثنائها.",
            "ونظّمه الحزب النازي الألماني بقيادة أدولف هتلر (Adolf Hitler).",
            "وقُتل ملايين من الناس اليهود بسبب هويّتهم.",
            "واستُهدف أيضًا الناس الروما وأشخاص ذوو إعاقة وأشخاص مثليّون.",
            "واستُهدف كذلك معارضو النازيين السياسيّون.",
            "وقُتل في الهولوكوست نحو أحد عشر مليون شخص.",
            "وستّة ملايين من هؤلاء الناس كانوا يهودًا.",
            "ولكلّ واحد منهم اسم وأسرة.",
            "وكانت لهم بيوت وأعمال ومدارس وأصدقاء قبل أن يأخذ النازيون السلطة.",
            "ونحن ندرس الهولوكوست حتى لا يُنسى أولئك الناس.",
            "وندرسه أيضًا لأنه لم يكن حادثًا عارضًا.",
            "فقد خطّط له ناس، واختار ناس آخرون أن يتركوه يحدث.",
            "والمؤرّخون يسألون: مَن شارك؟ ومَن شاهد؟ ومَن ساعد؟"
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "mordowanie milionów Żydów oraz ludzi z innych grup, zorganizowane przez państwo nazistowskie (Holocaust)",
            "celowe zabijanie wielkiej liczby ludzi z jednej grupy, żeby tę grupę zniszczyć (genocide)",
            "okrutne i niesprawiedliwe traktowanie ludzi z powodu ich pochodzenia, religii albo poglądów politycznych (persecution)",
            "wrogość wobec Żydów albo uprzedzenie do nich (antisemitism)",
            "osoba, której przestępstwo albo czyjeś działanie wyrządza krzywdę, rani ją albo ją zabija (victim)"
          ],
          "passage": [
            "Holokaust zdarzył się w Europie przed drugą wojną światową i w jej czasie.",
            "Zorganizowała go niemiecka partia nazistowska, której przywódcą był Adolf Hitler.",
            "Miliony Żydów zostały zamordowane z powodu tego, kim byli.",
            "Celem stali się też Romowie, osoby z niepełnosprawnościami i osoby homoseksualne.",
            "Tak samo polityczni przeciwnicy nazistów.",
            "W Holokauście zabito około jedenastu milionów ludzi.",
            "Sześć milionów z nich to byli Żydzi.",
            "Każdy z nich miał imię i rodzinę.",
            "Mieli domy, pracę, szkoły i przyjaciół, zanim naziści przejęli władzę.",
            "Uczymy się o Holokauście, żeby ci ludzie nie zostali zapomniani.",
            "Uczymy się o nim także dlatego, że nie był przypadkiem.",
            "Ludzie go zaplanowali, a inni ludzie postanowili na to pozwolić.",
            "Historycy pytają, kto brał w tym udział, kto się przyglądał i kto pomagał."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o assassinato de milhões de pessoas judias, e de pessoas de outros grupos, organizado pelo Estado nazi/nazista (Holocaust, Holocausto)",
            "a morte deliberada de um grande número de pessoas de um grupo, com a intenção de destruir esse grupo (genocide, genocídio)",
            "tratamento cruel e injusto de pessoas por causa da sua raça, religião ou política (persecution, perseguição)",
            "hostilidade ou preconceito contra as pessoas judias (antisemitism, antissemitismo)",
            "uma pessoa que é atingida, ferida ou morta por um crime ou pelos atos de alguém (victim, vítima)"
          ],
          "passage": [
            "O Holocausto aconteceu na Europa antes e durante a Segunda Guerra Mundial.",
            "Foi o Partido Nazi/Nazista da Alemanha, liderado por Adolf Hitler, que o organizou.",
            "Milhões de pessoas judias foram assassinadas por causa de quem eram.",
            "As pessoas Roma, as pessoas com deficiência e as pessoas gays também foram visadas.",
            "E também os opositores políticos dos nazis/nazistas.",
            "Cerca de onze milhões de pessoas foram mortas no Holocausto.",
            "Seis milhões destas pessoas eram judias.",
            "Cada uma delas tinha um nome e uma família.",
            "Tinham casas, empregos, escolas e amigos antes de os nazis/nazistas chegarem ao poder.",
            "Estudamos o Holocausto para que essas pessoas não sejam esquecidas.",
            "Estudamo-lo também porque não foi um acidente.",
            "Houve pessoas que o planearam/planejaram, e outras que escolheram deixá-lo acontecer.",
            "Os historiadores perguntam quem participou, quem assistiu e quem ajudou."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "dilkii malaayiin dad Yuhuud ah, iyo kooxo kale, oo dowladdii Nazi ay abaabushay",
            "dilka ula kaca ah ee dad tiro badan oo hal koox ah, oo loogu talagalay in kooxdaas la baabbi'iyo",
            "dad si naxariis-darro iyo caddaalad-darro ah loola dhaqmo jinsiyaddooda, diintooda ama siyaasaddooda dartii",
            "nacayb ama cadho ka dhan ah dadka Yuhuudda ah",
            "qof waxyeelloobay, dhaawacmay ama la dilay dembi ama ficil qof dartii"
          ],
          "passage": [
            "Holocaust-ku wuxuu Yurub ka dhacay Dagaalkii Labaad ee Adduunka ka hor iyo intii uu socday.",
            "Xisbiga Nazi ee Jarmalka, oo Adolf Hitler hoggaamiyay, ayaa abaabulay.",
            "Malaayiin dad Yuhuud ah waa la dilay sababtoo ah cidda ay ahaayeen.",
            "Dadka Roma ah, dadka naafada ah iyo dadka jinsiga isku mid ah jecel (gay people) sidoo kale waa la bartilmaameedsaday.",
            "Sidoo kale kuwa siyaasad ahaan Nazis-ka ka soo horjeeday.",
            "Qiyaastii kow iyo toban milyan oo qof ayaa Holocaust-ka lagu dilay.",
            "Lix milyan oo dadkaas ka mid ahaa waxay ahaayeen Yuhuud.",
            "Mid kasta oo iyaga ka mid ahaa magac iyo qoys ayuu lahaa.",
            "Guryo, shaqooyin, iskuullo iyo saaxiibo ayay lahaayeen intii Nazis-ku awoodda qaadan.",
            "Waxaan Holocaust-ka barannaa si dadkaas aan loo illoobin.",
            "Waxaan sidoo kale barannaa maxaa yeelay shil ma ahayn.",
            "Dad ayaa qorsheeyay, dad kalena waxay doorteen inay u ogolaadaan inuu dhaco.",
            "Taariikhyahannadu waxay weydiiyaan cidda ka qaybqaatay, cidda daawatay, iyo cidda caawisay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "вбивство мільйонів євреїв та людей з інших груп, організоване нацистською державою (Holocaust)",
            "умисне вбивство великої кількості людей з однієї групи з метою знищити цю групу (genocide)",
            "жорстоке і несправедливе ставлення до людей через їхню расу, релігію або політичні погляди (persecution)",
            "ворожість або упередження до євреїв (antisemitism)",
            "людина, якій злочин або чиїсь дії завдали шкоди, поранили її або вбили (victim)"
          ],
          "passage": [
            "Голокост відбувся в Європі перед Другою світовою війною і під час неї.",
            "Його організувала Нацистська партія Німеччини на чолі з Адольфом Гітлером.",
            "Мільйони євреїв було вбито через те, ким вони були.",
            "Ромів, людей з інвалідністю і геїв також зробили цілями.",
            "Так само зробили цілями політичних противників нацистів.",
            "У Голокості було вбито близько одинадцяти мільйонів людей.",
            "Шість мільйонів із цих людей були євреями.",
            "Кожна з них мала ім’я і родину.",
            "Вони мали домівки, роботу, школи і друзів, перш ніж нацисти прийшли до влади.",
            "Ми вивчаємо Голокост для того, щоб цих людей не забули.",
            "Ми також вивчаємо його тому, що він не був випадковістю.",
            "Люди це спланували, а інші люди обрали дозволити цьому статися.",
            "Історики питають, хто брав у цьому участь, хто дивився і хто допомагав."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "یہودی لوگوں اور دوسرے گروہوں کے لاکھوں افراد کا قتل، جو نازی ریاست نے منظم کیا (Holocaust)",
            "ایک گروہ کے بہت سے لوگوں کو جان بوجھ کر قتل کرنا، اس نیت سے کہ وہ گروہ ہی مٹا دیا جائے (genocide)",
            "لوگوں کے ساتھ ان کی نسل، مذہب یا سیاست کی وجہ سے ظالمانہ اور ناانصافی کا سلوک (persecution)",
            "یہودی لوگوں کے خلاف دشمنی یا تعصب (antisemitism)",
            "وہ شخص جسے کسی جرم یا کسی کے کاموں سے نقصان پہنچے، جو زخمی ہو یا قتل کر دیا جائے (victim)"
          ],
          "passage": [
            "ہولوکاسٹ (Holocaust) دوسری جنگِ عظیم سے پہلے اور اس کے دوران یورپ میں پیش آیا۔",
            "جرمنی کی Nazi Party نے، جس کے رہنما ایڈولف ہٹلر تھے، اسے منظم کیا۔",
            "لاکھوں یہودی لوگوں کو صرف اس وجہ سے قتل کیا گیا کہ وہ کون تھے۔",
            "روما لوگ، معذور افراد اور ہم جنس پسند لوگ بھی نشانہ بنائے گئے۔",
            "نازیوں کے سیاسی مخالف بھی۔",
            "ہولوکاسٹ میں تقریباً ایک کروڑ دس لاکھ لوگ مارے گئے۔",
            "ان میں سے ساٹھ لاکھ لوگ یہودی تھے۔",
            "ان میں سے ہر ایک کا ایک نام اور ایک خاندان تھا۔",
            "نازیوں کے اقتدار میں آنے سے پہلے ان کے گھر، کام، سکول اور دوست تھے۔",
            "ہم ہولوکاسٹ کا مطالعہ اس لیے کرتے ہیں کہ وہ لوگ بھلائے نہ جائیں۔",
            "ہم اس کا مطالعہ اس لیے بھی کرتے ہیں کہ یہ کوئی حادثہ نہ تھا۔",
            "لوگوں نے اس کا منصوبہ بنایا، اور دوسرے لوگوں نے اسے ہونے دینے کا فیصلہ کیا۔",
            "مؤرخ پوچھتے ہیں کہ کون شامل تھا، کون دیکھتا رہا، اور کس نے مدد کی۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What was the Holocaust?",
          paragraphs: [
            "The Holocaust was the organised murder of Europe's Jewish people by the Nazi state, in the years before and during the Second World War. Your lesson's definition is that millions of Jewish people were killed for who they were, and that it was the Nazi Party, under Adolf Hitler, that organised it. The war itself ran from 1939 to 1945, but the persecution that led to the killings began as soon as the Nazis took power, six years earlier.",
            "Jewish people were the main target, but they were not the only one. The Nazis also murdered Roma people and disabled people, and they arrested gay people, people with mental illness and political opponents and took away their rights; many of those people died as a result of how they were treated. It is estimated that eleven million people were killed in the Holocaust. Six million of them were Jewish, which is about two-thirds of all the Jewish people then living in Europe.",
            "Those numbers are so large that they can hide what they are made of. Behind every one of them is a person who had a home, a family, a job or a school place, and a future that was taken from them. Jewish people in Germany were also made to identify themselves in public by wearing a Star of David, so that nobody could forget who they were."
          ],
          tip: "When you write about this topic, lead with people. A figure is evidence of how many; it is never the whole answer."
        },
        {
          heading: "The words historians use",
          paragraphs: [
            "Genocide means the deliberate killing of a large number of people from one nation or ethnic group, meaning to destroy that nation or group. Persecution is the cruel and unfair treatment of people, especially because of their race, politics or religion. Persecution came first in Nazi Germany, and it was legal: it was written into the law.",
            "Antisemitism means hostility to or prejudice against Jewish people. Extermination means killing, especially of a whole group. A victim is a person who has been harmed, injured or killed by a crime or by someone's actions. You will need all of these words precisely, because the difference between them is the difference between stages of what happened.",
            "In this unit we write Jewish people and the Jewish community, rather than a single label that turns millions of different people into one thing. The Nazis used labels to make people seem less than human, and the words historians choose now refuse to do that. It is a small decision that tells your reader how carefully you are thinking."
          ],
          worked: {
            q: "A pupil writes: in 1935 the Nazis carried out genocide against Jewish people by passing the Nuremberg Laws. What is wrong with this sentence, and how would you correct it?",
            steps: [
              "Check the word against its meaning: genocide means killing a group in order to destroy it.",
              "Check what the Nuremberg Laws actually did: they removed citizenship and rights. Nobody was killed by the Act itself.",
              "So the word is wrong for 1935. The right word for unfair and cruel treatment under the law is persecution.",
              "Correct it, and keep the chain clear: in 1935 the Nazis increased their persecution of Jewish people by passing the Nuremberg Laws, which took away their citizenship."
            ],
            answer: "Genocide is the wrong word for a law that took away rights. The Nuremberg Laws were persecution; the genocide came later, and the two words mark different stages."
          },
          tip: "Persecution, then genocide. Using the right word in the right place is half of a good Year 9 answer."
        },
        {
          heading: "Why do we study the Holocaust?",
          paragraphs: [
            "Your lesson gives three reasons. First, because for the first and only time a state and those who worked with it set out to murder an entire people, using every resource it had. Second, because the Holocaust destroyed not only millions of individual human beings but also communities and cultures that had existed in Europe for centuries. Third, because studying what happened to those people, and studying their lives before they were victims, helps to make sure they are not forgotten.",
            "There is a fourth reason, which runs through the whole unit. The Holocaust did not arrive in one night. It came in steps: prejudice, then propaganda, then laws, then violence, then murder. Each step was taken by people who could have refused, and some did refuse. Studying the steps is how you learn to recognise them.",
            "Your lesson closes with a warning that is often repeated: people who do not study history may repeat it. That is why the work you do in this unit is treated differently from other topics. You are not only learning what happened; you are learning how it was allowed to happen."
          ],
          tip: "Learn the five steps as a staircase: prejudice, propaganda, laws, violence, murder. You will use them in the last chapter."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was the Holocaust?", options: ["The murder of millions of Jewish people, and of other groups, organised by the Nazi Party in Germany", "A battle fought between Germany and the Soviet Union during the Second World War", "A law passed in Germany that took away Jewish people's citizenship", "A district of a city where Jewish people were forced to live"], answer: 0, why: "The Holocaust was the organised murder of millions of Jewish people, and of other groups the Nazis targeted, before and during the Second World War.",
          feedback: [
            "",
            "The Holocaust was not a battle. It was the organised murder of civilians by their own government and the states it controlled, and it went on alongside the fighting rather than being part of it.",
            "That describes the Nuremberg Laws of 1935. Those laws were one step in the persecution; the Holocaust is the whole process, which ended in the murder of millions of people.",
            "That describes a ghetto. Ghettos were one stage in what happened, and you study them in chapter 4; the Holocaust is the whole of it."
          ] },
        { kind: "gap", q: "The deliberate killing of a large number of people from one nation or group, meaning to destroy that group, is called ___.", answer: "genocide", options: ["genocide", "persecution", "propaganda"], why: "Genocide is the word for an attempt to destroy a whole people. That is what makes the Holocaust a genocide and not only a persecution.",
          feedback: {
            "persecution": "Persecution is cruel and unfair treatment, such as the laws of 1933 and 1935. It came first, and it is a different stage. The word for trying to destroy a whole group is genocide.",
            "propaganda": "Propaganda is information spread to make people believe something. The Nazis used it to prepare the way, but the word for the attempt to destroy a whole group is genocide."
          } },
        { kind: "mcq", q: "As well as Jewish people, which groups did the Nazis persecute?", options: ["Roma people, disabled people, gay people and political opponents", "Only soldiers who refused to fight for Germany", "Only people who lived outside Germany", "Only members of the Nazi Party who had fallen out of favour"], answer: 0, why: "Your lesson is clear that the Nazis persecuted many groups: Roma people, disabled people, gay people, people with mental illness and political opponents, as well as Jewish people.",
          feedback: [
            "",
            "Soldiers who refused to fight were punished, but they are not the groups your lesson names. The Nazis targeted Roma people, disabled people, gay people and political opponents, as well as Jewish people.",
            "Persecution began inside Germany, against German citizens, and spread as Germany occupied other countries. It was never only aimed at people elsewhere.",
            "Nazis who fell out of favour were indeed arrested, but that is not what the Holocaust was. The groups your lesson names include Roma people, disabled people, gay people and political opponents."
          ] }
      ],
      modules: [
        {
          title: "The words and what they mean",
          task: {
            kind: "match",
            q: "Match each word to its meaning.",
            pairs: [
              ["Genocide", "The deliberate killing of a large number of people from one nation or group, meaning to destroy that group"],
              ["Persecution", "Cruel and unfair treatment of people, especially because of their race, politics or religion"],
              ["Antisemitism", "Hostility to or prejudice against Jewish people"],
              ["Victim", "A person who is harmed, injured or killed by a crime or by someone's actions"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the word you are surest of. Most people know that antisemitism is about Jewish people in particular.",
                "Two of the words are about how people are treated. Which of those two means killing, and which means unfair treatment?",
                "One word describes a person rather than an action. That is the one left over.",
                "Read each pair back as a sentence to check it makes sense."
              ],
              example: {
                q: "Match these words to their meanings: refugee, migrant. Choices: a person who moves to live in another country; a person forced to leave their country to escape danger.",
                steps: ["Look for the word that carries danger in its meaning: refugee.", "The other word is the broader one: migrant means moving to live somewhere else, for any reason."],
                answer: "Refugee: a person forced to leave their country to escape danger. Migrant: a person who moves to live in another country."
              }
            },
            core: { hint: "Two words are about treatment, one is about prejudice against one group, one names a person." },
            stretch: { extend: "Explain, in two sentences, why a historian would describe Germany in 1935 as a place of persecution but not yet of genocide." }
          },
          explain: "Say, in one sentence, the difference between persecution and genocide.",
          why: "Genocide is an attempt to destroy a whole group; persecution is cruel and unfair treatment; antisemitism is prejudice against Jewish people in particular; a victim is the person harmed. The words mark different stages of the same history."
        },
        {
          title: "Perpetrator, or not?",
          task: {
            kind: "mcq",
            q: "A council office worker typed the lists of names of people who were to be deported. Which role is this?",
            options: ["Perpetrator: a person who took part in what was done", "Bystander: a person who stood by and let it happen", "Rescuer: a person who did something to help", "Victim: a person harmed by what was done"],
            answer: 0,
            why: "The lists were part of the machinery. Making them was taking part, even though the work was done at a desk and the clerk never left the office.",
            feedback: [
              "",
              "A bystander knows and does nothing. This clerk did something: without the lists the deportations could not have been organised. Doing the paperwork is taking part.",
              "A rescuer acts to help the people being persecuted. Typing the lists did the opposite, whatever the clerk felt about it.",
              "The victims here are the people on the list. The clerk was safe, in an office, and chose to do the work."
            ]
          },
          contexts: [
            { label: "A camp guard", q: "A man took a job as a guard at Auschwitz and worked there for two years. Which role is this?", why: "Guarding the camp kept the system running, so this is a perpetrator: a person who took part in what was done." },
            { label: "Reporting a family", q: "A woman found a Jewish family hiding in her attic and reported them to the Nazis. Which role is this?", why: "Reporting the family handed them over, so this is a perpetrator. The same discovery could have led to a different choice." },
            { label: "An engineer", q: "An engineer designed buildings for the camps where people were murdered, working from plans in an office. Which role is this?", why: "Designing the buildings made the murders possible, so this is a perpetrator, even though the engineer was far away from the camps." }
          ],
          levels: {
            support: {
              steps: [
                "Ask first: was this person harmed by the Nazis, or not? If not, they are not the victim.",
                "Ask next: did they do something, or only know about it? Doing something points to perpetrator or rescuer.",
                "Ask last: did what they did help the Nazis, or help the people being persecuted?",
                "Paperwork counts as doing something. A list is a tool."
              ],
              example: {
                q: "A railway clerk sold the tickets for a train that carried people to a camp. Which role is this?",
                steps: ["The clerk was not harmed, so not a victim.", "The clerk did something: the train could not run without tickets and timetables.", "What they did helped the Nazis, not the people on the train."],
                answer: "A perpetrator, because the work was part of making the deportation happen."
              }
            },
            core: { hint: "Ask whether the person did something, and who that something helped." },
            stretch: { extend: "Explain why historians argue about where the line falls between a perpetrator and a bystander, and give one example from the list that is hard to place." }
          },
          explain: "Say, in one sentence, why doing the paperwork counts as taking part.",
          why: "A perpetrator takes part in what is done. Work at a desk, in a uniform or at a drawing board all kept the system running; in each case a person could have refused, and that is why historians call it a choice."
        },
        {
          title: "Why we study the Holocaust",
          task: {
            kind: "written",
            q: "Explain why we study the Holocaust. Give at least two reasons from the chapter and explain each one. Write one paragraph of four to six sentences.",
            criteria: [
              "I give at least two reasons for studying the Holocaust and explain each one, rather than listing them.",
              "I use the word genocide, or the word persecution, correctly.",
              "I say something about the people who were murdered, and not only about the numbers.",
              "I finish with a sentence about what studying this history is meant to help us notice."
            ],
            model: "We study the Holocaust for several connected reasons. One reason is that for the first and only time a state and those who worked with it set out to murder a whole people, using every resource it had, which is what makes the Holocaust a genocide rather than only a persecution. A second reason is that it destroyed communities and cultures that had lived in Europe for centuries, so what was lost was not only millions of individual lives but whole ways of living. Studying the people as they were before, with their homes, schools, shops and music, helps to make sure they are remembered as people and not only as a figure in a textbook. A third reason is that the Holocaust happened in steps, from prejudice to propaganda to laws to violence, and each step was chosen by someone. Studying those steps is how we learn to recognise them if they begin again."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: We study the Holocaust for several reasons.",
                "Sentences 2 and 3: One reason is... and explain it in your own words.",
                "Sentences 4 and 5: A second reason is... and explain that one too.",
                "Last sentence: say what studying this history is meant to help us notice."
              ],
              example: {
                q: "Explain why we study the First World War. Give two reasons and explain each one.",
                steps: ["Reason one: it changed the map of Europe, so it explains the borders and treaties that came next.", "Reason two: it changed how countries think about the cost of war, which still shapes decisions today.", "Finish with what the study is for: understanding how a crisis turned into a world war."],
                answer: "Two reasons, each explained in a sentence, then a closing line about what the study is for."
              }
            },
            core: { hint: "Two reasons, each explained in your own words. Keep the people in view, then finish with what we are meant to notice." },
            stretch: { extend: "Your lesson says the Holocaust was unique. Explain what historians mean by that, and why calling it unique does not mean other genocides matter less." }
          },
          explain: "Say, in one sentence, which reason for studying the Holocaust you find the strongest, and why.",
          why: "The three reasons in your lesson are the uniqueness of a state setting out to murder an entire people, the destruction of communities and cultures, and the duty to remember the people themselves. The strongest answers add the fourth: the Holocaust came in steps that were chosen."
        }
      ]
    },

    /* ───────────── 2 · life before, and the long history of antisemitism ───────────── */
    {
      key: "life-before", n: 2, title: "Jewish life in Europe before the Nazis, and where antisemitism came from",
      lead: "The communities that existed across Europe before 1933, the long history of antisemitism that came before the Nazi Party, and how Germany's crisis after the First World War gave Hitler his chance.",
      covers: [2],
      pretext: {
        words: [
          { word: "community", means: "a group of people who live in the same place and share a way of life", sentence: "Jewish communities had been part of European towns and cities for centuries." },
          { word: "antisemitism", means: "hostility to or prejudice against Jewish people", sentence: "Antisemitism in Europe was far older than the Nazi Party." },
          { word: "expelled", means: "forced to leave a country, with no right to return", sentence: "In 1290 every Jewish person in England was expelled by the king." },
          { word: "reparations", means: "money a defeated country is made to pay for the damage of a war", sentence: "Germany had to pay reparations after losing the First World War." },
          { word: "persecution", means: "cruel and unfair treatment of people because of their race, religion or politics", sentence: "Persecution of Jewish people in Europe went back many hundreds of years." }
        ],
        passage: [
          "Jewish communities had lived in Europe for hundreds of years.",
          "In 1933 there were Jewish families in every country in Europe.",
          "The largest communities were in Eastern Europe, especially in Poland.",
          "In Western Europe the communities were smaller.",
          "Some families were strictly religious and some were not religious at all.",
          "They were shopkeepers, doctors, teachers, musicians and farmers.",
          "Anita Lasker-Wallfisch grew up in Germany in the 1930s.",
          "She later described her earliest memory of antisemitism.",
          "Ruth Winkelmann was a schoolgirl who was ten years old in 1938.",
          "Antisemitism in Europe was much older than the Nazi Party.",
          "Jewish people had been taxed, expelled and blamed for centuries.",
          "Then Germany lost the First World War and was left in crisis.",
          "Hitler blamed Jewish people for that crisis, and many Germans agreed with him."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "جماعة من الناس يعيشون في مكان واحد ويتشاركون طريقة حياة (community)",
            "العداء للناس اليهود أو التحامل عليهم (antisemitism)",
            "أُرغموا على مغادرة بلد، بلا حقّ في العودة (expelled)",
            "مال يُرغَم البلد المهزوم على دفعه عن أضرار حرب (reparations)",
            "معاملة الناس معاملةً قاسية غير عادلة بسبب عِرقهم أو دينهم أو سياستهم (persecution)"
          ],
          "passage": [
            "كانت الجماعات اليهودية قد عاشت في أوروبا مئات السنين.",
            "وفي 1933 كانت هناك أسر يهودية في كلّ بلد في أوروبا.",
            "وكانت أكبر الجماعات في شرق أوروبا، وخاصّةً في بولندا.",
            "وفي غرب أوروبا كانت الجماعات أصغر.",
            "وبعض الأسر كان متديّنًا تديّنًا صارمًا، وبعضها لم يكن متديّنًا أبدًا.",
            "وكانوا أصحاب متاجر وأطبّاء ومعلّمين وموسيقيّين ومزارعين.",
            "ونشأت أنيتا لاسكر-فالفيش (Anita Lasker-Wallfisch) في ألمانيا في سنوات 1930.",
            "وقد وصفت بعد ذلك أوّل ما تذكره من العداء لليهود.",
            "وكانت روت فينكلمان (Ruth Winkelmann) تلميذة عمرها عشر سنوات في 1938.",
            "والعداء لليهود في أوروبا كان أقدم كثيرًا من الحزب النازي.",
            "فقد فُرضت على الناس اليهود ضرائب وأُخرجوا من بلدان ولُوموا قرونًا.",
            "ثم خسرت ألمانيا الحرب العالمية الأولى وبقيت في أزمة.",
            "فلام هتلر الناس اليهود على تلك الأزمة، ووافقه كثير من الألمان."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "grupa ludzi, którzy mieszkają w tym samym miejscu i mają wspólny sposób życia (community)",
            "wrogość wobec Żydów albo uprzedzenie do nich (antisemitism)",
            "zmuszony do opuszczenia kraju, bez prawa powrotu (expelled)",
            "pieniądze, które przegrany kraj musi zapłacić za szkody wojenne (reparations)",
            "okrutne i niesprawiedliwe traktowanie ludzi z powodu ich pochodzenia, religii albo poglądów politycznych (persecution)"
          ],
          "passage": [
            "Społeczności żydowskie żyły w Europie od setek lat.",
            "W 1933 roku rodziny żydowskie były w każdym kraju Europy.",
            "Największe społeczności były w Europie Wschodniej, szczególnie w Polsce.",
            "W Europie Zachodniej społeczności były mniejsze.",
            "Część rodzin była głęboko religijna, a część nie była religijna wcale.",
            "Byli sklepikarzami, lekarzami, nauczycielami, muzykami i rolnikami.",
            "Anita Lasker-Wallfisch wyrosła w Niemczech w latach trzydziestych XX wieku (the 1930s).",
            "Opisała później swoje najwcześniejsze wspomnienie antysemityzmu.",
            "Ruth Winkelmann była uczennicą, która w 1938 roku miała dziesięć lat.",
            "Antysemityzm w Europie był o wiele starszy niż partia nazistowska.",
            "Żydów od wieków obciążano podatkami, wypędzano i obwiniano.",
            "Potem Niemcy przegrały pierwszą wojnę światową i znalazły się w kryzysie.",
            "Hitler obwinił za ten kryzys Żydów, a wielu Niemców się z nim zgadzało."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um grupo de pessoas que vivem no mesmo lugar e partilham/compartilham um modo de vida (community, comunidade)",
            "hostilidade ou preconceito contra as pessoas judias (antisemitism, antissemitismo)",
            "obrigado a deixar um país, sem direito a voltar (expelled, expulso)",
            "dinheiro que um país derrotado é obrigado a pagar pelos danos de uma guerra (reparations, reparações)",
            "tratamento cruel e injusto de pessoas por causa da sua raça, religião ou política (persecution, perseguição)"
          ],
          "passage": [
            "As comunidades judias viviam na Europa havia centenas de anos.",
            "Em 1933 havia famílias judias em todos os países da Europa.",
            "As maiores comunidades estavam na Europa de Leste, sobretudo na Polónia/Polônia.",
            "Na Europa Ocidental as comunidades eram mais pequenas.",
            "Havia famílias muito religiosas e famílias que não eram religiosas de modo nenhum.",
            "Eram comerciantes, médicos, professores, músicos e agricultores.",
            "Anita Lasker-Wallfisch cresceu na Alemanha nos anos 1930.",
            "Mais tarde descreveu a sua primeira lembrança do antissemitismo.",
            "Ruth Winkelmann era uma aluna que tinha dez anos em 1938.",
            "O antissemitismo na Europa era muito mais antigo do que o Partido Nazi/Nazista.",
            "As pessoas judias tinham sido taxadas, expulsas e culpadas durante séculos.",
            "Depois a Alemanha perdeu a Primeira Guerra Mundial e ficou em crise.",
            "Hitler culpou as pessoas judias por essa crise, e muitos alemães concordaram com ele."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "koox dad ah oo isku meel ku nool oo habnololeed wadaagta",
            "nacayb ama cadho ka dhan ah dadka Yuhuudda ah",
            "lagu qasbay inay dal ka baxaan, iyagoo aan xaq u lahayn inay ku soo noqdaan",
            "lacag dal laga adkaaday lagu qasbo inuu bixiyo waxyeellada dagaalka",
            "dad si naxariis-darro iyo caddaalad-darro ah loola dhaqmo jinsiyaddooda, diintooda ama siyaasaddooda dartii"
          ],
          "passage": [
            "Bulshooyinka Yuhuudda waxay Yurub ku noolaayeen boqollaal sano.",
            "1933-kii waxaa jiray qoysas Yuhuud ah oo dal kasta oo Yurub ku yaalla.",
            "Bulshooyinka ugu waaweynaa waxay joogeen bariga Yurub, gaar ahaan Poland.",
            "Galbeedka Yurub bulshooyinku way ka yaryaraayeen.",
            "Qoysas qaar aad ayay u diineed ahaayeen, qaarna diin gebi ahaanba ma lahayn.",
            "Waxay ahaayeen dukaanleyda, dhakhaatiirta, macallimiinta, fannaaniinta iyo beeraleyda.",
            "Anita Lasker-Wallfisch waxay Jarmalka ku kortay 1930-meeyadii.",
            "Waxay kadib sharraxday xusuustii ugu horreysay ee nacaybka Yuhuudda.",
            "Ruth Winkelmann waxay ahayd gabadh dugsi oo toban jir ahayd 1938-kii.",
            "Nacaybka Yuhuudda ee Yurub wuxuu Xisbiga Nazi aad uga duqoobaa.",
            "Dadka Yuhuudda waxaa qarniyo badan canshuur lagu saaray, dalalka laga saaray oo lagu eedeeyay.",
            "Kadibna Jarmalku wuxuu lumiyay Dagaalkii Koowaad ee Adduunka oo xaalad adag ayuu ku hadhay.",
            "Hitler wuxuu dadka Yuhuudda ku eedeeyay xaaladdaas, Jarmal badanna way ku raaceen."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "група людей, які живуть в одному місці і мають спільний спосіб життя (community)",
            "ворожість або упередження до євреїв (antisemitism)",
            "той, кого змусили покинути країну без права повернутися (expelled)",
            "гроші, які переможену країну змушують платити за шкоду від війни (reparations)",
            "жорстоке і несправедливе ставлення до людей через їхню расу, релігію або політичні погляди (persecution)"
          ],
          "passage": [
            "Єврейські громади жили в Європі сотні років.",
            "У 1933 році єврейські родини були в кожній країні Європи.",
            "Найбільші громади були у Східній Європі, особливо в Польщі.",
            "У Західній Європі громади були меншими.",
            "Деякі родини були строго релігійними, а деякі не були релігійними зовсім.",
            "Вони були крамарями, лікарями, учителями, музикантами й землеробами.",
            "Аніта Ласкер-Вальфіш (Anita Lasker-Wallfisch) виросла в Німеччині у 1930-х роках.",
            "Пізніше вона описала свій найраніший спогад про антисемітизм.",
            "Рут Вінкельман (Ruth Winkelmann) була школяркою, якій у 1938 році було десять років.",
            "Антисемітизм у Європі був значно давнішим за Нацистську партію.",
            "Євреїв століттями обкладали податками, виганяли і звинувачували.",
            "Потім Німеччина втратила Першу світову війну і залишилася в кризі.",
            "Гітлер звинувачував у цій кризі євреїв, і багато німців із ним погоджувалися."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "لوگوں کا وہ گروہ جو ایک ہی جگہ رہتا ہو اور ایک جیسا طرزِ زندگی رکھتا ہو (community)",
            "یہودی لوگوں کے خلاف دشمنی یا تعصب (antisemitism)",
            "کسی ملک سے زبردستی نکال دیا جانا، واپسی کے حق کے بغیر (expelled)",
            "وہ رقم جو ہارنے والے ملک سے جنگ کے نقصان کے بدلے وصول کی جائے (reparations)",
            "لوگوں کے ساتھ ان کی نسل، مذہب یا سیاست کی وجہ سے ظالمانہ اور ناانصافی کا سلوک (persecution)"
          ],
          "passage": [
            "یہودی برادریاں سینکڑوں سال سے یورپ میں رہ رہی تھیں۔",
            "1933 میں یورپ کے ہر ملک میں یہودی خاندان موجود تھے۔",
            "سب سے بڑی برادریاں مشرقی یورپ میں تھیں، خاص کر پولینڈ میں۔",
            "مغربی یورپ میں یہ برادریاں چھوٹی تھیں۔",
            "کچھ خاندان سخت مذہبی تھے اور کچھ بالکل مذہبی نہ تھے۔",
            "وہ دکان دار، ڈاکٹر، اساتذہ، موسیقار اور کسان تھے۔",
            "انیتا لاسکر-وال فش (Anita Lasker-Wallfisch) 1930 کی دہائی میں جرمنی میں پلی بڑھیں۔",
            "انھوں نے بعد میں بتایا کہ انھیں antisemitism کی سب سے پہلی یاد کیا تھی۔",
            "روتھ ونکل مان (Ruth Winkelmann) ایک سکول کی طالبہ تھیں، جو 1938 میں دس سال کی تھیں۔",
            "یورپ میں antisemitism، Nazi Party سے بہت پرانی تھی۔",
            "یہودی لوگوں پر صدیوں سے ٹیکس لگائے گئے، انھیں نکالا گیا اور ان پر الزام دھرے گئے۔",
            "پھر جرمنی پہلی جنگِ عظیم ہار گیا اور بحران میں پھنس گیا۔",
            "ہٹلر نے اس بحران کا الزام یہودی لوگوں پر ڈالا، اور بہت سے جرمن اس سے متفق ہو گئے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Jewish life in Europe before 1933",
          paragraphs: [
            "Before the Nazis came to power there were Jewish communities in every country in Europe, and many of them were centuries old. Your lesson asks you to find the Jewish population of each European country on the map and to read the profile of a real person from each one. The point of that task is simple: these were ordinary lives, lived in particular places, not a single group with a single story.",
            "The communities were also very different from one another. In Eastern Europe, especially Poland, the Jewish population was large, and religious practice was often strict and visible in daily life. In Western Europe the communities were smaller and many families were much less religious, or not religious at all. People were shopkeepers, doctors, teachers, musicians, factory workers and farmers.",
            "Two of the people you meet later in this unit were children in this world. Anita Lasker-Wallfisch grew up in Germany in the 1930s and has described her earliest memory of antisemitism, which came to her as a child, in an ordinary week. Ruth Winkelmann was a schoolgirl who was ten years old in 1938. Keep both of them in mind: this chapter is about what was taken, so it has to begin with what was there."
          ],
          tip: "If a question asks about pre-war Jewish life, give variety: different countries, different levels of religious belief, different jobs. That variety is the point."
        },
        {
          heading: "Antisemitism was not invented by the Nazis",
          paragraphs: [
            "Antisemitism means hostility to or prejudice against Jewish people, and your lesson shows that it ran through European history long before 1933. In 66 AD Roman rulers persecuted Jewish people and expelled them from areas they controlled, in arguments over race, territory and power. By 313 AD some early Christian writers were blaming Jewish people as a whole for the death of Jesus, who was himself Jewish, and a slur was used to stir up violence against them.",
            "In England it became official policy. In the 1280s King Edward I taxed Jewish moneylenders to pay for his wars, had them arrested when they could no longer pay, made them wear a yellow patch, restricted where they could go and executed the heads of families. In 1290 he expelled every Jewish person from the country. Between 1348 and 1350, when the Black Death killed millions, Jewish people across Europe were accused of causing the deaths by magic or poison. In 1543 Martin Luther, a leading figure of the Reformation, published a pamphlet urging the persecution of Jewish people.",
            "Two things follow from this list, and good answers say both. First, the ideas the Nazis used were old and widely known, which is part of why they spread so quickly. Second, that does not make what followed inevitable. Antisemitism had risen and fallen for centuries without becoming genocide; it took a government that chose to build its politics on it, and a population that largely chose to go along, to turn prejudice into mass murder."
          ],
          worked: {
            q: "Explain one way in which the persecution of Jewish people stayed the same between the 1280s and the 1930s, and one way in which it changed.",
            steps: [
              "Choose your continuity: in both periods Jewish people were marked out in public. Edward I made people wear a yellow patch; the Nazis made people wear a Star of David.",
              "Explain why that counts as continuity: in both cases the state used a visible sign so that everyone could see who was Jewish.",
              "Choose your change: Edward I expelled Jewish people from England, while the Nazis set out to murder them.",
              "Explain the scale of the change: expulsion is the loss of a home and a country; genocide is the attempt to destroy a whole people. Name both, and say which is the greater change."
            ],
            answer: "Continuity: both states forced Jewish people to wear a visible sign. Change: the aim moved from expelling people to murdering them, which is the difference between persecution and genocide."
          },
          tip: "Change and continuity questions want both halves. One sentence on what stayed the same, one on what changed, each with a specific example."
        },
        {
          heading: "Germany's crisis, and Hitler's chance",
          paragraphs: [
            "Germany lost the First World War, and the Treaty of Versailles that followed left the country in an economic and social mess. Germany had to give up land and all its overseas colonies, cut its army to 100,000 soldiers, accept the guilt for the war and pay reparations. Your lesson gives the figure as 6.6 billion pounds. Photographs from the years that followed show shelters for homeless men, women queuing for meat rations and children being given a school meal.",
            "Your lesson dates Hitler's leadership of the Nazi Party to 1925. The Party offered what many Germans wanted to hear: tear up the Treaty, better pensions and more jobs, support for small businesses and landowners, a bigger army, and the claim that the German race was the best and most important in the world. Alongside all of that, Hitler blamed Jewish people for Germany's suffering after the war. Many Germans saw how much he hated Jewish people and gradually came to agree with him. By 1934 he had the power of a dictator and was declared Führer of Germany.",
            "Notice the shape of this. A real crisis gave the Nazis their opening, and an old prejudice gave them a target. Neither of those on its own made the Holocaust happen. What turned them into persecution was a series of decisions: by Hitler, by the Party, by officials who wrote the laws, and by millions of people who decided it was easier to agree than to object."
          ],
          tip: "When you explain why antisemitism grew in Germany, give the crisis AND the choice. A crisis explains the opportunity; it never excuses the decision."
        }
      ],
      gate: [
        { kind: "gap", q: "Hostility to or prejudice against Jewish people is called ___.", answer: "antisemitism", options: ["antisemitism", "persecution", "reparations"], why: "Antisemitism is prejudice against Jewish people in particular. It is the idea the Nazis built their politics on.",
          feedback: {
            "persecution": "Persecution is cruel and unfair treatment of any group, for any reason. The word for prejudice against Jewish people in particular is antisemitism.",
            "reparations": "Reparations are the payments Germany was made to hand over after losing the First World War. The word for prejudice against Jewish people is antisemitism."
          } },
        { kind: "mcq", q: "What did the Treaty of Versailles require Germany to do after the First World War?", options: ["Give up land, cut its army, accept guilt for the war and pay reparations", "Hand its government over to Britain and France", "Join the Soviet Union", "Pay nothing, because the war had ended in a draw"], answer: 0, why: "The Treaty took land and colonies, cut the army to 100,000 soldiers, made Germany accept the guilt for the war and demanded reparations. That is the crisis the Nazis used.",
          feedback: [
            "",
            "Germany kept its own government after the war; what it lost was land, colonies, its army and a great deal of money. No foreign country took over its government.",
            "Germany did not join the Soviet Union. In fact Hitler later invaded it, in 1941. The Treaty took land, cut the army and demanded reparations.",
            "Germany had lost the war, and the Treaty was written by the winners. It demanded reparations, which your lesson gives as 6.6 billion pounds."
          ] },
        { kind: "mcq", q: "Which statement about antisemitism in Europe is correct?", options: ["Jewish people had been persecuted in Europe for centuries before the Nazi Party existed", "Antisemitism began with the Nazi Party in 1925", "Antisemitism existed only in Germany", "No Jewish people had ever lived in England before the twentieth century"], answer: 0, why: "Your lesson traces antisemitism back through 66 AD, 313 AD, the 1280s, the Black Death years and 1543. The Nazis used an old prejudice; they did not invent it.",
          feedback: [
            "",
            "1925 is when Hitler became leader of the Nazi Party, not when antisemitism began. Your lesson gives examples that are more than eighteen centuries older than that.",
            "Your lesson's examples come from the Roman empire, early Christian Europe, medieval England, the Black Death across Europe and Reformation Germany. Antisemitism was a European problem, not only a German one.",
            "Jewish communities lived in England for centuries before Edward I expelled them in 1290, and Jewish people lived in England again long before the twentieth century."
          ] }
      ],
      modules: [
        {
          title: "The long history, in order",
          task: {
            kind: "order",
            q: "Put these examples of antisemitism in Europe into chronological order.",
            items: [
              "Roman rulers persecute Jewish people and expel them from areas they control (66 AD)",
              "Early Christian writers blame Jewish people as a whole for the death of Jesus (313 AD)",
              "Edward I expels every Jewish person from England (1290)",
              "Jewish people are blamed for the deaths caused by the Black Death (1348)",
              "Martin Luther publishes a pamphlet urging the persecution of Jewish people (1543)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Every item has a date in brackets. Read all five dates before you move anything.",
                "Two dates are given as AD and are much smaller numbers: those two come first.",
                "Then put the four-figure dates in order, smallest first.",
                "Check the story reads sensibly: Roman empire, early Christian Europe, medieval England, the Black Death, then the Reformation."
              ],
              example: {
                q: "Put these in chronological order: the Great Fire of London (1666), the Norman Conquest (1066), the first railway line (1825).",
                steps: ["Read the three dates first.", "1066 is the smallest, so the Conquest comes first.", "Then 1666, then 1825."],
                answer: "The Norman Conquest; the Great Fire of London; the first railway line."
              }
            },
            core: { hint: "Smallest date first. The two AD dates are the earliest of all." },
            stretch: { extend: "Choose two of these five examples and explain what they have in common. Then explain one important difference between them." }
          },
          explain: "Say, in one sentence, what this list shows about the ideas the Nazis used.",
          why: "66 AD, 313 AD, 1290, 1348 and 1543. The order matters because it shows that antisemitism was old and familiar across Europe, which is part of why Nazi propaganda spread so fast."
        },
        {
          title: "Why did so many Germans agree?",
          task: {
            kind: "written",
            q: "Explain how Hitler and the Nazi Party used antisemitism to win support in Germany after the First World War. Write one paragraph of five to seven sentences.",
            criteria: [
              "I explain the crisis Germany was in after the First World War, using at least one detail from the Treaty of Versailles.",
              "I explain what the Nazi Party promised people, giving at least two of its promises.",
              "I explain how Hitler used antisemitism, and say who he blamed for the crisis.",
              "I make clear that Germans chose to agree with him, rather than writing as though they had no choice.",
              "I use at least one date correctly, such as 1925 or 1934."
            ],
            model: "After the First World War, Germany was in a deep economic and social crisis. The Treaty of Versailles had taken its land and colonies, cut its army to 100,000 soldiers, made it accept guilt for the war and demanded enormous reparations, and photographs from those years show homeless shelters and women queuing for rations. When Hitler became leader of the Nazi Party in 1925, the Party promised to tear up the Treaty, to bring back jobs and pensions and to rebuild the army, which answered exactly what many Germans were angry and frightened about. Alongside those promises, Hitler blamed Jewish people for Germany's suffering, and claimed that the German race was the best in the world. This gave people a target for their anger and a reason to feel proud again, so support for the Party grew. It is important to say that Germans chose to accept this: many people saw how much Hitler hated Jewish people and gradually agreed with him, and by 1934 he had the power of a dictator."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: After the First World War, Germany was in crisis.",
                "Sentence 2: give one or two details of the Treaty of Versailles.",
                "Sentences 3 and 4: name two Nazi promises, then say who Hitler blamed.",
                "Last sentence: say that Germans chose to agree, and give a date."
              ],
              example: {
                q: "Explain how a political party might win support during a shortage of housing. Use the same structure: crisis, promise, target, choice.",
                steps: ["Crisis: there are not enough homes and rents are high.", "Promise: the party promises to build a hundred thousand houses.", "Target: it blames one group of people for the shortage.", "Choice: voters decide whether to accept the blame or to question it."],
                answer: "Crisis, then promise, then the group being blamed, then the decision voters make. The same four steps, with no Holocaust content."
              }
            },
            core: { hint: "Crisis, promises, blame, choice. Four moves, in that order, with one date." },
            stretch: { extend: "Explain why historians are careful to say that the crisis gave the Nazis an opportunity rather than that the crisis caused the Holocaust." }
          },
          explain: "Say, in one sentence, why the crisis after the war is not on its own an explanation.",
          why: "A strong answer joins three things: a real crisis caused by the Treaty, promises that answered what people wanted, and an old prejudice given a new use. The best answers add that agreeing with it was a decision people made."
        },
        {
          title: "Why study the lives before?",
          task: {
            kind: "mcq",
            q: "Why does your lesson spend a whole task on Jewish life in Europe before 1933?",
            options: [
              "Because the people who were murdered had homes, jobs and families, and should be remembered as people and not only as victims",
              "Because the Jewish communities of Europe were very small and easy to describe",
              "Because it shows that what happened next could not have been prevented",
              "Because pre-war life is more interesting than the rest of the unit"
            ],
            answer: 0,
            why: "Your lesson's objective is to re-humanise the victims of the Holocaust. Studying the lives before is how a figure in a textbook becomes a person again.",
            feedback: [
              "",
              "The opposite is true: the communities were large and extremely varied, from strictly religious towns in Poland to families in Western Europe who were not religious at all. That variety is part of the point.",
              "Nothing about the Holocaust was inevitable. It happened because people made decisions, step by step, and some people refused. Saying it could not have been prevented hides the choices that were made.",
              "This is not about which part is interesting. The task has a purpose: to make sure the people are remembered as people, which your lesson calls re-humanising the victims."
            ]
          },
          levels: {
            support: {
              steps: [
                "Look at your lesson's objective: to re-humanise the victims of the Holocaust.",
                "Ask what the word re-humanise means: to see people as people again.",
                "Now check each option: which one is about seeing people as people?",
                "Cross out any option that suggests what happened was unavoidable, because the whole unit shows the decisions that were taken."
              ],
              example: {
                q: "A museum about a mining disaster begins with photographs of the miners at home with their families. Why does it start there?",
                steps: ["The photographs are not about the disaster itself.", "They make the visitor see the men as people with families before anything happens to them.", "So the purpose is to make sure they are remembered as people."],
                answer: "So that visitors see the miners as people first, rather than only as a list of the dead."
              }
            },
            core: { hint: "Look for the option that matches your lesson's own objective: re-humanising the victims." },
            stretch: { extend: "Explain why a historian would say that teaching only the figures of the Holocaust, and never the lives before it, would be a kind of failure." }
          },
          explain: "Say, in one sentence, what the word re-humanise means in your lesson's objective.",
          why: "The lives before matter because they are what was destroyed. A figure tells you how many; a profile, a photograph or a name tells you who, and your lesson sets out to do both."
        }
      ]
    },

    /* ───────────── 3 · persecution 1933-1939 and Kristallnacht ───────────── */
    {
      key: "persecution-kristallnacht", n: 3, title: "Persecution in three waves, and Kristallnacht",
      lead: "How the Nazis took Jewish people's rights away step by step between 1933 and 1939, what happened on the Night of Broken Glass, and why the attacks were organised rather than spontaneous.",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "boycott", means: "deliberately not doing something, such as not buying from a shop, to try to force a change", sentence: "The Nazis organised a boycott of Jewish-owned shops in April 1933." },
          { word: "citizenship", means: "belonging to a country in law, with the rights that go with it", sentence: "The Nuremberg Laws took German citizenship away from Jewish people." },
          { word: "synagogue", means: "a building where Jewish people meet to pray and to learn", sentence: "Synagogues were burned down during Kristallnacht." },
          { word: "propaganda", means: "information spread to make people believe something, whether or not it is true", sentence: "Nazi propaganda was designed to turn Germans against their Jewish neighbours." },
          { word: "turning point", means: "a moment when things change direction and do not go back", sentence: "Historians call Kristallnacht a turning point in the persecution." }
        ],
        passage: [
          "The Nazis took Jewish people's rights away in three waves.",
          "The first wave began in April 1933 with a boycott of Jewish-owned shops.",
          "Men from the SA stood outside the shops to make sure nobody went in.",
          "The first antisemitic laws were passed in the same year.",
          "The second wave began in 1935 with violence and the Nuremberg Laws.",
          "Those laws took away Jewish people's German citizenship.",
          "The third wave began in 1938 and ended in Kristallnacht.",
          "Kristallnacht means the Night of Broken Glass.",
          "On 9 and 10 November 1938 Jewish homes, shops and synagogues were attacked.",
          "More than 90 Jewish people were killed in those two nights.",
          "Thousands of Jewish men were arrested and sent to concentration camps.",
          "By 1939 Jewish people in Germany could not go to school or drive a car.",
          "Each of these steps was a decision taken by people in power."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن تمتنع عن شيء عن قصد، كأن لا تشتري من متجر، لتحاول إحداث تغيير (boycott)",
            "الانتماء إلى بلد في القانون، ومعه الحقوق التي تتبع ذلك (citizenship)",
            "بناء يجتمع فيه الناس اليهود للصلاة والتعلّم (synagogue)",
            "معلومات تُنشر لتجعل الناس يعتقدون شيئًا، صحيحًا كان أو غير صحيح (propaganda)",
            "لحظة تتغيّر فيها الأمور اتّجاهها ولا تعود (turning point)"
          ],
          "passage": [
            "أخذ النازيون حقوق الناس اليهود في ثلاث موجات.",
            "وبدأت الموجة الأولى في أبريل 1933 بمقاطعة المتاجر التي يملكها يهود.",
            "ووقف رجال من الإس آ (SA) خارج المتاجر ليتأكّدوا أنّ أحدًا لا يدخلها.",
            "وأُقرّت أوّل القوانين المعادية لليهود في السنة نفسها.",
            "وبدأت الموجة الثانية في 1935 بالعنف وبقوانين نورمبرغ.",
            "وتلك القوانين أخذت من الناس اليهود جنسيّتهم الألمانية.",
            "وبدأت الموجة الثالثة في 1938 وانتهت بكريستالناخت (Kristallnacht).",
            "وكريستالناخت تعني ليلة الزجاج المكسور.",
            "وفي 9 و10 نوفمبر 1938 هُجم على بيوت اليهود ومتاجرهم وكُنُسهم.",
            "وقُتل أكثر من 90 شخصًا من اليهود في تلك الليلتين.",
            "واعتُقل آلاف من الرجال اليهود وأُرسلوا إلى معسكرات الاعتقال.",
            "وبحلول 1939 لم يكن الناس اليهود في ألمانيا يستطيعون أن يذهبوا إلى المدرسة أو أن يقودوا سيّارة.",
            "وكلّ خطوة من هذه الخطوات كانت قرارًا اتّخذه أصحاب السلطة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "celowe niezrobienie czegoś, na przykład niekupowanie w jakimś sklepie, żeby wymusić zmianę (boycott)",
            "przynależność do kraju w świetle prawa, wraz z prawami, które z niej wynikają (citizenship)",
            "budynek, w którym Żydzi spotykają się, żeby się modlić i uczyć (synagogue)",
            "informacje rozpowszechniane, żeby ludzie w coś uwierzyli, niezależnie od tego, czy to prawda (propaganda)",
            "chwila, w której sprawy zmieniają kierunek i już nie wracają (turning point)"
          ],
          "passage": [
            "Naziści odbierali Żydom prawa w trzech falach.",
            "Pierwsza fala zaczęła się w kwietniu 1933 roku bojkotem sklepów należących do Żydów.",
            "Ludzie z SA stali przed sklepami, żeby dopilnować, by nikt nie wszedł.",
            "Pierwsze ustawy antysemickie uchwalono w tym samym roku.",
            "Druga fala zaczęła się w 1935 roku przemocą i ustawami norymberskimi.",
            "Te ustawy odebrały Żydom niemieckie obywatelstwo.",
            "Trzecia fala zaczęła się w 1938 roku i skończyła się Kristallnacht.",
            "Kristallnacht znaczy noc rozbitego szkła.",
            "9 i 10 listopada 1938 roku zaatakowano żydowskie domy, sklepy i synagogi.",
            "W ciągu tych dwóch nocy zabito ponad 90 Żydów.",
            "Tysiące żydowskich mężczyzn aresztowano i wysłano do obozów koncentracyjnych.",
            "Do 1939 roku Żydzi w Niemczech nie mogli chodzić do szkoły ani prowadzić samochodu.",
            "Każdy z tych kroków był decyzją podjętą przez ludzi sprawujących władzę."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "deixar de fazer algo de propósito, como não comprar numa loja, para tentar forçar uma mudança (boycott, boicote)",
            "pertencer a um país em termos da lei, com os direitos que isso traz (citizenship, cidadania)",
            "um edifício onde as pessoas judias se reúnem para rezar e para aprender (synagogue, sinagoga)",
            "informação espalhada para fazer as pessoas acreditarem em algo, seja verdade ou não (propaganda)",
            "um momento em que as coisas mudam de direção e não voltam atrás (turning point, ponto de viragem/virada)"
          ],
          "passage": [
            "Os nazis/nazistas retiraram os direitos às pessoas judias em três ondas.",
            "A primeira onda começou em abril de 1933 com um boicote às lojas de donos judeus.",
            "Homens da SA ficavam à porta das lojas para garantir que ninguém entrava.",
            "As primeiras leis antissemitas foram aprovadas no mesmo ano.",
            "A segunda onda começou em 1935, com violência e com as Leis de Nuremberga/Nuremberg.",
            "Essas leis retiraram às pessoas judias a cidadania alemã.",
            "A terceira onda começou em 1938 e acabou na Kristallnacht.",
            "Kristallnacht quer dizer a Noite dos Vidros Quebrados.",
            "A 9 e 10 de novembro de 1938, casas, lojas e sinagogas judias foram atacadas.",
            "Mais de 90 pessoas judias foram mortas nessas duas noites.",
            "Milhares de homens judeus foram presos e enviados para campos de concentração.",
            "Em 1939 as pessoas judias na Alemanha já não podiam ir à escola nem conduzir um carro.",
            "Cada um destes passos foi uma decisão tomada por pessoas que tinham poder."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "inaad si ula kac ah wax ka joojiso, sida inaanad dukaan ka iibsan, si isbeddel loo keeno",
            "inaad dal ka tirsanaato sharci ahaan, iyo xuquuqda la socota",
            "dhisme dadka Yuhuudda ku kulmaan oo ku tukadaan oo wax ku bartaan",
            "macluumaad la faafiyo si dadku wax u rumaystaan, run iyo been",
            "waqti ay waxyaalo jiho beddelaan oo aanay dib u noqon"
          ],
          "passage": [
            "Nazis-ku waxay xuquuqda dadka Yuhuudda ka qaadeen saddex mowjad.",
            "Mowjadda koowaad waxay bilaabatay Abriil 1933-dii oo waxay ahayd qaadacid dukaammada Yuhuudda ay lahaayeen.",
            "Rag ka socday SA waxay dukaammada dibadda istaageen si ay hubiyaan inaanu cidna gelin.",
            "Sharciyadii ugu horreeyay ee Yuhuudda ka dhanka ahaa isla sanadkaas ayaa la ansixiyay.",
            "Mowjadda labaad waxay bilaabatay 1935-kii oo waxay ahayd rabshado iyo Nuremberg Laws.",
            "Sharciyadaas waxay dadka Yuhuudda ka qaadeen muwaadinnimadooda Jarmalka.",
            "Mowjadda saddexaad waxay bilaabatay 1938-kii oo waxay ku dhammaatay Kristallnacht.",
            "Kristallnacht macnaheedu waa Habeenkii Muraayadaha Jabay.",
            "9-kii iyo 10-kii Noofembar 1938 guryo, dukaammo iyo synagogues Yuhuud ah waa la weerartay.",
            "In ka badan 90 qof Yuhuud ah ayaa labadaas habeen lagu dilay.",
            "Kumanaan rag Yuhuud ah waa la xiray oo waxaa loo diray concentration camps.",
            "1939-kii dadka Yuhuudda ee Jarmalka ku sugnaa iskuul ma tagi karin oo baabuur ma wadi karin.",
            "Tallaabo kasta oo kuwan ka mid ah waxay ahayd go'aan dad awoodda haystay qaateen."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "навмисна відмова щось робити, наприклад не купувати в крамниці, щоб змусити до змін (boycott)",
            "належність до країни за законом разом із правами, які з цього випливають (citizenship)",
            "будівля, де євреї збираються молитися і вчитися (synagogue)",
            "інформація, яку поширюють, щоб люди в щось повірили, правдиве це чи ні (propaganda)",
            "мить, коли справи змінюють напрямок і вже не повертаються назад (turning point)"
          ],
          "passage": [
            "Нацисти відбирали права євреїв трьома хвилями.",
            "Перша хвиля почалася у квітні 1933 року з бойкоту крамниць, що належали євреям.",
            "Чоловіки зі СА стояли перед крамницями, щоб упевнитися, що ніхто не заходить.",
            "Перші антисемітські закони ухвалили того самого року.",
            "Друга хвиля почалася у 1935 році з насильства і Нюрнберзьких законів.",
            "Ті закони відібрали в євреїв німецьке громадянство.",
            "Третя хвиля почалася у 1938 році і закінчилася Kristallnacht.",
            "Kristallnacht означає Ніч розбитого скла.",
            "9 і 10 листопада 1938 року єврейські домівки, крамниці й синагоги зазнали нападів.",
            "Тих двох ночей було вбито понад 90 євреїв.",
            "Тисячі єврейських чоловіків арештували й відправили до концентраційних таборів.",
            "До 1939 року євреї в Німеччині не могли ходити до школи або керувати автомобілем.",
            "Кожний із цих кроків був рішенням, яке ухвалили люди при владі."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "جان بوجھ کر کوئی کام نہ کرنا، جیسے کسی دکان سے خریداری نہ کرنا، تاکہ تبدیلی پر مجبور کیا جائے (boycott)",
            "قانون کے مطابق کسی ملک سے تعلق، اور اس کے ساتھ آنے والے حقوق (citizenship)",
            "وہ عمارت جہاں یہودی لوگ دعا اور تعلیم کے لیے جمع ہوتے ہیں (synagogue)",
            "وہ معلومات جو لوگوں کو کوئی بات منوانے کے لیے پھیلائی جائیں، چاہے وہ سچ ہو یا نہ ہو (propaganda)",
            "وہ لمحہ جب چیزیں رخ بدل لیتی ہیں اور واپس نہیں آتیں (turning point)"
          ],
          "passage": [
            "نازیوں نے یہودی لوگوں کے حق تین مرحلوں میں چھین لیے۔",
            "پہلا مرحلہ اپریل 1933 میں یہودی ملکیت کی دکانوں کے boycott سے شروع ہوا۔",
            "SA کے آدمی دکانوں کے باہر کھڑے ہو جاتے تھے تاکہ کوئی اندر نہ جائے۔",
            "antisemitic قوانین کا پہلا سلسلہ اسی سال منظور ہوا۔",
            "دوسرا مرحلہ 1935 میں تشدد اور Nuremberg Laws سے شروع ہوا۔",
            "ان قوانین نے یہودی لوگوں سے ان کی جرمن شہریت چھین لی۔",
            "تیسرا مرحلہ 1938 میں شروع ہوا اور Kristallnacht پر ختم ہوا۔",
            "Kristallnacht کا مطلب ہے ٹوٹے شیشوں کی رات۔",
            "9 اور 10 نومبر 1938 کو یہودی گھروں، دکانوں اور synagogues پر حملے کیے گئے۔",
            "ان دو راتوں میں 90 سے زیادہ یہودی لوگ مارے گئے۔",
            "ہزاروں یہودی مردوں کو گرفتار کر کے concentration camps بھیج دیا گیا۔",
            "1939 تک جرمنی میں یہودی لوگ نہ سکول جا سکتے تھے اور نہ گاڑی چلا سکتے تھے۔",
            "ان میں سے ہر قدم اقتدار میں بیٹھے لوگوں کا کیا ہوا فیصلہ تھا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Three waves of persecution, 1933-1939",
          paragraphs: [
            "Your lesson divides the persecution of German Jewish people into three waves, and in each wave the discrimination got worse. The first wave came in April 1933, as soon as the Nazis had power. On 1 April there was a one-day boycott of Jewish-owned shops, which means people were told not to buy from them in the hope that the owners would be driven out. Members of the SA, Hitler's private army, stood outside the shops to make sure the boycott worked. The first antisemitic laws followed in the same year.",
            "The second wave began in 1935, with violence against Jewish people and with the Nuremberg Laws. Those laws removed German citizenship from Jewish people and banned them from much of public life. Losing citizenship is not a small thing: it meant that in law they no longer belonged to the country they had been born in, and had no rights that the state had to respect.",
            "The third wave began in 1938 with still more violence, and ended in Kristallnacht. By 1939, Jewish people in Germany could not attend school, play sport or drive a car. Hitler's first aim had been to make life in Germany so unpleasant that Jewish people would choose to leave; thousands did, if they could find a country that would take them."
          ],
          tip: "Learn the three waves by their dates: 1933 boycott and first laws; 1935 Nuremberg Laws; 1938 Kristallnacht. Then you can date any detail you are given."
        },
        {
          heading: "Kristallnacht, 9-10 November 1938",
          paragraphs: [
            "Kristallnacht means the Night of Broken Glass, and it took place on 9 and 10 November 1938. Jewish homes, shops, schools, hospitals and synagogues were attacked by groups who supported the Nazis, led by the Nazi Party's own private army and including the Hitler Youth. The name comes from the amount of broken glass left in the streets. More than 90 Jewish people were killed, and 30,000 Jewish men were arrested and sent to concentration camps.",
            "The Nazis said they were responding to a murder. Earlier in November, 17,000 Polish Jewish people living in Germany had been ordered out of the country and were abandoned at the Polish border. Herschel Grynszpan, a young man whose parents were among them, was so angry that on 7 November he shot a German official at the German embassy in Paris. When the official died, the Nazis used the shooting as their reason to move from a campaign of harassment to a campaign of violence.",
            "The diary of Joseph Goebbels, Hitler's minister in charge of propaganda, shows what really happened. Writing on 9 November, he recorded that he had briefed Hitler, that Hitler decided to let the attacks go ahead, that the police were to be withdrawn, and that he himself gave the orders to the Party to attack. In other words, this was not a crowd losing control. It was organised from the top, and the police were deliberately told to stand back."
          ],
          tip: "Describe Kristallnacht in two halves: what happened, and who organised it. The second half is what makes it a turning point."
        },
        {
          heading: "Propaganda, fear, and the people who said nothing",
          paragraphs: [
            "None of this could have worked without propaganda, which means information spread to make people believe something whether or not it is true. The Nazis used posters, films and newspapers to spread the idea that Jewish people were a danger to Germany. One poster, made for a Nazi art exhibition in 1937, used a cruel caricature to suggest that Jewish people cared only about money and were loyal to a foreign power. A photograph taken in a German classroom in 1935 shows that this teaching reached children in school.",
            "Your lesson then asks a hard question: why did ordinary German people not fight against the anti-Jewish laws? The answers it gives are fear, social pressure, propaganda, and the simple fact that objecting meant breaking the law. There is also the fact that the laws came one at a time, each one a little worse than the last, so that there was never an obvious moment to object.",
            "Those are explanations, not excuses, and your lesson is careful about the difference. Some people did object, hid their neighbours or kept trading with Jewish shops, and they took a real risk in doing so. That is the strongest evidence that the people who said nothing were making a choice too."
          ],
          worked: {
            q: "Explain why Kristallnacht is called a turning point in the treatment of Jewish people in Germany.",
            steps: [
              "Point: Kristallnacht was a turning point because the persecution changed from laws and harassment to open, organised violence.",
              "Evidence from before: between 1933 and 1938 the Nazis mainly used boycotts and laws, such as the Nuremberg Laws of 1935, which took away citizenship but did not kill people.",
              "Evidence from the night itself: Jewish homes, shops and synagogues were attacked across the country, more than 90 people were killed and 30,000 men were arrested and sent to camps.",
              "Explain the link: once the state would organise violence and tell the police to stay out of the way, there was nothing left to protect Jewish people, which is why historians see Kristallnacht as pointing towards what came after."
            ],
            answer: "Before Kristallnacht the Nazis mainly used laws; on those two nights they organised violence and withdrew the police. That change of method is what makes it a turning point."
          },
          tip: "A turning point answer needs before and after. Show the method changing, not just the violence happening."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year were the Nuremberg Laws passed?", answer: 1935, tolerance: 0, units: "", why: "The Nuremberg Laws were passed in 1935, in the second wave of persecution, and removed German citizenship from Jewish people.", check: "1935",
          misconceptions: [
            { answer: 1933, says: "1933 is the first wave: the April boycott of Jewish-owned shops and the first antisemitic laws. The Nuremberg Laws came two years later, in 1935.", check: "1935 - 2" },
            { answer: 1938, says: "1938 is the third wave, the year of Kristallnacht. The Nuremberg Laws had already taken citizenship away three years earlier, in 1935.", check: "1935 + 3" }
          ] },
        { kind: "gap", q: "The organised attacks on Jewish homes, shops and synagogues on 9 and 10 November 1938 are known as ___.", answer: "Kristallnacht", options: ["Kristallnacht", "the Final Solution", "the Nuremberg Laws"], why: "Kristallnacht, the Night of Broken Glass, is the name given to those two nights of organised attacks.",
          feedback: {
            "the Final Solution": "The Final Solution was the Nazi plan, agreed in 1942, to murder the Jewish people of Europe. It came four years after the attacks of November 1938, which are called Kristallnacht.",
            "the Nuremberg Laws": "The Nuremberg Laws of 1935 took away citizenship and rights. They were laws, not attacks. The two nights of attacks in November 1938 are called Kristallnacht."
          } },
        { kind: "mcq", q: "What did the Nuremberg Laws of 1935 do?", options: ["They took German citizenship away from Jewish people and shut them out of much of public life", "They ordered every Jewish person to leave Germany within a month", "They set up the first ghettos in Poland", "They put leading Nazis on trial for their crimes"], answer: 0, why: "The Nuremberg Laws removed citizenship from Jewish people and banned them from much of public life, so that in law they no longer belonged to their own country.",
          feedback: [
            "",
            "There was no order to leave within a month. Hitler's aim at this stage was to make life so unpleasant that people would choose to go, and the Nuremberg Laws were part of that: they removed citizenship and rights.",
            "The first ghettos were set up in Eastern Europe in 1939, after Germany invaded Poland. The Nuremberg Laws, four years earlier, took away citizenship inside Germany.",
            "Leading Nazis were tried after the war at the Nuremberg Trials, which share the name of the city but nothing else. The Nuremberg Laws of 1935 took citizenship away from Jewish people."
          ] }
      ],
      modules: [
        {
          title: "The steps of persecution",
          task: {
            kind: "order",
            q: "Put these steps in the persecution of German Jewish people into chronological order.",
            items: [
              "A one-day boycott of Jewish-owned shops is organised, with the SA standing outside (April 1933)",
              "The Nuremberg Laws take German citizenship away from Jewish people (1935)",
              "Polish Jewish people living in Germany are ordered out and abandoned at the border (November 1938)",
              "Kristallnacht: Jewish homes, shops and synagogues are attacked across Germany (9-10 November 1938)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Each step has its date in brackets. Read all four dates first.",
                "Two of them are in 1938; look at the days and the order of events in that month.",
                "The expulsion of Polish Jewish people came before Kristallnacht, and is part of why it happened.",
                "Check the whole sequence: boycott, laws, expulsion, violence. Each step is worse than the last."
              ],
              example: {
                q: "Put these in order: a club raises its membership fee (March); the club bans new members (January); the club closes its doors for good (September).",
                steps: ["January comes first, so the ban on new members.", "Then March, the fee rise.", "Then September, the closure."],
                answer: "Bans new members; raises the fee; closes for good."
              }
            },
            core: { hint: "1933, then 1935, then the two events of November 1938 in the order they happened." },
            stretch: { extend: "Explain why historians describe this sequence as persecution getting worse in stages, and what that pattern allowed the Nazis to do." }
          },
          explain: "Say, in one sentence, why the order of these steps matters to a historian.",
          why: "April 1933, 1935, early November 1938, then 9-10 November 1938. The order shows persecution moving from money to law to expulsion to violence, each step making the next one easier."
        },
        {
          title: "How did the treatment change?",
          task: {
            kind: "written",
            q: "Explain how the treatment of Jewish people in Germany changed between 1933 and 1938. Use evidence from each of the three waves. Write one paragraph of five to seven sentences.",
            criteria: [
              "I describe the first wave with evidence, such as the April 1933 boycott or the first antisemitic laws.",
              "I describe the second wave with evidence, naming the Nuremberg Laws of 1935 and what they did.",
              "I describe the third wave with evidence from Kristallnacht in November 1938.",
              "I explain how the method changed, not only that things got worse, using words such as whereas or by contrast.",
              "I finish with a sentence explaining why Kristallnacht is called a turning point."
            ],
            model: "Between 1933 and 1938 the treatment of Jewish people in Germany moved from pressure to law and then to organised violence. In the first wave, in April 1933, the Nazis organised a one-day boycott of Jewish-owned shops, with the SA standing outside to make sure people obeyed, and passed the first antisemitic laws. In the second wave, from 1935, the Nuremberg Laws removed German citizenship from Jewish people and banned them from much of public life, which meant that in law they no longer belonged to the country they had been born in. By contrast, the third wave was violent: on 9 and 10 November 1938, Jewish homes, shops, schools and synagogues were attacked across Germany, more than 90 people were killed and 30,000 Jewish men were arrested and sent to concentration camps. The method had changed from making life difficult to attacking people openly. Kristallnacht is called a turning point because the state now organised the violence itself and ordered the police to stand back, so nothing was left to protect Jewish people."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Between 1933 and 1938 the treatment of Jewish people changed from... to...",
                "Sentence 2: first wave, April 1933, with one piece of evidence.",
                "Sentence 3: second wave, 1935, with the Nuremberg Laws and what they did.",
                "Sentences 4 and 5: third wave, November 1938, with evidence, then say why that is a turning point."
              ],
              example: {
                q: "Explain how William the Conqueror's control of England changed between 1066 and 1086. Use evidence from each stage.",
                steps: ["Stage one: after Hastings, castles were built to hold the land by force.", "Stage two: rebellions were crushed, as in the north.", "Stage three: by 1086 the Domesday survey recorded everything for taxation.", "Then say how the method changed, from force to administration."],
                answer: "Three stages, each with evidence, then a sentence on how the method of control changed."
              }
            },
            core: { hint: "One wave per sentence, each with a date and a detail. Then one sentence on how the method changed." },
            stretch: { extend: "Explain which of the three waves you think did the most lasting damage to Jewish people's safety in Germany, and give a reason for your judgement." }
          },
          explain: "Say, in one sentence, how the method of persecution changed between 1935 and 1938.",
          why: "A strong answer gives all three waves with dates and evidence and then names the change of method: pressure, then law, then organised violence. The best answers explain that the state's willingness to organise violence is what made Kristallnacht a turning point."
        },
        {
          title: "Organised, or spontaneous?",
          task: {
            kind: "mcq",
            q: "During Kristallnacht the Nazi Party ordered its own supporters to attack and told the police to stay out of the way. What does this show?",
            options: [
              "That the attacks were organised by the Nazi Party, and not a sudden outburst by ordinary people",
              "That the police were protecting the Jewish community that night",
              "That Kristallnacht happened by accident",
              "That the Nazi Party had nothing to do with Kristallnacht"
            ],
            answer: 0,
            why: "Goebbels recorded the decision in his own diary: the attacks were to go ahead, the police were to be pulled back, and the Party was given its orders. The violence was planned at the top, even though the Nazis blamed it on the anger of the public.",
            feedback: [
              "",
              "The police were withdrawn, which is the opposite of protection. Removing them left the attackers free to do as they liked.",
              "An accident is something nobody decides. Goebbels wrote down the decision in his diary on 9 November, which is as close as a historian gets to seeing a choice being made.",
              "The attacks were led by the Nazi Party's private army and by the Hitler Youth, and the orders came from Goebbels after he had briefed Hitler. The Party was at the centre of it."
            ]
          },
          contexts: [
            { label: "The diary", q: "Goebbels, the Nazi minister for propaganda, wrote in his diary on 9 November 1938 that he had briefed Hitler, given the Party its orders and had the police withdrawn. What does this show?", why: "A perpetrator's own diary records the decision being taken, which is strong evidence that the attacks were organised by the Party rather than spontaneous." },
            { label: "Across the country", q: "The attacks happened in the same two nights in towns and cities all across Germany, carried out by uniformed members of the SA and the Hitler Youth. What does this show?", why: "Violence in many places at once, by people in uniform, needs orders and communication, so it points to organisation rather than a sudden outburst." },
            { label: "The arrests", q: "During and after the attacks, Jewish men were arrested in very large numbers and sent to concentration camps, which needed lists, trains and camp space arranged in advance. What does this show?", why: "Arrests on that scale cannot be improvised; the preparation shows that the Party had planned what would follow the attacks." }
          ],
          levels: {
            support: {
              steps: [
                "Ask who gave the orders. Goebbels wrote in his diary that he did, after briefing Hitler.",
                "Ask what happened to the police. They were withdrawn, which means somebody decided to withdraw them.",
                "Decisions and orders mean organisation. An outburst has neither.",
                "Now cross out the options that describe an accident, or no Nazi involvement."
              ],
              example: {
                q: "A protest begins in twenty towns at exactly the same hour, with identical printed banners. What does this show?",
                steps: ["The same hour in twenty places needs communication.", "Identical printed banners have to be made in advance.", "So the protest was organised, not spontaneous."],
                answer: "That it was organised in advance, because timing and printed materials cannot happen by chance."
              }
            },
            core: { hint: "Look for the evidence of decisions being taken: orders, timing, preparation." },
            stretch: { extend: "The Nazis described Kristallnacht as the anger of the German people. Explain why they wanted it described that way, and what a historian would say in reply." }
          },
          explain: "Say, in one sentence, what evidence shows that Kristallnacht was organised.",
          why: "Orders from Goebbels after briefing Hitler, the deliberate withdrawal of the police, attacks in many places on the same two nights and mass arrests prepared in advance all point one way: this was organised by the state, and the Nazis then blamed the public for it."
        }
      ]
    },

    /* ───────────── 4 · the ghettos ───────────── */
    {
      key: "ghettos", n: 4, title: "The ghettos: shut in, and resisting",
      lead: "What a ghetto was, why the Nazis built them after invading Poland, what conditions were like in Warsaw and the other ghettos, and the many ways in which people resisted.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "ghetto", means: "a part of a town or city, fenced or walled off, where Jewish people were forced to live", sentence: "The largest ghetto in Europe was in Warsaw, in Poland." },
          { word: "segregated", means: "kept apart from everyone else, by force", sentence: "Jewish people were segregated from the rest of the city behind a wall." },
          { word: "starvation", means: "suffering or dying because there is not enough food", sentence: "Many people in the ghettos died of starvation and disease." },
          { word: "forced labour", means: "work people are made to do, for no pay and with no choice", sentence: "Everyone aged ten and over could be made to do forced labour." },
          { word: "resistance", means: "refusing to accept control, either openly or in quieter everyday ways", sentence: "Resistance in the ghettos included secret schools and an armed uprising." }
        ],
        passage: [
          "A ghetto was a part of a town or city that was fenced or walled off.",
          "Jewish people were forced to live inside it and could not leave.",
          "Germany invaded Poland in September 1939 and the first ghettos were set up.",
          "Eastern Europe had very large Jewish communities.",
          "The Nazis crowded those families into small districts of towns and cities.",
          "Historians think over 1,000 ghettos were set up by 1945.",
          "Each ghetto held families who had been taken from their own homes.",
          "There was very little food, no heating and no medicine.",
          "Seven to nine people often had to share one room.",
          "Disease spread quickly and many people died of hunger.",
          "Yet people found ways to resist inside the ghettos.",
          "They ran secret schools, newspapers and prayer services.",
          "In Warsaw they rose up and fought the German army."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "جزء من بلدة أو مدينة، مسوَّر أو محوَّط، أُرغم الناس اليهود على العيش فيه (ghetto)",
            "مُبعَد عن الناس جميعًا بالقوّة (segregated)",
            "المعاناة أو الموت لأنّ الطعام لا يكفي (starvation)",
            "عمل يُرغَم الناس عليه، بلا أجر وبلا خيار (forced labour)",
            "رفض قبول السيطرة، علنًا أو بطرق يومية أهدأ (resistance)"
          ],
          "passage": [
            "كان الغيتو جزءًا من بلدة أو مدينة مسوَّرًا أو محوَّطًا.",
            "وكان الناس اليهود يُرغمون على العيش داخله ولا يستطيعون مغادرته.",
            "وغزت ألمانيا بولندا في سبتمبر 1939، فأُنشئت أوّل الغيتوات.",
            "وكانت في شرق أوروبا جماعات يهودية كبيرة جدًّا.",
            "فحشر النازيون تلك الأسر في مناطق صغيرة من البلدات والمدن.",
            "ويرى المؤرّخون أنّ أكثر من 1,000 غيتو أُنشئ بحلول 1945.",
            "وكان كلّ غيتو يضمّ أسرًا أُخِذت من بيوتها.",
            "ولم يكن فيه إلّا طعام قليل جدًّا، ولا تدفئة ولا دواء.",
            "وكثيرًا ما كان على سبعة إلى تسعة أشخاص أن يتقاسموا غرفة واحدة.",
            "وانتشر المرض بسرعة، ومات كثير من الناس من الجوع.",
            "ومع ذلك وجد الناس طرقًا للمقاومة داخل الغيتوات.",
            "فأداروا مدارس سرّية وصحفًا وصلوات.",
            "وفي وارسو ثاروا وقاتلوا الجيش الألماني."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "część miasteczka albo miasta, odgrodzona płotem lub murem, w której Żydzi musieli mieszkać (ghetto)",
            "trzymany siłą z dala od wszystkich innych (segregated)",
            "cierpienie albo umieranie z powodu braku jedzenia (starvation)",
            "praca, do której ludzi się zmusza, bez zapłaty i bez wyboru (forced labour)",
            "odmowa poddania się kontroli, otwarcie albo w cichszy, codzienny sposób (resistance)"
          ],
          "passage": [
            "Getto to była część miasteczka albo miasta, odgrodzona płotem lub murem.",
            "Żydzi musieli mieszkać w jego środku i nie mogli go opuścić.",
            "Niemcy najechały Polskę we wrześniu 1939 roku i powstały pierwsze getta.",
            "W Europie Wschodniej były bardzo duże społeczności żydowskie.",
            "Naziści upchali te rodziny w małych dzielnicach miasteczek i miast.",
            "Historycy uważają, że do 1945 roku utworzono ponad 1,000 gett.",
            "W każdym getcie były rodziny zabrane z ich własnych domów.",
            "Było bardzo mało jedzenia, nie było ogrzewania ani lekarstw.",
            "Siedem do dziewięciu osób musiało często dzielić jeden pokój.",
            "Choroby szybko się rozprzestrzeniały i wielu ludzi umarło z głodu.",
            "A jednak ludzie znajdowali w gettach sposoby, żeby się opierać.",
            "Prowadzili tajne szkoły, gazety i nabożeństwa.",
            "W Warszawie powstali i walczyli z armią niemiecką."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma parte de uma vila ou cidade, cercada ou murada, onde as pessoas judias eram obrigadas a viver (ghetto, gueto)",
            "mantido à parte de todos os outros, pela força (segregated, segregado)",
            "sofrer ou morrer porque não há comida suficiente (starvation, fome)",
            "trabalho que as pessoas são obrigadas a fazer, sem pagamento e sem escolha (forced labour, trabalho forçado)",
            "recusar aceitar o controlo/controle, de forma aberta ou de maneiras mais discretas do dia a dia (resistance, resistência)"
          ],
          "passage": [
            "Um gueto era uma parte de uma vila ou cidade que estava cercada ou murada.",
            "As pessoas judias eram obrigadas a viver lá dentro e não podiam sair.",
            "A Alemanha invadiu a Polónia/Polônia em setembro de 1939 e os primeiros guetos foram criados.",
            "A Europa de Leste tinha comunidades judias muito grandes.",
            "Os nazis/nazistas apertaram essas famílias em pequenos bairros das vilas e das cidades.",
            "Os historiadores pensam que até 1945 foram criados mais de 1 000 guetos.",
            "Cada gueto tinha famílias que tinham sido levadas das suas próprias casas.",
            "Havia muito pouca comida, não havia aquecimento e não havia medicamentos.",
            "Muitas vezes sete a nove pessoas tinham de partilhar/compartilhar um quarto.",
            "As doenças espalhavam-se depressa e muitas pessoas morreram de fome.",
            "Mesmo assim, as pessoas encontraram maneiras de resistir dentro dos guetos.",
            "Mantinham escolas, jornais e celebrações religiosas em segredo.",
            "Em Varsóvia levantaram-se e combateram o exército alemão."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qayb magaalo ah, oo xayndaab ama darbi lagu xiray, halkaasoo dadka Yuhuudda lagu qasbay inay ku noolaadaan",
            "xoog lagu kala saaray dadka kale",
            "silic ama dhimasho cunto ku filan la'aan dartii",
            "shaqo dad lagu qasbo, oo mushahar la'aan ah oo aanay doorasho ku lahayn",
            "diidmada in lagu xukumo, si cad ama siyaabo maalinle oo aamusan"
          ],
          "passage": [
            "Ghetto waxay ahayd qayb magaalo ah oo xayndaab ama darbi lagu xiray.",
            "Dadka Yuhuudda waxaa lagu qasbay inay gudaha ku noolaadaan, mana bixi karin.",
            "Jarmalku wuxuu Poland ku duulay Sebtembar 1939-kii, ghettos-kii ugu horreeyayna waa la sameeyay.",
            "Bariga Yurub waxay lahayd bulshooyin Yuhuud ah oo aad u waaweyn.",
            "Nazis-ku waxay qoysaskaas ku cufeen degmooyin yaryar oo magaalooyinka.",
            "Taariikhyahannadu waxay u maleeyaan in in ka badan 1,000 ghetto la sameeyay 1945-kii.",
            "Ghetto kastaa wuxuu hayay qoysas guryahooda laga qaaday.",
            "Cunto aad u yar ayaa jirtay, kulayl ma jirin, dawona ma jirin.",
            "Toddoba ilaa sagaal qof ayaa inta badan hal qol wadaagi jiray.",
            "Cudurro si dhaqso ah ayay u faafeen, dad badanna gaajo ayay u dhinteen.",
            "Hase yeeshee dadku waxay siyaabo heleen oo ghettos-ka gudaha ku iska caabbiyeen.",
            "Waxay wadeen iskuullo, wargeysyo iyo tukasho qarsoodi ah.",
            "Warsaw waxay kaceen oo waxay la dagaallameen ciidanka Jarmalka."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "частина містечка або міста, обгороджена парканом чи стіною, де євреїв змушували жити (ghetto)",
            "силою тримані окремо від усіх інших (segregated)",
            "страждання або смерть через те, що їжі не досить (starvation)",
            "праця, яку людей змушують виконувати без плати і без вибору (forced labour)",
            "відмова приймати контроль — відкрито або тихішими щоденними способами (resistance)"
          ],
          "passage": [
            "Гетто було частиною містечка або міста, обгородженою парканом чи стіною.",
            "Євреїв змушували жити всередині, і вони не могли вийти.",
            "Німеччина напала на Польщу у вересні 1939 року, і тоді створили перші гетто.",
            "Східна Європа мала дуже великі єврейські громади.",
            "Нацисти затиснули ці родини у невеликі райони містечок і міст.",
            "Історики вважають, що до 1945 року створили понад 1,000 гетто.",
            "У кожному гетто були родини, яких забрали з їхніх власних домівок.",
            "Їжі було дуже мало, не було ні обігріву, ні лікарських засобів.",
            "Семеро-дев’ятеро людей часто мусили тіснитися в одній кімнаті.",
            "Хвороби швидко поширювалися, і багато людей померло з голоду.",
            "І все ж люди знаходили способи опиратися всередині гетто.",
            "Вони вели таємні школи, газети й молитовні служби.",
            "У Варшаві вони піднялися і воювали з німецьким військом."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی قصبے یا شہر کا وہ حصہ، جو باڑ یا دیوار سے الگ کر دیا گیا ہو، اور جہاں یہودی لوگوں کو زبردستی رہنے پر مجبور کیا گیا (ghetto)",
            "زبردستی سب سے الگ رکھا گیا (segregated)",
            "خوراک کافی نہ ہونے کی وجہ سے تکلیف اٹھانا یا مر جانا (starvation)",
            "وہ کام جو لوگوں سے زبردستی کرایا جائے، بغیر مزدوری اور بغیر کسی انتخاب کے (forced labour)",
            "قابو قبول کرنے سے انکار، کھلے طور پر یا روزمرہ کے خاموش طریقوں سے (resistance)"
          ],
          "passage": [
            "ghetto کسی قصبے یا شہر کا وہ حصہ تھا جو باڑ یا دیوار سے الگ کر دیا گیا تھا۔",
            "یہودی لوگوں کو اس کے اندر رہنے پر مجبور کیا گیا اور وہ باہر نہیں جا سکتے تھے۔",
            "جرمنی نے ستمبر 1939 میں پولینڈ پر حملہ کیا اور پہلے ghettos بنائے گئے۔",
            "مشرقی یورپ میں یہودی برادریاں بہت بڑی تھیں۔",
            "نازیوں نے ان خاندانوں کو قصبوں اور شہروں کے چھوٹے علاقوں میں بھر دیا۔",
            "مؤرخوں کا خیال ہے کہ 1945 تک 1,000 سے زیادہ ghettos بنائے گئے۔",
            "ہر ghetto میں وہ خاندان رکھے گئے جنھیں ان کے اپنے گھروں سے لے جایا گیا تھا۔",
            "وہاں خوراک بہت کم تھی، گرمائش کا کوئی بندوبست نہ تھا اور دوا نہ تھی۔",
            "اکثر سات سے نو لوگوں کو ایک ہی کمرہ بانٹنا پڑتا تھا۔",
            "بیماری تیزی سے پھیلی اور بہت لوگ بھوک سے مر گئے۔",
            "پھر بھی لوگوں نے ghettos کے اندر مزاحمت کے راستے نکالے۔",
            "انھوں نے خفیہ سکول، اخبار اور دعا کی محفلیں چلائیں۔",
            "وارسا (Warsaw) میں وہ اٹھ کھڑے ہوئے اور جرمن فوج سے لڑے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What a ghetto was, and why the Nazis built them",
          paragraphs: [
            "A ghetto is a part of a town or city occupied by one group of people. Your lesson's definition is sharper than that: in Nazi Europe, a ghetto was a district that was segregated and fenced off, where Jewish people were forced to live, separated from everybody else. The first ghetto was established in Eastern Europe in 1939, and historians estimate that over 1,000 ghettos were set up between 1939 and 1945.",
            "The reason they appeared in 1939 is the war. Germany invaded Poland in September 1939, which began the Second World War, and Eastern Europe had a very large Jewish population. After Poland was conquered, around three million Polish Jewish people came under Nazi control. The Nazis wanted the land they had taken to be free of Jewish influence, and there were far more Jewish people there than their earlier policy of making life unpleasant could ever drive out. The Nazis called this the Jewish Problem, a phrase they invented: the problem was their own hatred, not the people.",
            "Ghettos were their answer, and the Nazis themselves described them as a temporary measure. That word matters. Reinhard Heydrich, one of the most senior men in the SS, wrote that gathering Jewish people together was only the first step towards what he called the final goal. The ghettos were never meant to last, which tells you that something else was already being planned."
          ],
          tip: "If a question asks why the ghettos were built, give both halves: to segregate and control people, and as a stage on the way to something the Nazis had not yet announced."
        },
        {
          heading: "Life in the ghettos",
          paragraphs: [
            "The ghettos you study are Warsaw, Lodz, Kovno and Riga. The largest was the Warsaw ghetto, where between 400,000 and 500,000 Jewish people were held behind walls built to cut the district off from the rest of the city. Families arrived having had to abandon most of what they owned, and had to find shelter wherever they could, often sharing a room with other families.",
            "Conditions were made deliberately unbearable. Food was limited to around 300 calories a day, when a person needs 2,000 to 2,500. There was no heating. Seven to nine people often shared a single room. Everyone aged ten and over could be forced into heavy labour, often in factories making goods for the German war effort. Nobody outside could talk to Jewish people, help them or sell them anything, and anyone who left the ghetto could be executed. Disease spread quickly. In the Warsaw ghetto alone an estimated 100,000 Jewish people died of starvation and disease between 1940 and 1942, and across all the ghettos the estimate in your lesson is that 500,000 Jewish people died.",
            "We know this in such detail because people inside the ghettos made sure we would. Emanuel Ringelblum organised a secret archive in the Warsaw ghetto, collecting letters, diaries, photographs and records so that what was happening could not be denied later. Kovno, in Lithuania, opened in the summer of 1941 and was later turned into a concentration camp. Reading these records is how historians know the names of families who would otherwise have vanished."
          ],
          tip: "Separate living conditions (space, heating, food, disease) from treatment (forced labour, the ban on contact, execution for leaving). Strong answers cover both."
        },
        {
          heading: "Resistance in the ghettos",
          paragraphs: [
            "Your lesson insists on this chapter of the story, and so should your answers. People in the ghettos resisted. Mordecai Anielewicz was a leader of the Warsaw Ghetto Uprising, when fighters in the ghetto took on the German army with very few weapons. Tosia Altman organised armed resistance in ghettos across German-occupied Poland. Herbert Baum led a resistance group in Berlin.",
            "Open, armed resistance was rare, because it was almost impossible: the ghettos had no weapons, no food and no way out. That is why the quieter resistance mattered so much. People ran schools in secret when education was forbidden, held prayer services, wrote and passed round newspapers, organised welfare and shared food so that orphans and the sick were not abandoned, and kept records like Ringelblum's archive.",
            "None of this stopped the Nazis, and your answers should not pretend otherwise. What it did was refuse the Nazis the thing they most wanted: people who had given up being people. A secret school in a sealed ghetto is a statement that there will be a future, made by people with every reason to believe there would not be."
          ],
          worked: {
            q: "Explain why a secret school in a ghetto counts as resistance.",
            steps: [
              "Point: running a secret school was resistance because it broke a Nazi rule on purpose.",
              "Evidence: Jewish children had been banned from education, and in the ghettos teaching was forbidden, so every lesson was against the law.",
              "Explain: the Nazis wanted Jewish people cut off, hopeless and useful only as labour, and a school did the opposite by preparing children for a future.",
              "Judge: it did not free anyone or end the ghetto, so it was not resistance in the military sense, but historians count it as resistance because it refused the Nazis' aim."
            ],
            answer: "Because teaching was forbidden, so holding a school was a deliberate refusal to obey, and because education assumed a future that the Nazis intended to take away."
          },
          tip: "Two kinds of resistance: armed and everyday. Name one example of each, then explain what the Nazis wanted and how the act refused it."
        }
      ],
      gate: [
        { kind: "gap", q: "A part of a town or city that was fenced or walled off, where Jewish people were forced to live, was called a ___.", answer: "ghetto", options: ["ghetto", "camp", "synagogue"], why: "A ghetto was a segregated, fenced-off district where Jewish people were forced to live, apart from everyone else.",
          feedback: {
            "camp": "A camp was a separate place, usually outside a town, where people were imprisoned and forced to work. A fenced-off district inside a town or city is a ghetto.",
            "synagogue": "A synagogue is a building where Jewish people pray and learn. Many were destroyed by the Nazis. The fenced-off district of a town or city is a ghetto."
          } },
        { kind: "mcq", q: "Why did the Nazis set up ghettos in Eastern Europe from 1939?", options: ["To separate Jewish people from everyone else and control them while the Nazis decided what to do next", "To give Jewish communities towns of their own to govern", "Because Jewish families had asked to live apart from their neighbours", "To keep Jewish people safe from the fighting of the war"], answer: 0, why: "Ghettos segregated and controlled a very large Jewish population that the Nazis had brought under their rule, and your lesson calls them a temporary measure: a stage, not an end.",
          feedback: [
            "",
            "Nothing about a ghetto was self-government. The walls were built by the occupiers, the rules were made by them, and nobody inside could leave. Jewish councils were forced to carry out Nazi orders.",
            "No community asked to be walled in, starved and forced to work. The ghettos were imposed by the Nazis after they invaded Poland in 1939.",
            "The ghettos were the most dangerous places in Europe for the people inside them, with almost no food, no heating and no medicine. They were built to control people, not to protect them."
          ] },
        { kind: "mcq", q: "Which of these is an example of resistance in the ghettos?", options: ["Running secret schools and newspapers, organising welfare, and taking up arms in the Warsaw Ghetto Uprising", "Agreeing to work longer hours in the ghetto factories", "Reporting a neighbour to the guards at the gate", "Waiting quietly until the Nazis changed their minds"], answer: 0, why: "Resistance in the ghettos ran from armed uprising to the everyday work of schools, newspapers, prayer and welfare. All of it refused what the Nazis intended.",
          feedback: [
            "",
            "Longer hours gave the German war effort more, not less. Resistance meant giving the Nazis less than they demanded, or keeping something alive that they had forbidden.",
            "Reporting a neighbour helped the guards. Resistance meant protecting people from them: hiding a family, sharing food, keeping a school going.",
            "Waiting is not resistance, and the Nazis did not change their minds. The people your lesson names acted: they taught, wrote, organised welfare and, in Warsaw, fought."
          ] }
      ],
      modules: [
        {
          title: "Ghettos and the people who recorded them",
          task: {
            kind: "match",
            q: "Match each place or person to the right description.",
            pairs: [
              ["Warsaw ghetto", "The largest ghetto, walled off from the rest of the city"],
              ["Kovno ghetto", "A ghetto in Lithuania that opened in 1941 and was later turned into a concentration camp"],
              ["Emanuel Ringelblum", "Organised a secret archive that recorded life in the Warsaw ghetto"],
              ["Mordecai Anielewicz", "A leader of the Warsaw Ghetto Uprising"],
              ["Tosia Altman", "Organised armed resistance in ghettos across German-occupied Poland"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Sort the five into two groups first: two are places, three are people.",
                "Of the two places, one is the largest ghetto of all and one is in Lithuania.",
                "Of the three people, one collected records rather than fighting.",
                "That leaves two who organised armed resistance: one is tied to the Warsaw uprising by name."
              ],
              example: {
                q: "Match: Jarrow, Ellen Wilkinson. Choices: the town the 1936 hunger march set out from; the Member of Parliament who marched with it.",
                steps: ["One is a place and one is a person.", "Jarrow is the town; Ellen Wilkinson is the MP who marched."],
                answer: "Jarrow: the town the march set out from. Ellen Wilkinson: the MP who marched with it."
              }
            },
            core: { hint: "Places first, then people. One of the people kept records rather than fighting." },
            stretch: { extend: "Explain why Ringelblum's archive is so valuable to historians, and what it tells you about why he and his helpers took the risk." }
          },
          explain: "Say, in one sentence, why people in the ghettos kept records of what was happening to them.",
          why: "Warsaw was the largest ghetto; Kovno was in Lithuania and became a camp; Ringelblum built the secret archive; Anielewicz led the Warsaw uprising; Altman organised armed resistance across occupied Poland."
        },
        {
          title: "Why did so many people die in the ghettos?",
          task: {
            kind: "written",
            q: "Explain what conditions in the ghettos were like and why so many people died there. Use evidence from the chapter. Write one paragraph of five to seven sentences.",
            criteria: [
              "I describe at least three features of the conditions: food, space, heating, medicine, forced labour.",
              "I explain how each feature led to deaths, using so or because.",
              "I use at least one figure from the chapter correctly, such as the ration of 300 calories a day.",
              "I make clear that the conditions were created on purpose by the Nazis, not simply the result of the war.",
              "I write about the people in the ghettos as people, with families, and not only as numbers."
            ],
            model: "Conditions in the ghettos were created on purpose and were impossible to survive for long. Families arrived having lost almost everything they owned, and seven to nine people often had to share a single room, so any illness passed straight through a household. Food was limited to about 300 calories a day, when a person needs 2,000 to 2,500, so people were weakened by hunger before disease reached them. There was no heating and almost no medicine, and nobody outside the ghetto was allowed to sell anything to the people inside, so there was no way to make up what was missing. Everyone aged ten and over could be forced into heavy labour, which took the last of people's strength. For all these reasons very large numbers died of starvation and disease, and the deaths were the result of decisions the Nazis made about rations, walls and work."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Conditions in the ghettos were created on purpose and were impossible to survive.",
                "Sentences 2 to 4: pick three features (space, food, heating and medicine) and after each one write so or because to link it to deaths.",
                "Sentence 5: add forced labour and what it did to people already weak.",
                "Last sentence: say who decided the rations and the walls, so the reader knows the deaths were chosen."
              ],
              example: {
                q: "Explain what conditions were like in a Victorian slum and why disease spread so fast there.",
                steps: ["Feature: families crowded into single rooms, so illness passed quickly between them.", "Feature: no clean water supply, so cholera spread through the pumps.", "Feature: no drains, so waste stayed in the courts and yards.", "Link each one to illness with so or because."],
                answer: "Overcrowding, dirty water and no drainage, each linked to how disease spread."
              }
            },
            core: { hint: "Three features, each followed by so or because. Then forced labour, then who made the decisions." },
            stretch: { extend: "Explain why a historian would say that the deaths in the ghettos were caused by policy rather than by the war, and what evidence supports that." }
          },
          explain: "Say, in one sentence, which feature of ghetto life you think caused the most deaths, and why.",
          why: "Overcrowding, a starvation ration, no heating or medicine, a ban on outside help and heavy forced labour together made the ghettos deadly. The strongest answers name the Nazis' decisions behind each of those conditions."
        },
        {
          title: "A temporary measure",
          task: {
            kind: "mcq",
            q: "The Nazis described the ghettos as a temporary measure. What does that tell you about their plans for the Jewish people of Eastern Europe?",
            options: [
              "That the ghettos were only a stage, and the Nazis intended to do something else with the people later",
              "That the Nazis planned to let Jewish families return to their homes once the war was over",
              "That the Nazis had no plans at all and were simply improvising",
              "That the ghettos had been built to shelter people until the fighting had passed"
            ],
            answer: 0,
            why: "A measure described as temporary is a stage on the way to something else. Heydrich wrote that concentrating Jewish people was the first step towards what he called the final goal, and in 1942 that goal was agreed.",
            feedback: [
              "",
              "Nothing in the Nazis' own words suggests a return home. Jewish people's homes and possessions had already been taken, and almost everyone still alive in the ghettos was later put on trains to the camps.",
              "The Nazis certainly faced a situation they had not expected after conquering Poland, but the ghettos were organised with walls, rations, councils and labour quotas, and senior men wrote of a first step and a final goal. That is planning, not improvisation.",
              "Shelters do not have walls to keep people in, armed guards at the gates, or a rule that anyone who leaves can be executed. The ghettos were built to hold people, not to protect them."
            ]
          },
          contexts: [
            { label: "The first step", q: "Reinhard Heydrich wrote that gathering Jewish people together was only the first step towards what he called the final goal. What does that tell you about their plans for the Jewish people of Eastern Europe?", why: "A senior Nazi describing the ghettos as a first step says plainly that something further was intended, even though he does not spell out what." },
            { label: "No food, no medicine", q: "The ghettos were built with walls and guards but with almost no food supply, no heating and no medicine. What does that tell you about their plans for the Jewish people of Eastern Europe?", why: "A place built to hold people but not to keep them alive was never intended to last, which is what the Nazis meant by a temporary measure." },
            { label: "The trains", q: "Almost everyone still alive in the ghettos was later put on trains and taken to the camps. What does that tell you about their plans for the Jewish people of Eastern Europe?", why: "What happened next shows what the ghettos were a stage towards: a holding place before the deportations to the camps." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the word temporary. If something is temporary, something else must be coming.",
                "Ask what evidence there is of planning: walls, guards, rations, councils, and a senior Nazi writing of a first step.",
                "Ask what actually happened next to the people in the ghettos.",
                "Now cross out any option that says there was no plan, or that the ghettos were meant to help."
              ],
              example: {
                q: "A government calls a new set of emergency rules a temporary measure and sets up a committee to design what will replace them. What does that tell you?",
                steps: ["Temporary means something else is intended to follow.", "A committee designing the replacement is evidence that the something else is being planned.", "So the rules are a stage, not the final policy."],
                answer: "That the rules are a stage on the way to a policy that is already being planned."
              }
            },
            core: { hint: "The word temporary is the clue. Ask what the Nazis said would come next, and what actually did." },
            stretch: { extend: "Explain why historians disagree about how early the Nazis decided on mass murder, and what the ghettos can and cannot tell us about that question." }
          },
          explain: "Say, in one sentence, what the word temporary tells you about the ghettos.",
          why: "The ghettos were a holding stage: segregation and control while the Nazis decided what came next. Heydrich's first step and final goal, the lack of any supply of food or medicine, and the later deportations all point the same way."
        }
      ]
    },

    /* ───────────── 5 · the camps and the Final Solution ───────────── */
    {
      key: "camps-final-solution", n: 5, title: "The camps, and the Final Solution of 1941-1945",
      lead: "How the camps began and how their purpose changed, the lies the Nazis told to get people onto the trains, and how the persecution became the organised mass murder the Nazis called the Final Solution.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "concentration camp", means: "a camp where people were imprisoned without trial and forced to work", sentence: "The first concentration camp in Germany was Dachau, opened in 1933." },
          { word: "deportation", means: "being forced out of your home and taken somewhere else by the state", sentence: "Deportation to the camps was carried out by train." },
          { word: "deception", means: "deliberately making people believe something that is not true", sentence: "The Nazis used deception to persuade people that they were being resettled." },
          { word: "Einsatzgruppen", means: "the Nazi killing squads sent into Eastern Europe after the invasion of the Soviet Union", sentence: "The Einsatzgruppen followed the German army into the Soviet Union in 1941." },
          { word: "extermination camp", means: "a camp built by the Nazis for the purpose of murdering the people brought to it", sentence: "The extermination camps were built in occupied Poland." },
          { word: "liberated", means: "set free by an army that has defeated the people in control", sentence: "The camps were liberated by the Allies in 1945." }
        ],
        passage: [
          "The first camps were opened in Germany in 1933.",
          "Dachau held political prisoners who disagreed with the Nazis.",
          "People were imprisoned without trial and forced to work.",
          "As Germany occupied other countries, it built camps there too.",
          "Jewish people and Roma people were now sent to the camps.",
          "The Nazis lied about where the trains were going.",
          "Families were told they were being resettled in the east.",
          "They wrote their names and addresses on their suitcases.",
          "They believed they would need their belongings again.",
          "In 1941 the purpose of the camps changed.",
          "The Nazis began the organised mass murder they called the Final Solution.",
          "The camps were liberated by the Allies in 1945.",
          "Survivors went home to find their towns ruined and their families gone."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "معسكر سُجن فيه الناس بغير محاكمة وأُرغموا على العمل (concentration camp)",
            "أن تُرغَم على الخروج من بيتك وتأخذك الدولة إلى مكان آخر (deportation)",
            "أن تجعل الناس يعتقدون عن قصد شيئًا غير صحيح (deception)",
            "فِرَق القتل النازية التي أُرسلت إلى شرق أوروبا بعد غزو الاتّحاد السوفييتي (Einsatzgruppen)",
            "معسكر بناه النازيون بقصد قتل الناس الذين يُؤتى بهم إليه (extermination camp)",
            "أُطلق سراحه بجيش هزم من كانوا مسيطرين (liberated)"
          ],
          "passage": [
            "افتُتحت أوّل المعسكرات في ألمانيا في 1933.",
            "وكان داخاو (Dachau) يضمّ سجناء سياسيّين خالفوا النازيين.",
            "وكان الناس يُسجنون بغير محاكمة ويُرغمون على العمل.",
            "وكلّما احتلّت ألمانيا بلدانًا أخرى بنت فيها معسكرات أيضًا.",
            "وصار الناس اليهود والناس الروما يُرسلون الآن إلى المعسكرات.",
            "وكذب النازيون على الناس في أمر مقصد القطارات.",
            "وقيل للأسر إنهم يُنقلون للسكن في الشرق.",
            "فكتبوا أسماءهم وعناوينهم على حقائبهم.",
            "وكانوا يعتقدون أنهم سيحتاجون إلى أمتعتهم من جديد.",
            "وفي 1941 تغيّر الغرض من المعسكرات.",
            "وبدأ النازيون القتل الجماعي المنظّم الذي سمّوه الحلّ النهائي (Final Solution).",
            "وحرّر الحلفاء المعسكرات في 1945.",
            "وعاد الناجون إلى بيوتهم فوجدوا بلداتهم خرابًا وأسرهم قد ذهبت."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "obóz, w którym ludzi więziono bez sądu i zmuszano do pracy (concentration camp)",
            "przymusowe wywiezienie z domu i przeniesienie gdzie indziej przez państwo (deportation)",
            "celowe wmawianie ludziom czegoś, co nie jest prawdą (deception)",
            "nazistowskie oddziały zabijające, wysłane do Europy Wschodniej po najeździe na Związek Radziecki (Einsatzgruppen)",
            "obóz zbudowany przez nazistów w tym celu, żeby mordować przywożonych do niego ludzi (extermination camp)",
            "uwolniony przez armię, która pobiła tych, co sprawowali kontrolę (liberated)"
          ],
          "passage": [
            "Pierwsze obozy otwarto w Niemczech w 1933 roku.",
            "W Dachau trzymano więźniów politycznych, którzy nie zgadzali się z nazistami.",
            "Ludzi więziono bez sądu i zmuszano do pracy.",
            "Kiedy Niemcy zajmowały inne kraje, budowały obozy także tam.",
            "Do obozów wysyłano teraz Żydów i Romów.",
            "Naziści kłamali o tym, gdzie jadą pociągi.",
            "Rodzinom mówiono, że są przesiedlane na wschód.",
            "Pisali swoje imiona i adresy na walizkach.",
            "Wierzyli, że ich rzeczy znowu będą im potrzebne.",
            "W 1941 roku cel obozów się zmienił.",
            "Naziści zaczęli zorganizowane masowe mordowanie, które nazywali Ostatecznym Rozwiązaniem.",
            "Obozy zostały wyzwolone przez aliantów w 1945 roku.",
            "Ocaleni wracali do domów i znajdowali swoje miasta w ruinie, a swoich rodzin już nie było."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um campo onde as pessoas eram presas sem julgamento e obrigadas a trabalhar (concentration camp, campo de concentração)",
            "ser obrigado a sair de casa e levado para outro lugar pelo Estado (deportation, deportação)",
            "fazer de propósito com que as pessoas acreditem em algo que não é verdade (deception, engano)",
            "os esquadrões de morte nazis/nazistas enviados para a Europa de Leste depois da invasão da União Soviética (Einsatzgruppen)",
            "um campo construído pelos nazis/nazistas com o objetivo de assassinar as pessoas que eram levadas para lá (extermination camp, campo de extermínio)",
            "libertado por um exército que derrotou quem tinha o controlo/controle (liberated, libertado)"
          ],
          "passage": [
            "Os primeiros campos foram abertos na Alemanha em 1933.",
            "Dachau tinha presos políticos que discordavam dos nazis/nazistas.",
            "As pessoas eram presas sem julgamento e obrigadas a trabalhar.",
            "À medida que a Alemanha ocupava outros países, construía campos também lá.",
            "As pessoas judias e as pessoas Roma passaram a ser enviadas para os campos.",
            "Os nazis/nazistas mentiram sobre o destino dos trens/comboios.",
            "Dizia-se às famílias que iam ser reinstaladas no leste.",
            "Elas escreviam os seus nomes e endereços nas malas.",
            "Acreditavam que iriam precisar outra vez das suas coisas.",
            "Em 1941 a finalidade dos campos mudou.",
            "Os nazis/nazistas começaram o assassinato em massa organizado a que chamaram a Solução Final.",
            "Os campos foram libertados pelos Aliados em 1945.",
            "Os sobreviventes voltaram a casa e encontraram as suas vilas em ruínas e as suas famílias desaparecidas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xero dad lagu xiray iyadoon maxkamad la geyn oo lagu qasbay inay shaqeeyaan",
            "in lagu qasbo inaad gurigaaga ka baxdo oo dowladdu meel kale kuu qaado",
            "si ula kac ah in dadka wax been ah loo rumaysiiyo",
            "kooxihii dilka ee Nazi oo loo diray bariga Yurub kadib markii Midowga Soofiyeeti lagu duulay",
            "xero Nazis-ku u dhiseen ujeeddo ah in dadka loo keenay la dilo",
            "waa la xorreeyay ciidan ka adkaaday kuwa xukunka hayay"
          ],
          "passage": [
            "Xeryihii ugu horreeyay waxaa Jarmalka laga furay 1933-kii.",
            "Dachau waxay haysay maxaabiis siyaasadeed oo Nazis-ka ka duwanaa.",
            "Dadka waa la xiray iyadoon maxkamad la geyn, waxaana lagu qasbay inay shaqeeyaan.",
            "Markii Jarmalku dalal kale qabsaday, xeryo halkaas ayuu sidoo kale ka dhisay.",
            "Dadka Yuhuudda iyo dadka Roma ah hadda waxaa loo diray xeryaha.",
            "Nazis-ku waxay been ka sheegeen halka tareennadu u socdeen.",
            "Qoysaska waxaa loo sheegay in bariga lagu dejinayo.",
            "Magacyadooda iyo cinwaannadooda waxay shandadahooda ku qoreen.",
            "Waxay rumaysnaayeen inay alaabtooda mar kale u baahan doonaan.",
            "1941-kii ujeeddada xeryaha way isbeddeshay.",
            "Nazis-ku waxay bilaabeen dilka abaabulan ee tirada badan ee ay ugu yeereen Final Solution.",
            "Xeryaha waxaa xorreeyay Allies-ku 1945-kii.",
            "Kuwa badbaaday waxay guryahooda u noqdeen oo waxay heleen magaalooyinkooda burburay iyo qoysaskooda la waayay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "табір, де людей тримали ув’язненими без суду і змушували працювати (concentration camp)",
            "коли держава силою забирає людину з її дому і відвозить кудись інде (deportation)",
            "навмисне змушування людей вірити в те, що не є правдою (deception)",
            "нацистські загони вбивць, послані до Східної Європи після нападу на Радянський Союз (Einsatzgruppen)",
            "табір, побудований нацистами для того, щоб убивати людей, яких до нього привозили (extermination camp)",
            "звільнений військом, яке перемогло тих, хто тримав владу (liberated)"
          ],
          "passage": [
            "Перші табори відкрили в Німеччині у 1933 році.",
            "У Дахау тримали політичних ув’язнених, які не погоджувалися з нацистами.",
            "Людей тримали ув’язненими без суду і змушували працювати.",
            "Що більше Німеччина займала інших країн, то більше таборів вона будувала і там.",
            "Тепер до таборів відправляли євреїв і ромів.",
            "Нацисти брехали про те, куди йдуть поїзди.",
            "Родинам казали, що їх переселяють на схід.",
            "Вони писали свої імена й адреси на своїх валізах.",
            "Вони вірили, що їхні речі знову будуть їм потрібні.",
            "У 1941 році призначення таборів змінилося.",
            "Нацисти почали організоване масове вбивство, яке вони називали остаточним вирішенням (the Final Solution).",
            "Табори звільнили союзники у 1945 році.",
            "Ті, хто вижив, повертались додому і знаходили свої містечка зруйнованими, а своїх родин уже не було."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ کیمپ جہاں لوگوں کو مقدمے کے بغیر قید رکھا جاتا اور ان سے زبردستی کام کرایا جاتا تھا (concentration camp)",
            "ریاست کے ہاتھوں اپنے گھر سے زبردستی نکالا جانا اور کہیں اور لے جایا جانا (deportation)",
            "جان بوجھ کر لوگوں کو ایسی بات منوانا جو سچ نہ ہو (deception)",
            "نازیوں کے قتل کرنے والے دستے، جو سوویت یونین پر حملے کے بعد مشرقی یورپ بھیجے گئے (Einsatzgruppen)",
            "وہ کیمپ جو نازیوں نے اس مقصد کے لیے بنایا کہ وہاں لائے گئے لوگوں کو قتل کیا جائے (extermination camp)",
            "اُس فوج کے ہاتھوں آزاد کرایا جانا جس نے قابو رکھنے والوں کو ہرا دیا ہو (liberated)"
          ],
          "passage": [
            "پہلے کیمپ 1933 میں جرمنی میں کھولے گئے۔",
            "Dachau میں وہ سیاسی قیدی رکھے گئے جو نازیوں سے اختلاف کرتے تھے۔",
            "لوگوں کو مقدمے کے بغیر قید رکھا جاتا اور ان سے زبردستی کام کرایا جاتا تھا۔",
            "جیسے جیسے جرمنی نے دوسرے ملکوں پر قبضہ کیا، وہاں بھی کیمپ بنائے۔",
            "اب یہودی لوگوں اور روما لوگوں کو کیمپوں میں بھیجا جانے لگا۔",
            "نازیوں نے جھوٹ بولا کہ ریل گاڑیاں کہاں جا رہی ہیں۔",
            "خاندانوں کو بتایا گیا کہ انھیں مشرق میں دوبارہ آباد کیا جا رہا ہے۔",
            "انھوں نے اپنے سوٹ کیسوں پر اپنے نام اور پتے لکھ دیے۔",
            "ان کا یقین تھا کہ ان کا سامان انھیں دوبارہ درکار ہوگا۔",
            "1941 میں کیمپوں کا مقصد بدل گیا۔",
            "نازیوں نے وہ منظم قتلِ عام شروع کیا جسے وہ Final Solution کہتے تھے۔",
            "یہ کیمپ 1945 میں اتحادیوں نے آزاد کرائے۔",
            "جو بچ گئے، وہ گھر پہنچے تو ان کے قصبے اجڑے ہوئے اور ان کے خاندان جا چکے تھے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "How the camps began, and how their purpose changed",
          paragraphs: [
            "The camps did not start as places of murder. They were set up inside Germany as forced-labour camps, and at first the people in them were not Jewish. The first was Dachau, in Germany, which opened on 22 March 1933, only weeks after the Nazis took power, and held political prisoners. Your lesson is clear about what the camps were for in the 1930s: to imprison and frighten anyone who disagreed with the Nazi regime, and then to work them for the benefit of the state.",
            "As Germany occupied other countries, it built camps in them, including in Poland, Austria and Czechoslovakia. The prisoners were no longer only political opponents: now they included the people the Nazis called racially inferior, which meant Jewish and Roma people. By 1942 Germany had a shortage of workers, and sub-camps were built next to factories and mines so that prisoners could be used as free labour. SS officers were told to keep those prisoners alive because they were needed for the work, and many ignored the instruction. Prisoners were worked until they could work no longer.",
            "The decisive change came in 1941. Before that year the camps were about imprisonment and labour; from that year the Nazis set out to murder the people they sent there. Keeping those two phases apart is one of the things your assessment will test."
          ],
          worked: {
            q: "Explain one way in which the purpose of the concentration camps changed between 1933 and 1942.",
            steps: [
              "Point: the purpose changed from imprisoning political opponents to working and then murdering the people the Nazis had decided to destroy.",
              "Evidence from the start: Dachau opened in March 1933 for political prisoners, to frighten anyone who disagreed with the regime.",
              "Evidence from later: by 1942 sub-camps were built beside factories and mines to use prisoners, now including Jewish and Roma people, as free labour.",
              "Explain the link: as Germany occupied more countries and then needed more workers, the camps grew into a system, and from 1941 they were used for murder as well as labour."
            ],
            answer: "The camps began as prisons for political opponents and became a system of forced labour for the groups the Nazis persecuted, and from 1941 a system of murder."
          },
          tip: "Dates do the work here: 1933 political prisoners; 1939 onwards camps in occupied countries; 1941 the purpose changes; 1942 sub-camps for labour."
        },
        {
          heading: "Deception and deportation",
          paragraphs: [
            "The Nazis knew that people would not walk calmly onto a train if they knew where it went, so they lied. Deportations were described as a resettlement of the Jewish population in labour camps in the east. Your lesson makes a point that is easy to miss: the word Auschwitz meant nothing frightening to European Jewish families in the 1930s and early 1940s, because nobody outside knew what was being done there. Many people believed they were going to a better life.",
            "That is why there are names and addresses written on the suitcases in the photographs. People packed as if they were moving house, and labelled their luggage so that it could be returned to them. They were then forced into sealed cattle trucks, overcrowded, without enough food or water, and many died before the trains reached their destination.",
            "Two of the people your lesson names made that journey. Leo Schneiderman arrived at Auschwitz from the Lodz ghetto in Poland, which was destroyed in 1944. Kitty Hart-Moxon was sixteen when she arrived at Auschwitz-Birkenau in 1943; she survived, and has spent her life since telling people what was done there. When you write about deportation, write about them: a sixteen-year-old girl and a man from Lodz, not a cargo."
          ],
          tip: "The suitcases are the best single piece of evidence for Nazi deception. One detail, well explained, is worth a paragraph of general description."
        },
        {
          heading: "The Final Solution, 1941-1945",
          paragraphs: [
            "The Final Solution was the Nazis' name for an organised effort to murder everyone they considered unworthy of life in Europe. Six million European Jewish people were murdered, and so were disabled people, gay people and black people. Your lesson divides the plan into two phases. The first began in June 1941, when Germany invaded the Soviet Union. As in Poland two years earlier, the invasion brought a very large Jewish population under Nazi control.",
            "In that first phase the killing was done by the Einsatzgruppen, Nazi death squads sent into Eastern Europe behind the army, whose task was to kill the Jewish people they could find. By the end of 1943 they had killed over 1.5 million people. This was the beginning of targeted, organised mass murder, and it was carried out by units whose members had been given their orders and followed them.",
            "The second phase began in 1942, when Nazi officials agreed to murder the Jewish people of Europe in camps, using poison gas. Six extermination camps were built, and people were brought to them from the ghettos and from towns and cities all over Europe. A leading Nazi official explained at his trial after the war why they changed method: shooting on that scale was slow, needed too many men and too much ammunition, and was too hard on the officers ordered to do it. He is not describing something that happened to him. He is describing a decision that he and others took, and the reason they took it was efficiency. The camps were liberated as Germany was defeated, and the Holocaust, which is also called the Shoah, ended on 8 May 1945. Many survivors walked across Europe to the places they had once called home, and found them ruined and their families gone."
          ],
          tip: "Phase 1: the Einsatzgruppen, from 1941. Phase 2: the extermination camps, from 1942. Name the phase, the method and the year every time."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was the purpose of the first concentration camps, set up in Germany in the 1930s?", options: ["To imprison and frighten people who disagreed with the Nazi regime, and to force them to work", "To murder the Jewish people of Europe", "To house German soldiers during the war", "To hold Allied prisoners of war"], answer: 0, why: "The earliest camps, such as Dachau in 1933, held political prisoners. Their purpose was to imprison and intimidate opponents of the regime and to use them as forced labour.",
          feedback: [
            "",
            "That came later. The purpose of the camps changed in 1941, and the extermination camps were agreed in 1942. In the 1930s the camps held political prisoners, not Jewish people.",
            "Camps were prisons, not barracks. German soldiers were housed by the army; the camps held people the regime wanted locked up and put to work.",
            "Prisoners of war were held in separate military camps. The concentration camps of the 1930s were for the regime's own opponents, and later for the groups it persecuted."
          ] },
        { kind: "gap", q: "The Nazi plan, agreed in 1942, to murder the Jewish people of Europe was called the ___ Solution.", answer: "Final", options: ["Final", "Eastern", "Total"], why: "The Nazis called their plan the Final Solution. Historians keep the Nazis' own name for it, in order to be exact about what was decided and when.",
          feedback: {
            "Eastern": "The killing took place mainly in the east, and the lie told to people was that they were being resettled in the east, but the Nazis' name for the plan itself was the Final Solution.",
            "Total": "Total war is a different idea, about a whole country being turned over to fighting a war. The name the Nazis gave to their plan to murder Europe's Jewish people was the Final Solution."
          } },
        { kind: "mcq", q: "Why did many Jewish families not know what was waiting for them when they were deported?", options: ["The Nazis lied, describing the deportations as resettlement in labour camps in the east", "They had been told the truth but chose not to believe it", "Newspapers across Europe had reported the camps in full", "Almost nobody was moved by train, so there was nothing to notice"], answer: 0, why: "The Nazis deliberately disguised what they were doing. People were told they were being resettled, and the names of the camps meant nothing to them, which is why they labelled their suitcases.",
          feedback: [
            "",
            "People were not told the truth. The deportations were described as resettlement, the camps' names meant nothing yet, and the Nazis worked hard to keep it that way.",
            "The camps were kept secret, and when a detailed report did reach Britain and America in 1944 it was doubted and set aside for months. There was no full reporting at the time.",
            "Deportation by sealed train was exactly how the Nazis moved people across Europe. The photographs of labelled suitcases come from those journeys."
          ] }
      ],
      modules: [
        {
          title: "The road to the Final Solution",
          task: {
            kind: "order",
            q: "Put these events in chronological order.",
            items: [
              "Germany invades Poland and the first ghettos are set up (1939)",
              "Germany invades the Soviet Union and the Einsatzgruppen are sent east (1941)",
              "Nazi officials agree the Final Solution and the extermination camps are used (1942)",
              "The Vrba Report reaches Britain and America (1944)",
              "The camps are liberated by the Allies and the Holocaust ends (1945)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Each event has its year in brackets. Read all five years first.",
                "Find the smallest year: that event comes first.",
                "Cross it off and find the next smallest, and so on.",
                "Check the story makes sense: invasions, then the plan, then the report reaching the Allies, then liberation."
              ],
              example: {
                q: "Put these in chronological order: the Battle of Britain (1940); the invasion of Normandy (1944); Germany invades Poland (1939).",
                steps: ["Read the three years.", "1939 is smallest, so Poland comes first.", "Then 1940, then 1944."],
                answer: "Germany invades Poland; the Battle of Britain; the invasion of Normandy."
              }
            },
            core: { hint: "Smallest year first. The two invasions come before the plan, and liberation comes last." },
            stretch: { extend: "Explain how each of the first three events made the next one more likely, without suggesting that any of them had to happen." }
          },
          explain: "Say, in one sentence, why 1941 is the year historians treat as the turning point.",
          why: "1939, 1941, 1942, 1944, 1945. The order matters because it shows the murder being organised after each new conquest brought more people under Nazi control, and the Allies learning in detail only in 1944."
        },
        {
          title: "Counting the years",
          task: {
            kind: "numeric",
            q: "The first ghettos were set up in Poland in 1939. Nazi officials agreed the Final Solution in 1942. How many years passed between them?",
            answer: 3, tolerance: 0, units: "years",
            why: "1942 - 1939 = 3. Three years passed between the first ghettos and the decision to murder the people held in them, which is why historians study what changed in between.",
            check: "1942 - 1939",
            misconceptions: [
              { answer: 2, says: "You have probably counted the whole years in between, 1940 and 1941, instead of subtracting. Take 1939 from 1942: 1942 - 1939 = 3.", check: "1942 - 1939 - 1" },
              { answer: 6, says: "That is 1945 - 1939, the gap between the first ghettos and the end of the Holocaust. The Final Solution was agreed in 1942, so the gap here is 3 years.", check: "1945 - 1939" }
            ]
          },
          contexts: [
            { label: "Laws to violence", q: "The Nuremberg Laws were passed in 1935 and Kristallnacht took place in 1938. How many years passed between them?", check: "1938 - 1935" },
            { label: "Plan to liberation", q: "Nazi officials agreed the Final Solution in 1942, and the camps were liberated in 1945. How many years passed between them?", check: "1945 - 1942" },
            { label: "Invasion to report", q: "Germany invaded the Soviet Union in 1941, and the Vrba Report reached Britain and America in 1944. How many years passed between them?", check: "1944 - 1941" }
          ],
          levels: {
            support: {
              steps: [
                "Write the later year first: 1942.",
                "Subtract the earlier year: 1942 - 1939.",
                "The thousands and hundreds cancel, so you only need 42 - 39 = 3.",
                "Check it is sensible: three years is less than the length of the war."
              ],
              example: {
                q: "Germany invaded Poland in 1939 and the Normandy landings took place in 1944. How many years passed between them?",
                steps: ["Later year first: 1944.", "Subtract the earlier year: 1944 - 1939.", "44 - 39 = 5."],
                answer: "5 years",
                checks: [{ expr: "1944 - 1939", value: 5, tol: 0 }]
              }
            },
            core: { hint: "Later year minus earlier year. Do not use 1945; that is liberation, not the decision." },
            stretch: { extend: "Explain what those three years tell you about how the Nazis' policy developed, using the ghettos, the invasion of the Soviet Union and the Einsatzgruppen." }
          },
          explain: "Say, in one sentence, what changed for the Nazis between 1939 and 1942.",
          why: "1942 - 1939 = 3 years. In that short time the policy moved from shutting people into ghettos to deciding to murder them, which is why the chronology is worth knowing precisely."
        },
        {
          title: "What changed after 1941?",
          task: {
            kind: "written",
            q: "Explain one way in which the treatment of the Jewish community was different between 1939 and 1941 and between 1941 and 1945. Use evidence from both periods. Write one paragraph of five to seven sentences.",
            criteria: [
              "I say clearly what the difference is in my first sentence.",
              "I give evidence from 1939 to 1941, such as the ghettos, forced labour or the Nazis calling the ghettos temporary.",
              "I give evidence from 1941 to 1945, such as the Einsatzgruppen or the extermination camps agreed in 1942.",
              "I use a connective such as whereas or by contrast to move between the two periods.",
              "I finish by explaining why the change happened, using the invasion of the Soviet Union or the Nazis' own search for a faster method."
            ],
            model: "One way in which the treatment of the Jewish community was different is that between 1939 and 1941 the Nazis imprisoned people, whereas between 1941 and 1945 they set out to murder them. For example, between 1939 and 1941 Jewish families in occupied Poland were shut into ghettos such as Warsaw, where they were starved and forced to work, and the Nazis themselves described these ghettos as a temporary measure. By contrast, from June 1941 the Einsatzgruppen were sent into the Soviet Union with orders to kill the Jewish people they found, and in 1942 Nazi officials agreed to murder the Jewish people of Europe in camps built for that purpose. The reason for this change was that each new conquest brought far more people under Nazi control, and the Nazis chose murder rather than any other answer to what they called the Jewish Problem. A leading official later explained at his trial that they turned to gas because shooting was too slow and too hard on the men ordered to do it. That explanation is important, because it shows that the change of method was a decision taken by people who could have chosen otherwise."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: One way in which the treatment was different is that between 1939 and 1941... whereas between 1941 and 1945...",
                "Sentence 2: For example, between 1939 and 1941... and give one piece of evidence.",
                "Sentence 3: By contrast, between 1941 and 1945... and give one piece of evidence.",
                "Last sentence: The reason for this change was... and name the invasion of the Soviet Union or the Nazis' search for a faster method."
              ],
              example: {
                q: "Explain one way in which the treatment of Jewish people in Germany was different in 1933 and in 1938. Use evidence from both years.",
                steps: ["State the difference: pressure in 1933, open violence in 1938.", "Evidence for 1933: the April boycott of Jewish-owned shops.", "Evidence for 1938: the organised attacks of Kristallnacht.", "Reason for the change: the Nazis were now willing to organise violence themselves."],
                answer: "Pressure and boycotts in 1933, whereas by 1938 the state organised violence; the reason is the Party's decision to use violence openly."
              }
            },
            core: { hint: "One difference, one piece of evidence from each period, then the reason. Use whereas to turn the corner." },
            stretch: { extend: "Explain why historians disagree about whether the Final Solution was always the Nazis' plan or developed as the war went on, and which evidence from this chapter supports each view." }
          },
          explain: "Say, in one sentence, what evidence shows that the change after 1941 was a decision and not an accident.",
          why: "Between 1939 and 1941 the policy was segregation, forced labour and ghettos the Nazis called temporary. From 1941 it was organised killing: the Einsatzgruppen, then the extermination camps agreed in 1942. The strongest answers explain the reason for the change and name it as a choice."
        }
      ]
    },

    /* ───────────── 6 · responsibility, and reading the sources ───────────── */
    {
      key: "responsibility-sources", n: 6, title: "Who was responsible, and how do we read the sources?",
      lead: "Perpetrators, bystanders and rescuers; the trials that followed the war; the question of what Britain and America did; and the four-step method your assessment uses to read a source.",
      covers: [5, 6],
      pretext: {
        words: [
          { word: "perpetrator", means: "a person who took part in what was done", sentence: "A guard, a clerk and an engineer could all be perpetrators." },
          { word: "bystander", means: "a person who stood by and let it happen", sentence: "A neighbour who watched and said nothing was a bystander." },
          { word: "rescuer", means: "a person who did something to help those being persecuted", sentence: "A rescuer might hide a family at great risk to themselves." },
          { word: "origin", means: "who made a source, when they made it and where it came from", sentence: "The origin of the source is a Nazi minister writing in 1938." },
          { word: "purpose", means: "why a source was made, and what it wants you to believe", sentence: "The purpose of a propaganda poster is to change what people think." }
        ],
        passage: [
          "The Holocaust was too large for one person to carry out alone.",
          "It needed the police, the railways, the army and the civil service.",
          "It needed clerks who wrote lists and businesses that took the contracts.",
          "A perpetrator is a person who took part in what was done.",
          "A bystander is a person who stood by and let it happen.",
          "A rescuer is a person who did something to help.",
          "Every one of those people made a choice.",
          "After the war, leading Nazis were tried at Nuremberg.",
          "Adolf Eichmann escaped and hid in Argentina until 1960.",
          "At his trial he said he had only been following orders.",
          "Historians ask what Britain and America knew, and when.",
          "To answer questions like these we have to read sources carefully.",
          "We ask about the content, the nature, the origin and the purpose."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شخص شارك في ما فُعل (perpetrator)",
            "شخص وقف موقف المشاهد وتركه يحدث (bystander)",
            "شخص فعل شيئًا لمساعدة المُضطهَدين (rescuer)",
            "مَن صنع المصدر، ومتى صنعه، ومن أين جاء (origin)",
            "لماذا صُنع المصدر، وما يريد منك أن تعتقده (purpose)"
          ],
          "passage": [
            "كان الهولوكوست أكبر من أن ينفّذه شخص واحد وحده.",
            "فقد احتاج إلى الشرطة والسكك الحديدية والجيش والجهاز الإداري.",
            "واحتاج إلى كتبة يكتبون القوائم وشركات تأخذ العقود.",
            "والمُشارك هو شخص شارك في ما فُعل.",
            "والمشاهد هو شخص وقف موقف المشاهد وتركه يحدث.",
            "والمُنجِد هو شخص فعل شيئًا للمساعدة.",
            "وكلّ واحد من أولئك الناس اتّخذ خيارًا.",
            "وبعد الحرب حُوكم كبار النازيين في نورمبرغ.",
            "وهرب أدولف آيخمان (Adolf Eichmann) واختفى في الأرجنتين حتى 1960.",
            "وقال في محاكمته إنه لم يكن إلّا يتبع الأوامر.",
            "والمؤرّخون يسألون ما الذي عرفته بريطانيا وأمريكا ومتى عرفته.",
            "ولنجيب أسئلةً كهذه علينا أن نقرأ المصادر بعناية.",
            "فنسأل عن المحتوى وعن الطبيعة وعن المَنشأ وعن الغرض."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "osoba, która brała udział w tym, co zrobiono (perpetrator)",
            "osoba, która stała z boku i pozwoliła, żeby to się stało (bystander)",
            "osoba, która zrobiła coś, żeby pomóc prześladowanym (rescuer)",
            "kto zrobił źródło, kiedy je zrobił i skąd ono pochodzi (origin)",
            "dlaczego źródło zostało zrobione i w co chce, żebyś uwierzył (purpose)"
          ],
          "passage": [
            "Holokaust był za wielki, żeby jedna osoba mogła go przeprowadzić sama.",
            "Potrzebował policji, kolei, armii i urzędów państwowych.",
            "Potrzebował urzędników, którzy pisali listy, i firm, które brały zlecenia.",
            "Sprawca to osoba, która brała udział w tym, co zrobiono.",
            "Świadek bierny to osoba, która stała z boku i pozwoliła, żeby to się stało.",
            "Ratujący to osoba, która zrobiła coś, żeby pomóc.",
            "Każdy z tych ludzi dokonał wyboru.",
            "Po wojnie czołowych nazistów sądzono w Norymberdze (Nuremberg).",
            "Adolf Eichmann uciekł i ukrywał się w Argentynie do 1960 roku.",
            "Na swoim procesie powiedział, że tylko wykonywał rozkazy.",
            "Historycy pytają, co wiedziały Wielka Brytania i Ameryka, i od kiedy.",
            "Żeby odpowiedzieć na takie pytania, musimy uważnie czytać źródła.",
            "Pytamy o treść, o charakter, o pochodzenie i o cel."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma pessoa que participou naquilo que foi feito (perpetrator, perpetrador)",
            "uma pessoa que ficou a assistir e deixou acontecer (bystander)",
            "uma pessoa que fez algo para ajudar quem estava a ser perseguido (rescuer)",
            "quem fez uma fonte, quando a fez e de onde ela veio (origin, origem)",
            "porque é que uma fonte foi feita, e aquilo em que ela quer que acredites (purpose, propósito)"
          ],
          "passage": [
            "O Holocausto era demasiado grande para uma só pessoa o levar a cabo sozinha.",
            "Foram precisos a polícia, as ferrovias/os caminhos de ferro, o exército e a função pública.",
            "Foram precisos escriturários que fizeram listas e empresas que aceitaram os contratos.",
            "Um perpetrador é uma pessoa que participou naquilo que foi feito.",
            "Um bystander é uma pessoa que ficou a assistir e deixou acontecer.",
            "Um rescuer é uma pessoa que fez algo para ajudar.",
            "Cada uma dessas pessoas fez uma escolha.",
            "Depois da guerra, os principais nazis/nazistas foram julgados em Nuremberga/Nuremberg.",
            "Adolf Eichmann escapou e esteve escondido na Argentina até 1960.",
            "No seu julgamento disse que só tinha cumprido ordens.",
            "Os historiadores perguntam o que é que a Grã-Bretanha e os Estados Unidos sabiam, e desde quando.",
            "Para responder a perguntas como estas temos de ler as fontes com atenção.",
            "Perguntamos pelo conteúdo, pela natureza, pela origem e pelo propósito."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qof ka qaybqaatay waxa la sameeyay",
            "qof dhinac istaagay oo u ogolaaday inuu dhaco",
            "qof wax sameeyay si uu u caawiyo kuwa la silcinayay",
            "cidda isha samaysay, goorta ay samaysay iyo halka ay ka timid",
            "sababta isha loo sameeyay, iyo waxa ay rabto inaad rumaysato"
          ],
          "passage": [
            "Holocaust-ku aad ayuu u weynaa in hal qof kali ahaantii fuliyo.",
            "Wuxuu u baahnaa booliiska, jidadka tareenka, ciidanka iyo shaqaalaha dowladda.",
            "Wuxuu u baahnaa karraaniyo liisas qoray iyo ganacsiyo qandaraasyada qaatay.",
            "Perpetrator waa qof ka qaybqaatay waxa la sameeyay.",
            "Bystander waa qof dhinac istaagay oo u ogolaaday inuu dhaco.",
            "Rescuer waa qof wax sameeyay si uu u caawiyo.",
            "Mid kasta oo dadkaas ka mid ah doorasho ayuu sameeyay.",
            "Dagaalka kadib, Nazis-ka sare waxaa la maxkamadeeyay Nuremberg.",
            "Adolf Eichmann wuu baxsaday oo Argentina ayuu ku dhuumaalaystay ilaa 1960-kii.",
            "Maxkamaddiisa wuxuu sheegay inuu oo keliya amarro raacayay.",
            "Taariikhyahannadu waxay weydiiyaan waxa Biritayn iyo Ameerika ogaayeen, iyo goorta.",
            "Si aan su'aalaha noocaas ah uga jawaabno waa inaan ilaha si taxaddar leh u akhrinnaa.",
            "Waxaan weydiinnaa content-ka, nature-ka, origin-ka iyo purpose-ka."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "людина, яка брала участь у тому, що було зроблено (perpetrator)",
            "людина, яка стояла осторонь і дала цьому статися (bystander)",
            "людина, яка зробила щось, щоб допомогти тим, кого переслідували (rescuer)",
            "хто створив джерело, коли його створив і звідки воно взялося (origin)",
            "чому джерело створили і в що воно хоче, щоб ви вірили (purpose)"
          ],
          "passage": [
            "Голокост був надто великим, щоб одна людина здійснила його сама.",
            "Для нього були потрібні поліція, залізниці, військо і державна служба.",
            "Були потрібні канцеляристи, які писали списки, і підприємства, які брали замовлення.",
            "Виконавець (perpetrator) — це людина, яка брала участь у тому, що було зроблено.",
            "Сторонній спостерігач (bystander) — це людина, яка стояла осторонь і дала цьому статися.",
            "Рятівник (rescuer) — це людина, яка зробила щось, щоб допомогти.",
            "Кожна з цих людей зробила вибір.",
            "Після війни провідних нацистів судили в Нюрнберзі.",
            "Адольф Айхман утік і переховувався в Аргентині до 1960 року.",
            "На своєму суді він казав, що лише виконував накази.",
            "Історики питають, що знали Британія і Америка і коли вони це знали.",
            "Щоб відповідати на такі запитання, ми мусимо читати джерела уважно.",
            "Ми питаємо про зміст, природу, походження і призначення джерела."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ شخص جو اُس کام میں شامل تھا جو کیا گیا (perpetrator)",
            "وہ شخص جو کھڑا دیکھتا رہا اور اسے ہونے دیا (bystander)",
            "وہ شخص جس نے ستائے جانے والوں کی مدد کے لیے کچھ کیا (rescuer)",
            "کوئی source کس نے بنایا، کب بنایا اور وہ کہاں سے آیا (origin)",
            "کوئی source کیوں بنایا گیا، اور وہ آپ سے کیا منوانا چاہتا ہے (purpose)"
          ],
          "passage": [
            "ہولوکاسٹ اتنا بڑا تھا کہ کوئی ایک شخص اسے اکیلا نہ کر سکتا تھا۔",
            "اس کے لیے پولیس، ریلوے، فوج اور سرکاری محکمے درکار تھے۔",
            "اس کے لیے وہ کلرک درکار تھے جو فہرستیں لکھتے، اور وہ کاروبار جو ٹھیکے لیتے تھے۔",
            "perpetrator وہ شخص ہے جو اُس کام میں شامل تھا جو کیا گیا۔",
            "bystander وہ شخص ہے جو کھڑا دیکھتا رہا اور اسے ہونے دیا۔",
            "rescuer وہ شخص ہے جس نے مدد کے لیے کچھ کیا۔",
            "ان میں سے ہر شخص نے ایک انتخاب کیا۔",
            "جنگ کے بعد بڑے نازی رہنماؤں پر Nuremberg میں مقدمے چلائے گئے۔",
            "ایڈولف آئخمان (Adolf Eichmann) بچ نکلا اور 1960 تک ارجنٹینا میں چھپا رہا۔",
            "اپنے مقدمے میں اس نے کہا کہ وہ صرف حکم مان رہا تھا۔",
            "مؤرخ پوچھتے ہیں کہ برطانیہ اور امریکہ کو کیا معلوم تھا، اور کب معلوم تھا۔",
            "ایسے سوالوں کے جواب کے لیے ہمیں sources کو احتیاط سے پڑھنا پڑتا ہے۔",
            "ہم اس کے content، nature، origin اور purpose کے بارے میں پوچھتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Perpetrators, bystanders and rescuers",
          paragraphs: [
            "A perpetrator is a person who took part in what was done. A bystander is a person who stood by and let it happen. A rescuer is a person who did something to help those who were being persecuted, and a victim is a person harmed or killed by what was done. Those four words are the tools your lesson gives you for thinking about responsibility.",
            "It is impossible for one person to carry out an operation the size of the Holocaust alone. It was only possible because it was organised and paid for by a state, which means it needed many groups: the SS and the police, the army, the railways that ran the trains, the civil servants who wrote the lists and the orders, and German businesses and industry that supplied and profited. Your lesson asks you to decide how much responsibility each of those groups should carry.",
            "That is a difficult question, and historians disagree about it. A guard at Auschwitz, a clerk compiling lists, a neighbour watching a shopkeeper sweep up broken glass, someone who noticed trains full of people passing and coming back empty, a person who reported a hidden family, and the Allied governments who knew about the deportations and did not act are not all equally responsible. What they have in common is that each of them faced a choice, and that some people in each group chose differently."
          ],
          tip: "When you weigh responsibility, say what the person knew, what they did, and what it would have cost them to act otherwise. Those three things are your evidence."
        },
        {
          heading: "The trials, and the man who said he was only following orders",
          paragraphs: [
            "When the war ended and the Allies discovered what had been done in the camps, leading Nazis were arrested and put on trial at what became known as the Nuremberg Trials. Many were found guilty and sentenced to death. Two men were missing from the dock. Adolf Hitler had killed himself before he could be captured, and Adolf Eichmann had disappeared.",
            "Eichmann was one of the main organisers of the Final Solution. He was at the Wannsee Conference in 1942, where Nazi officials agreed to murder the Jewish people of Europe, and he organised the deportation of millions of people across the continent. He escaped capture in 1945 and lived in hiding in Argentina until 1960, when he was captured by members of the Israeli Secret Service and taken to Israel to stand trial.",
            "His defence was that he had been an official doing a job, and that the responsibility lay with those who gave the orders. The court did not accept it, and neither do historians, for a simple reason: the Holocaust needed people who were willing to do that work, and Eichmann organised it for years, with energy and care. Following orders is itself something a person decides to do."
          ],
          tip: "Eichmann is your strongest example for a question about responsibility, because his own defence is the argument you have to answer."
        },
        {
          heading: "What did Britain and America do?",
          paragraphs: [
            "In 1944 a detailed report on what was happening at Auschwitz reached Britain and America. It had been written from the account of Rudolf Vrba, who had escaped from the camp in order to warn the world, and it is usually called the Vrba Report. The Allies were slow to act on it, and while they argued about whether it was true and what to do, Jewish people in Hungary were being killed in very large numbers every day.",
            "The historian Jonathan Freedland argues that prejudice shaped that response. British officials dismissed the report as exaggeration and complained about having to discuss Jewish suffering at all; American army officials sent it back on the grounds that it was too much about Jewish victims for their own soldiers to support, because they did not want the public to think they were fighting the war on behalf of Jewish people. Freedland argues that both Churchill and Roosevelt played down the genocide because they feared how their publics would react.",
            "Your lesson asks how much blame Britain and America should receive for allowing the Holocaust to happen. There is no settled answer, and the honest ones are careful: the Allies did not plan or carry out the genocide, and bombing a camp would have killed the prisoners in it, but they knew a great deal by 1944 and chose not to make rescue a war aim. Say what they knew, say what they did, and then make your judgement."
          ],
          tip: "On this question, separate three things: what the Allies knew, what they could have done, and what they chose to do. Then judge."
        },
        {
          heading: "CNOP: how to read a source",
          paragraphs: [
            "Your assessment asks what you can learn from two sources about the Holocaust, and your lessons give you a method for answering: CNOP. Content is what the source says or shows, what it is arguing, and what your own knowledge adds. Nature is what type of source it is: a diary, a newspaper interview, a photograph, a poster, a letter, or a historian's interpretation. Origin is who made it, when and where. Purpose is why it was made, and what it wants you to think or believe.",
            "Then weigh it. Every source has limitations, which are the parts that are less useful or less reliable, and your lesson is firm that every source is still useful in some way: a source is never useless. A Nazi poster is almost worthless as evidence about Jewish people and invaluable as evidence about Nazi propaganda. A survivor interviewed eighty years later may not recall every detail, and no document in the world can tell you what she could tell you about what that night felt like to a ten-year-old.",
            "Use your lesson's sentence starters until you no longer need them. The source shows that... According to my own knowledge the source is accurate, or not accurate. I know that... The nature of the source is... The origin of the source is... The purpose of the source would have been... This makes the source more, or less, trustworthy because..."
          ],
          worked: {
            q: "Source B is the diary of Joseph Goebbels, the Nazi minister for propaganda, written on 10 November 1938, the morning after Kristallnacht. It records synagogues burning and Jewish shops being destroyed, says that nothing will be done to stop it, and blames Jewish people for the shooting of the German official in Paris. What can you learn from it, and how far can you trust it?",
            steps: [
              "Content: the source shows that Jewish property across Germany was being destroyed, and that the Nazi government had decided not to intervene. It also shows that Goebbels blamed the Jewish community for what was being done to it.",
              "Own knowledge: I know that more than 90 Jewish people were killed and 30,000 Jewish men were arrested, and that the attacks were led by the Nazi Party's own private army and the Hitler Youth. That supports the source on what happened and challenges its claim that this was the public's anger.",
              "Nature and origin: it is a private diary, written by Hitler's propaganda minister, on the morning after the attacks he had ordered.",
              "Purpose and trust: a diary written by the man who gave the orders is not trying to be fair; it is recording and justifying his own decision. That makes it less trustworthy about who was to blame, and extremely useful as evidence of how the Nazi leadership thought."
            ],
            answer: "Content: destruction of Jewish property, with the state standing back. Own knowledge supports the events and challenges the explanation. Origin and purpose: the minister who ordered it, justifying himself, so less trustworthy on blame and very useful on Nazi thinking."
          },
          tip: "Finish every source answer with what the source IS good for. That is the sentence that lifts an answer from describing to evaluating."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is the difference between a perpetrator and a bystander?", options: ["A perpetrator took part in what was done; a bystander stood by and let it happen", "A perpetrator watched; a bystander took part in what was done", "There is no difference: the words mean the same thing", "A perpetrator is a person who was harmed by a crime"], answer: 0, why: "A perpetrator takes part; a bystander knows and does nothing. Both made a choice, which is why your lesson asks you to compare them.",
          feedback: [
            "",
            "You have the two words the wrong way round. Taking part makes someone a perpetrator; watching and doing nothing makes someone a bystander.",
            "The words are deliberately different, because what the two people did is different. The hard question your lesson asks is how much that difference reduces the bystander's responsibility.",
            "A person harmed by a crime is a victim. A perpetrator is the person who took part in doing the harm."
          ] },
        { kind: "gap", q: "In the CNOP method, the ___ of a source means who made it, when they made it and where it came from.", answer: "origin", options: ["origin", "content", "purpose"], why: "Origin is the third step of CNOP: who, when and where. It is what lets you ask whether the person making the source was in a position to know, and whether they had a reason to shade the truth.",
          feedback: {
            "content": "Content is the first step: what the source says or shows, and what it is arguing. Who made it, when and where is the origin.",
            "purpose": "Purpose is the fourth step: why the source was made and what it wants you to believe. Who made it, when and where is the origin."
          } },
        { kind: "mcq", q: "A poster was made by the Nazis to turn people against Jewish people. It is not trustworthy about Jewish people at all. What is it still useful to a historian for?", options: ["Showing how the Nazis used propaganda to spread antisemitism", "Showing what Jewish families in Germany were really like", "Proving that the claims on the poster were true", "Showing how the Allied governments responded to the Holocaust"], answer: 0, why: "Your lesson's rule is that a source is never useless. A propaganda poster is poor evidence about its target and first-class evidence about the people who made it.",
          feedback: [
            "",
            "The poster tells you nothing reliable about real Jewish families; it is a caricature invented to produce hatred. For what families were actually like you would use photographs, letters and the profiles you studied in chapter 2.",
            "A source never proves its own claims. The poster shows what the Nazis wanted Germans to believe, which is a different and very useful thing.",
            "The poster was made in Germany in 1937 for a German audience, so it tells you nothing about what Britain or America did. For that you would use the Vrba Report and the Allied governments' own papers."
          ] }
      ],
      modules: [
        {
          title: "The four steps of CNOP",
          task: {
            kind: "order",
            q: "Put the four steps of the CNOP source method in the order your lesson gives them.",
            items: [
              "Content: what does the source say or show, and what does my own knowledge add?",
              "Nature: what type of source is it, such as a diary, a photograph or an interview?",
              "Origin: who made it, when and where?",
              "Purpose: why was it made, and what does it want me to think?"
            ]
          },
          levels: {
            support: {
              steps: [
                "The letters of the name give you the order: C, N, O, P.",
                "Start with what the source actually says. That is the content.",
                "Then what kind of thing it is, then who made it.",
                "The last step is the hardest and the most useful: why was it made at all?"
              ],
              example: {
                q: "Put the three steps of a PEE paragraph in order: explain the link; make your point; give the evidence.",
                steps: ["The point comes first, so the reader knows what you are arguing.", "Then the evidence that supports it.", "Then the explanation of how the evidence proves the point."],
                answer: "Make your point; give the evidence; explain the link."
              }
            },
            core: { hint: "Say the word CNOP out loud. Each letter is a step." },
            stretch: { extend: "Explain why purpose comes last, and why an answer that stops after content and origin usually loses the most marks." }
          },
          explain: "Say, in one sentence, what the purpose step adds that the origin step does not.",
          why: "Content, Nature, Origin, Purpose. Content is what it says, nature is what it is, origin is who made it and when, and purpose is why, which is the step that explains the other three."
        },
        {
          title: "What can you learn from this source?",
          task: {
            kind: "written",
            q: "Source B is the diary of Joseph Goebbels, the Nazi minister for propaganda, written on 10 November 1938, the morning after Kristallnacht. It records synagogues burning and Jewish shops being destroyed, says that nothing will be done to stop it, and blames Jewish people for the shooting of the German official in Paris. What can you learn from Source B about Kristallnacht? Write three short paragraphs: content with your own knowledge; nature and origin; purpose and trustworthiness.",
            criteria: [
              "Content: I say what the source shows about Kristallnacht, in my own words, and refer to a detail of it.",
              "Own knowledge: I use at least two facts from chapter 3 and say whether they support or challenge the source.",
              "Nature and origin: I say what type of source it is and who wrote it, when.",
              "Purpose: I explain why it was written and what the writer wanted readers to believe.",
              "Trust: I explain what the source is less trustworthy about and what it is still useful for."
            ],
            model: "From Source B I can learn that Jewish property across Germany was being destroyed during Kristallnacht and that the Nazi government had decided to let it happen. The source records synagogues burning and Jewish shops wrecked, and says that nothing will be done about it, which shows that the state was standing back on purpose rather than losing control. According to my own knowledge the source is accurate about the events. I know that Jewish homes, shops, schools and synagogues were attacked on 9 and 10 November 1938, and that the attacks were led by the Nazi Party's own private army and the Hitler Youth, which supports what the source describes. It is, however, inaccurate about the cause, because it blames the Jewish community for the shooting in Paris, when the Party itself had given the orders. The nature of the source is a private diary, and its origin is Joseph Goebbels, Hitler's minister for propaganda, writing on the morning after the attacks. Its purpose was to record and to justify a decision he had taken himself, and perhaps to prepare the story the Party would tell the public. This makes the source less trustworthy about who was responsible, because the writer was responsible. It is still extremely useful, because it is evidence of how the Nazi leadership thought and of the lie they intended to tell."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1, content and own knowledge: From Source B I can learn... The source records... According to my own knowledge the source is... I know that... and that...",
                "Paragraph 2, nature and origin: The nature of the source is a... The origin of the source is...",
                "Paragraph 3, purpose and trust: The purpose of the source was... This makes it less trustworthy about... but it is still useful for...",
                "Read it back and check all four CNOP steps are there."
              ],
              example: {
                q: "Source C is a page on a history website, written in 2001, which explains that Hitler organised a boycott of Jewish businesses in April 1933 and that the Nuremberg Laws of 1935 took away Jewish people's citizenship. What can you learn from it, and how far can you trust it?",
                steps: ["Content: it shows that persecution was carried out through organised boycotts and laws.", "Own knowledge: I know the April 1933 boycott was enforced by the SA, which supports it.", "Nature and origin: a history website page written long after the events, by writers with access to research.", "Purpose and trust: written to inform, so fairly trustworthy, but it is not an eyewitness account and gives no sense of what the laws felt like."],
                answer: "Reliable as a summary and written to inform, but second hand: useful for the facts, weak on experience."
              }
            },
            core: { hint: "One paragraph per stage: content with own knowledge, then nature and origin, then purpose and trust. Finish with what it IS useful for." },
            stretch: { extend: "Compare Source B with the newspaper interview a survivor gave in 2018. Explain what each source can tell a historian that the other cannot." }
          },
          explain: "Say, in one sentence, why a source can be untrustworthy and still valuable.",
          why: "A full answer gives the content with a detail, tests it against specific knowledge from chapter 3, states the nature and origin, explains the purpose, and finishes by saying what the source is less trustworthy about and what it is still good for."
        },
        {
          title: "Bystanders and perpetrators: how far is that fair?",
          task: {
            kind: "written",
            q: "Bystanders are just as guilty of allowing the Holocaust to happen as the perpetrators. How far do you agree? Use evidence from this unit on both sides and reach a judgement. Write two paragraphs and a conclusion.",
            criteria: [
              "On the one hand: I give at least one piece of evidence for the view that bystanders share the guilt, such as the Allied governments knowing about the deportations by 1944.",
              "On the other hand: I give at least one piece of evidence that perpetrators carry more, such as the work Eichmann organised or the orders given to the Einsatzgruppen.",
              "I explain what it would have cost an ordinary German to act, using fear, the law, social pressure or propaganda.",
              "I name at least one specific person or group from this unit as evidence, rather than writing only in general terms.",
              "I reach a clear judgement in my conclusion and give a reason for it."
            ],
            model: "On the one hand, there is a strong case that bystanders share the guilt. Neighbours watched Jewish shopkeepers sweeping up broken glass after Kristallnacht and said nothing; people noticed trains full of families passing their houses and coming back empty, and asked no questions; and by 1944 Britain and America had the Vrba Report, which set out in detail what was happening at Auschwitz, and chose not to make rescue a war aim. Each of those was a decision not to act, and the Nazis depended on exactly that. On the other hand, the perpetrators did the thing itself, and the difference is not small. Adolf Eichmann organised the deportation of millions of people across Europe for years, and the Einsatzgruppen were given orders to kill and carried them out; without people like them, no bystander's silence would have murdered anybody. It is also fair to say what refusing cost an ordinary German: objecting meant breaking the law, losing a job, or arrest, while propaganda and social pressure made silence feel normal. Overall, I think the statement goes too far. Bystanders made the Holocaust possible and carry real responsibility for their silence, but the guilt of a person who organised the deportations is of a different order from the guilt of a neighbour who was afraid, and a judgement that treats them as the same makes it harder to understand how the Holocaust actually worked."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: On the one hand... and give one or two examples of bystanders who knew and did nothing.",
                "Paragraph 2: On the other hand... and give one example of a perpetrator and what they actually did.",
                "Then add one sentence on what it would have cost an ordinary German to object.",
                "Conclusion: Overall, I think... because..."
              ],
              example: {
                q: "A pupil sees another pupil being bullied and tells nobody. How far is that pupil as guilty as the bully? Plan the three parts of the answer.",
                steps: ["On the one hand: silence lets it continue, and the bully counts on it.", "On the other hand: the bully is the one doing the harm.", "Cost of acting: the pupil might be targeted next, which is a real risk and part of the judgement.", "Conclusion: share the responsibility without treating the two as identical."],
                answer: "Both sides, with the cost of acting weighed in, then a judgement that does not treat silence and harm as the same thing."
              }
            },
            core: { hint: "Both sides, then the cost of acting, then a judgement with a reason. Use a named person or group on each side." },
            stretch: { extend: "Explain why historians treat the Allied governments differently from an individual German bystander, even though both knew a great deal and did little." }
          },
          explain: "Say, in one sentence, what your judgement is and the single strongest reason for it.",
          why: "The best answers do three things: argue both sides with named evidence, weigh what refusing would have cost a particular person, and then judge. A judgement that flattens every kind of responsibility into one is weaker than one that ranks them and explains the ranking."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y09_topic_3_the_holocaust.txt",
    decksUsed: [
      "L1 - Intro and participants .pptx",
      "L2- Pre war Jewish life and early persecution  (1).pptx",
      "L2- Pre war Jewish life and early persecution  (1) (1).pptx",
      "L2- Pre war Jewish life and early persecution  (1) (3).pptx",
      "L3 Kristallnacht and Ghettos.pptx",
      "L3b Kristallnacht and Source Practice.pptx",
      "L4 Progress Check & Camps.pptx",
      "L4 Progress Check & Camps updated.pptx",
      "L4 Progress Check & Camps updated homework.pptx",
      "L5 Final Solution and responsibility.pptx",
      "L5 Final Solution and responsibility hwk.pptx",
      "Holocaust Assessment / L6 Holocaust Assessment.pptx",
      "Holocaust Assessment / holocaust assessment feedback .pptx"
    ],
    notes: "Lesson titles, sequence, learning objectives and key words are the department's. From the decks: the definitions matched in L1 (genocide, persecution, ghetto, civil rights, victim, antisemitism, extermination); the L1 reasons for studying the Holocaust and the objective of re-humanising the victims; the figures of eleven million and six million and two-thirds of Europe's Jewish population; the perpetrator / bystander / rescuer / victim roles and the nine statements behind them; pre-war Jewish life in Eastern and Western Europe; the five historical examples of antisemitism (66 AD, 313 AD, the 1280s and 1290, 1348-50, 1543); the Treaty of Versailles terms; Hitler's 1925 leadership, his policies and 1934; the three waves of persecution, the April 1933 boycott and the Nuremberg Laws of 1935; Kristallnacht, Grynszpan, the expulsion of Polish Jewish people, the casualties and arrests, and the Goebbels diary showing the Party gave the orders and withdrew the police; the 1937 exhibition poster and the 1935 classroom photograph; the plenary reasons why Germans did not resist; the ghetto definition, the 1939 first ghetto and the figure of over 1,000 ghettos, three million Polish Jewish people, the Warsaw ghetto population and deaths, the ration of 300 calories against 2,000 to 2,500 advised, seven to nine people per room, forced labour from age ten, the ban on outside contact, execution for leaving, and the named ghettos Warsaw, Lodz, Kovno and Riga; Heydrich's first step and final goal; the resistance homework names (Herbert Baum, Tosia Altman, Mordecai Anielewicz); Dachau on 22 March 1933 and the three phases of the camps; Nazi deception and resettlement, the sealed trucks, the labelled suitcases, Leo Schneiderman and Kitty Hart-Moxon; the Final Solution in two phases, the Einsatzgruppen and the figure of over 1.5 million, the 1942 agreement, the six extermination camps and 8 May 1945; the Nuremberg Trials, Eichmann and 1960; the groups involved; the Vrba Report of 1944 and Jonathan Freedland's account; and the CNOP method with its sentence starters and success criteria. NOT used: the L1 whole-class feedback on the previous Dictatorship assessment; the KS3 assessment tracker in the feedback deck, which lists Year 7 topics; the deck's camp-life detail of punishment at roll call, the fake shower heads, the Kovno killing figures and the Hungarian killing rate (section 5 of NOTES.md explains each omission); and the deck's own homework task asking pupils to describe the Warsaw ghetto from a Nazi perspective, which is a role-play task this platform does not set. NO QUOTATION AT ALL: the Himmler speech (1943), the Goebbels diary (1938), the survivor's newspaper interview (2018), the ghetto letter (1944), the unattributed statement by a Nazi official at his trial and the historian Jonathan Freedland are all paraphrased and attributed; the two model answers in the decks are not reproduced and their phrases are fingerprinted and banned in verify.py, which also fails on any quotation mark and on any fourteen-word run of pupil text that also appears in the dump. All explanations, questions, worked examples and model paragraphs are original. Figures appear only in teaching prose, never in a question, option, answer or drill, and verify.py enforces that and asserts that no numeric or gap answer is a victim count. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on both numeric items, explain prompts on all eighteen modules, four context modules (ch1, ch3, ch4, ch5), glossary chapters, four Connections groups, spacing; no widgets, no constellation, no pretext.l1."
  }
};
