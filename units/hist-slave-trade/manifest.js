// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 8 Topic 3: The Transatlantic Slave Trade · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py; every four-digit year and
//   every large number in pupil text must be in that table or the FACTS table; every "order" task is compared with the
//   canonical sequences held there; every mcq / gap answer is compared with the independent answer key; numeric items
//   carry `check` and `misconceptions` (each with its own `check`); contexts share the task's answer by construction.
//   Quotation guard: the ONLY quoted words are short fragments of Robert Norris's evidence to Parliament (1778), a
//   primary source out of copyright, as the department's deck prints them; nothing by a modern historian is quoted and
//   the deck's own model answer is fingerprinted and banned. Language guard: pupil text says "enslaved people", never
//   "slaves" as a noun; "kingdoms", not "tribes"; the deck's misspellings are banned.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-slave-trade"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-slave-trade",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 8 Topic 3: The Transatlantic Slave Trade — foundations for GCSE History 8145 (Britain: Migration, empires and the people; source skills)",
    year: 8,
    tier: "KS3",
    title: "The Slave Trade",
    sub: "How the trade in enslaved people began, how it worked across the Atlantic, what it did to the people caught in it, and how those people and their allies brought it to an end.",
    bigQuestion: "How did the Transatlantic Slave Trade work, what did it do to people, and why was it finally abolished?",
    lessonCount: 6,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Slavery and its impact on Africa", question: "How did the Slave Trade start, and how did it impact Africa?", keywords: ["slavery", "enslaved person", "Slave Trade", "Empire", "resources", "vicious circle"] },
    { n: 2, title: "The Middle Passage", question: "What was the Triangular Trade Route, and what were conditions like on the Middle Passage?", keywords: ["Triangular Trade Route", "outward journey", "Middle Passage", "return voyage", "Whydah", "the Zong"] },
    { n: 3, title: "Progress check and slave auctions", question: "What can you learn about the capture of enslaved people from the sources, and how did slave auctions work?", keywords: ["content", "own knowledge", "origin", "provenance", "auction", "scramble"] },
    { n: 4, title: "Life and resistance on the plantations", question: "How did enslaved people resist life on the plantation?", keywords: ["plantation", "slave patrollers", "resistance", "Jamaica", "cotton", "sugar"] },
    { n: 5, title: "The abolition of the Slave Trade", question: "Why was slavery finally abolished across the British Empire in 1833?", keywords: ["abolition", "abolitionist", "Quakers", "compensation", "apprenticeship", "Olaudah Equiano"] },
    { n: 6, title: "Review and assessment", question: "Can you use content, own knowledge and origin to say what a source tells you about the Slave Trade?", keywords: ["source", "content", "own knowledge", "origin", "trustworthy", "change and continuity"] }
  ],

  glossary: [
    { term: "slavery", means: "Owning people as property and forcing them to work for nothing.", chapter: "why-it-began" },
    { term: "enslaved person", means: "A person who was made someone else's property. We say enslaved person, not slave, because they were a person first.", chapter: "why-it-began" },
    { term: "Empire", means: "A group of countries or lands ruled by one powerful country.", chapter: "why-it-began" },
    { term: "vicious circle", means: "A chain of events in which each step makes the next one worse. Kingdoms sold captives for guns, then needed more captives to buy more guns.", chapter: "why-it-began" },
    { term: "Triangular Trade Route", means: "The three-sided route of the Slave Trade: Europe to West Africa, West Africa to the Americas, the Americas back to Europe.", chapter: "triangle" },
    { term: "outward journey", means: "The first leg of the triangle, from Europe to West Africa, carrying guns, cloth and manufactured goods.", chapter: "triangle" },
    { term: "return voyage", means: "The third leg of the triangle, from the Americas back to Europe, carrying sugar, cotton, tobacco and coffee.", chapter: "triangle" },
    { term: "Middle Passage", means: "The second leg of the triangle, from West Africa to the Americas, on which enslaved people were carried.", chapter: "middle-passage" },
    { term: "auction", means: "A sale in which people were sold to whoever offered the most money: the highest bidder.", chapter: "auctions-plantations" },
    { term: "scramble", means: "A kind of sale in which buyers paid a fixed price, then rushed in to grab whoever they could.", chapter: "auctions-plantations" },
    { term: "plantation", means: "A very large estate farm growing one crop, such as sugar, cotton, tobacco or coffee.", chapter: "auctions-plantations" },
    { term: "resistance", means: "Fighting back against control, openly or in small everyday ways.", chapter: "auctions-plantations" },
    { term: "abolition", means: "Ending something for good. The Slave Trade was abolished in 1807 and slavery itself in 1833.", chapter: "abolition" },
    { term: "abolitionist", means: "A person who campaigned to end the Slave Trade and slavery.", chapter: "abolition" },
    { term: "compensation", means: "Money paid to make up for a loss. In 1833 the government paid slave owners, not the people who had been enslaved.", chapter: "abolition" },
    { term: "apprenticeship", means: "The system that replaced slavery in 1833 and tied freed people to their old plantations until 1838.", chapter: "abolition" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "How it began", terms: ["slavery", "enslaved person", "Empire", "vicious circle"] },
    { group: "Legs of the triangle", terms: ["Triangular Trade Route", "outward journey", "Middle Passage", "return voyage"] },
    { group: "Sold and put to work", terms: ["auction", "scramble", "plantation", "resistance"] },
    { group: "Ending it", terms: ["abolition", "abolitionist", "compensation", "apprenticeship"] }
  ],

  chapters: [
    /* ───────────── 1 · why it began ───────────── */
    {
      key: "why-it-began", n: 1, title: "Why the Slave Trade began, and what it did to Africa",
      lead: "What slavery and the Slave Trade mean, why European empires wanted enslaved workers, how people were captured, and what the trade did to West Africa.",
      covers: [1],
      pretext: {
        words: [
          { word: "slavery", means: "owning people as property and forcing them to work for nothing", sentence: "Slavery treated people as things that could be bought and sold." },
          { word: "enslaved person", means: "a person who was made someone else's property", sentence: "Each enslaved person had a name, a family and a home before they were taken." },
          { word: "Empire", means: "a group of lands ruled by one powerful country", sentence: "The British Empire wanted sugar, cotton and tobacco from its lands across the sea." },
          { word: "resources", means: "useful things a country wants, such as crops, metals and cloth", sentence: "European countries built empires to get hold of resources." },
          { word: "demand", means: "how much people want to buy something", sentence: "As the demand for enslaved workers grew, more people were captured." },
          { word: "vicious circle", means: "a chain of events in which each step makes the next one worse", sentence: "Selling captives for guns, then needing guns to stay safe, was a vicious circle." }
        ],
        passage: [
          "In the 1500s and 1600s, European countries were building empires.",
          "They wanted resources such as sugar, tobacco and cotton.",
          "Growing these crops in the Americas took many workers.",
          "Many native people there had died from diseases the Europeans brought.",
          "So the Europeans looked for workers somewhere else.",
          "They turned to West Africa.",
          "Some African kingdoms already sold prisoners of war and criminals to traders.",
          "Europeans offered guns, money and goods in exchange for enslaved people.",
          "The demand grew, and kingdoms went to war to capture more people.",
          "Other kingdoms bought weapons to protect themselves.",
          "This became a vicious circle.",
          "Villages lost farmers, parents and children.",
          "West Africa was weakened for hundreds of years."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "امتلاك الناس كأنهم ممتلكات وإجبارهم على العمل بلا أجر (slavery)",
            "شخص جُعل ملكًا لشخص آخر (enslaved person)",
            "مجموعة من البلاد يحكمها بلد واحد قوي (Empire)",
            "أشياء مفيدة يريدها بلد ما، مثل المحاصيل والمعادن والقماش (resources)",
            "مدى رغبة الناس في شراء شيء ما (demand)",
            "سلسلة من الأحداث تجعل كلّ خطوة فيها الخطوة التالية أسوأ (vicious circle)"
          ],
          "passage": [
            "في القرنَين السادس عشر والسابع عشر (1500s و1600s)، كانت الدول الأوروبية تبني إمبراطوريات.",
            "كانت تريد موارد مثل السكّر والتبغ والقطن.",
            "كانت زراعة هذه المحاصيل في الأمريكتَين تحتاج إلى عمّال كثيرين.",
            "كان كثير من السكّان الأصليين هناك قد ماتوا بأمراض جلبها الأوروبيون.",
            "لذلك بحث الأوروبيون عن عمّال في مكان آخر.",
            "فاتّجهوا إلى غرب أفريقيا.",
            "كانت بعض الممالك الأفريقية تبيع أصلًا أسرى الحرب والمجرمين للتجّار.",
            "عرض الأوروبيون البنادق والمال والبضائع في مقابل أشخاص مُستعبَدين.",
            "زاد الطلب (demand)، ودخلت الممالك في حروب لتأسر مزيدًا من الناس.",
            "واشترت ممالك أخرى الأسلحة لتحمي نفسها.",
            "صار هذا حلقة مفرغة (vicious circle).",
            "فقدت القرى مزارعيها وآباءها وأمّهاتها وأطفالها.",
            "وضعف غرب أفريقيا مئات السنين."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "posiadanie ludzi jako własności i zmuszanie ich do pracy za nic (slavery, niewolnictwo)",
            "człowiek, którego uczyniono czyjąś własnością (enslaved person)",
            "grupa ziem rządzonych przez jeden potężny kraj (Empire, imperium)",
            "przydatne rzeczy, których chce jakiś kraj, na przykład plony, metale i tkaniny (resources, zasoby)",
            "to, jak bardzo ludzie chcą coś kupić (demand, popyt)",
            "łańcuch zdarzeń, w którym każdy krok pogarsza następny (vicious circle, błędne koło)"
          ],
          "passage": [
            "W XVI i XVII wieku (1500s i 1600s) kraje europejskie budowały imperia.",
            "Chciały zasobów (resources) takich jak cukier, tytoń i bawełna.",
            "Uprawa tych roślin w Amerykach wymagała wielu pracowników.",
            "Wielu rdzennych mieszkańców zmarło tam na choroby, które przywieźli Europejczycy.",
            "Europejczycy szukali więc pracowników gdzie indziej.",
            "Zwrócili się do Afryki Zachodniej.",
            "Niektóre afrykańskie królestwa już wcześniej sprzedawały kupcom jeńców wojennych i przestępców.",
            "Europejczycy oferowali broń, pieniądze i towary w zamian za zniewolonych ludzi (enslaved people).",
            "Popyt rósł, a królestwa prowadziły wojny, żeby pojmać więcej ludzi.",
            "Inne królestwa kupowały broń, żeby się bronić.",
            "Powstało z tego błędne koło (vicious circle).",
            "Wioski traciły rolników, rodziców i dzieci.",
            "Afryka Zachodnia była osłabiona przez setki lat."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "ter pessoas como propriedade e obrigá-las a trabalhar sem receber nada (slavery, escravatura/escravidão)",
            "uma pessoa que foi transformada em propriedade de outra (enslaved person, pessoa escravizada)",
            "um conjunto de terras governado por um só país poderoso (Empire, Império)",
            "coisas úteis que um país quer, como colheitas, metais e tecidos (resources, recursos)",
            "quanto as pessoas querem comprar alguma coisa (demand, procura/demanda)",
            "uma cadeia de acontecimentos em que cada passo piora o seguinte (vicious circle, círculo vicioso)"
          ],
          "passage": [
            "Nos anos 1500 e 1600, os países europeus estavam a construir/construindo impérios.",
            "Queriam recursos como açúcar, tabaco e algodão.",
            "Cultivar essas plantas nas Américas exigia muitos trabalhadores.",
            "Muitos povos nativos de lá tinham morrido de doenças que os europeus trouxeram.",
            "Por isso, os europeus procuraram trabalhadores noutro/em outro lugar.",
            "Viraram-se para a África Ocidental.",
            "Alguns reinos africanos já vendiam prisioneiros de guerra e criminosos a comerciantes.",
            "Os europeus ofereciam armas, dinheiro e mercadorias em troca de pessoas escravizadas (enslaved people).",
            "A procura/demanda cresceu, e os reinos entraram em guerra para capturar mais pessoas.",
            "Outros reinos compraram armas para se protegerem.",
            "Isto tornou-se um círculo vicioso (vicious circle).",
            "As aldeias perderam agricultores, pais, mães e filhos.",
            "A África Ocidental ficou enfraquecida durante centenas de anos."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "dad hanti ahaan loo leeyahay oo lagu qasbo inay shaqeeyaan lacag la'aan (slavery, addoonsi)",
            "qof hanti qof kale laga dhigay (enslaved person, qof la addoonsaday)",
            "koox dhulal ah oo dal awood badan xukumo (Empire)",
            "waxyaabo faa'iido leh oo dal rabo, sida dalag, biro iyo maro (resources)",
            "inta dadku wax u doonayaan inay iibsadaan (demand)",
            "silsilad dhacdooyin oo tallaabo kasta ka xumayso tan xigta (vicious circle)"
          ],
          "passage": [
            "1500-meeyadii iyo 1600-meeyadii, dalalka Yurub boqortooyooyin waaweyn (empires) ayay dhisayeen.",
            "Waxay doonayeen resources sida sonkor, tubaako iyo suuf.",
            "Dalaggan beeristiisa Ameerikada shaqaale badan ayay qaadatay.",
            "Dad badan oo asalka halkaas ka ahaa waxay u dhinteen cudurro ay Yurubiyaanku keeneen.",
            "Sidaas darteed Yurubiyaanku shaqaale meel kale ayay ka raadiyeen.",
            "Galbeedka Afrika ayay u jeesteen.",
            "Boqortooyooyinka Afrika qaarkood horay ayay maxaabiis dagaal iyo dembiilayaal ganacsato uga iibin jireen.",
            "Yurubiyaanku waxay bixiyeen qoryo, lacag iyo badeecado si ay dad la addoonsaday ku beddelaan.",
            "Baahidu (demand) way kortay, boqortooyooyinkuna dagaal ayay galeen si ay dad badan u qabtaan.",
            "Boqortooyooyin kale hub ayay iibsadeen si ay isu ilaaliyaan.",
            "Tani waxay noqotay vicious circle.",
            "Tuulooyinku waxay lumiyeen beeraley, waalidiin iyo carruur.",
            "Galbeedka Afrika boqolaal sano ayuu daciif ahaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "володіння людьми як власністю і примушування їх працювати задарма (slavery)",
            "людина, яку зробили чиєюсь власністю (enslaved person)",
            "група земель, якими править одна могутня країна (Empire)",
            "корисні речі, яких хоче країна, наприклад урожай, метали і тканини (resources)",
            "наскільки сильно люди хочуть щось купити (demand)",
            "ланцюг подій, у якому кожний крок робить наступний гіршим (vicious circle)"
          ],
          "passage": [
            "У 1500-х і 1600-х роках європейські країни будували імперії.",
            "Вони хотіли ресурсів, таких як цукор, тютюн і бавовна.",
            "Вирощування цих культур в Америках потребувало багатьох працівників.",
            "Багато корінних людей там померли від хвороб, які привезли європейці.",
            "Тому європейці шукали працівників десь інде.",
            "Вони звернулися до Західної Африки.",
            "Деякі африканські королівства вже продавали торговцям полонених і злочинців.",
            "Європейці пропонували зброю, гроші й товари в обмін на поневолених людей.",
            "Попит зростав, і королівства йшли на війну, щоб захопити більше людей.",
            "Інші королівства купували зброю, щоб захистити себе.",
            "Це стало хибним колом (vicious circle).",
            "Села втрачали землеробів, батьків і дітей.",
            "Західна Африка була ослаблена на сотні років."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "لوگوں کو جائیداد کی طرح اپنی ملکیت بنانا اور بغیر اجرت کام پر مجبور کرنا (slavery)",
            "ایسا شخص جسے کسی دوسرے کی ملکیت بنا دیا گیا ہو (enslaved person)",
            "زمینوں کا ایک گروہ جس پر ایک طاقت ور ملک حکومت کرے (Empire)",
            "کارآمد چیزیں جو کوئی ملک چاہتا ہے، جیسے فصلیں، دھاتیں اور کپڑا (resources)",
            "لوگ کوئی چیز کتنی زیادہ خریدنا چاہتے ہیں (demand)",
            "واقعات کی ایک زنجیر جس میں ہر قدم اگلے کو اور بُرا بنا دیتا ہے (vicious circle)"
          ],
          "passage": [
            "1500 اور 1600 کی دہائیوں میں یورپی ملک سلطنتیں بنا رہے تھے۔",
            "وہ چینی، تمباکو اور کپاس جیسے وسائل چاہتے تھے۔",
            "امریکی براعظموں میں یہ فصلیں اگانے کے لیے بہت سے مزدور درکار تھے۔",
            "وہاں کے بہت سے مقامی لوگ ان بیماریوں سے مر چکے تھے جو یورپی اپنے ساتھ لائے تھے۔",
            "اس لیے یورپیوں نے کہیں اور مزدور تلاش کیے۔",
            "انھوں نے مغربی افریقہ کا رخ کیا۔",
            "کچھ افریقی بادشاہتیں پہلے ہی جنگی قیدیوں اور مجرموں کو تاجروں کے ہاتھ بیچتی تھیں۔",
            "یورپیوں نے غلام بنائے گئے لوگوں کے بدلے بندوقیں، پیسہ اور سامان پیش کیا۔",
            "طلب (demand) بڑھی، اور بادشاہتیں زیادہ لوگوں کو پکڑنے کے لیے جنگ پر نکل پڑیں۔",
            "دوسری بادشاہتوں نے اپنی حفاظت کے لیے ہتھیار خریدے۔",
            "یہ ایک vicious circle بن گیا۔",
            "گاؤں اپنے کسان، ماں باپ اور بچے کھو بیٹھے۔",
            "مغربی افریقہ سینکڑوں سال کے لیے کمزور ہو گیا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What do slavery and the Slave Trade mean?",
          paragraphs: [
            "Slavery means owning people as property and forcing them to work for nothing. A person who has this done to them is an enslaved person. In this unit we say enslaved person rather than slave, because the word reminds us that this was something done to a person, not what the person was.",
            "The Transatlantic Slave Trade was the buying, shipping and selling of enslaved African people across the Atlantic Ocean, to work in the Americas. It lasted from the 1500s to the 1800s. The first English trader known to have captured and sold people in this way was John Hawkins, in 1562.",
            "You have already studied how the British Empire grew in India, and why empires are created: to gain land, power and resources. The Slave Trade grew out of the same wish for resources. The difference is that here the resource the Europeans decided they needed was people."
          ],
          tip: "When you write about this topic, use enslaved person or enslaved people. It is more accurate, and it is the language historians use now."
        },
        {
          heading: "Why did Europeans want enslaved workers?",
          paragraphs: [
            "There were two main reasons. First, the European empires needed more workers. Their new lands in the Americas were huge, and the native populations often died from diseases such as smallpox that the Europeans brought with them. There were not enough people left to do the work the Europeans wanted done.",
            "Second, Europeans wanted more luxury products. Tobacco, sugar and cotton sold for high prices in Europe, but they are hard, slow crops to grow and harvest. Plantation owners wanted workers they did not have to pay.",
            "So the Europeans looked to West Africa, where traders were already on the coast. Just as the East India Company had arrived in India in the 1600s looking for resources, European ships now arrived in Africa looking for people."
          ],
          worked: {
            q: "Explain one reason why the Slave Trade began.",
            steps: [
              "Make your point in one sentence: One reason the Slave Trade began was that European empires needed more workers in the Americas.",
              "Give the evidence from your lesson: many native people had died from European diseases, and crops such as sugar and tobacco needed many hands.",
              "Explain the link: because there were not enough workers, European traders bought enslaved people in West Africa and shipped them to the plantations.",
              "Finish by saying what this shows: this shows the trade began for economic reasons, to make money from crops."
            ],
            answer: "Point, evidence, explain: Europeans needed workers; native people had died and the crops were hard to grow; so traders bought enslaved Africans to do the work and make money."
          }
        },
        {
          heading: "How were people captured? The vicious circle",
          paragraphs: [
            "At first, African kingdoms sold people they already held: prisoners of war, criminals and people who owed a debt. Europeans did not usually go inland themselves. They waited at the coast and offered gold, money and guns.",
            "Then the demand grew. To keep selling, kingdoms needed more captives, so they went to war with their neighbours to seize people. Other kingdoms bought European weapons to protect themselves, but the only way to pay for the weapons was to sell captives too.",
            "This is a vicious circle: each step made the next one worse. Europeans gladly traded with the kingdoms and even encouraged wars between them, because more wars meant more captives to buy."
          ],
          tip: "Learn the vicious circle as four steps: sell captives, get guns, need more captives, neighbours arm themselves. You can draw it as a loop."
        },
        {
          heading: "What did the trade do to Africa?",
          paragraphs: [
            "Historians separate short-term and long-term impacts. In the short term there was more war, because rival kingdoms fought to capture people to sell. Farms and farmland were destroyed or abandoned, so there was famine. In some places so many people fled that other areas became over-crowded. Warlords took control, and the rich grew richer while most people grew poorer.",
            "In the long term, over eight million people were taken by force, most of them the young and healthy who would have farmed, built and raised families. Traditional ways of farming and trading were replaced by the trade in people. Some African economies came to depend on it, so when the trade ended they became poorer still.",
            "The historian Eric Williams argued that slavery was adopted for economic reasons, because it was cheap, and that racism was then used to justify it: enslaved people were told they were inferior so that they would obey. Some historians argue that people of African descent across the world still feel the effects of the trade today."
          ],
          tip: "A short-term impact happens during or soon after an event. A long-term impact is still felt years or centuries later. Say which one you mean, and why."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does the word slavery mean?", options: ["Owning people as property and forcing them to work for nothing", "Paying workers a very low wage for long hours", "Sending prisoners to another country for a fixed number of years", "Working for an employer until a debt has been paid off"], answer: 0, why: "Slavery is ownership: a person is treated as property, bought and sold, and made to work for nothing.",
          feedback: [
            "",
            "Low pay for long hours is unfair work, but a paid worker is not owned and can, in principle, leave. Slavery means a person is owned as property and paid nothing.",
            "Sending prisoners away for a fixed time is a punishment with an end date. Enslaved people were not serving a sentence; they were owned for life, and so were their children.",
            "Working off a debt sounds close, but a debt can be paid and the worker is still a person in law. An enslaved person was property, with no debt to pay and no end in sight."
          ] },
        { kind: "gap", q: "Europeans wanted more workers because many ___ people in the Americas had died from European diseases.", answer: "native", options: ["native", "European", "enslaved"], why: "The native populations of the Americas died in huge numbers from diseases the Europeans brought, so the Europeans looked for workers elsewhere.",
          feedback: {
            "European": "It was not the Europeans who died in large numbers in the Americas; it was the native peoples who met European diseases for the first time. That is why the Europeans looked for other workers.",
            "enslaved": "Enslaved Africans were brought in because the workers were missing; they were the answer the Europeans chose, not the people who had died first. The native peoples of the Americas had died from European diseases."
          } },
        { kind: "mcq", q: "Which of these was a reason the Slave Trade began?", options: ["Europeans wanted workers for sugar, tobacco and cotton plantations", "Europe had too many workers and nowhere to use them", "African kingdoms asked Europe to take their people away", "Europeans wanted to teach new farming methods in the Americas"], answer: 0, why: "The trade began because European empires wanted more workers and more luxury crops: sugar, tobacco and cotton.",
          feedback: [
            "",
            "You have reversed the problem. Europe did not have spare workers to send; its colonies in the Americas were short of workers after native populations died of disease. That shortage is why the Europeans bought enslaved people.",
            "No kingdom asked for its people to be taken. Some kingdoms sold prisoners of war and criminals, and as demand grew they went to war to capture more. The push came from European demand, not an African request.",
            "The Europeans were not in the Americas to teach. They wanted the crops that sold for high prices in Europe, and they wanted workers they did not have to pay to grow them."
          ] }
      ],
      modules: [
        {
          title: "The vicious circle of slavery",
          task: {
            kind: "order",
            q: "Put the four steps of the vicious circle of slavery in the order your lesson gave them.",
            items: [
              "African kingdoms sentence criminals and prisoners of war to be enslaved",
              "Europeans offer to buy the enslaved people for gold, money and guns",
              "Kingdoms go to war with their neighbours to capture more people to sell",
              "Other kingdoms buy weapons to protect themselves, and need captives to pay for them"
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the step that could happen without any Europeans at all. That is the start.",
                "Next comes the European offer: what did they pay with?",
                "Ask: once kingdoms were being paid, what did they need more of? How did they get it?",
                "The last step is the reaction of the other kingdoms, which feeds back to the start."
              ],
              example: {
                q: "Put these steps of a debt circle in order: borrow more to pay the interest; borrow money; interest is added; the interest grows even bigger.",
                steps: ["Nothing can happen until money is borrowed, so that is first.", "Interest is added to the loan.", "To pay the interest the person borrows more.", "So the interest grows even bigger, and the circle repeats."],
                answer: "borrow money; interest is added; borrow more to pay the interest; the interest grows even bigger"
              }
            },
            core: { hint: "Start with what kingdoms already did before the Europeans arrived. End with the step that sends everyone back to the beginning." },
            stretch: { extend: "Explain why the Europeans were happy for this circle to continue, and suggest one thing that would have had to change to break it." }
          },
          explain: "Say, in one sentence, why this chain of events is called a vicious circle.",
          why: "Kingdoms first sold people they already held; Europeans paid with guns and money; the demand pushed kingdoms into wars to capture more people; and other kingdoms armed themselves, which they could only pay for with more captives."
        },
        {
          title: "One impact on Africa",
          task: {
            kind: "written",
            q: "Explain one impact of the Slave Trade on Africa. Say whether it was a short-term or a long-term impact, and why. Write one paragraph of four to six sentences.",
            criteria: [
              "I name one clear impact of the Slave Trade on Africa.",
              "I explain what this impact did to people, farming, or kingdoms.",
              "I say whether it was short-term or long-term, using the word because.",
              "I use at least one key word from the chapter correctly, such as vicious circle, demand or Empire."
            ],
            model: "One impact of the Slave Trade on Africa was that farming collapsed in many areas. The effect of this was famine, because the people who should have been planting and harvesting had been captured, or had fled from the raids, and farmland was left empty or destroyed in the wars between kingdoms. This was mainly a short-term impact because the hunger followed each raid and each war directly. However, it had a long-term side too, because traditional ways of growing food were replaced by the trade in people, and that was hard to rebuild once the trade ended."
          },
          levels: {
            support: {
              steps: [
                "Choose ONE impact from the list: more war, famine, loss of culture, economies relying on the trade, over-crowding where people fled, warlords in control.",
                "Sentence 1: One impact of the Slave Trade on Africa was…",
                "Sentences 2 and 3: The effect of this on Africa was… Explain who it hurt and how.",
                "Sentence 4: This was a short-term / long-term impact because…"
              ],
              example: {
                q: "Explain one impact of the Norman Conquest on England and say whether it was short-term or long-term.",
                steps: ["Name the impact: the Normans built castles across England.", "Explain it: the castles let a small Norman army control a large English population.", "Judge it: this was long-term because many of the castles still stand and towns grew around them."],
                answer: "One impact was castle building; it gave the Normans control; it was long-term because the castles and the towns around them lasted for centuries."
              }
            },
            core: { hint: "Pick one impact and stay with it. Short-term means during or soon after; long-term means still felt much later. Use because." },
            stretch: { extend: "Choose a second impact and argue which of the two was more serious for West Africa, giving one reason for your judgement." }
          },
          explain: "Say, in one sentence, how you decided whether your impact was short-term or long-term.",
          why: "A strong answer names one impact, explains its effect on people or kingdoms, and judges it short-term or long-term with a reason. The best answers notice that one impact can have both a short-term and a long-term side."
        },
        {
          title: "Short-term or long-term?",
          task: {
            kind: "mcq",
            q: "Which of these is a LONG-term impact of the Slave Trade on Africa?",
            options: [
              "Some African economies came to rely on the trade, so when it ended they became poorer",
              "A village was raided and its people were taken in one night",
              "A kingdom bought guns from European traders one summer",
              "A ship full of captives left the port of Whydah"
            ],
            answer: 0,
            why: "Economies that had come to depend on the trade stayed poor for generations after it ended. That is a long-term impact: it was still felt long after the events.",
            feedback: [
              "",
              "A raid is a single event with immediate effects: the people are gone that night. That is a short-term impact. Long-term impacts are the ones still felt years or centuries later, such as economies that could not recover.",
              "Buying guns one summer is one step in the vicious circle, an event in the short term. Ask what was still true a hundred years later: economies built around the trade stayed poor once it ended.",
              "A ship leaving port is one event in the trade, not an impact on Africa that lasted. The long-term impact is what happened to kingdoms whose whole economy had come to depend on selling people."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask of each option: is this one event, or a condition that lasted?",
                "One event, one night, one summer, one ship: these are short-term.",
                "Something still true a hundred years later is long-term.",
                "Which option describes what was still true long after the trade ended?"
              ],
              example: {
                q: "Which is a long-term impact of the Black Death: a village loses half its people in 1349, or wages stay higher for a century because workers are scarce?",
                steps: ["The village deaths are one terrible event in one year: short-term.", "Higher wages for a century is a condition that lasted: long-term."],
                answer: "Wages staying higher for a century is the long-term impact."
              }
            },
            core: { hint: "Three options are single events. One describes what was still true after the trade had ended." },
            stretch: { extend: "Explain how a short-term impact (more war between kingdoms) could turn into a long-term one (weakened societies that could not resist European colonists later)." }
          },
          explain: "Say, in one sentence, what makes an impact long-term rather than short-term.",
          why: "Long-term impacts outlast the events that caused them. Reliance on the trade, and the poverty that followed its end, lasted for generations; raids, purchases and voyages were single events."
        }
      ]
    },

    /* ───────────── 2 · the triangle ───────────── */
    {
      key: "triangle", n: 2, title: "The Triangular Trade and Britain's part in it",
      lead: "The three legs of the Triangular Trade Route, what each leg carried, the march to the coast, and how British ports grew rich.",
      covers: [2],
      pretext: {
        words: [
          { word: "Triangular Trade Route", means: "the three-sided route of the Slave Trade across the Atlantic", sentence: "The Triangular Trade Route linked Europe, West Africa and the Americas." },
          { word: "outward journey", means: "the first leg, from Europe to West Africa", sentence: "On the outward journey the ships carried guns, cloth and manufactured goods." },
          { word: "Middle Passage", means: "the second leg, from West Africa to the Americas", sentence: "Enslaved people were carried across the ocean on the Middle Passage." },
          { word: "return voyage", means: "the third leg, from the Americas back to Europe", sentence: "Sugar, cotton and tobacco came home on the return voyage." },
          { word: "port", means: "a town by the sea where ships load and unload", sentence: "Liverpool became the busiest slave-trading port in Britain." },
          { word: "profit", means: "the money left over after the costs of a voyage were paid", sentence: "The profit from one voyage paid for the next." }
        ],
        passage: [
          "The Slave Trade worked as a triangle across the Atlantic Ocean.",
          "Ships left Europe on the outward journey.",
          "They carried guns, cloth and manufactured goods to West Africa.",
          "There the goods were traded for enslaved people.",
          "The second leg was the Middle Passage, from West Africa to the Americas.",
          "Enslaved people were sold there.",
          "The ships then sailed home on the return voyage.",
          "They carried sugar, cotton, tobacco and coffee from the plantations.",
          "The profit paid for the next voyage.",
          "British ports such as Liverpool and London sent thousands of voyages.",
          "Ship building gave people in those cities work.",
          "So many British people gained from the trade without ever seeing it."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "طريق تجارة الرقيق ذو الأضلاع الثلاثة عبر الأطلسي (Triangular Trade Route)",
            "المرحلة الأولى، من أوروبا إلى غرب أفريقيا (outward journey)",
            "المرحلة الثانية، من غرب أفريقيا إلى الأمريكتَين (Middle Passage)",
            "المرحلة الثالثة، من الأمريكتَين عودةً إلى أوروبا (return voyage)",
            "مدينة على البحر تُحمَّل فيها السفن وتُفرَّغ (port)",
            "المال الذي يبقى بعد دفع تكاليف الرحلة (profit)"
          ],
          "passage": [
            "كانت تجارة الرقيق (Slave Trade) تعمل على شكل مثلّث عبر المحيط الأطلسي.",
            "كانت السفن تغادر أوروبا في رحلة الذهاب (outward journey).",
            "وكانت تحمل البنادق والقماش والبضائع المصنوعة إلى غرب أفريقيا.",
            "وهناك كانت البضائع تُبادَل بأشخاص مُستعبَدين.",
            "كانت المرحلة الثانية هي المعبر الأوسط (Middle Passage)، من غرب أفريقيا إلى الأمريكتَين.",
            "وهناك كان الأشخاص المُستعبَدون يُباعون.",
            "ثم كانت السفن تُبحر عائدةً إلى بلادها في رحلة العودة (return voyage).",
            "وكانت تحمل السكّر والقطن والتبغ والبنّ من المزارع الكبيرة.",
            "وكان الربح (profit) يدفع تكاليف الرحلة التالية.",
            "أرسلت مرافئ بريطانية مثل ليفربول (Liverpool) ولندن آلاف الرحلات.",
            "ووفّر بناء السفن العمل للناس في تلك المدن.",
            "وهكذا استفاد بريطانيون كثيرون من هذه التجارة دون أن يروها أبدًا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "trójstronna trasa handlu zniewolonymi ludźmi przez Atlantyk (Triangular Trade Route)",
            "pierwszy odcinek, z Europy do Afryki Zachodniej (outward journey)",
            "drugi odcinek, z Afryki Zachodniej do Ameryk (Middle Passage)",
            "trzeci odcinek, z Ameryk z powrotem do Europy (return voyage)",
            "miasto nad morzem, gdzie statki ładują i rozładowują towary (port)",
            "pieniądze, które zostawały po opłaceniu kosztów rejsu (profit, zysk)"
          ],
          "passage": [
            "Handel zniewolonymi ludźmi (Slave Trade) działał jak trójkąt przez Ocean Atlantycki.",
            "Statki wypływały z Europy w pierwszy rejs (outward journey).",
            "Wiozły broń, tkaniny i wyroby przemysłowe do Afryki Zachodniej.",
            "Tam towary wymieniano na zniewolonych ludzi.",
            "Drugim odcinkiem było Przejście Środkowe (Middle Passage), z Afryki Zachodniej do Ameryk.",
            "Tam sprzedawano zniewolonych ludzi.",
            "Potem statki płynęły do domu w rejsie powrotnym (return voyage).",
            "Wiozły cukier, bawełnę, tytoń i kawę z plantacji.",
            "Zysk (profit) opłacał następny rejs.",
            "Brytyjskie porty, takie jak Liverpool i Londyn, wysłały tysiące rejsów.",
            "Budowa statków dawała pracę ludziom w tych miastach.",
            "Tak wielu Brytyjczyków zyskiwało na tym handlu, choć nigdy go nie widzieli."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a rota de três lados do Tráfico de Escravizados através do Atlântico (Triangular Trade Route, Rota do Comércio Triangular)",
            "a primeira etapa, da Europa para a África Ocidental (outward journey, viagem de ida)",
            "a segunda etapa, da África Ocidental para as Américas (Middle Passage, Passagem do Meio)",
            "a terceira etapa, das Américas de volta à Europa (return voyage, viagem de regresso/volta)",
            "uma cidade junto ao mar onde os navios carregam e descarregam (port, porto)",
            "o dinheiro que sobrava depois de pagar os custos de uma viagem (profit, lucro)"
          ],
          "passage": [
            "O Tráfico de Escravizados (Slave Trade) funcionava como um triângulo através do Oceano Atlântico.",
            "Os navios saíam da Europa na viagem de ida (outward journey).",
            "Levavam armas, tecidos e produtos fabricados para a África Ocidental.",
            "Lá, as mercadorias eram trocadas por pessoas escravizadas.",
            "A segunda etapa era a Passagem do Meio (Middle Passage), da África Ocidental para as Américas.",
            "As pessoas escravizadas eram vendidas lá.",
            "Depois os navios voltavam para casa na viagem de regresso/volta (return voyage).",
            "Levavam açúcar, algodão, tabaco e café das plantações.",
            "O lucro (profit) pagava a viagem seguinte.",
            "Portos britânicos como Liverpool e Londres mandaram milhares de viagens.",
            "A construção de navios dava trabalho às pessoas dessas cidades.",
            "Assim, muitos britânicos ganharam com o tráfico sem nunca o terem visto."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "waddada saddex-dhinacle ee Ganacsigii Addoonsiga ee Atlantic-ka dhex martay (Triangular Trade Route)",
            "lugta koowaad, Yurub ilaa Galbeedka Afrika (outward journey)",
            "lugta labaad, Galbeedka Afrika ilaa Ameerikada (Middle Passage)",
            "lugta saddexaad, Ameerikada dib ilaa Yurub (return voyage)",
            "magaalo bad ag taal oo maraakiibtu wax ku rartaan oo ku dejiyaan (port)",
            "lacagta hartay ka dib marka kharashka safarka la bixiyo (profit)"
          ],
          "passage": [
            "Ganacsigii Addoonsiga (Slave Trade) wuxuu u shaqaynayay sida saddex-xagal Badweynta Atlantic dhex marta.",
            "Maraakiibtu Yurub ayay ka baxeen safarka dibadda (outward journey).",
            "Waxay u qaadeen qoryo, maro iyo badeecado la sameeyay Galbeedka Afrika.",
            "Halkaas badeecaddii dad la addoonsaday ayaa lagu beddelay.",
            "Lugtii labaad waxay ahayd Middle Passage, Galbeedka Afrika ilaa Ameerikada.",
            "Dadkii la addoonsaday halkaas ayaa lagu iibiyay.",
            "Maraakiibtu markaas guryahooda ayay ku noqdeen safarka celinta (return voyage).",
            "Waxay sideen sonkor, suuf, tubaako iyo kafee beeraha waaweyn (plantations) ka yimid.",
            "Faa'iidadu (profit) safarka xiga ayay bixisay.",
            "Dekedo Ingiriis ah sida Liverpool iyo London kumanaan safar ayay direen.",
            "Markab-dhisiddu dadka magaalooyinkaas shaqo ayay siisay.",
            "Sidaas darteed dad badan oo Ingiriis ah ganacsiga ayay ka faa'iidaysteen iyagoo weligood aan arkin."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "трикутний маршрут работоргівлі через Атлантику (Triangular Trade Route)",
            "перший відрізок, з Європи до Західної Африки (outward journey)",
            "другий відрізок, із Західної Африки до Америк (Middle Passage)",
            "третій відрізок, з Америк назад до Європи (return voyage)",
            "місто біля моря, де кораблі вантажать і розвантажують (port)",
            "гроші, що залишаються після оплати витрат на плавання (profit)"
          ],
          "passage": [
            "Работоргівля (Slave Trade) працювала як трикутник через Атлантичний океан.",
            "Кораблі виходили з Європи в перший рейс (outward journey).",
            "Вони везли зброю, тканини і фабричні товари до Західної Африки.",
            "Там товари обмінювали на поневолених людей.",
            "Другим відрізком був Середній перехід (Middle Passage), із Західної Африки до Америк.",
            "Там поневолених людей продавали.",
            "Потім кораблі пливли додому у зворотний рейс (return voyage).",
            "Вони везли цукор, бавовну, тютюн і каву з плантацій.",
            "Прибуток (profit) оплачував наступне плавання.",
            "Британські порти, такі як Ліверпуль і Лондон, відправили тисячі рейсів.",
            "Будівництво кораблів давало людям у цих містах роботу.",
            "Тож багато британців мали зиск від торгівлі, ніколи її не бачивши."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "بحرِ اوقیانوس کے آر پار غلامی کی تجارت کا تین کونوں والا راستہ (Triangular Trade Route)",
            "پہلا مرحلہ، یورپ سے مغربی افریقہ تک (outward journey)",
            "دوسرا مرحلہ، مغربی افریقہ سے امریکی براعظموں تک (Middle Passage)",
            "تیسرا مرحلہ، امریکی براعظموں سے واپس یورپ تک (return voyage)",
            "سمندر کے کنارے ایک شہر جہاں جہاز سامان لادتے اور اتارتے ہیں (port)",
            "سفر کے خرچے ادا کرنے کے بعد جو پیسہ بچ جائے (profit)"
          ],
          "passage": [
            "غلامی کی تجارت (Slave Trade) بحرِ اوقیانوس (Atlantic Ocean) کے آر پار ایک تکون کی طرح چلتی تھی۔",
            "جہاز outward journey پر یورپ سے روانہ ہوتے تھے۔",
            "وہ مغربی افریقہ تک بندوقیں، کپڑا اور کارخانوں کا سامان لے جاتے تھے۔",
            "وہاں اس سامان کے بدلے غلام بنائے گئے لوگ لیے جاتے تھے۔",
            "دوسرا مرحلہ Middle Passage تھا، مغربی افریقہ سے امریکی براعظموں تک۔",
            "غلام بنائے گئے لوگوں کو وہاں بیچ دیا جاتا تھا۔",
            "پھر جہاز return voyage پر گھر واپس روانہ ہوتے تھے۔",
            "وہ باغات (plantations) سے چینی، کپاس، تمباکو اور کافی لاتے تھے۔",
            "منافع (profit) سے اگلے سفر کا خرچ نکلتا تھا۔",
            "لیورپول (Liverpool) اور لندن جیسی برطانوی بندرگاہوں نے ہزاروں سفر روانہ کیے۔",
            "جہاز سازی سے ان شہروں کے لوگوں کو کام ملا۔",
            "یوں بہت سے برطانوی لوگوں نے اس تجارت کو کبھی دیکھے بغیر اس سے فائدہ اٹھایا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Three legs of a triangle",
          paragraphs: [
            "The Triangular Trade Route is the name given to the three-sided journey of a slave ship. On the outward journey, a ship sailed from Europe to West Africa carrying guns, cloth and other manufactured goods. At the coast these were traded for enslaved people.",
            "On the Middle Passage, the second leg, the ship carried the enslaved people from West Africa to the Americas, where they were sold. On the return voyage, the third leg, the ship carried the goods the enslaved people had made on the plantations, such as sugar, cotton, tobacco and coffee, back to Europe.",
            "The money from selling those goods bought more manufactured goods, and the triangle began again. Every leg made a profit for the ship's owners."
          ],
          worked: {
            q: "A ship is carrying barrels of tobacco. Which leg of the triangle is it on, and where is it going?",
            steps: [
              "Ask where tobacco was grown: on plantations in the Americas.",
              "So the ship must have loaded it in the Americas.",
              "Goods from the Americas travelled on the third leg, back to Europe.",
              "Answer: the return voyage, from the Americas to Europe."
            ],
            answer: "The return voyage: it is carrying a plantation crop from the Americas to Europe."
          },
          tip: "Guns go out, people go across, sugar comes back. Say the three legs out loud until the order is automatic."
        },
        {
          heading: "The march to the coast",
          paragraphs: [
            "Before any ship was involved, captured people were marched to the coast of Africa. The journey could be more than 300 miles, about the distance from London to Scotland, on foot, in chains, with weights to stop people escaping. Between 10 and 15 per cent of those captured died on the way.",
            "Whydah was one of the largest slave-trading ports in West Africa. Historians estimate that in the 1700s more than a million enslaved people passed through it. The traffickers generally did not go inland; people were brought to Whydah from neighbouring kingdoms and held in cramped conditions in forts built by French, English and Portuguese traders.",
            "Every one of those people had a name, a language and a family. Many were farmers, parents or children. Remember this when the numbers get large: each number is a person who was taken."
          ],
          tip: "When a source describes the march or the port, pick out three details and ask what each one tells you about how captured people were treated."
        },
        {
          heading: "Britain's role",
          paragraphs: [
            "Britain was one of the biggest slave-trading nations. Your lesson gives Liverpool about 5,300 slave-trading voyages and London about 3,100. British shipping cities became very rich, because the trade boosted every business around it: ship building, rope making, sail making, banking and insurance.",
            "Ship building in ports such as Liverpool became a booming industry that supported thousands of jobs. More slave ships meant more money, and more money meant more investment in ships, warehouses and docks. The Triangular Trade helped European empires grow their economies and expand.",
            "This matters for the abolition story later. Many British people who never saw an enslaved person still earned their living from the trade, which is one reason it was so hard to end."
          ],
          tip: "If a question asks how Britain benefited, think of the workers in Liverpool and London, not only the ship owners."
        }
      ],
      gate: [
        { kind: "gap", q: "The second leg of the triangle, from West Africa to the Americas, was called the ___.", answer: "Middle Passage", options: ["Middle Passage", "outward journey", "return voyage"], why: "The Middle Passage is the second leg, on which enslaved people were carried from West Africa to the Americas.",
          feedback: {
            "outward journey": "The outward journey is the first leg, from Europe to West Africa, carrying guns and manufactured goods. The leg from West Africa to the Americas, with enslaved people on board, is the Middle Passage.",
            "return voyage": "The return voyage is the third leg, from the Americas back to Europe with sugar, cotton and tobacco. The leg before it, from West Africa to the Americas, is the Middle Passage."
          } },
        { kind: "mcq", q: "What did ships carry on the outward journey from Europe to West Africa?", options: ["Guns, cloth and other manufactured goods", "Sugar, cotton and tobacco", "Enslaved people", "Gold and diamonds from India"], answer: 0, why: "Ships left Europe with manufactured goods, especially guns and cloth, to trade for enslaved people on the African coast.",
          feedback: [
            "",
            "Sugar, cotton and tobacco were grown on the plantations in the Americas, so they travelled on the return voyage back to Europe, not on the way out.",
            "Enslaved people were carried on the Middle Passage, from West Africa to the Americas. Ships leaving Europe carried goods to trade for them.",
            "Gold and diamonds belong to the India unit, not the triangle. Ships leaving Europe for West Africa carried manufactured goods such as guns and cloth."
          ] },
        { kind: "mcq", q: "Which British port sent the most slave-trading voyages?", options: ["Liverpool", "London", "Bristol", "Glasgow"], answer: 0, why: "Liverpool sent about 5,300 voyages, far more than London's 3,100.",
          feedback: [
            "",
            "London was a major slave-trading port with about 3,100 voyages, but Liverpool sent even more: about 5,300.",
            "Bristol also sent slave ships, but Liverpool sent far more than any other British port: about 5,300 voyages.",
            "Glasgow grew rich from tobacco and sugar, but it was not the leading slave-ship port. Liverpool was, with about 5,300 voyages."
          ] }
      ],
      modules: [
        {
          title: "What travelled on each leg",
          task: {
            kind: "match",
            q: "Match each part of the triangle to what happened on it.",
            pairs: [
              ["Outward journey", "Europe to West Africa, carrying guns, cloth and manufactured goods"],
              ["Middle Passage", "West Africa to the Americas, carrying enslaved people"],
              ["Return voyage", "The Americas to Europe, carrying sugar, cotton, tobacco and coffee"],
              ["Profit from the return voyage", "Used to buy more goods for the next outward journey"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the leg you know best: the Middle Passage carried people.",
                "Guns and cloth were made in Europe, so they travel away from Europe.",
                "Sugar, cotton and tobacco were grown in the Americas, so they travel from there.",
                "The profit is what links the end of one triangle to the start of the next."
              ],
              example: {
                q: "Match: a delivery van's morning run and evening run. Choices: carries parcels from the depot to houses; carries empty crates back to the depot.",
                steps: ["Parcels start at the depot, so the morning run takes them out.", "Empty crates come back, so that is the evening run."],
                answer: "Morning run: parcels from the depot to houses. Evening run: empty crates back to the depot."
              }
            },
            core: { hint: "Think about where each cargo was produced. Goods travel away from the place that made them." },
            stretch: { extend: "Explain why the triangle made a profit on all three legs, and why that made it so attractive to investors in Liverpool and London." }
          },
          explain: "Say, in one sentence, why the route is called a triangle.",
          why: "Manufactured goods went out from Europe; enslaved people were carried across on the Middle Passage; plantation crops came back to Europe; and the profit started the next voyage."
        },
        {
          title: "Which leg is this?",
          task: {
            kind: "mcq",
            q: "A ship is carrying barrels of sugar from a plantation in Jamaica. Which leg of the Triangular Trade is it on?",
            options: ["The return voyage", "The outward journey", "The Middle Passage", "None of them: sugar was not part of the triangle"],
            answer: 0,
            why: "Sugar was grown on plantations in the Americas and shipped back to Europe, so a ship carrying sugar is on the return voyage.",
            feedback: [
              "",
              "The outward journey left Europe for West Africa with manufactured goods. Sugar was grown in the Americas, so it travelled on the leg that left the Americas: the return voyage.",
              "The Middle Passage carried enslaved people from West Africa to the Americas. The sugar they grew left the Americas afterwards, on the return voyage to Europe.",
              "Sugar was one of the main cargoes of the triangle: it was the crop that enslaved people grew in the Caribbean, and it travelled to Europe on the return voyage."
            ]
          },
          contexts: [
            { label: "Cotton", q: "A ship is carrying bales of cotton picked on a plantation in the southern states of America. Which leg of the Triangular Trade is it on?", why: "Cotton was a plantation crop from the Americas, so it travelled to Europe on the return voyage." },
            { label: "Tobacco", q: "A ship is carrying tobacco from plantations in Virginia. Which leg of the Triangular Trade is it on?", why: "Tobacco was grown in the Americas and shipped to Europe on the return voyage." },
            { label: "Coffee", q: "A ship is carrying sacks of coffee grown on a Caribbean plantation. Which leg of the Triangular Trade is it on?", why: "Coffee was a plantation crop from the Americas, so it travelled on the return voyage." }
          ],
          levels: {
            support: {
              steps: [
                "Ask where this cargo was grown or made.",
                "Plantation crops were grown in the Americas.",
                "Cargo leaves the place that produced it, so the ship is leaving the Americas.",
                "The leg that leaves the Americas is the return voyage to Europe."
              ],
              example: {
                q: "A ship is carrying muskets made in Birmingham. Which leg is it on?",
                steps: ["Muskets were made in Europe.", "Cargo leaves the place that made it, so the ship is leaving Europe.", "The leg that leaves Europe is the outward journey to West Africa."],
                answer: "The outward journey."
              }
            },
            core: { hint: "Where was this cargo produced? The ship is leaving that place." },
            stretch: { extend: "Explain why enslaved people could never be on the outward or return legs, and what that tells you about how the traders thought of them." }
          },
          explain: "Say, in one sentence, how you can work out the leg from the cargo alone.",
          why: "Plantation crops were produced in the Americas and travelled to Europe, so sugar, cotton, tobacco and coffee always belong to the return voyage."
        },
        {
          title: "How Liverpool gained",
          task: {
            kind: "written",
            q: "Explain how British port cities such as Liverpool benefited from the Slave Trade. Write one paragraph of four to six sentences.",
            criteria: [
              "I name a port city and say what the trade brought to it.",
              "I explain at least two ways people in the city gained, such as ship building, jobs or investment.",
              "I use a figure from the chapter, such as the number of voyages, to support my point.",
              "I finish by explaining why this made the trade hard to end."
            ],
            model: "British port cities such as Liverpool benefited enormously from the Slave Trade. Liverpool sent about 5,300 slave-trading voyages, more than any other British port, and each voyage needed a ship, so ship building became a booming industry that gave thousands of people work. Money made from the voyages was invested in docks, warehouses and more ships, so the city grew richer and bigger. Even people who never saw an enslaved person, such as rope makers and dock workers, depended on the trade for their wages. This is one reason abolition was so hard: whole cities had an interest in keeping the trade going."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name the city and say the trade made it rich.",
                "Sentence 2: give the figure of about 5,300 voyages from Liverpool.",
                "Sentences 3 and 4: explain two ways people gained: ship building jobs, and investment in docks and warehouses.",
                "Last sentence: explain why this made the trade hard to end."
              ],
              example: {
                q: "Explain how a modern town benefits from a large factory opening nearby.",
                steps: ["Name the town and the factory.", "Explain jobs: hundreds of people are employed directly.", "Explain other gains: shops, cafes and builders get more business.", "Finish: the town would fight to keep the factory open."],
                answer: "The factory brings direct jobs, then business for shops and builders, so the town depends on it and wants it to stay."
              }
            },
            core: { hint: "Two ways to gain: direct jobs on the ships and in the shipyards, and money invested back into the city. Use the 5,300 figure." },
            stretch: { extend: "Explain how the wealth of Liverpool and London was connected to the suffering of people on the Middle Passage, and why the people of Liverpool might not have thought about that connection." }
          },
          explain: "Say, in one sentence, why a dock worker in Liverpool who never saw a slave ship still gained from the trade.",
          why: "Ports gained voyages, ship building, jobs and investment. The deeper point is that an entire city's wealth rested on the trade, so many people had a reason to defend it."
        }
      ]
    },

    /* ───────────── 3 · the Middle Passage ───────────── */
    {
      key: "middle-passage", n: 3, title: "The Middle Passage",
      lead: "What the Middle Passage was, what the conditions were like for the people on board, how to read a source about it, and the case of the Zong.",
      covers: [2],
      pretext: {
        words: [
          { word: "captives", means: "people who have been taken and held against their will", sentence: "A ship might carry between 250 and 600 captives." },
          { word: "conditions", means: "what a place is like to live in: the space, air, food and cleanliness", sentence: "The conditions below deck were extremely bad." },
          { word: "disease", means: "illness that spreads from person to person", sentence: "Disease spread quickly in the crowded, airless hold." },
          { word: "portholes", means: "small windows in the side of a ship", sentence: "When the sea was rough, the portholes were closed and the air grew foul." },
          { word: "the Zong", means: "a British slave ship whose captain threw more than 100 people into the sea", sentence: "The case of the Zong shocked people when it was reported in Britain." },
          { word: "insurance", means: "money paid out when something you own is lost or damaged", sentence: "The ship's owners claimed insurance for the people the captain had killed, as if they were lost cargo." }
        ],
        passage: [
          "The Middle Passage was the journey from West Africa to the Americas.",
          "It was the second leg of the triangle.",
          "About twelve million people were forced to make this journey.",
          "Each one was a person taken from their home.",
          "A ship carried between 250 and 600 captives.",
          "People were packed below deck with very little space.",
          "If the sea was rough, the portholes were shut, and the air grew foul.",
          "Disease spread quickly.",
          "Food and water were scarce.",
          "About one in five people died before the ship reached land.",
          "On a ship called the Zong, the captain threw more than 100 people into the sea.",
          "The owners then claimed their value from the insurance company.",
          "Those who survived the crossing were sold in the Americas."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أشخاص أُخذوا واحتُجزوا ضدّ إرادتهم (captives)",
            "كيف يكون المكان للعيش فيه: المساحة والهواء والطعام والنظافة (conditions)",
            "مرض ينتقل من شخص إلى شخص (disease)",
            "نوافذ صغيرة في جانب السفينة (portholes)",
            "سفينة بريطانية لنقل المُستعبَدين ألقى قبطانها أكثر من 100 شخص في البحر (the Zong)",
            "مال يُدفع عندما يُفقد شيء تملكه أو يتضرّر (insurance)"
          ],
          "passage": [
            "كان المعبر الأوسط (Middle Passage) هو الرحلة من غرب أفريقيا إلى الأمريكتَين.",
            "وكان المرحلة الثانية من المثلّث.",
            "أُجبر نحو اثني عشر مليون شخص على القيام بهذه الرحلة.",
            "كان كلّ واحد منهم إنسانًا أُخذ من بيته.",
            "كانت السفينة تحمل ما بين 250 و600 أسير.",
            "كان الناس يُحشرون تحت سطح السفينة في مساحة ضيّقة جدًا.",
            "إذا كان البحر هائجًا، كانت النوافذ الصغيرة (portholes) تُغلق، فيصير الهواء فاسدًا.",
            "كان المرض ينتشر بسرعة.",
            "وكان الطعام والماء قليلَين.",
            "مات نحو واحد من كلّ خمسة أشخاص قبل أن تصل السفينة إلى اليابسة.",
            "على سفينة تُسمّى زونغ (the Zong)، ألقى القبطان أكثر من 100 شخص في البحر.",
            "ثم طالب المالكون شركة التأمين بقيمتهم.",
            "ومن نجوا من رحلة العبور بِيعوا في الأمريكتَين."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ludzie, których pojmano i trzymano wbrew ich woli (captives, pojmani)",
            "to, jak się żyje w jakimś miejscu: przestrzeń, powietrze, jedzenie i czystość (conditions, warunki)",
            "choroba, która przenosi się z człowieka na człowieka (disease)",
            "małe okienka w burcie statku (portholes)",
            "brytyjski statek niewolniczy, którego kapitan wyrzucił do morza ponad 100 osób (the Zong)",
            "pieniądze wypłacane, gdy coś, co posiadasz, zostanie utracone lub zniszczone (insurance, ubezpieczenie)"
          ],
          "passage": [
            "Przejście Środkowe (Middle Passage) to podróż z Afryki Zachodniej do Ameryk.",
            "Był to drugi odcinek trójkąta.",
            "Około dwunastu milionów ludzi zmuszono do tej podróży.",
            "Każdy z nich był człowiekiem zabranym ze swojego domu.",
            "Statek przewoził od 250 do 600 pojmanych (captives).",
            "Ludzi stłoczono pod pokładem na bardzo małej przestrzeni.",
            "Gdy morze było wzburzone, okienka (portholes) zamykano i powietrze stawało się cuchnące.",
            "Choroby szerzyły się szybko.",
            "Brakowało jedzenia i wody.",
            "Około jedna osoba na pięć umierała, zanim statek dotarł do lądu.",
            "Na statku o nazwie Zong kapitan wyrzucił do morza ponad 100 osób.",
            "Właściciele zażądali potem ich wartości od firmy ubezpieczeniowej.",
            "Ci, którzy przeżyli przeprawę, byli sprzedawani w Amerykach."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "pessoas que foram levadas e mantidas presas contra a sua vontade (captives, cativos)",
            "como é um lugar para se viver: o espaço, o ar, a comida e a limpeza (conditions, condições)",
            "doença que passa de pessoa para pessoa (disease, doença)",
            "pequenas janelas no lado de um navio (portholes, vigias)",
            "um navio de tráfico britânico cujo capitão atirou/jogou mais de 100 pessoas ao mar (the Zong)",
            "dinheiro que é pago quando algo que você possui se perde ou se estraga (insurance, seguro)"
          ],
          "passage": [
            "A Passagem do Meio (Middle Passage) era a viagem da África Ocidental para as Américas.",
            "Era a segunda etapa do triângulo.",
            "Cerca de doze milhões de pessoas foram obrigadas a fazer esta viagem.",
            "Cada uma delas era uma pessoa arrancada da sua casa.",
            "Um navio levava entre 250 e 600 cativos (captives).",
            "As pessoas eram amontoadas debaixo do convés com muito pouco espaço.",
            "Se o mar estava agitado, as vigias (portholes) eram fechadas, e o ar ficava podre.",
            "As doenças espalhavam-se depressa.",
            "A comida e a água eram escassas.",
            "Cerca de uma em cada cinco pessoas morria antes de o navio chegar a terra.",
            "Num navio chamado Zong, o capitão atirou/jogou mais de 100 pessoas ao mar.",
            "Os donos do navio exigiram depois o valor delas à companhia de seguros.",
            "Os que sobreviveram à travessia foram vendidos nas Américas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "dad la qabtay oo la hayo iyagoo aan rabin (captives)",
            "sida meel u tahay in lagu noolaado: meesha, hawada, cuntada iyo nadaafadda (conditions)",
            "jirro qof ka qof u faafta (disease)",
            "daaqado yaryar oo markab dhinaciisa ku yaal (portholes)",
            "markab addoonsi oo Ingiriis ah oo kabtankiisu dad ka badan 100 badda ku tuuray (the Zong)",
            "lacag la bixiyo marka wax aad leedahay lumo ama waxyeello gaarto (insurance)"
          ],
          "passage": [
            "Middle Passage waxay ahayd safarka Galbeedka Afrika ilaa Ameerikada.",
            "Waxay ahayd lugta labaad ee saddex-xagalka.",
            "Qiyaastii laba iyo toban milyan qof ayaa lagu qasbay inay safarkan sameeyaan.",
            "Mid kastaa wuxuu ahaa qof gurigiisa laga qaaday.",
            "Markab wuxuu siday inta u dhexaysa 250 iyo 600 maxbuus (captives).",
            "Dadka waxaa lagu cidhiidhiyay sagxadda hoosteeda iyagoo meel aad u yar haysta.",
            "Haddii baddu kacsan tahay, portholes-ka ayaa la xirayay, hawaduna way qudhmaysay.",
            "Cudurradu si dhaqso ah ayay u faafeen.",
            "Cunto iyo biyo way yaraayeen.",
            "Qiyaastii shan qof mid ayaa dhimanayay ka hor inta markabku dhul gaaro.",
            "Markab la yiraahdo Zong, kabtankiisu dad ka badan 100 badda ayuu ku tuuray.",
            "Milkiilayaashii markaas qiimahooda shirkadda insurance-ka ayay ka dalbadeen.",
            "Kuwii badda ka badbaaday Ameerikada ayaa lagu iibiyay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "люди, яких захопили й утримують проти їхньої волі (captives)",
            "яке місце для життя: простір, повітря, їжа і чистота (conditions)",
            "хвороба, яка передається від людини до людини (disease)",
            "маленькі вікна в борту корабля (portholes)",
            "британський работорговельний корабель, капітан якого викинув у море понад 100 людей (the Zong)",
            "гроші, які виплачують, коли те, що вам належить, втрачено або пошкоджено (insurance)"
          ],
          "passage": [
            "Середній перехід (Middle Passage) — це шлях із Західної Африки до Америк.",
            "Це був другий відрізок трикутника.",
            "Близько дванадцяти мільйонів людей змусили здійснити цю подорож.",
            "Кожен із них був людиною, яку забрали з дому.",
            "Корабель перевозив від 250 до 600 полонених.",
            "Людей набивали під палубою з дуже малим простором.",
            "Якщо море було бурхливим, ілюмінатори (portholes) закривали, і повітря ставало смердючим.",
            "Хвороби поширювалися швидко.",
            "Їжі та води бракувало.",
            "Приблизно одна людина з п’яти помирала, перш ніж корабель досягав землі.",
            "На кораблі під назвою «Зонг» (the Zong) капітан викинув у море понад 100 людей.",
            "Потім власники вимагали їхню вартість від страхової компанії.",
            "Тих, хто пережив переправу, продавали в Америках."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسے لوگ جنھیں پکڑ کر ان کی مرضی کے خلاف قید رکھا گیا ہو (captives)",
            "کوئی جگہ رہنے کے لیے کیسی ہے: جگہ، ہوا، خوراک اور صفائی (conditions)",
            "بیماری جو ایک شخص سے دوسرے تک پھیلتی ہے (disease)",
            "جہاز کے پہلو میں چھوٹی کھڑکیاں (portholes)",
            "ایک برطانوی جہاز جس کے کپتان نے 100 سے زیادہ لوگوں کو سمندر میں پھینک دیا (the Zong)",
            "وہ پیسہ جو آپ کی کوئی چیز کھو جانے یا خراب ہونے پر ادا کیا جاتا ہے (insurance)"
          ],
          "passage": [
            "Middle Passage مغربی افریقہ سے امریکی براعظموں تک کا سفر تھا۔",
            "یہ تکون کا دوسرا مرحلہ تھا۔",
            "تقریباً ایک کروڑ بیس لاکھ لوگوں کو یہ سفر کرنے پر مجبور کیا گیا۔",
            "ان میں سے ہر ایک ایک انسان تھا جسے اس کے گھر سے اٹھا لیا گیا تھا۔",
            "ایک جہاز 250 سے 600 تک قیدی (captives) لے جاتا تھا۔",
            "لوگوں کو عرشے کے نیچے بہت کم جگہ میں ٹھونس دیا جاتا تھا۔",
            "اگر سمندر طوفانی ہوتا تو portholes بند کر دی جاتیں، اور ہوا بدبودار ہو جاتی۔",
            "بیماری تیزی سے پھیلتی تھی۔",
            "خوراک اور پانی کی قلت تھی۔",
            "ہر پانچ میں سے تقریباً ایک شخص جہاز کے زمین تک پہنچنے سے پہلے مر جاتا تھا۔",
            "Zong نامی ایک جہاز پر کپتان نے 100 سے زیادہ لوگوں کو سمندر میں پھینک دیا۔",
            "پھر مالکوں نے انشورنس (insurance) کمپنی سے ان کی قیمت کا دعویٰ کیا۔",
            "جو لوگ یہ سفر جھیل کر زندہ بچے، انھیں امریکی براعظموں میں بیچ دیا گیا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What was the Middle Passage?",
          paragraphs: [
            "The Middle Passage was the second leg of the Triangular Trade: the voyage from West Africa to the Americas. About twelve million people were taken across the Atlantic this way. Before boarding, people were stripped of their clothes and had their heads shaved, which was meant to take away who they had been.",
            "Ships carried anything from 250 to 600 captives, packed below deck. People were not free to move about the ship. When the sea was rough the portholes had to be closed, which left people gasping for breath and made disease spread even faster. Food and water were poor and scarce.",
            "About one in five people died on the crossing. For the survivors, the voyage ended not in freedom but in sale."
          ],
          tip: "If a question asks you to describe conditions, cover space, air, food, disease and how men, women and children were held. Keep the people in view."
        },
        {
          heading: "Reading a picture of the Middle Passage",
          paragraphs: [
            "Many sources about the Middle Passage are pictures: plans of ships, drawings and paintings. Your lesson gives you two sentence starters. I can see… describes exactly what is in the picture. This tells me… explains what that detail means for the people on board.",
            "Then think about what you cannot see. A plan of a ship shows rows of figures lying side by side, but it cannot show the heat, the smell, the noise, the fear, or the time: weeks at sea. A good historian names what the source leaves out as well as what it shows.",
            "Finally, ask who made the picture and why. Some ship plans were drawn by abolitionists to shock the public. That origin does not make the picture false, but it is part of what you should say about it."
          ],
          worked: {
            q: "A plan of a slave ship shows people drawn lying in rows below deck, with no space between them. What can you see, and what does it tell you?",
            steps: [
              "I can see: rows of people drawn lying shoulder to shoulder, filling the whole deck, with no gaps.",
              "This tells me: the ship was packed as full as possible, so there was no room to sit up, turn or move.",
              "What I cannot see: the heat, the air, the smell and the sound; or how long people were kept like this.",
              "Origin: if an abolitionist drew it to shock people, say so, and say that your own knowledge still supports what it shows."
            ],
            answer: "I can see people packed in rows with no space; this tells me the ship was overcrowded and people could not move; the plan cannot show the heat, the air or the time at sea; the origin should be named."
          }
        },
        {
          heading: "The Zong, and why the captain's interest mattered",
          paragraphs: [
            "The captain of a slave ship was paid from the sale of the people on board. A healthy person fetched a higher price, so it was in the captain's interest for people to arrive alive and fit. This is a useful question to ask of any source: what did the person who made it want?",
            "On the slave ship the Zong, in 1781, the captain threw more than 100 people overboard. The ship's owners then claimed insurance for them as lost property, as if they had been cargo. The case was reported in Britain and became an important piece of evidence for the abolitionists.",
            "The Zong shows what the Middle Passage really was: a system that counted people as property. Keep that idea in mind when you read a source written by someone who made money from the trade."
          ],
          tip: "The Zong is a strong example to use in an essay about why people came to oppose the trade. Give the date, 1781, and say what the owners tried to claim."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was the Middle Passage?", options: ["The journey from West Africa to the Americas on which enslaved people were carried", "The journey from Europe to West Africa carrying guns and cloth", "The march from inland Africa to the coast", "The journey from the Americas back to Europe carrying sugar"], answer: 0, why: "The Middle Passage was the second leg of the triangle, carrying enslaved people from West Africa to the Americas.",
          feedback: [
            "",
            "That is the outward journey, the first leg. The Middle Passage is the second leg, the crossing from West Africa to the Americas with enslaved people on board.",
            "The march to the coast happened before any ship was involved; it was on land, in chains. The Middle Passage is the sea crossing from West Africa to the Americas.",
            "That is the return voyage, the third leg. The Middle Passage comes before it: the crossing from West Africa to the Americas on which enslaved people were carried."
          ] },
        { kind: "gap", q: "About one in ___ people died on the Middle Passage before the ship reached land.", answer: "five", options: ["five", "two", "fifty"], why: "Your lesson gives the figure as about one in five.",
          feedback: {
            "two": "One in two would mean half of everyone on board died, which is higher than the figure in your lesson. The figure given is about one in five.",
            "fifty": "One in fifty would make the crossing far less deadly than it was. The figure in your lesson is about one in five, so on a ship of 500 people around 100 did not survive."
          } },
        { kind: "mcq", q: "Why did the captain of the Zong throw people into the sea?", options: ["So that the owners could claim money for lost property from the insurance company", "Because the ship was sinking and he was saving the crew", "Because the people had asked to leave the ship", "Because Parliament had ordered him to"], answer: 0, why: "The owners claimed insurance for the people as lost cargo. The case showed that the trade treated people as property.",
          feedback: [
            "",
            "The Zong was not sinking. The people were killed so that the owners could claim their value from the insurance company, as though they were cargo that had been lost.",
            "No one asked to be thrown into the sea. The captain killed people so the owners could make an insurance claim for lost property.",
            "Parliament gave no such order; in fact the Zong case later helped persuade Parliament to act against the trade. The captain acted so the owners could claim insurance for lost property."
          ] }
      ],
      modules: [
        {
          title: "Describe and explain the conditions",
          task: {
            kind: "written",
            q: "Describe the conditions on the Middle Passage and explain why so many people died. Write one paragraph of five to seven sentences.",
            criteria: [
              "I describe at least three features of the conditions: space, air, food and water, disease, how long the voyage lasted.",
              "I explain how each feature led to deaths, using so or because.",
              "I use a figure from the chapter correctly, such as 250 to 600 captives or one in five.",
              "I write about enslaved people as people, not as cargo or numbers."
            ],
            model: "Conditions on the Middle Passage were extremely bad. Between 250 and 600 people were packed below deck with so little space that they could not sit up or turn over. When the sea was rough the portholes were shut, so the air became foul and people struggled to breathe. Disease spread quickly because so many people were held so close together, and there was not enough food or clean water to keep anyone strong. The voyage could last for many weeks, so a person who fell ill had little chance of recovering. For these reasons about one in five of the people who boarded did not live to see land."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The conditions on the Middle Passage were…",
                "Sentences 2 to 4: pick three features (space, air, food, disease) and for each one write what it was like, then so / because… to link it to deaths.",
                "Sentence 5: add the length of the voyage.",
                "Last sentence: give the figure of about one in five."
              ],
              example: {
                q: "Describe the conditions in a medieval town during the Black Death and explain why so many people died.",
                steps: ["Feature: streets full of rubbish and waste, so rats and fleas thrived.", "Feature: families living in one crowded room, so illness passed quickly.", "Feature: no understanding of germs, so no effective treatment.", "Link each with so or because."],
                answer: "Dirty streets, crowded homes and no medical knowledge each helped the plague spread, so a third or more of some towns died."
              }
            },
            core: { hint: "Three features, each followed by so or because. Then the length of the voyage, then the figure." },
            stretch: { extend: "Explain why a captain who was paid on the sale of healthy people still allowed such conditions. What does this tell you about how the owners calculated profit?" }
          },
          explain: "Say, in one sentence, which feature of the conditions you think caused the most deaths, and why.",
          why: "Overcrowding, closed portholes, scarce food and water and fast-spreading disease, over a voyage of many weeks, explain why about one in five people died. The strongest answers link each feature to its effect."
        },
        {
          title: "From capture to sale",
          task: {
            kind: "order",
            q: "Put the stages of an enslaved person's journey in order, from capture to sale.",
            items: [
              "Captured in a war between kingdoms, or sold as a prisoner or debtor",
              "Marched in chains to the coast, a journey of up to 300 miles",
              "Held at a port such as Whydah until a ship arrived",
              "Carried across the Atlantic on the Middle Passage",
              "Sold at auction in the Americas"
            ]
          },
          levels: {
            support: {
              steps: [
                "The journey starts inland, before the sea is anywhere in sight.",
                "A person has to reach the coast before they can be held at a port.",
                "The ship comes after the port.",
                "The sale happens on the other side of the ocean."
              ],
              example: {
                q: "Put the stages of a parcel's journey in order: sorted at a depot; collected from the sender; delivered to the door; driven across the country.",
                steps: ["It must be collected first.", "Then sorted at a depot.", "Then driven across the country.", "Finally delivered."],
                answer: "collected; sorted at a depot; driven across the country; delivered to the door"
              }
            },
            core: { hint: "Inland, then the coast, then the port, then the sea, then the sale." },
            stretch: { extend: "At which of these five stages did people die, according to your lessons? Explain why the traders tolerated those deaths." }
          },
          explain: "Say, in one sentence, why the Middle Passage was only one part of what an enslaved person went through.",
          why: "Capture inland came first; then the march to the coast; then the wait at a port such as Whydah; then the Middle Passage; and finally the auction in the Americas."
        },
        {
          title: "The captain's interest",
          task: {
            kind: "mcq",
            q: "Why was it in a ship captain's interest to keep enslaved people alive and fit during the Middle Passage?",
            options: [
              "The people were to be sold, and a healthy person fetched a higher price",
              "The captain was paid a fixed wage whatever happened",
              "British law punished captains who lost captives at sea",
              "The captain wanted the people to enjoy the voyage"
            ],
            answer: 0,
            why: "The captain's pay came from the sale. Healthy people sold for more, so deaths and illness cost him money. The Zong shows what happened when insurance seemed to pay better than sale.",
            feedback: [
              "",
              "If the captain had been paid a fixed wage, he would have had no interest either way. In fact he was paid from the sale of the people on board, and healthy people sold for more.",
              "There was no such law at the time; the Zong's owners could even claim insurance for people the captain had killed. The captain's interest was money: healthy people sold for higher prices.",
              "Enjoyment did not come into it. The captain's interest was the sale price, and a person who arrived healthy fetched more money than one who arrived sick."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask: where did the captain's money come from?",
                "It came from selling the people on board.",
                "Who sells for more: a healthy person or a sick one?",
                "So which option is about money and health?"
              ],
              example: {
                q: "Why is it in a market trader's interest to keep fruit from bruising on the way to market?",
                steps: ["The trader is paid when the fruit is sold.", "Bruised fruit sells for less or not at all.", "So the trader protects the fruit to protect the price."],
                answer: "Because undamaged fruit sells for more, and the trader's income depends on the sale."
              }
            },
            core: { hint: "Follow the money. Who paid the captain, and for what?" },
            stretch: { extend: "Use the case of the Zong to explain what happened when the owners decided that an insurance claim would pay more than a sale." }
          },
          explain: "Say, in one sentence, what the Zong tells you about how the owners valued the people on board.",
          why: "The captain's income depended on the sale price, and healthy people sold for more. The Zong shows the same logic from the other side: when insurance seemed to pay better than sale, people were killed for the claim."
        }
      ]
    },

    /* ───────────── 4 · auctions, plantations, resistance ───────────── */
    {
      key: "auctions-plantations", n: 4, title: "Sold at auction, life on the plantation, and resistance",
      lead: "What happened at a slave auction, what life and work on a plantation were like, and the ways enslaved people resisted.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "auction", means: "a sale to whoever offers the most money", sentence: "At an auction, enslaved people were sold to the highest bidder." },
          { word: "scramble", means: "a sale in which buyers paid a set price, then rushed in to grab people", sentence: "A scramble was chaotic and terrifying for the people being sold." },
          { word: "plantation", means: "a very large estate farm growing one crop", sentence: "Most enslaved people were sent to work on a sugar or cotton plantation." },
          { word: "slave patrollers", means: "men who watched over the workers and punished them", sentence: "Slave patrollers supervised the fields all day." },
          { word: "resistance", means: "fighting back against control, openly or in small ways", sentence: "Working slowly on purpose was a form of resistance." },
          { word: "Jamaica", means: "a Caribbean island where sugar plantations were the main industry", sentence: "In the 1700s, Jamaica was full of British-owned sugar plantations." }
        ],
        passage: [
          "When the ships arrived, enslaved people were kept in slave pens.",
          "Before a sale, they were washed and oiled to look healthier.",
          "At an auction, people were sold one by one, or in groups, to the highest bidder.",
          "Families could be split up and sold to different buyers.",
          "In a scramble, buyers paid a set price and then rushed in to grab people.",
          "After the sale, people were taken to a plantation.",
          "Plantations were huge farms growing sugar, cotton, tobacco or coffee.",
          "People worked for up to eighteen hours a day, watched by slave patrollers.",
          "They lived in small wooden shacks with dirt floors.",
          "Yet enslaved people found ways to resist.",
          "Some ran away or rose up against their owners.",
          "Many more resisted in small ways every day.",
          "They worked slowly, broke tools, and kept their languages, songs and beliefs alive."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "بيع لمن يعرض أكثر مال (auction)",
            "بيع يدفع فيه المشترون سعرًا محدّدًا ثم يندفعون لخطف الناس (scramble)",
            "مزرعة ضخمة تزرع محصولًا واحدًا (plantation)",
            "رجال كانوا يراقبون العمّال ويعاقبونهم (slave patrollers)",
            "المقاومة ضدّ السيطرة، علنًا أو بطرق صغيرة (resistance)",
            "جزيرة في الكاريبي كانت مزارع السكّر فيها الصناعة الرئيسية (Jamaica)"
          ],
          "passage": [
            "عندما وصلت السفن، احتُجز الأشخاص المُستعبَدون في حظائر احتجاز (slave pens).",
            "قبل البيع، كانوا يُغسَلون ويُدهَنون بالزيت ليبدوا أكثر صحّة.",
            "في المزاد (auction)، كان الناس يُباعون واحدًا واحدًا، أو في مجموعات، لمن يدفع أعلى سعر.",
            "كان يمكن أن تُفرَّق العائلات وتُباع لمشترين مختلفين.",
            "في بيع التدافع (scramble)، كان المشترون يدفعون سعرًا محدّدًا ثم يندفعون لخطف الناس.",
            "بعد البيع، كان الناس يُؤخذون إلى مزرعة كبيرة (plantation).",
            "كانت المزارع الكبيرة مزارع ضخمة تزرع السكّر أو القطن أو التبغ أو البنّ.",
            "كان الناس يعملون حتى ثماني عشرة ساعة في اليوم، يراقبهم حرّاس المزارع (slave patrollers).",
            "وكانوا يعيشون في أكواخ خشبية صغيرة أرضها من التراب.",
            "ومع ذلك وجد الأشخاص المُستعبَدون طرقًا للمقاومة.",
            "فرّ بعضهم أو ثاروا على مالكيهم.",
            "وقاوم كثيرون غيرهم بطرق صغيرة كلّ يوم.",
            "كانوا يعملون ببطء، ويكسرون الأدوات، ويحافظون على لغاتهم وأغانيهم ومعتقداتهم حيّة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "sprzedaż temu, kto zaoferuje najwięcej pieniędzy (auction, licytacja)",
            "sprzedaż, w której kupujący płacili ustaloną cenę, a potem wbiegali i chwytali ludzi (scramble)",
            "bardzo duże gospodarstwo uprawiające jedną roślinę (plantation, plantacja)",
            "mężczyźni, którzy pilnowali pracujących i ich karali (slave patrollers, nadzorcy)",
            "stawianie oporu kontroli, otwarcie lub na małe sposoby (resistance, opór)",
            "karaibska wyspa, na której plantacje cukru były głównym przemysłem (Jamaica, Jamajka)"
          ],
          "passage": [
            "Gdy statki przybywały, zniewolonych ludzi trzymano w zagrodach (slave pens).",
            "Przed sprzedażą myto ich i natłuszczano, żeby wyglądali zdrowiej.",
            "Na licytacji (auction) ludzi sprzedawano pojedynczo lub w grupach temu, kto dał najwięcej.",
            "Rodziny mogły zostać rozdzielone i sprzedane różnym kupcom.",
            "W scramble kupujący płacili ustaloną cenę, a potem wbiegali i chwytali ludzi.",
            "Po sprzedaży ludzi zabierano na plantację (plantation).",
            "Plantacje to ogromne gospodarstwa uprawiające cukier, bawełnę, tytoń lub kawę.",
            "Ludzie pracowali nawet osiemnaście godzin dziennie, pilnowani przez nadzorców (slave patrollers).",
            "Mieszkali w małych drewnianych szopach z klepiskiem zamiast podłogi.",
            "A jednak zniewoleni ludzie znajdowali sposoby, by stawiać opór.",
            "Niektórzy uciekali lub buntowali się przeciw swoim właścicielom.",
            "O wiele więcej stawiało opór na małe sposoby każdego dnia.",
            "Pracowali powoli, psuli narzędzia i zachowywali żywe swoje języki, pieśni i wierzenia."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma venda a quem oferecer mais dinheiro (auction, leilão)",
            "uma venda em que os compradores pagavam um preço fixo e depois corriam para agarrar pessoas (scramble)",
            "uma propriedade agrícola muito grande que cultivava uma só planta (plantation, plantação)",
            "homens que vigiavam os trabalhadores e os castigavam (slave patrollers, patrulheiros/capatazes)",
            "lutar contra o controlo/controle, abertamente ou de pequenas maneiras (resistance, resistência)",
            "uma ilha das Caraíbas/do Caribe onde as plantações de açúcar eram a indústria principal (Jamaica)"
          ],
          "passage": [
            "Quando os navios chegavam, as pessoas escravizadas eram presas em currais (slave pens).",
            "Antes de uma venda, eram lavadas e untadas com óleo para parecerem mais saudáveis.",
            "Num leilão (auction), as pessoas eram vendidas uma a uma, ou em grupos, a quem oferecesse mais.",
            "As famílias podiam ser separadas e vendidas a compradores diferentes.",
            "Num scramble, os compradores pagavam um preço fixo e depois corriam para agarrar pessoas.",
            "Depois da venda, as pessoas eram levadas para uma plantação (plantation).",
            "As plantações eram quintas/fazendas enormes que cultivavam açúcar, algodão, tabaco ou café.",
            "As pessoas trabalhavam até dezoito horas por dia, vigiadas pelos patrulheiros (slave patrollers).",
            "Viviam em pequenas cabanas de madeira com chão de terra.",
            "Mesmo assim, as pessoas escravizadas encontraram maneiras de resistir.",
            "Algumas fugiram ou revoltaram-se contra os seus donos.",
            "Muitas mais resistiram de pequenas maneiras todos os dias.",
            "Trabalhavam devagar, partiam/quebravam ferramentas e mantinham vivas as suas línguas, canções e crenças."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "iib qofkii lacagta ugu badan bixiya la siiyo (auction)",
            "iib iibsadayaashu qiimo go'an bixiyeen, kaddibna u yaaceen si ay dad u qabtaan (scramble)",
            "beer aad u weyn oo hal dalag beerta (plantation)",
            "rag shaqaalaha ilaalin jiray oo ciqaabi jiray (slave patrollers)",
            "la dagaallanka xukun, si furan ama siyaabo yaryar (resistance)",
            "jasiirad Caribbean ah oo beeraha sonkorta ay warshaddeeda ugu weyn ahaayeen (Jamaica)"
          ],
          "passage": [
            "Markii maraakiibtu yimaadeen, dadka la addoonsaday xeryo (slave pens) ayaa lagu hayay.",
            "Iib ka hor, waa la dhaqi jiray oo saliid lagu mari jiray si ay u muuqdaan caafimaad qaba.",
            "Auction, dad ayaa mid mid, ama kooxo, loo iibin jiray qofkii lacagta ugu badan bixiya.",
            "Qoysas waa la kala qaybin karay oo iibsadayaal kala duwan loo iibin karay.",
            "Scramble, iibsadayaashu qiimo go'an ayay bixiyeen, kaddibna way u yaaceen si ay dad u qabtaan.",
            "Iibka ka dib, dadka beer weyn (plantation) ayaa loo qaadi jiray.",
            "Plantations waxay ahaayeen beero aad u waaweyn oo beeraya sonkor, suuf, tubaako ama kafee.",
            "Dadku waxay shaqayn jireen ilaa siddeed iyo toban saacadood maalintii, iyagoo slave patrollers ilaaliyaan.",
            "Waxay ku noolaayeen buulal alwaax ah oo yaryar oo dhulkoodu ciid yahay.",
            "Haddana dadkii la addoonsaday siyaabo ay u iska caabbiyaan ayay heleen.",
            "Qaar way carareen ama milkiilayaashooda ayay ku kaceen.",
            "Kuwo badan oo ka badan siyaabo yaryar ayay maalin walba ku iska caabbiyeen.",
            "Si tartiib ah ayay u shaqayn jireen, qalab ayay jebin jireen, luqaddooda, heesahooda iyo caqiidooyinkooda ayay noolayn jireen."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "продаж тому, хто запропонує найбільше грошей (auction)",
            "продаж, на якому покупці платили встановлену ціну, а потім кидалися хапати людей (scramble)",
            "дуже велике господарство, де вирощують одну культуру (plantation)",
            "чоловіки, які наглядали за працівниками і карали їх (slave patrollers)",
            "опір контролю, відкрито або дрібними способами (resistance)",
            "карибський острів, де цукрові плантації були головною галуззю (Jamaica)"
          ],
          "passage": [
            "Коли кораблі прибували, поневолених людей тримали в загонах (slave pens).",
            "Перед продажем їх мили і натирали олією, щоб вони виглядали здоровішими.",
            "На аукціоні (auction) людей продавали одного за одним або групами тому, хто давав найбільше.",
            "Родини могли розділити і продати різним покупцям.",
            "На «розхваті» (scramble) покупці платили встановлену ціну, а потім кидалися хапати людей.",
            "Після продажу людей везли на плантацію (plantation).",
            "Плантації були величезними господарствами, де вирощували цукор, бавовну, тютюн або каву.",
            "Люди працювали до вісімнадцяти годин на день під наглядом патрульних (slave patrollers).",
            "Вони жили в маленьких дерев’яних хатинах із земляною підлогою.",
            "Та все ж поневолені люди знаходили способи опору.",
            "Деякі тікали або повставали проти своїх власників.",
            "Набагато більше людей чинили опір дрібними способами кожного дня.",
            "Вони працювали повільно, ламали знаряддя і зберігали свої мови, пісні та вірування."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسی فروخت جس میں چیز اسے ملتی ہے جو سب سے زیادہ پیسہ دے (auction)",
            "ایسی فروخت جس میں خریدار ایک مقررہ قیمت دیتے، پھر لوگوں کو جھپٹنے کے لیے دوڑ پڑتے (scramble)",
            "ایک بہت بڑا زرعی فارم جس پر ایک فصل اگائی جاتی ہے (plantation)",
            "وہ آدمی جو مزدوروں پر نظر رکھتے اور انھیں سزا دیتے تھے (slave patrollers)",
            "کھلے عام یا چھوٹے چھوٹے طریقوں سے قابو کے خلاف لڑنا (resistance)",
            "کیریبین کا ایک جزیرہ جہاں چینی کے باغات سب سے بڑی صنعت تھے (Jamaica)"
          ],
          "passage": [
            "جب جہاز پہنچتے تو غلام بنائے گئے لوگوں کو باڑوں (slave pens) میں رکھا جاتا تھا۔",
            "فروخت سے پہلے انھیں نہلایا جاتا اور تیل لگایا جاتا تاکہ وہ زیادہ صحت مند دکھیں۔",
            "نیلامی (auction) میں لوگوں کو ایک ایک کر کے، یا گروہوں میں، سب سے زیادہ بولی دینے والے کو بیچا جاتا تھا۔",
            "خاندان الگ الگ کر کے الگ الگ خریداروں کو بیچے جا سکتے تھے۔",
            "scramble میں خریدار ایک مقررہ قیمت دیتے اور پھر لوگوں کو جھپٹنے کے لیے دوڑ پڑتے۔",
            "فروخت کے بعد لوگوں کو کسی plantation پر لے جایا جاتا تھا۔",
            "plantations بہت بڑے فارم تھے جہاں چینی، کپاس، تمباکو یا کافی اگائی جاتی تھی۔",
            "لوگ دن میں اٹھارہ گھنٹے تک کام کرتے تھے، اور slave patrollers ان پر نظر رکھتے تھے۔",
            "وہ مٹی کے فرش والی لکڑی کی چھوٹی جھونپڑیوں میں رہتے تھے۔",
            "پھر بھی غلام بنائے گئے لوگوں نے مزاحمت کے راستے نکالے۔",
            "کچھ بھاگ گئے یا اپنے مالکوں کے خلاف اٹھ کھڑے ہوئے۔",
            "اس سے کہیں زیادہ لوگ ہر دن چھوٹے چھوٹے طریقوں سے مزاحمت کرتے تھے۔",
            "وہ سست کام کرتے، اوزار توڑ دیتے، اور اپنی زبانیں، گیت اور عقیدے زندہ رکھتے تھے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Before and at the auction",
          paragraphs: [
            "When a ship reached the Americas, the people on board were taken to slave jails or slave pens. Before an auction they were washed and had oil rubbed into their skin so that they would look healthier and sell for more. People who resisted or fought back were sent to what traders called seasoning camps, where many died.",
            "At the auction, people were sold individually or in groups to the highest bidder. Buyers inspected them as if they were animals at a market. Those who were sold were kept in an enclosure until the auction ended and the buyers collected them. People left unsold were called refuse and sold to anyone who would take them.",
            "In a scramble, buyers paid a fixed price in advance and then, at a signal, rushed in to grab whoever they could. Everything about the auction shows that the traders saw enslaved people as property, not as people. Your lesson asks you to explain that, and the details above are your evidence."
          ],
          tip: "To show that traders saw people as property, use the details: washed and oiled like goods for sale, sold to the highest bidder, the word refuse. Then say what each detail shows."
        },
        {
          heading: "Life and work on the plantation",
          paragraphs: [
            "After the sale, people were transported to a plantation: a big estate with farms growing crops such as coffee, cotton, sugar and tobacco. By 1860 there were over four million enslaved people in the United States, and about 60 per cent of them worked in cotton. In the Caribbean, in places such as Jamaica, the main industry in the 1700s was sugar.",
            "Plantation workers often worked for eighteen hours a day. Slave patrollers supervised them, and anyone judged not to be working hard enough was punished. On cotton plantations each worker's basket was weighed at the end of the day; a light basket meant punishment.",
            "People were forced to live in small wooden shacks with little or no furniture. Whole families were crammed into a single room and slept together on a dirt floor."
          ],
          tip: "Working conditions are about the day's labour: hours, supervision, punishment. Living conditions are about the shacks: space, furniture, floors. Keep the two separate in an answer."
        },
        {
          heading: "Resistance",
          paragraphs: [
            "Enslaved people did not simply accept their situation. Your lesson looks at life and resistance on the plantations of Jamaica in the 1700s. Resistance took two forms. Full, open resistance meant running away, or rising up against the owners. In Jamaica some people escaped to the hills and fought to stay free.",
            "Open resistance was dangerous and was usually crushed. That is why the small, everyday acts of resistance mattered so much. People worked slowly, broke tools, pretended not to understand orders, and kept their languages, stories, songs and beliefs alive, even when this was forbidden.",
            "Small acts of resistance did not end slavery on their own. But in a system designed to take away a person's control and dignity, every act that kept a little of both was a victory. It is also one reason that African culture survived in the Caribbean and the Americas."
          ],
          worked: {
            q: "Why were small acts of resistance important, even though they did not end slavery?",
            steps: [
              "Point: small acts of resistance were important because they gave enslaved people some control over their own lives.",
              "Evidence: working slowly, breaking tools, keeping songs and languages alive.",
              "Explain: the system was designed to take away control and dignity, so every act that kept some of both was a way of refusing to be property.",
              "Judge: open rebellion was rare and usually crushed, so for most people small acts were the only form of resistance possible."
            ],
            answer: "They kept control and dignity alive inside a system built to remove both, and for most people they were the only resistance that was possible."
          }
        }
      ],
      gate: [
        { kind: "mcq", q: "What was a plantation?", options: ["A very large estate farm growing a crop such as sugar, cotton or tobacco", "A large factory where enslaved people made rum and salt", "A prison where captives were held before being sold", "A ship used on the Middle Passage"], answer: 0, why: "A plantation was a huge farm estate growing one main crop. Most enslaved people were sent to work on one.",
          feedback: [
            "",
            "A plantation was a farm, not a factory, and the main crops were sugar, cotton, tobacco and coffee, not rum and salt. The word estate farm is the one to remember.",
            "The place where captives were held before sale was a slave pen or slave jail. A plantation is where people were sent after the auction: a very large farm.",
            "The ship on the Middle Passage carried people across the ocean. The plantation is where they were put to work afterwards: a huge estate farm."
          ] },
        { kind: "gap", q: "At an auction, enslaved people were sold to the ___ bidder.", answer: "highest", options: ["highest", "first", "nearest"], why: "An auction sells to the person who offers the most money: the highest bidder.",
          feedback: {
            "first": "Being first to bid did not win an auction; other buyers could offer more. The sale went to whoever offered the most money, the highest bidder.",
            "nearest": "Where a buyer stood made no difference. The auctioneer sold to whoever offered the most money, the highest bidder."
          } },
        { kind: "mcq", q: "Which of these is an example of a small, everyday act of resistance on a plantation?", options: ["Working slowly or breaking a tool on purpose", "Escaping to the hills and fighting the owners", "Agreeing to work extra hours", "Buying a plantation of your own"], answer: 0, why: "Working slowly and breaking tools were small acts that slowed the plantation down and kept some control for the worker.",
          feedback: [
            "",
            "Escaping and fighting is resistance, but it is full, open resistance, not a small everyday act. The small acts were things like working slowly or breaking tools.",
            "Agreeing to extra work is the opposite of resistance; it gives the owner more. Resistance meant finding ways to give less, such as working slowly or breaking tools.",
            "Enslaved people were property and could not buy land. Their resistance was in what they did each day: working slowly, breaking tools, keeping their culture alive."
          ] }
      ],
      modules: [
        {
          title: "Property, not people",
          task: {
            kind: "written",
            q: "Explain how slave auctions show that traders saw enslaved people as property, not as people. Write one paragraph of four to six sentences.",
            criteria: [
              "I give at least two details from the auction, such as washing and oiling, the highest bidder, the scramble, or the word refuse.",
              "After each detail I explain what it shows about how traders thought.",
              "I use the words property and people to make the contrast clear.",
              "I keep the enslaved people in view as people, with families and feelings."
            ],
            model: "Slave auctions show clearly that traders saw enslaved people as property. Before a sale, people were washed and had oil rubbed into their skin to make them look healthier, exactly as a trader might polish goods to get a better price. At the auction they were sold to the highest bidder, sometimes one by one, which meant parents and children could be bought by different owners and never see each other again; a trader who thought of them as people would not have done this. People who were not sold were called refuse, a word for rubbish. Each of these details shows that, to the traders, a person was a thing with a price."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Slave auctions show that traders saw enslaved people as property because…",
                "Sentence 2: give detail one (washed and oiled) and say what it shows.",
                "Sentence 3: give detail two (highest bidder, families split) and say what it shows.",
                "Sentence 4: give detail three (refuse, or the scramble) and finish with the word property."
              ],
              example: {
                q: "Explain how the treatment of English peasants after 1066 shows that the Normans saw them as a source of money.",
                steps: ["Detail: the Domesday Book counted every plough and pig.", "What it shows: the king wanted to know exactly what he could tax.", "Detail: heavy fines for breaking forest laws.", "What it shows: the people were a source of income to be squeezed."],
                answer: "The Domesday survey and the forest fines both treated the peasants as sources of money, which shows how the Normans saw them."
              }
            },
            core: { hint: "Detail, then what it shows. Twice at least. The word refuse is a strong third detail." },
            stretch: { extend: "The deck's auction sources were made by people who watched auctions. Explain one thing such a source might show you, and one thing it could not show you about how the enslaved people felt." }
          },
          explain: "Say, in one sentence, which auction detail you think shows most clearly that traders saw people as property.",
          why: "Washing and oiling, selling to the highest bidder, splitting families, the scramble and the word refuse all treat people as goods. A strong answer explains what each detail shows, not just lists it."
        },
        {
          title: "Words from the auction and the plantation",
          task: {
            kind: "match",
            q: "Match each term to its meaning.",
            pairs: [
              ["Auction", "A sale to whoever offered the most money"],
              ["Scramble", "Buyers paid a set price, then rushed in to grab whoever they could"],
              ["Slave pen", "Where people were held after arriving, before they were sold"],
              ["Plantation", "A very large estate farm growing one main crop"],
              ["Slave patroller", "A man who supervised the workers and punished them"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of the terms are kinds of sale. Which two?",
                "One term is a place people were kept before the sale; one is the place they worked after it.",
                "The remaining term is a person, not a place or a sale.",
                "Match the person last."
              ],
              example: {
                q: "Match: market, warehouse, shopkeeper. Choices: a person who sells goods; a place where goods are sold; a place where goods are stored.",
                steps: ["The shopkeeper is the only person, so match that first.", "Goods are sold at a market and stored in a warehouse."],
                answer: "Market: a place where goods are sold. Warehouse: a place where goods are stored. Shopkeeper: a person who sells goods."
              }
            },
            core: { hint: "Sort the five terms into sales, places and people before you match." },
            stretch: { extend: "The deck lists a scramble as a type of auction. Explain why a scramble might have been even more frightening than an ordinary auction for the people being sold." }
          },
          explain: "Say, in one sentence, the difference between an auction and a scramble.",
          why: "Auction and scramble are kinds of sale; slave pen and plantation are places before and after the sale; a slave patroller is the person who supervised and punished the workers."
        },
        {
          title: "Why small acts mattered",
          task: {
            kind: "mcq",
            q: "A group of enslaved people on a plantation worked slowly whenever the patroller looked away. Why was an act like this important?",
            options: [
              "It let enslaved people keep some control and dignity in a system built to take both away",
              "It ended slavery on that plantation straight away",
              "It was noticed by Parliament in London and led to a new law",
              "It made the plantation more profitable for the owner"
            ],
            answer: 0,
            why: "Small acts did not end slavery, but they gave people some control over their own lives and refused the idea that they were property.",
            feedback: [
              "",
              "No small act ended slavery by itself; slavery across the British Empire was ended by law in 1833. Small acts mattered because they kept some control and dignity for the people doing them.",
              "Parliament did not hear about tools broken or work done slowly on a single plantation. The importance of these acts was for the people themselves: a little control and dignity kept.",
              "Working slowly cost the owner money; that was the point. Resistance meant giving the owner less, while keeping some control over your own day."
            ]
          },
          contexts: [
            { label: "Keeping songs alive", q: "In the evenings, enslaved people on a Jamaican sugar plantation sang songs and told stories from West Africa, even though this was discouraged. Why was an act like this important?", why: "Keeping languages, songs and stories alive refused the idea that enslaved people had no past and no identity of their own." },
            { label: "Breaking tools", q: "Workers on a cotton plantation sometimes let a hoe break or lost a basket so the day's work was delayed. Why was an act like this important?", why: "Slowing the work gave people a little control over their own labour and cost the owner money." },
            { label: "Pretending not to understand", q: "Some enslaved people pretended not to understand an order so that the task was done late or wrongly. Why was an act like this important?", why: "Each delay was a small refusal to be a tool, and it kept some control in the hands of the person doing the work." }
          ],
          levels: {
            support: {
              steps: [
                "Ask: did this act end slavery? No. So cross out any option that says it did.",
                "Ask: did it help the owner? No. Cross that out.",
                "Ask: did anyone in London know? No.",
                "What is left is about the people themselves: what did they keep?"
              ],
              example: {
                q: "A prisoner of war secretly keeps a diary against the camp rules. Why is this important even though it does not free them?",
                steps: ["It does not free them and the guards gain nothing from it.", "It keeps a private part of their life that the camp cannot control.", "So its importance is dignity and control, not escape."],
                answer: "Because it keeps a part of their life and identity under their own control."
              }
            },
            core: { hint: "The right answer is about what the enslaved people kept, not about what happened to the owner or to the law." },
            stretch: { extend: "Explain why open resistance, such as running away or rising up, was rare, and why historians still think the small acts were a real form of resistance." }
          },
          explain: "Say, in one sentence, what an enslaved person gained from a small act of resistance.",
          why: "Small acts of resistance gave people some control over their own labour and kept their identity alive inside a system designed to deny both. That, not an immediate end to slavery, is why they mattered."
        }
      ]
    },

    /* ───────────── 5 · abolition ───────────── */
    {
      key: "abolition", n: 5, title: "Abolition: the people and the reasons that ended slavery",
      lead: "Who the abolitionists were, including the formerly enslaved people who led the campaign, the economic reasons that helped, and the Acts of 1807 and 1833.",
      covers: [5],
      pretext: {
        words: [
          { word: "abolition", means: "ending something for good", sentence: "The abolition of slavery across the British Empire came in 1833." },
          { word: "abolitionist", means: "a person who campaigned to end the Slave Trade and slavery", sentence: "Olaudah Equiano was an abolitionist who had himself been enslaved." },
          { word: "Quakers", means: "a Christian group who believed all people were equal before God", sentence: "The Quakers were among the first to campaign against slavery." },
          { word: "compensation", means: "money paid to make up for a loss", sentence: "Slave owners were paid compensation for the people they lost." },
          { word: "apprenticeship", means: "the system that replaced slavery and tied freed people to their old plantations until 1838", sentence: "Apprenticeship meant freedom did not fully arrive in 1833." },
          { word: "campaign", means: "organised action to change something", sentence: "The campaign against slavery used books, speeches and petitions." }
        ],
        passage: [
          "Abolition means ending something for good.",
          "Abolitionists were people who campaigned to end the Slave Trade and slavery.",
          "Formerly enslaved people such as Olaudah Equiano and Ottobah Cugoano spoke and wrote against slavery.",
          "Equiano set up a group in London for formerly enslaved people.",
          "Phillis Wheatley, who had been enslaved as a child, became a published poet.",
          "The Quakers, a Christian group, believed all people were equal before God.",
          "Working-class people in Britain also opposed the trade.",
          "Some politicians took the campaign into Parliament.",
          "The trade was also making less money than before.",
          "In 1807, Parliament banned the buying and selling of enslaved people in the British Empire.",
          "In 1833, a new Act ended slavery itself across the Empire.",
          "Freed people had to work as apprentices until 1838.",
          "Slave owners were paid twenty million pounds in compensation.",
          "The people who had been enslaved received nothing."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "إنهاء شيء ما نهائيًا (abolition)",
            "شخص ناضل لإنهاء تجارة الرقيق والعبودية (abolitionist)",
            "جماعة مسيحية كانت تؤمن بأنّ الناس جميعًا متساوون أمام الله (Quakers)",
            "مال يُدفع تعويضًا عن خسارة (compensation)",
            "النظام الذي حلّ محلّ العبودية وربط المحرَّرين بمزارعهم القديمة حتى عام 1838 (apprenticeship)",
            "عمل منظّم لتغيير شيء ما (campaign)"
          ],
          "passage": [
            "الإلغاء (abolition) يعني إنهاء شيء ما نهائيًا.",
            "كان دعاة الإلغاء (abolitionists) أشخاصًا ناضلوا لإنهاء تجارة الرقيق والعبودية.",
            "تحدّث وكتب ضدّ العبودية أشخاص كانوا مُستعبَدين سابقًا مثل أولودا إكويانو (Olaudah Equiano) وأوتوبا كوغوانو (Ottobah Cugoano).",
            "أسّس إكويانو في لندن جماعةً للأشخاص الذين كانوا مُستعبَدين سابقًا.",
            "وصارت فيليس ويتلي (Phillis Wheatley)، التي استُعبدت وهي طفلة، شاعرةً منشورة الأعمال.",
            "كان الكويكرز (Quakers)، وهم جماعة مسيحية، يؤمنون بأنّ الناس جميعًا متساوون أمام الله.",
            "وعارض هذه التجارة أيضًا أبناء الطبقة العاملة في بريطانيا.",
            "ونقل بعض السياسيين الحملة إلى البرلمان.",
            "وكانت التجارة أيضًا تجني مالًا أقلّ من قبل.",
            "في عام 1807، منع البرلمان شراء الأشخاص المُستعبَدين وبيعهم في الإمبراطورية البريطانية.",
            "وفي عام 1833، أنهى قانون جديد العبودية نفسها في أنحاء الإمبراطورية كلّها.",
            "كان على المحرَّرين أن يعملوا متدرّبين (apprentices) حتى عام 1838.",
            "ودُفع لمالكي المُستعبَدين عشرون مليون جنيه تعويضًا.",
            "أمّا الناس الذين كانوا مُستعبَدين فلم يحصلوا على شيء."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zakończenie czegoś na dobre (abolition, abolicja)",
            "osoba, która walczyła o zakończenie handlu zniewolonymi ludźmi i niewolnictwa (abolitionist, abolicjonista)",
            "grupa chrześcijan, którzy wierzyli, że wszyscy ludzie są równi wobec Boga (Quakers, kwakrzy)",
            "pieniądze wypłacane, by wyrównać stratę (compensation, odszkodowanie)",
            "system, który zastąpił niewolnictwo i przywiązywał uwolnionych ludzi do ich dawnych plantacji do 1838 roku (apprenticeship)",
            "zorganizowane działanie, by coś zmienić (campaign, kampania)"
          ],
          "passage": [
            "Abolicja (abolition) oznacza zakończenie czegoś na dobre.",
            "Abolicjoniści (abolitionists) to ludzie, którzy walczyli o zakończenie handlu zniewolonymi ludźmi i niewolnictwa.",
            "Dawniej zniewoleni ludzie, tacy jak Olaudah Equiano i Ottobah Cugoano, przemawiali i pisali przeciw niewolnictwu.",
            "Equiano założył w Londynie grupę dla dawniej zniewolonych ludzi.",
            "Phillis Wheatley, zniewolona jako dziecko, została publikowaną poetką.",
            "Kwakrzy (Quakers), grupa chrześcijan, wierzyli, że wszyscy ludzie są równi wobec Boga.",
            "Ludzie z klasy robotniczej w Wielkiej Brytanii też sprzeciwiali się temu handlowi.",
            "Niektórzy politycy przenieśli kampanię do parlamentu.",
            "Handel przynosił też mniej pieniędzy niż wcześniej.",
            "W 1807 roku parlament zakazał kupowania i sprzedawania zniewolonych ludzi w Imperium Brytyjskim.",
            "W 1833 roku nowa ustawa zakończyła samo niewolnictwo w całym Imperium.",
            "Uwolnieni ludzie musieli pracować jako „terminatorzy” (apprentices) do 1838 roku.",
            "Właściciele zniewolonych ludzi otrzymali dwadzieścia milionów funtów odszkodowania.",
            "Ludzie, którzy byli zniewoleni, nie otrzymali nic."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "acabar com alguma coisa de uma vez por todas (abolition, abolição)",
            "uma pessoa que fez campanha para acabar com o Tráfico de Escravizados e com a escravatura/escravidão (abolitionist, abolicionista)",
            "um grupo cristão que acreditava que todas as pessoas eram iguais perante Deus (Quakers, quacres/quakers)",
            "dinheiro pago para compensar uma perda (compensation, indemnização/indenização)",
            "o sistema que substituiu a escravatura/escravidão e prendeu as pessoas libertadas às suas antigas plantações até 1838 (apprenticeship, aprendizagem)",
            "ação organizada para mudar alguma coisa (campaign, campanha)"
          ],
          "passage": [
            "Abolição (abolition) quer dizer acabar com alguma coisa de uma vez por todas.",
            "Os abolicionistas (abolitionists) eram pessoas que fizeram campanha para acabar com o Tráfico de Escravizados e com a escravatura/escravidão.",
            "Pessoas antes escravizadas, como Olaudah Equiano e Ottobah Cugoano, falaram e escreveram contra a escravatura/escravidão.",
            "Equiano fundou em Londres um grupo para pessoas antes escravizadas.",
            "Phillis Wheatley, que tinha sido escravizada em criança/quando criança, tornou-se uma poetisa publicada.",
            "Os quacres/quakers (Quakers), um grupo cristão, acreditavam que todas as pessoas eram iguais perante Deus.",
            "Pessoas da classe trabalhadora na Grã-Bretanha também se opuseram ao tráfico.",
            "Alguns políticos levaram a campanha ao Parlamento.",
            "O tráfico também estava a dar/dando menos dinheiro do que antes.",
            "Em 1807, o Parlamento proibiu a compra e a venda de pessoas escravizadas no Império Britânico.",
            "Em 1833, uma nova lei (Act) acabou com a própria escravatura/escravidão em todo o Império.",
            "As pessoas libertadas tiveram de trabalhar como aprendizes até 1838.",
            "Os donos de pessoas escravizadas receberam vinte milhões de libras de indemnização/indenização.",
            "As pessoas que tinham sido escravizadas não receberam nada."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "wax si kama dambays ah loo joojiyo (abolition)",
            "qof u ololeeyay in la joojiyo Ganacsigii Addoonsiga iyo addoonsiga (abolitionist)",
            "koox Masiixiyiin ah oo rumaysnayd in dadku oo dhan Ilaah hortiis siman yihiin (Quakers)",
            "lacag la bixiyo si khasaare loo buuxiyo (compensation)",
            "nidaamkii beddelay addoonsiga oo dadkii la xoreeyay ku xiray beerahoodii hore ilaa 1838 (apprenticeship)",
            "ficil abaabulan oo wax lagu beddelo (campaign)"
          ],
          "passage": [
            "Abolition macnaheedu waa wax si kama dambays ah loo joojiyo.",
            "Abolitionists waxay ahaayeen dad u ololeeyay in la joojiyo Ganacsigii Addoonsiga iyo addoonsiga.",
            "Dad hore loo addoonsaday sida Olaudah Equiano iyo Ottobah Cugoano ayaa ka hadlay oo wax ka qoray addoonsiga.",
            "Equiano London ayuu koox uga sameeyay dad hore loo addoonsaday.",
            "Phillis Wheatley, oo la addoonsaday iyadoo ilmo ah, waxay noqotay gabayaa buugaag daabacday.",
            "Quakers-ku, koox Masiixiyiin ah, waxay rumaysnaayeen in dadku oo dhan Ilaah hortiis siman yihiin.",
            "Dadka shaqaalaha ah ee Britain-na ganacsiga way ka soo horjeesteen.",
            "Siyaasiyiin qaar ololaha Baarlamaanka ayay geeyeen.",
            "Ganacsiguna lacag ka yar sidii hore ayuu samaynayay.",
            "1807, Baarlamaanku wuxuu mamnuucay iibsiga iyo iibinta dadka la addoonsaday Boqortooyadii Ingiriiska (British Empire) oo dhan.",
            "1833, Sharci (Act) cusub ayaa addoonsiga laftiisa joojiyay Boqortooyada oo dhan.",
            "Dadkii la xoreeyay waxay ahayd inay u shaqeeyaan sida apprentices ilaa 1838.",
            "Kuwii dadka addoonsan jiray labaatan milyan pound ayaa magdhow (compensation) loo siiyay.",
            "Dadkii la addoonsaday waxba ma helin."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "припинення чогось назавжди (abolition)",
            "людина, яка боролася за припинення работоргівлі та рабства (abolitionist)",
            "християнська група, яка вірила, що всі люди рівні перед Богом (Quakers)",
            "гроші, які виплачують, щоб відшкодувати втрату (compensation)",
            "система, яка замінила рабство і прив’язувала звільнених людей до їхніх старих плантацій до 1838 року (apprenticeship)",
            "організовані дії, щоб щось змінити (campaign)"
          ],
          "passage": [
            "Скасування (abolition) означає припинення чогось назавжди.",
            "Аболіціоністи (abolitionists) — це люди, які боролися за припинення работоргівлі та рабства.",
            "Колись поневолені люди, такі як Олауда Еквіано (Olaudah Equiano) і Оттоба Куґоано (Ottobah Cugoano), виступали і писали проти рабства.",
            "Еквіано заснував у Лондоні групу для колись поневолених людей.",
            "Філліс Вітлі (Phillis Wheatley), яку поневолили в дитинстві, стала поетесою, чиї вірші друкували.",
            "Квакери (Quakers), християнська група, вірили, що всі люди рівні перед Богом.",
            "Робітники у Британії також виступали проти торгівлі.",
            "Деякі політики винесли кампанію до Парламенту.",
            "Торгівля також приносила менше грошей, ніж раніше.",
            "У 1807 році Парламент заборонив купівлю і продаж поневолених людей у Британській імперії.",
            "У 1833 році новий закон (Act) скасував саме рабство по всій імперії.",
            "Звільнені люди мусили працювати як учні (apprentices) до 1838 року.",
            "Власникам поневолених людей виплатили двадцять мільйонів фунтів компенсації.",
            "Люди, яких поневолювали, не отримали нічого."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی چیز کو ہمیشہ کے لیے ختم کرنا (abolition)",
            "ایسا شخص جس نے غلامی کی تجارت اور غلامی ختم کرنے کے لیے مہم چلائی (abolitionist)",
            "ایک مسیحی گروہ جو مانتا تھا کہ خدا کے سامنے سب لوگ برابر ہیں (Quakers)",
            "نقصان کی تلافی کے لیے ادا کیا جانے والا پیسہ (compensation)",
            "وہ نظام جس نے غلامی کی جگہ لی اور آزاد کیے گئے لوگوں کو 1838 تک ان کے پرانے باغات سے باندھے رکھا (apprenticeship)",
            "کسی چیز کو بدلنے کے لیے منظم کوشش (campaign)"
          ],
          "passage": [
            "abolition کا مطلب ہے کسی چیز کو ہمیشہ کے لیے ختم کرنا۔",
            "abolitionists وہ لوگ تھے جنھوں نے غلامی کی تجارت اور غلامی ختم کرنے کے لیے مہم چلائی۔",
            "پہلے غلام بنائے گئے لوگوں، جیسے اولاؤڈا ایکویانو (Olaudah Equiano) اور اوٹوبا کوگوانو (Ottobah Cugoano)، نے غلامی کے خلاف تقریریں کیں اور لکھا۔",
            "ایکویانو نے لندن میں پہلے غلام بنائے گئے لوگوں کے لیے ایک گروہ بنایا۔",
            "فلس وھیٹلی (Phillis Wheatley)، جسے بچپن میں غلام بنایا گیا تھا، ایک شائع شدہ شاعرہ بنی۔",
            "Quakers، ایک مسیحی گروہ، مانتے تھے کہ خدا کے سامنے سب لوگ برابر ہیں۔",
            "برطانیہ کے محنت کش طبقے کے لوگ بھی اس تجارت کے خلاف تھے۔",
            "کچھ سیاست دانوں نے یہ مہم پارلیمنٹ تک لے گئے۔",
            "یہ تجارت پہلے کے مقابلے میں کم پیسہ بھی کما رہی تھی۔",
            "1807 میں پارلیمنٹ نے برطانوی سلطنت میں غلام بنائے گئے لوگوں کی خرید و فروخت پر پابندی لگا دی۔",
            "1833 میں ایک نئے قانون (Act) نے پوری سلطنت میں خود غلامی کو ختم کر دیا۔",
            "آزاد کیے گئے لوگوں کو 1838 تک apprentices کے طور پر کام کرنا پڑا۔",
            "غلام رکھنے والے مالکوں کو دو کروڑ پاؤنڈ معاوضہ (compensation) دیا گیا۔",
            "جن لوگوں کو غلام بنایا گیا تھا، انھیں کچھ نہ ملا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Who were the abolitionists?",
          paragraphs: [
            "Your lesson divides the abolitionists into two groups. The first is formerly enslaved people. Olaudah Equiano had been enslaved as a boy; he bought his freedom, settled in London and in 1789 published the story of his life, which was read across Britain. He also founded a group in London for formerly enslaved people, the Sons of Africa. Ottobah Cugoano, who had also been enslaved, wrote against the trade and worked alongside Equiano. Phillis Wheatley, taken from Africa as a child, became a published poet whose work showed readers what the trade had tried to deny.",
            "The second group is British people. The Quakers believed all people were equal before God, and they were among the earliest and most determined campaigners. Working-class people in Britain opposed the trade too, and some refused to buy sugar grown by enslaved people. British politicians took the arguments into Parliament, where the law could be changed.",
            "Enslaved people in the Caribbean were also part of the story. Their resistance, from everyday acts to open uprisings, made the plantations harder and more expensive to run, and gave the campaigners in Britain evidence that the system could not last."
          ],
          tip: "Your lesson asks which figures played the biggest role. Have a view, but give both sides: the formerly enslaved writers gave the campaign its voice; the politicians gave it the law."
        },
        {
          heading: "Economic reasons: the trade was making less money",
          paragraphs: [
            "The trade in enslaved Africans was not making as much money as it used to. In the 1770s the price of sugar dropped. Many large British-owned sugar plantations in the Caribbean could not make a profit and closed down, and with fewer plantations, fewer enslaved people were needed.",
            "Your lesson gives one striking example: in 1771, plantation owners in Barbados bought 2,728 enslaved people from Africa. The following year they bought none. With fewer people making enormous profits, there were fewer people to argue in Parliament for keeping the trade.",
            "Some people also claimed that enslaved people did not work as hard as people who were paid, because they had no reward to work for. Whether or not that was fair, it meant that by the start of the 1800s some owners and traders themselves thought the trade no longer made sense."
          ],
          worked: {
            q: "Explain one economic reason why the Slave Trade was abolished.",
            steps: [
              "Point: one economic reason was that the trade was making less money than before.",
              "Evidence: in the 1770s the price of sugar fell, plantations closed, and in Barbados purchases of enslaved people dropped from 2,728 in 1771 to none the next year.",
              "Explain: with fewer people making huge profits, fewer people fought to keep the trade, so Parliament found it easier to act.",
              "Link: this does not mean the abolitionists did not matter; it means their arguments met less resistance."
            ],
            answer: "Falling sugar prices and closing plantations meant the trade made less money, so fewer powerful people defended it and Parliament could act."
          }
        },
        {
          heading: "Two Acts, apprenticeship and compensation",
          paragraphs: [
            "There were two steps in law. In 1807, Parliament passed an Act banning the buying and selling of enslaved people within the British Empire: the trade was abolished, but slavery itself continued. In 1833, the Abolition Act finally ended slavery across the British Empire.",
            "Even then, freedom was delayed. The 1833 Act replaced slavery with a system called apprenticeship, which tied the freed people to the land they had worked until 1838. To win the backing of the slave owners, the government also set up a compensation scheme and paid them twenty million pounds for the loss of what they called their property. The people who had been enslaved received nothing.",
            "In recent years some historians have criticised the British government for paying the owners. Your lesson asks whether this was a fair price to pay for ending slavery. Think about who gained, who paid, and what the word compensation says about whose loss was being counted."
          ],
          tip: "1807 ended the trade; 1833 ended slavery; 1838 ended apprenticeship. Learn the three dates as a staircase."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year did Parliament pass the Act that ended slavery across the British Empire?", answer: 1833, tolerance: 0, units: "", why: "The Abolition Act of 1833 ended slavery itself across the British Empire. 1807 had ended only the trade.", check: "1833",
          misconceptions: [
            { answer: 1807, says: "1807 is the year Parliament banned the buying and selling of enslaved people, the trade. Slavery itself continued until the Abolition Act of 1833.", check: "1807" },
            { answer: 1838, says: "1838 is when the apprenticeship system ended and freed people were finally free to leave the plantations. The Act that abolished slavery was passed five years earlier, in 1833.", check: "1833 + 5" }
          ] },
        { kind: "gap", q: "Olaudah Equiano and Ottobah Cugoano were ___ enslaved people who campaigned against slavery.", answer: "formerly", options: ["formerly", "never", "British-born"], why: "Both men had been enslaved and later gained their freedom; they used their own experience in the campaign.",
          feedback: {
            "never": "Both Equiano and Cugoano had themselves been enslaved as boys and later became free. That lived experience is what made their writing so powerful in the campaign.",
            "British-born": "Neither man was born in Britain. Both were taken from Africa as children, enslaved, and later gained their freedom; they then campaigned in London."
          } },
        { kind: "mcq", q: "Who received the twenty million pounds compensation paid by the British government in the 1830s?", options: ["Slave owners, for the loss of what they called their property", "The people who had been enslaved", "The abolitionists, to repay their campaign costs", "The African kingdoms the people had been taken from"], answer: 0, why: "The compensation went to the owners. The people who had been enslaved received nothing, which is why the scheme is remembered as unfair.",
          feedback: [
            "",
            "This is what many people expect, and it is what makes the scheme so controversial: the people who had been enslaved received nothing. The money went to the slave owners.",
            "The abolitionists were not paid. The twenty million pounds went to the slave owners, to win their backing for the 1833 Act.",
            "No money went to Africa. The compensation was paid to slave owners in the British Empire for the people they could no longer own."
          ] }
      ],
      modules: [
        {
          title: "Abolition in order",
          task: {
            kind: "order",
            q: "Put these events in chronological order.",
            items: [
              "Robert Norris, a slave trader, tells Parliament that conditions on slave ships are good (1778)",
              "The captain of the Zong throws more than 100 people overboard (1781)",
              "Olaudah Equiano publishes the story of his life (1789)",
              "Parliament bans the buying and selling of enslaved people in the British Empire (1807)",
              "The Abolition Act ends slavery across the British Empire (1833)",
              "The apprenticeship system ends (1838)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Each event has a date in brackets. Read all six dates first.",
                "Find the smallest number: that event comes first.",
                "Cross it off and find the next smallest.",
                "Check the story makes sense: the trade is banned before slavery, and slavery ends before apprenticeship."
              ],
              example: {
                q: "Put in order: the Battle of Hastings (1066), the Domesday Book (1086), the death of Edward the Confessor (1066, January), the building of the White Tower (1078).",
                steps: ["Two events are in 1066; Edward died in January, before the battle in October.", "Then 1078, then 1086."],
                answer: "Edward dies; Hastings; the White Tower; Domesday"
              }
            },
            core: { hint: "Smallest date first. The trade ends before slavery does, and apprenticeship comes last." },
            stretch: { extend: "Explain how the first three events (Norris, the Zong, Equiano) could each have helped bring about the fourth (the 1807 Act)." }
          },
          explain: "Say, in one sentence, why the 1807 Act did not free the people already enslaved.",
          why: "1778 Norris; 1781 the Zong; 1789 Equiano's book; 1807 the trade banned; 1833 slavery abolished; 1838 apprenticeship ends."
        },
        {
          title: "How long between the Acts?",
          task: {
            kind: "numeric",
            q: "How many years passed between the Act that banned the trade in enslaved people (1807) and the Act that abolished slavery (1833)?",
            answer: 26, tolerance: 0, units: "years",
            why: "1833 − 1807 = 26. For twenty-six years the trade was illegal but the people already enslaved stayed enslaved.",
            check: "1833 - 1807",
            misconceptions: [
              { answer: 25, says: "You may have counted the years in between rather than subtracting. Take 1807 from 1833: 1833 − 1807 = 26.", check: "1833 - 1807 - 1" },
              { answer: 31, says: "That is 1838 − 1807. 1838 is when apprenticeship ended; the Act that abolished slavery was 1833, so the gap is 1833 − 1807 = 26.", check: "1838 - 1807" },
              { answer: 5, says: "That is 1838 − 1833, the length of the apprenticeship system. The question asks for the gap between 1807 and 1833, which is 26 years.", check: "1838 - 1833" }
            ]
          },
          contexts: [
            { label: "A girl born in 1807", q: "A girl was born into slavery in Jamaica in 1807, the year the trade was banned. How old was she, in years, when the Abolition Act was passed in 1833?", check: "1833 - 1807" },
            { label: "A Quaker petition", q: "A Quaker family signed a petition against slavery in 1807 and kept it until the Abolition Act of 1833. For how many years did they keep it?", check: "1833 - 1807" },
            { label: "A Liverpool ship owner", q: "A Liverpool ship owner made his last legal slave-trading voyage in 1807. How many years later, in 1833, did slavery itself end across the Empire?", check: "1833 - 1807" }
          ],
          levels: {
            support: {
              steps: [
                "Write the later date first: 1833.",
                "Subtract the earlier date: 1833 − 1807.",
                "Take 1807 from 1833 in two parts: the 18 hundreds cancel, and 33 − 7 = 26.",
                "Check it makes sense: a bit more than a quarter of a century."
              ],
              example: {
                q: "How many years passed between the Battle of Hastings (1066) and the Domesday Book (1086)?",
                steps: ["Later date first: 1086.", "Subtract: 1086 − 1066.", "1086 − 1066 = 20."],
                answer: "20 years",
                checks: [{ expr: "1086 - 1066", value: 20, tol: 0 }]
              }
            },
            core: { hint: "Later date minus earlier date. Do not use 1838; that is apprenticeship, not the Act." },
            stretch: { extend: "Explain what the twenty-six-year gap tells you about how Parliament thought about the trade compared with slavery itself." }
          },
          explain: "Say, in one sentence, what happened to a person already enslaved in 1807.",
          why: "1833 − 1807 = 26 years. The gap matters: banning the trade in 1807 stopped new people being taken, but did nothing for those already enslaved until 1833."
        },
        {
          title: "Why was slavery abolished?",
          task: {
            kind: "written",
            q: "Explain why slavery was abolished across the British Empire in 1833. Include the role of enslaved and formerly enslaved people AND one other factor. Write one paragraph of five to seven sentences.",
            criteria: [
              "I explain the role of enslaved or formerly enslaved people, naming at least one person, such as Equiano, Cugoano or Wheatley.",
              "I explain one other factor: the Quakers, working-class opposition, British politicians, or economic factors.",
              "I use at least one date or figure correctly, such as 1807, 1833 or the fall in sugar prices.",
              "I link my factors with connectives such as however, also, or as a result.",
              "I finish with a judgement about which factor mattered most, with a reason."
            ],
            model: "Slavery was abolished across the British Empire in 1833 for several connected reasons. Formerly enslaved people gave the campaign its voice: Olaudah Equiano published the story of his life in 1789 and founded the Sons of Africa in London, and Ottobah Cugoano wrote against the trade, so that British readers heard from people who had lived through it. Resistance on the plantations also made the system harder and more costly to run. However, economic factors mattered too, because in the 1770s the price of sugar fell and many plantations closed, so fewer powerful people had a reason to defend the trade. As a result, when the Quakers, working-class campaigners and sympathetic politicians pushed for change, Parliament banned the trade in 1807 and finally abolished slavery in 1833. In my judgement the formerly enslaved writers mattered most, because without their evidence the economic argument alone would not have moved the public."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Slavery was abolished in 1833 for several reasons.",
                "Sentences 2 and 3: One reason was the role of formerly enslaved people such as… Explain what they did.",
                "Sentences 4 and 5: However, another factor was… Explain it with a date or figure.",
                "Last sentence: In my judgement the most important factor was… because…"
              ],
              example: {
                q: "Explain why William won the Battle of Hastings. Include Harold's mistakes AND one other factor.",
                steps: ["Factor one: Harold's army was tired after marching from Stamford Bridge.", "Factor two: William's cavalry and the feigned retreat broke the English shield wall.", "Judgement: the tiredness mattered most because a fresh army would have held the ridge."],
                answer: "Two factors, each explained, then a judgement with a reason."
              }
            },
            core: { hint: "Two factors, each with a name, date or figure. Then a judgement. Use however to move between factors." },
            stretch: { extend: "Add the compensation scheme to your answer: explain why the government paid the owners, and whether that makes the abolition of 1833 a victory, a compromise, or both." }
          },
          explain: "Say, in one sentence, which factor you judged most important and why.",
          why: "Formerly enslaved campaigners, resistance in the Caribbean, the Quakers, working-class opposition, politicians and falling profits all played a part. A strong answer explains at least two and reaches a judgement."
        }
      ]
    },

    /* ───────────── 6 · reading the sources ───────────── */
    {
      key: "sources", n: 6, title: "What can you learn from a source? Content, own knowledge, origin",
      lead: "The three-step method your assessment uses: say what the source shows, test it against what you know, and explain how its origin affects how far you trust it.",
      covers: [3, 6],
      pretext: {
        words: [
          { word: "source", means: "something from the past that historians study: a picture, letter, speech, plan or object", sentence: "A plan of a slave ship is a source." },
          { word: "content", means: "what a source says or shows: its main idea", sentence: "The content of the source is that the ship was overcrowded." },
          { word: "infer", means: "to work something out from clues", sentence: "From the rows of figures I can infer that there was no room to move." },
          { word: "origin", means: "who made the source, when, and why", sentence: "The origin of the source is a slave trader speaking to Parliament in 1778." },
          { word: "provenance", means: "another word for the origin of a source", sentence: "Always state the provenance before you judge a source." },
          { word: "trustworthy", means: "able to be relied on to tell the truth", sentence: "A source made by someone who profited from the trade is less trustworthy." }
        ],
        passage: [
          "Historians learn about the past from sources.",
          "A source might be a picture, a letter, a speech or a plan of a ship.",
          "First, ask what the source says or shows.",
          "This is its content.",
          "Then use your own knowledge.",
          "Does what you know support the source, or challenge it?",
          "Next, find the origin: who made it, when, and why.",
          "The origin is also called the provenance.",
          "A person who made money from the trade might not tell the whole truth.",
          "So the origin changes how far you can trust the source.",
          "In 1778, a slave trader called Robert Norris told Parliament that the ships were comfortable.",
          "Your own knowledge tells you this was not true.",
          "His origin tells you why he said it."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شيء من الماضي يدرسه المؤرّخون: صورة أو رسالة أو خطبة أو مخطّط أو غرض (source)",
            "ما يقوله المصدر أو يُظهره: فكرته الرئيسية (content)",
            "أن تستنتج شيئًا من القرائن (infer)",
            "من صنع المصدر، ومتى، ولماذا (origin)",
            "كلمة أخرى تعني أصل المصدر (provenance)",
            "يمكن الاعتماد عليه ليقول الحقيقة (trustworthy)"
          ],
          "passage": [
            "يتعلّم المؤرّخون عن الماضي من المصادر (sources).",
            "قد يكون المصدر صورة أو رسالة أو خطبة أو مخطّط سفينة.",
            "أوّلًا، اسأل ما الذي يقوله المصدر أو يُظهره.",
            "هذا هو محتواه (content).",
            "ثم استخدم معرفتك أنت.",
            "هل ما تعرفه يدعم المصدر، أم يتحدّاه؟",
            "بعد ذلك، ابحث عن الأصل (origin): من صنعه، ومتى، ولماذا.",
            "يُسمّى الأصل أيضًا المَنشأ (provenance).",
            "الشخص الذي جنى مالًا من هذه التجارة قد لا يقول الحقيقة كلّها.",
            "لذلك فإنّ الأصل يغيّر مدى ثقتك بالمصدر.",
            "في عام 1778، قال تاجر في تجارة الرقيق يُسمّى روبرت نوريس (Robert Norris) للبرلمان إنّ السفن كانت مريحة.",
            "معرفتك أنت تقول لك إنّ هذا لم يكن صحيحًا.",
            "وأصله يقول لك لماذا قال ذلك."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "coś z przeszłości, co badają historycy: obraz, list, przemowa, plan lub przedmiot (source, źródło)",
            "to, co źródło mówi lub pokazuje: jego główna myśl (content, treść)",
            "wywnioskować coś na podstawie wskazówek (infer)",
            "kto stworzył źródło, kiedy i dlaczego (origin, pochodzenie)",
            "inne słowo na pochodzenie źródła (provenance, proweniencja)",
            "taki, na którym można polegać, że mówi prawdę (trustworthy, wiarygodny)"
          ],
          "passage": [
            "Historycy poznają przeszłość ze źródeł (sources).",
            "Źródłem może być obraz, list, przemowa lub plan statku.",
            "Najpierw zapytaj, co źródło mówi lub pokazuje.",
            "To jest jego treść (content).",
            "Potem użyj własnej wiedzy.",
            "Czy to, co wiesz, potwierdza źródło, czy mu przeczy?",
            "Następnie znajdź pochodzenie (origin): kto to stworzył, kiedy i dlaczego.",
            "Pochodzenie nazywa się też proweniencją (provenance).",
            "Osoba, która zarabiała na tym handlu, mogła nie mówić całej prawdy.",
            "Pochodzenie zmienia więc to, jak bardzo możesz ufać źródłu.",
            "W 1778 roku handlarz zniewolonymi ludźmi Robert Norris powiedział parlamentowi, że statki były wygodne.",
            "Twoja własna wiedza mówi ci, że to nie była prawda.",
            "Jego pochodzenie mówi ci, dlaczego tak powiedział."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "algo do passado que os historiadores estudam: uma imagem, carta, discurso, planta ou objeto (source, fonte)",
            "o que uma fonte diz ou mostra: a sua ideia principal (content, conteúdo)",
            "descobrir alguma coisa a partir de pistas (infer, inferir)",
            "quem fez a fonte, quando e porquê/por quê (origin, origem)",
            "outra palavra para a origem de uma fonte (provenance, proveniência)",
            "em que se pode confiar para dizer a verdade (trustworthy, fiável/confiável)"
          ],
          "passage": [
            "Os historiadores aprendem sobre o passado através das fontes (sources).",
            "Uma fonte pode ser uma imagem, uma carta, um discurso ou a planta de um navio.",
            "Primeiro, pergunte o que a fonte diz ou mostra.",
            "Isso é o seu conteúdo (content).",
            "Depois use o seu próprio conhecimento (own knowledge).",
            "O que você sabe apoia a fonte, ou põe/coloca a fonte em causa?",
            "A seguir, descubra a origem (origin): quem a fez, quando e porquê/por quê.",
            "A origem também se chama proveniência (provenance).",
            "Uma pessoa que ganhava dinheiro com o tráfico talvez não dissesse toda a verdade.",
            "Por isso, a origem muda até que ponto você pode confiar na fonte.",
            "Em 1778, um traficante de escravizados chamado Robert Norris disse ao Parlamento que os navios eram confortáveis.",
            "O seu próprio conhecimento diz-lhe que isto não era verdade.",
            "A origem dele diz-lhe porquê/por que ele disse isso."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "wax waqtigii hore ka yimid oo taariikhyahannadu bartaan: sawir, warqad, khudbad, qorshe ama shay (source)",
            "waxa source sheegto ama muujiso: fikraddeeda ugu weyn (content)",
            "wax ka soo saarid tilmaamo (infer)",
            "cidda source-ka samaysay, goorta iyo sababta (origin)",
            "eray kale oo loola jeedo asalka source (provenance)",
            "lagu kalsoonaan karo inuu runta sheego (trustworthy)"
          ],
          "passage": [
            "Taariikhyahannadu waqtigii hore waxay ka bartaan sources.",
            "Source wuxuu noqon karaa sawir, warqad, khudbad ama qorshe markab.",
            "Marka hore, weydii waxa source-ku sheegayo ama muujinayo.",
            "Tani waa content-kiisa.",
            "Kaddib isticmaal aqoontaada.",
            "Waxa aad taqaanno source-ka ma taageeraan, mise way ka hor yimaadaan?",
            "Xiga, hel origin-ka: cidda samaysay, goorta iyo sababta.",
            "Origin-ka waxaa kaloo la yiraahdaa provenance.",
            "Qof lacag ka sameeyay ganacsiga runta oo dhan sheegi maayo.",
            "Sidaas darteed origin-ku wuxuu beddelaa inta aad source-ka ku kalsoonaan karto.",
            "1778, ganacsade addoonsi la yiraahdo Robert Norris wuxuu u sheegay Baarlamaanka in maraakiibtu raaxo lahaayeen.",
            "Aqoontaada ayaa kuu sheegaysa in tani run ahayn.",
            "Origin-kiisa ayaa kuu sheegaya sababta uu sidaas u yiri."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "щось із минулого, що вивчають історики: картина, лист, промова, план або предмет (source)",
            "те, що джерело говорить або показує: його головна думка (content)",
            "з’ясувати щось за підказками (infer)",
            "хто створив джерело, коли і чому (origin)",
            "інше слово для походження джерела (provenance)",
            "такий, на який можна покластися, що він каже правду (trustworthy)"
          ],
          "passage": [
            "Історики дізнаються про минуле з джерел (sources).",
            "Джерелом може бути картина, лист, промова або план корабля.",
            "Спершу запитайте, що джерело говорить або показує.",
            "Це його зміст (content).",
            "Потім використайте власні знання.",
            "Чи те, що ви знаєте, підтверджує джерело, чи ставить його під сумнів?",
            "Далі знайдіть походження (origin): хто його створив, коли і чому.",
            "Походження також називають provenance.",
            "Людина, яка заробляла гроші на торгівлі, може не казати всієї правди.",
            "Тому походження змінює те, наскільки можна довіряти джерелу.",
            "У 1778 році работорговець Роберт Норріс (Robert Norris) сказав Парламенту, що кораблі були зручними.",
            "Ваші власні знання кажуть вам, що це було неправдою.",
            "Його походження каже вам, чому він так сказав."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ماضی کی کوئی چیز جس کا مورخ مطالعہ کرتے ہیں: تصویر، خط، تقریر، نقشہ یا کوئی شے (source)",
            "source کیا کہتا یا دکھاتا ہے: اس کا مرکزی خیال (content)",
            "اشاروں سے کوئی بات معلوم کرنا (infer)",
            "source کس نے بنایا، کب، اور کیوں (origin)",
            "source کے origin کے لیے ایک اور لفظ (provenance)",
            "جس پر سچ بولنے کے لیے بھروسا کیا جا سکے (trustworthy)"
          ],
          "passage": [
            "مورخ ماضی کے بارے میں sources سے سیکھتے ہیں۔",
            "source کوئی تصویر، خط، تقریر یا کسی جہاز کا نقشہ ہو سکتا ہے۔",
            "پہلے پوچھیں کہ source کیا کہتا یا دکھاتا ہے۔",
            "یہ اس کا content ہے۔",
            "پھر اپنا علم استعمال کریں۔",
            "جو آپ جانتے ہیں، کیا وہ source کی تائید کرتا ہے یا اسے چیلنج کرتا ہے؟",
            "اس کے بعد origin معلوم کریں: اسے کس نے بنایا، کب، اور کیوں۔",
            "origin کو provenance بھی کہتے ہیں۔",
            "جس شخص نے اس تجارت سے پیسہ کمایا ہو، ہو سکتا ہے وہ پورا سچ نہ بتائے۔",
            "اس لیے origin یہ بدل دیتا ہے کہ آپ source پر کتنا بھروسا کر سکتے ہیں۔",
            "1778 میں رابرٹ نورس (Robert Norris) نامی غلامی کے ایک تاجر نے پارلیمنٹ کو بتایا کہ جہاز آرام دہ تھے۔",
            "آپ کا اپنا علم آپ کو بتاتا ہے کہ یہ سچ نہیں تھا۔",
            "اس کا origin آپ کو بتاتا ہے کہ اس نے یہ کیوں کہا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Step one: content",
          paragraphs: [
            "Every source answer starts with the content: what the source says or shows, and what its main idea is. Use the source itself as evidence. If it is a written source, pick out a short phrase and put it in quotation marks. If it is a picture, describe exactly what you can see.",
            "Then infer: work out what the source is suggesting, not just what it states. A picture of people packed in rows suggests overcrowding; a speech that calls a voyage comfortable suggests the speaker wants listeners to think the trade is acceptable.",
            "Useful starters: From the source I can learn… The source says… The source shows… This suggests…"
          ],
          tip: "One short quotation or one precise visual detail is worth more than a long paraphrase. Then say what it suggests."
        },
        {
          heading: "Step two: own knowledge",
          paragraphs: [
            "Next, test the source against what you know. Does your own knowledge support it, or challenge it? In 1778, British members of Parliament met to discuss conditions on slave ships, and a slave trader called Robert Norris was called to give his views. He claimed that the people on board were “well fed, comfortable and have every attention paid to their health, cleanliness and needs” and that on deck they “amused themselves with dancing”.",
            "Now bring in your own knowledge from chapter 3. Ships carried 250 to 600 people packed below deck; portholes were shut in rough seas; disease spread; food and water were scarce; about one in five people died. Each of these facts challenges a claim in the source. Name the claim, name the fact, and say so.",
            "Useful starters: According to my own knowledge, the source is accurate / not accurate. I know that… This shows that the source is accurate / inaccurate because…"
          ],
          quote: { text: "well fed, comfortable and have every attention paid to their health, cleanliness and needs", source: "Robert Norris, slave trader, evidence to Parliament (1778), as printed in your lesson" },
          tip: "Match each claim to one fact. Claim: well fed. Fact: food and water were scarce. That is one sentence of challenge; three is a strong answer."
        },
        {
          heading: "Step three: origin and trust",
          paragraphs: [
            "The origin of a source, also called its provenance, is who made it, when, and why. State it plainly: Robert Norris, a slave trader, speaking to Parliament in 1778. Then explain what it means. Norris made his living from the trade; Parliament was deciding whether to control it; so he had every reason to make the ships sound pleasant.",
            "An origin can make a source less trustworthy, as with Norris. It can also make a source more trustworthy. A formerly enslaved person writing about their own life, such as Olaudah Equiano, was an eyewitness to what they describe. They were also campaigning, so you should say that too, but an eyewitness account carries weight that a trader's defence of his own business does not.",
            "Be careful with the word prove. An origin never proves a source true or false. It tells you how much weight to give it, and your own knowledge does the rest."
          ],
          worked: {
            q: "State the origin of the Norris source and explain how it affects how far you trust it.",
            steps: [
              "State it: the origin of the source is Robert Norris, a slave trader, giving evidence to Parliament in 1778.",
              "Explain what that means: he made his money from the trade, and Parliament was considering whether to act against it.",
              "Judge: this makes the source less trustworthy, because he had a reason to describe the ships as comfortable whatever they were really like.",
              "Add your own knowledge: and the facts you know about the Middle Passage challenge every claim he makes."
            ],
            answer: "Origin: a slave trader speaking to Parliament in 1778. Less trustworthy, because his income depended on the trade continuing, and his claims are contradicted by what you know."
          }
        },
        {
          heading: "Putting it together: the five success criteria",
          paragraphs: [
            "Your lesson gives five success criteria for a source answer, and your assessment uses the same five. One: explain what you can learn, or infer, from the source. Two: support it with evidence from the source, a quotation or a description. Three: use your own knowledge to say whether the source is accurate or inaccurate. Four: state the origin and explain what it means. Five: explain how the origin affects whether the source is accurate and trustworthy.",
            "Write them as three short paragraphs: content, own knowledge, origin. In your assessment you will be asked what you can learn from two sources about the Slave Trade, so practise the method until the three paragraphs come without thinking.",
            "Your assessment has four sections: knowledge questions, a change-and-continuity question, five statements to support with specific examples, and the extended source question. Chapters 1 to 5 give you the examples; this chapter gives you the method."
          ],
          tip: "Content, own knowledge, origin. Three paragraphs, every time. Use the sentence starters until you no longer need them."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does the origin of a source mean?", options: ["Who made it, when, and why", "The main idea of the source", "Whether the source is a picture or a piece of writing", "What you already know about the topic"], answer: 0, why: "Origin, or provenance, means who made the source, when they made it and why.",
          feedback: [
            "",
            "The main idea of a source is its content, step one of your method. The origin is step three: who made it, when, and why.",
            "Whether a source is a picture or writing is its type, and it is worth noticing, but the origin is about the person behind it: who made it, when, and why.",
            "What you already know is your own knowledge, step two. The origin is about the source's maker: who, when and why."
          ] },
        { kind: "gap", q: "The origin of a source is also called its ___.", answer: "provenance", options: ["provenance", "content", "inference"], why: "Provenance is the historian's word for the origin of a source: who made it, when and why.",
          feedback: {
            "content": "Content is what the source says or shows. The word for where a source comes from, who made it and why, is provenance.",
            "inference": "An inference is something you work out from clues in the source. The word for the source's origin, its maker, date and purpose, is provenance."
          } },
        { kind: "mcq", q: "Robert Norris told Parliament in 1778 that enslaved people were well fed and comfortable on slave ships. Why does his origin make the source less trustworthy?", options: ["He was a slave trader who made money from the trade, so he wanted Parliament to let it continue", "He was speaking a very long time ago", "He was a member of Parliament himself", "He had never been on a slave ship"], answer: 0, why: "Norris's living depended on the trade, and Parliament was deciding whether to act against it, so he had a reason to make the ships sound pleasant.",
          feedback: [
            "",
            "Age does not make a source untrustworthy; the plan of a slave ship is just as old and is very useful. What matters is who Norris was: a trader whose income depended on the trade continuing.",
            "Norris was not a member of Parliament; he was called to give evidence to it. He was a slave trader, and that is what gives him a reason to make the ships sound comfortable.",
            "Norris knew the ships very well, which is exactly the point: he knew the truth and chose to describe them as comfortable, because as a trader he wanted Parliament to let the trade continue."
          ] }
      ],
      modules: [
        {
          title: "Content, own knowledge, origin",
          task: {
            kind: "written",
            q: "Source A: a slave trader, Robert Norris, giving evidence to Parliament in 1778, says the people on his ships were “well fed, comfortable” and “amused themselves with dancing”. What can you learn from Source A about conditions on the Middle Passage? Write three short paragraphs: content, own knowledge, origin.",
            criteria: [
              "Content: I say what the source claims and support it with a short quotation.",
              "Own knowledge: I use at least two facts from chapter 3 to challenge the claims, and I say the source is inaccurate because of them.",
              "Origin: I state who made the source, when and why.",
              "Trust: I explain how the origin makes the source less trustworthy.",
              "I use the sentence starters or my own clear equivalents, and I write about enslaved people as people."
            ],
            model: "From Source A I can learn that Norris wanted Parliament to believe the Middle Passage was not a hardship. The source says the people were “well fed, comfortable” and that they “amused themselves with dancing”, which suggests a voyage with enough food, space and even leisure. According to my own knowledge, the source is not accurate. I know that ships carried between 250 and 600 people packed below deck, that food and water were scarce, and that about one in five people died on the crossing. This shows the source is inaccurate, because people who were well fed and comfortable would not have died in such numbers. The origin of the source is Robert Norris, a slave trader, speaking to Parliament in 1778 while it was deciding whether to act against the trade. This makes the source less trustworthy, because his living depended on the trade continuing, so he had a strong reason to describe the ships as pleasant whatever he had seen on them."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1, content: From Source A I can learn… The source says… (quote two or three words).",
                "Paragraph 2, own knowledge: According to my own knowledge the source is not accurate. I know that… and that… This shows the source is inaccurate because…",
                "Paragraph 3, origin: The origin of the source is… This makes the source less trustworthy because…",
                "Read it back: have you covered content, own knowledge and origin?"
              ],
              example: {
                q: "Source: a Norman monk, writing in 1070, says that Harold broke a holy promise to William and so deserved to lose at Hastings. What can you learn from this source about why William won?",
                steps: ["Content: the source claims Harold broke an oath, which suggests the Normans saw the battle as God's judgement.", "Own knowledge: I know William won through his cavalry and Harold's tired army, so the oath is not the full reason.", "Origin: a Norman monk, writing after the Conquest, under Norman rule, so less trustworthy on Harold."],
                answer: "Three paragraphs: the claim and a quotation; two facts that challenge it; the origin and why it lowers trust."
              }
            },
            core: { hint: "Three paragraphs, one per step. In the middle paragraph, match each of Norris's claims to one fact you know." },
            stretch: { extend: "Explain what the Norris source IS useful for, even though it is inaccurate about conditions. What does it tell a historian about how the trade was defended in 1778?" }
          },
          explain: "Say, in one sentence, why an inaccurate source can still be useful to a historian.",
          why: "A full answer names the claim with a quotation, challenges it with specific facts, states the origin and explains why that origin lowers trust. The best answers add what the source is still useful for: evidence of how the trade was defended."
        },
        {
          title: "Which step is this?",
          task: {
            kind: "match",
            q: "Match each sentence from a source answer to the step it belongs to.",
            pairs: [
              ["The source shows rows of people lying side by side below deck", "Content"],
              ["I know that about one in five people died on the Middle Passage", "Own knowledge"],
              ["This plan was drawn by an abolitionist in Britain to persuade people", "Origin"],
              ["So the source may exaggerate, but my own knowledge supports it", "Trustworthiness"]
            ]
          },
          levels: {
            support: {
              steps: [
                "A sentence that describes what is in the source is content.",
                "A sentence that begins I know that… is own knowledge.",
                "A sentence about who made the source, when or why is origin.",
                "A sentence that weighs how far to trust the source is trustworthiness."
              ],
              example: {
                q: "Which step is this sentence: The letter was written by a Liverpool ship owner to his investors in 1790?",
                steps: ["It tells you who wrote it, to whom and when.", "That is who, when and why: the origin."],
                answer: "Origin."
              }
            },
            core: { hint: "Look for the signal words: shows, I know, drawn by, so." },
            stretch: { extend: "Write one more sentence for each of the four steps, about a different source: an advertisement for a slave auction printed by the trader in 1770." }
          },
          explain: "Say, in one sentence, why the origin sentence comes before the trustworthiness sentence.",
          why: "Content describes the source; own knowledge begins I know; origin says who made it, when and why; trustworthiness weighs it all up."
        },
        {
          title: "A source from someone who profited",
          task: {
            kind: "mcq",
            q: "A source about the Slave Trade was produced by someone who made money from it. What should you say about its origin?",
            options: [
              "It makes the source less trustworthy, because the author had a reason to make the trade look acceptable",
              "It makes the source more trustworthy, because the author knew the trade from the inside",
              "The origin does not matter as long as the content is detailed",
              "It proves that everything in the source is false"
            ],
            answer: 0,
            why: "Someone who profited from the trade had a reason to defend it, so the source is less trustworthy on how enslaved people were treated. That lowers its weight; it does not prove every word false.",
            feedback: [
              "",
              "Knowing the trade from the inside does not make a trader honest about it. He had a reason to hide the worst, so his account is less trustworthy on conditions, even if it is useful for how the trade was defended.",
              "Detail is not the same as truth; Norris was detailed and wrong. The origin always matters, because it tells you what the author wanted you to believe.",
              "An origin never proves a source false; some details may be accurate. It lowers how much you trust the source and tells you to check it against your own knowledge."
            ]
          },
          contexts: [
            { label: "A ship owner's letter", q: "A Liverpool ship owner wrote a letter in 1790 saying his captains always treated the people on board kindly. What should you say about its origin?", why: "The owner's income depended on the trade, so he had a reason to make it look acceptable; the source is less trustworthy on conditions." },
            { label: "A plantation owner's speech", q: "A plantation owner in Jamaica gave a speech in 1820 saying the people on his estate were content and well cared for. What should you say about its origin?", why: "He profited from their labour and was defending his own property, so the source is less trustworthy on how they were treated." },
            { label: "An auction advertisement", q: "A trader paid for an advertisement in 1770 describing the people he was selling as healthy and willing. What should you say about its origin?", why: "The advertisement was written to sell people for a high price, so its description is less trustworthy." }
          ],
          levels: {
            support: {
              steps: [
                "Ask: did this person gain money from the trade? Yes.",
                "Ask: would they want the trade to look good or bad? Good.",
                "So their account is less trustworthy on how people were treated.",
                "But less trustworthy is not the same as proved false."
              ],
              example: {
                q: "A football manager says after a match that the referee was excellent. His team won. What should you say about the origin?",
                steps: ["The manager gained from the result.", "He has a reason to praise the referee.", "So his view is less trustworthy on the refereeing, though it is not proved false."],
                answer: "Less trustworthy, because he had a reason to say it; not proved false."
              }
            },
            core: { hint: "Who gained? What did they want you to think? That lowers trust; it does not prove anything." },
            stretch: { extend: "Explain how a historian could still use a trader's source as evidence, by changing the question they ask of it." }
          },
          explain: "Say, in one sentence, the difference between less trustworthy and proved false.",
          why: "An author who profited had a reason to defend the trade, so the source is less trustworthy on conditions. The origin lowers the weight of the source; your own knowledge then tests each claim."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y08_topic_3_the_slave_trade.txt",
    decksUsed: [
      "L1 Slavery & Impact on Africa / L1 Slavery & Impact on Africa.pptx",
      "L1 Slavery & Impact on Africa / Homework - SSS Impact Africa.pptx",
      "L2 The Middle Passage / L2 The Middle Passage.pptx",
      "L2 The Middle Passage / Middle Passage Sources.pptx",
      "L3 Progress Check + Auctions / L3 Progress Check + Auctions.pptx",
      "L3 Progress Check + Auctions / Plenary - Auction Sources.pptx",
      "L4 Life on the Plantations / L4 Plantations & Resistance.pptx",
      "L5 Abolition of the Slave Trade / L5 Abolition of the Slave Trade.pptx",
      "L5 Abolition of the Slave Trade / Worksheet - Abolition Key Figures .pptx",
      "L6 Skills & Assessment / L6 Slavery Assessment.pptx",
      "Slavery Composite Slide.pptx"
    ],
    notes: "Lesson titles, sequence, learning objectives, key words, the vicious circle, the three legs of the triangle and their cargoes, the march to the coast, Whydah, the Middle Passage figures (12 million, 250–600, one in five), the Zong, the auction details (slave pens, washing and oiling, highest bidder, refuse, scramble, seasoning camps), plantation facts (4 million by 1860, 60 per cent cotton, Jamaican sugar, 18-hour days, patrollers, shacks), the two groups of abolitionists (Equiano, Cugoano, Wheatley; Quakers, working-class opposition, politicians), the economic factors (1770s sugar prices, Barbados 1771: 2,728), 1833, apprenticeship to 1838, the £20 million compensation, and the five source success criteria are taken from the department's decks. The twelfth deck in the dump (L1 'Guided Reading - The Start of the Slave Trade.pptx') contains a reading on the history of antisemitism that belongs to another topic and was not used. All explanations, questions, worked examples and model paragraphs are original; the deck's model answer on the Norris source (L6 slide 9) is not reproduced and its phrases are banned in verify.py. The only quotation is from Robert Norris's evidence to Parliament (1778), a primary source out of copyright, in the fragments the deck itself quotes; Equiano is named but not quoted because the deck does not quote him; the pro-slavery statements by Davis and McDuffie and the summary of Eric Williams are paraphrased, not quoted. Dates and facts not printed in the dump but needed to answer the deck's own questions (John Hawkins 1562, the Zong 1781, Equiano's book 1789 and the Sons of Africa, the 1807 Act) are listed in NOTES.md for the Head of History to confirm. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on both numeric items, explain prompts on every module, three context modules (ch2, ch4, ch6) plus a numeric context module (ch5), glossary chapters, four Connections groups, spacing; no widgets, no constellation, no pretext.l1."
  }
};
