// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 8 Topic 2: The British Empire: India · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py (each entry carries its deck
//   slide reference); every four-digit year in pupil text must be in that table, an allowed decade, or a PARALLEL year
//   used in a Norman-Conquest support example; every dated event is checked against its CHRONOLOGY year; every "order"
//   task is compared with the canonical sequences held there and must be chronological; every mcq / gap / match answer is
//   compared with an independent answer key; every numeric item carries `check` and `misconceptions` (each with its own
//   `check`); every large number is in the FACTS set taken from the deck; contexts share the task's answer by construction.
//   Quotation guard: the ONLY quoted words are Lord Curzon's sentence on India (Viceroy 1899–1905; a primary source out of
//   copyright) as the department's deck prints it. Shashi Tharoor (the deck's Source B) and the deck's two guided readings
//   are modern texts in copyright: paraphrased only, and their distinctive phrases are fingerprinted and banned. Language
//   guard: the deck's own framing of empire (people and consequences, not celebration); no "natives"; "uncivilised" only
//   inside the deck's own scare quotes; the deck's misspellings (McCauley, Ghandi, Rowlett, Salt peter) are banned.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-british-empire-india"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-british-empire-india",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 8 Topic 2: The British Empire: India — foundations for GCSE History 8145 (Britain: Migration, empires and the people; change and continuity)",
    year: 8,
    tier: "KS3",
    title: "The British Empire: India",
    sub: "How a trading company came to rule India, what Company rule and the British Raj changed for Indian people, how Indians resisted, and how British rule ended in 1947.",
    bigQuestion: "How much change did the British Empire bring to India?",
    lessonCount: 6,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Taking Control, 1600–1757", question: "How did the East India Company take control of India?", keywords: ["Empire", "monopoly", "colony", "East India Company", "Mughal Empire", "Nawab", "divide and rule", "Battle of Plassey"] },
    { n: 2, title: "Company Rule in India, 1757–1857", question: "How did the East India Company rule India, and did it bring more economic or social change?", keywords: ["trade", "profit", "de-industrialisation", "Great Bengal Famine", "education", "interpretation", "economic change", "social change"] },
    { n: 3, title: "First War of Independence, 1857–1858", question: "What were the causes and consequences of the First War of Independence?", keywords: ["sepoy", "caste system", "mutiny", "Enfield rifle cartridge", "British Raj", "Proclamation"] },
    { n: 4, title: "Progress Check and the British Raj, 1858–1918", question: "Why was there growing opposition to British rule between 1858 and 1918?", keywords: ["Empress of India", "railways", "Indian National Congress", "Viceroy", "partition", "boycott", "Swadeshi"] },
    { n: 5, title: "The Road to Independence and Partition, 1919–1947", question: "Why did British rule come to an end in 1947?", keywords: ["Amritsar", "Rowlatt Act", "satyagraha", "Salt March", "Muslim League", "Quit India", "partition", "Kashmir"] },
    { n: 6, title: "Assessment", question: "How did British rule change India?", keywords: ["political", "economic", "social", "continuity", "chronology", "evidence", "PEEL", "conclusion"] }
  ],

  glossary: [
    { term: "Empire", means: "A group of countries and colonies under the control of one powerful country, often called the mother country.", chapter: "empire-and-company" },
    { term: "colony", means: "A country that forms part of a wider empire and is controlled by another country.", chapter: "empire-and-company" },
    { term: "monopoly", means: "When only one company is allowed to do business in a country or region.", chapter: "empire-and-company" },
    { term: "Nawab", means: "An Indian prince who ruled one of the smaller states after the Mughal Empire collapsed.", chapter: "empire-and-company" },
    { term: "divide and rule", means: "A strategy that keeps your opponents arguing with each other so they cannot unite against you.", chapter: "empire-and-company" },
    { term: "de-industrialisation", means: "When a country loses its industries, so people go back to farming the land.", chapter: "company-rule" },
    { term: "famine", means: "When there is not enough food for the people, so many starve and die.", chapter: "company-rule" },
    { term: "sepoy", means: "An Indian soldier who fought in the East India Company's army.", chapter: "uprising-1857" },
    { term: "mutiny", means: "When soldiers refuse to follow the orders of their commanders.", chapter: "uprising-1857" },
    { term: "British Raj", means: "The period from 1858 when Britain and the Crown ruled India directly. Raj means rule in Hindi.", chapter: "uprising-1857" },
    { term: "Proclamation", means: "A public statement from the Queen on an important issue. Queen Victoria's Proclamation of 1858 made promises to the people of India.", chapter: "raj-opposition" },
    { term: "Viceroy", means: "The official who governed India for the British Crown during the Raj.", chapter: "raj-opposition" },
    { term: "boycott", means: "Refusing to buy or use something as a protest.", chapter: "raj-opposition" },
    { term: "Swadeshi", means: "The movement that boycotted British goods, schools and courts and encouraged Indians to make their own cloth.", chapter: "raj-opposition" },
    { term: "satyagraha", means: "Gandhi's name for non-violent protest. It roughly means truth force.", chapter: "independence" },
    { term: "partition", means: "Splitting a country or region into separate parts. Bengal was partitioned in 1905 and India in 1947.", chapter: "independence" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "Building an empire", terms: ["Empire", "colony", "monopoly", "Nawab"] },
    { group: "The Company's army and its fall", terms: ["sepoy", "mutiny", "divide and rule", "British Raj"] },
    { group: "Ruling and resisting the Raj", terms: ["Proclamation", "Viceroy", "boycott", "Swadeshi"] },
    { group: "Costs of empire and the road to 1947", terms: ["de-industrialisation", "famine", "satyagraha", "partition"] }
  ],

  chapters: [
    /* ───────────── 1 · empire and the Company ───────────── */
    {
      key: "empire-and-company", n: 1, title: "Why Britain wanted an empire, and how a company took control of India",
      lead: "What an empire is, why Britain wanted one, what the East India Company was, how the Mughal Empire collapsed, and how the Battle of Plassey turned traders into rulers.",
      covers: [1],
      pretext: {
        words: [
          { word: "Empire", means: "a group of countries and colonies controlled by one powerful country", sentence: "The British Empire was once the largest empire in the world." },
          { word: "colony", means: "a country that is part of an empire and controlled by another country", sentence: "By 1750 Britain had colonies in North America, West Africa and India." },
          { word: "monopoly", means: "when only one company is allowed to do business somewhere", sentence: "The East India Company had a monopoly on English trade with India." },
          { word: "resources", means: "useful materials and items a country has, such as cotton and tea", sentence: "Britain wanted the resources it could take from its colonies." },
          { word: "Royal Charter", means: "a document from the monarch giving a company special rights", sentence: "Queen Elizabeth I gave the Company its Royal Charter in 1600." },
          { word: "Nawab", means: "an Indian prince who ruled a region after the Mughal Empire collapsed", sentence: "The Nawab of Bengal attacked the Company's base at Calcutta." }
        ],
        passage: [
          "An empire is a group of countries ruled by one powerful country.",
          "In the 1600s, England began to build an empire.",
          "It wanted resources, trade and power.",
          "The government did not send its own ships.",
          "Instead it let private companies explore and trade for it.",
          "The East India Company was set up in 1600.",
          "Queen Elizabeth I gave it a Royal Charter.",
          "The Charter made it the only English company allowed to trade with India.",
          "India was ruled by the rich and powerful Mughal Empire.",
          "The Mughals let the Company trade as long as it paid taxes.",
          "After the Emperor Aurangzeb died in 1707, the Mughal Empire broke apart.",
          "In 1757 the Company won the Battle of Plassey in Bengal.",
          "From then on, the Company was a ruler, not just a business."
        ]
      },
      sections: [
        {
          heading: "What is an empire, and why did Britain want one?",
          paragraphs: [
            "An empire is a group of countries and colonies controlled by one powerful country, often called the mother country. A colony is one of those controlled countries. To colonise a place means to send settlers there and take control of it. Your big question for this unit is about change and continuity: how much did the British Empire change India, and what stayed the same? You used the same idea in Year 7 when you judged how much William the Conqueror and the Plantagenets changed England.",
            "English exploration and empire building only began in earnest in the reign of Queen Elizabeth I, from 1558 to 1603. By 1615, England had colonies in North America, ships that had sailed right around the world, and trading posts in India run by English companies. By 1750 the British Empire included colonies in North America, West Africa and India.",
            "Your lesson gives six reasons why Britain wanted an empire. Resources: colonies gave Britain materials such as cotton and tea to use at home. Strategic reasons: controlling other countries protected Britain's own interests. Weak countries: some lands were easy to conquer because their people had weaker technology or their societies were divided. Trade: new countries meant new customers, which made Britain rich. Competition: European countries raced to have the biggest empire. Religion: some wanted to bring Christianity to people they wrongly called ‘uncivilised’."
          ],
          tip: "Learn the six reasons as two groups of three: things Britain wanted to GET (resources, trade, strategic safety) and things Britain wanted to BE (strongest in Europe, a Christian empire, a conqueror of weaker lands)."
        },
        {
          heading: "How did Britain get an empire? The East India Company",
          paragraphs: [
            "In the 1600s the British government hired private companies to explore the world for it. This was cheaper than buying ships, hiring crews and paying for supplies itself. As the companies explored and traded, Britain's influence and power grew with them. The most important of these companies in the East was the East India Company, usually shortened to the EIC.",
            "In 1600 Queen Elizabeth I granted the Company a Royal Charter to trade with India. The Charter gave it a monopoly: it was the only English company allowed to trade there. The Charter also gave the Company the right to keep its own private army. By 1608 the first Company ships were arriving in India, and trading posts, which the Company called factories, were set up soon after. Its headquarters, East India House, stood in London.",
            "Why India? India had diamonds, tea, silk, spices, cotton and saltpetre, which is used to make gunpowder. None of these could be found in Britain, so they would sell for very high prices and make the Company very rich. Some spices were worth as much as their own weight in gold, because India was the only place they grew. The Company's aim in the 1600s was to make as much money as possible for its owners and shareholders. It did not set out to build an empire."
          ],
          tip: "A monopoly is about ONE company, not one country. The Charter stopped other English companies competing with the EIC in India; it did not stop the Dutch, Portuguese or French."
        },
        {
          heading: "The Mughals and the Company, 1600–1720",
          paragraphs: [
            "When the Company arrived, India was ruled by the Mughal Empire, which you studied in Year 7. By 1700 the Mughal Empire covered nearly all of India, and under its last great emperor, Aurangzeb, it was among the richest countries in the world. The Company did not invade or conquer India in the 1600s. Instead, Mughal emperors gave it permission to trade as long as it paid taxes and supplied European goods. In 1634 the Emperor Shah Jahan extended the agreement to cover an even bigger part of India. For both sides this was a happy arrangement: the Company made money and the Mughals received taxes and goods.",
            "This changed in 1707, when Aurangzeb died. His family fought for control of the Empire, which weakened and divided it. By 1720 the Mughal Empire had collapsed. India became a collection of smaller states ruled by Nawabs, Indian princes. With no strong emperor, the East India Company was now the most powerful group in India.",
            "To protect its business the Company built up its private army and made agreements with the local Nawabs: it paid taxes to a Nawab in return for the right to trade in his region. One of these agreements was with the Nawab of Bengal, who set rules and taxes for the Company to follow."
          ],
          tip: "Notice the pattern: while the Mughals were strong, someone could make the Company follow rules. Remember that when you reach Company rule in chapter 2."
        },
        {
          heading: "The Battle of Plassey, 1757: from traders to rulers",
          paragraphs: [
            "In 1756 the Nawab of Bengal, Siraj ud-Daulah, attacked the Company's base at Calcutta. He accused the Company of breaking his rules and of not paying the taxes it owed him. The Company sent Robert Clive to Calcutta to defeat the Nawab and secure its position.",
            "In 1757 Clive faced the Nawab at the Battle of Plassey. Clive had only about 3,000 men; the Nawab had about 40,000, with support from France. But Clive used a divide and rule strategy. In secret, he offered the Nawab's key military officers money and positions of power if they did not fight. Most of the Nawab's soldiers refused to fight, and Clive won easily. Clive then used his victory to make himself rich: your lesson says he took from the Nawab and from Bengal the equivalent of £250 million in today's money, and carried precious jewels home to England.",
            "Plassey was a turning point. The Company officially took control of Bengal and changed from a business focused on trade and profit into the ruler of a large part of India. In 1765 it took charge of all tax collection in Bengal, a job that belongs to rulers, not to private companies. In the years that followed it used its private army and the same divide and rule strategy to take control of most of India. The British Empire in India had begun."
          ],
          worked: {
            q: "Explain why India was ‘easy’ to conquer in 1757. Refer to Aurangzeb and to what happened after his death.",
            steps: [
              "Point: India was easy to conquer in 1757 because the Mughal Empire that had held it together had collapsed.",
              "Evidence: after Aurangzeb died in 1707 his family fought for control, and by 1720 the Empire had broken into smaller states ruled by Nawabs.",
              "Explain: a divided India could not unite against the Company, and Clive could use divide and rule, paying the Nawab's own officers not to fight at Plassey.",
              "Link: so the Company did not need a huge army; India's division did much of the work for it."
            ],
            answer: "Point, evidence, explain, link: the Mughal collapse after 1707 left India divided into Nawab-ruled states, so the Company could pick them off one at a time and buy off the Nawab's officers at Plassey."
          },
          tip: "Divide and rule appears three times in this unit: Plassey in 1757, the partition of Bengal in 1905, and the use of caste and religion under the Raj. Keep a running list."
        }
      ],
      gate: [
        { kind: "mcq", q: "What did the Royal Charter of 1600 give the East India Company?", options: ["A monopoly: it was the only English company allowed to trade with India", "Ownership of all the land in India", "The right to collect taxes across the whole of India", "A share of the Mughal emperor's treasure"], answer: 0, why: "The Charter from Queen Elizabeth I gave the Company a monopoly on English trade with India, and the right to keep its own army. It did not give the Company any land.",
          feedback: [
            "",
            "The Charter gave the Company the right to TRADE, not to own land. In 1600 India belonged to the Mughal Empire, and the Company could only trade where the emperor allowed it.",
            "Tax collection came much later and only in Bengal, in 1765, after the Battle of Plassey. In 1600 the Company was a trading business that paid taxes to the Mughals, not one that collected them.",
            "The Charter came from the English Queen, not the Mughal emperor, and it gave the Company trading rights, not treasure. Clive took treasure from Bengal in 1757, but that was a century and a half later."
          ] },
        { kind: "numeric", q: "In which year did the Emperor Aurangzeb die, starting the collapse of the Mughal Empire?", answer: 1707, tolerance: 0, units: "", why: "Aurangzeb, the last great Mughal emperor, died in 1707. His family then fought for control, and by 1720 the Empire had collapsed.", check: "1707",
          misconceptions: [
            { answer: 1757, says: "1757 is the Battle of Plassey, fifty years later. Aurangzeb died in 1707; it was his death that started the collapse that made Plassey possible.", check: "1707 + 50" },
            { answer: 1720, says: "1720 is when the collapse was complete and India had broken into Nawab-ruled states. The death that started it, Aurangzeb's, was in 1707.", check: "1707 + 13" }
          ] },
        { kind: "mcq", q: "How did Robert Clive win the Battle of Plassey in 1757?", options: ["He secretly offered the Nawab's officers money and power, so most of the Nawab's soldiers refused to fight", "His army of 40,000 was far bigger than the Nawab's", "The Mughal emperor sent his own army to help him", "France sent warships to support the Company"], answer: 0, why: "Clive used divide and rule: he bribed the Nawab's key officers in secret, so most of the Indian soldiers would not fight, and his small force won easily.",
          feedback: [
            "",
            "You have swapped the armies. Clive had about 3,000 men and the Nawab about 40,000. Clive won not with numbers but with a secret deal that stopped most of the Nawab's soldiers from fighting.",
            "By 1757 there was no strong Mughal emperor to send anyone; the Empire had collapsed by 1720. Clive won by paying the Nawab's own officers not to fight.",
            "France was on the Nawab's side, not the Company's. Clive won despite French support for the Nawab, by using divide and rule inside the Nawab's own army."
          ] }
      ],
      modules: [
        {
          title: "How the Company took control: the order of events",
          task: {
            kind: "order",
            q: "Put these events in the order they happened.",
            items: [
              "Queen Elizabeth I grants the East India Company a Royal Charter (1600)",
              "The Emperor Aurangzeb dies and his family fights for control (1707)",
              "The Mughal Empire has collapsed and India is ruled by Nawabs (1720)",
              "Siraj ud-Daulah, Nawab of Bengal, attacks the Company's base at Calcutta (1756)",
              "Robert Clive defeats the Nawab at the Battle of Plassey (1757)",
              "The Company takes charge of all tax collection in Bengal (1765)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the event that lets the Company exist at all: the Charter. That is first.",
                "The Mughals must weaken before the Company can take over. Aurangzeb's death comes before the collapse.",
                "Ask what provoked Plassey: the attack on Calcutta happened the year before the battle.",
                "Tax collection is the Company behaving as a ruler, which only makes sense after it has won."
              ],
              example: {
                q: "Put these Norman Conquest events in order: the Domesday Book (1086); the Battle of Hastings (1066); the Harrying of the North (1069).",
                steps: ["William has to win before he can do anything else: Hastings, 1066.", "He then punished the rebellious north: the Harrying, 1069.", "Last, he recorded what he owned: Domesday, 1086."],
                answer: "Battle of Hastings (1066); Harrying of the North (1069); Domesday Book (1086)"
              }
            },
            core: { hint: "Charter first, tax collection last. In between: the emperor dies, the Empire collapses, Calcutta is attacked, Plassey is fought." },
            stretch: { extend: "Explain which TWO of these events you think mattered most in turning the Company from traders into rulers, and why those two rather than the others." }
          },
          explain: "Say, in one sentence, why the Company could not have won Plassey while Aurangzeb was alive.",
          why: "1600 Charter; 1707 Aurangzeb dies; 1720 collapse complete; 1756 attack on Calcutta; 1757 Plassey; 1765 tax collection. The Company grows stronger exactly as the Mughals grow weaker."
        },
        {
          title: "Which reason for empire?",
          task: {
            kind: "mcq",
            q: "The Company shipped cotton, tea and spices from India to be used and sold in Britain. Which reason for wanting an empire does this show best?",
            options: ["Resources", "Religion", "Competition with other European countries", "Strategic reasons"],
            answer: 0,
            why: "Cotton, tea and spices are materials and items Britain could not produce itself. Taking them from a colony to use at home is the resources reason.",
            feedback: [
              "",
              "Religion was the reason given by people who wanted to spread Christianity. Cotton and tea have nothing to do with that; they are resources being taken home.",
              "Competition means racing other European countries to have the biggest empire. Shipping goods home is about the goods themselves, so the reason is resources.",
              "Strategic reasons are about protecting Britain's safety and interests by controlling places. Loading cotton, tea and spices onto ships for Britain is about resources."
            ]
          },
          contexts: [
            { label: "Timber from North America", q: "Britain took timber and furs from its colonies in North America to use at home. Which reason for wanting an empire does this show best?", why: "Timber and furs are materials Britain wanted for itself, so this is the resources reason." },
            { label: "Saltpetre for gunpowder", q: "The Company bought saltpetre in India so that gunpowder could be made in Britain. Which reason for wanting an empire does this show best?", why: "Saltpetre is a material Britain could not get at home, so taking it from India is the resources reason." },
            { label: "Sugar from the Caribbean", q: "Sugar grown in Britain's Caribbean colonies was shipped to Britain to be sold. Which reason for wanting an empire does this show best?", why: "Sugar is a resource taken from a colony to be used and sold at home." }
          ],
          levels: {
            support: {
              steps: [
                "Ask: what is being gained here? Things, land, safety, or souls?",
                "If it is useful materials or items taken home, the reason is resources.",
                "If it is a race against Spain, France or the Dutch, the reason is competition.",
                "If it is about protecting Britain, the reason is strategic; if it is about Christianity, the reason is religion."
              ],
              example: {
                q: "England and Spain each tried to claim more land than the other in the Americas. Which reason for wanting an empire does this show best?",
                steps: ["What is being gained? Not goods: a bigger empire than a rival.", "Racing a rival for the biggest empire is competition."],
                answer: "Competition"
              }
            },
            core: { hint: "Look at what is physically being moved. If goods are travelling to Britain, the reason is about those goods." },
            stretch: { extend: "Explain why resources and trade are different reasons even though both involve goods. Use the Company's cotton as your example of resources and the sale of British goods in India as your example of trade." }
          },
          explain: "Say, in one sentence, what the word resources means in this unit.",
          why: "Resources are the useful materials and items a country wants. Cotton, tea, spices, timber, saltpetre and sugar were all taken from colonies to be used or sold in Britain."
        },
        {
          title: "Why Plassey was a turning point",
          task: {
            kind: "written",
            q: "Explain why the Battle of Plassey in 1757 was a turning point for the East India Company. Write one paragraph of four to six sentences.",
            criteria: [
              "I say what the Company was BEFORE Plassey: a trading business that paid taxes to the Mughals and the Nawabs.",
              "I give specific evidence from the battle or its results: the divide and rule strategy, control of Bengal, or tax collection in 1765.",
              "I explain what the Company became AFTER Plassey: a ruler of land and people.",
              "I use the words turning point and divide and rule correctly."
            ],
            model: "The Battle of Plassey was a turning point because it changed what the East India Company was. Before 1757 the Company was a business: it traded in cotton, spices and tea and paid taxes to the Mughals and then to the Nawabs for permission to do so. At Plassey, Clive used divide and rule, secretly paying the Nawab's officers not to fight, and his small force defeated an army of about 40,000. As a result the Company took control of Bengal, and in 1765 it took charge of all tax collection there, which is the job of a ruler, not a company. This shows a turning point because after Plassey the Company was no longer just making money from trade; it was governing people and land, and it went on to take most of India the same way."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Plassey was a turning point because it changed the Company from… into…",
                "Sentences 2 and 3: Before 1757 the Company… (trade, taxes to the Mughals and Nawabs).",
                "Sentence 4: At Plassey, Clive… (divide and rule, the officers, the result).",
                "Sentences 5 and 6: After Plassey the Company… (Bengal, tax collection in 1765, most of India). This shows a turning point because…"
              ],
              example: {
                q: "Explain why the Battle of Hastings in 1066 was a turning point for England.",
                steps: ["Before: England was ruled by Anglo-Saxon kings and nobles.", "The event: William defeated Harold and was crowned king.", "After: Norman lords replaced the Anglo-Saxon nobles, castles were built and French became the language of power.", "This shows a turning point because who ruled England, and how, changed for good."],
                answer: "Before Hastings England was Anglo-Saxon; William's victory replaced its rulers, language of power and landscape; so 1066 changed England for good."
              }
            },
            core: { hint: "A turning point needs a before and an after. Say what the Company was in 1756 and what it was by 1765." },
            stretch: { extend: "Your lesson asked what the Company's strategies at Plassey tell us about how it would rule India afterwards. Add two sentences predicting its rule from the way it won." }
          },
          explain: "Say, in one sentence, the difference between a business and a ruler.",
          why: "A turning point has a before and an after. Before Plassey the Company traded and paid taxes; after it, the Company controlled Bengal, collected taxes and went on to take most of India by the same divide and rule method."
        }
      ]
    },

    /* ───────────── 2 · Company rule ───────────── */
    {
      key: "company-rule", n: 2, title: "Company rule, 1757–1857: trade, famine and schools",
      lead: "What happened to Indian trade and cloth making once no one could stop the Company, the Great Bengal Famine of 1770, the Company's schools, and how to judge economic against social change.",
      covers: [2],
      pretext: {
        words: [
          { word: "profit", means: "the money a business keeps after paying its costs", sentence: "The Company sold British cloth in India at a huge profit." },
          { word: "raw materials", means: "natural materials, such as cotton, that are made into products", sentence: "Raw materials were shipped from India to factories in Britain." },
          { word: "de-industrialisation", means: "when a country loses its industries and people go back to farming", sentence: "The loss of India's cloth industry is called de-industrialisation." },
          { word: "famine", means: "when there is not enough food, so many people starve", sentence: "The Great Bengal Famine of 1770 killed millions of people." },
          { word: "interpretation", means: "a historian's view of what happened and why", sentence: "Shashi Tharoor's interpretation is that the Company looted India." },
          { word: "social change", means: "change to how people live, learn and are treated", sentence: "New schools were a social change; new taxes were an economic one." }
        ],
        passage: [
          "After 1757 the Company ruled Bengal, one of India's richest regions.",
          "Before, the Mughal emperors had made the Company follow rules and pay taxes.",
          "Now no one could stop the Company.",
          "It took raw materials such as cotton from India to Britain.",
          "British factories turned them into cloth.",
          "The Company then sold that cloth back to people in India.",
          "Indian cloth makers were taxed so heavily that their cloth became too expensive.",
          "Many lost their work and went back to farming.",
          "In 1770 a terrible famine struck Bengal.",
          "Historians think between 7 and 10 million people died.",
          "Many historians argue that the Company's taxes made it worse.",
          "In the 1830s the Company set up British-style schools for wealthy Indian children."
        ]
      },
      sections: [
        {
          heading: "No one to stop them",
          paragraphs: [
            "In chapter 1 you saw that while the Mughals were strong, the Company had to follow their rules and pay its taxes. After Plassey in 1757, and especially after it took over tax collection in Bengal in 1765, the Company was acting like a country rather than a business. But there was a difference: a country has rulers who can be held to account. Now that the Company controlled Bengal, there was no one to make sure it acted properly. It could set the rules itself, and no one could stop it making as much money as it wanted.",
            "Trade under the Company worked in two steps. First, the Company took raw materials from India, such as cotton, to Britain, where new factories turned them into finished products. Britain was going through the industrial revolution, when machines in factories began to make goods far faster than people could by hand. Second, the Company sold those factory-made products back to the people of India, making a massive profit.",
            "Think about who gained at each step. India supplied the raw materials and then bought the finished goods. Britain's factories had the work and the Company had the profit. This is the pattern you will need when you write about the economic impact of Company rule."
          ],
          tip: "Economic = money and wealth. When you see raw materials, factories, taxes, profit or trade, you are looking at economic change."
        },
        {
          heading: "What happened to India's cloth?",
          paragraphs: [
            "Your lesson's Source A gives the figures for the cloth trade between Britain and India. In 1814 India sent 1.2 million cloths to Britain and Britain sent 818,000 to India. By 1821 India sent 534,000 and Britain sent 19.1 million. In 1828 the figures were 422,500 from India and 42.8 million from Britain. By 1835 India sent only 306,000 cloths to Britain, while Britain sent 52 million to India. In twenty-one years the flow of cloth had reversed completely.",
            "Source B is an interpretation by the historian and Indian politician Shashi Tharoor. An interpretation is a historian's view, so your literacy focus this lesson is to understand what he argues and to notice his opinion. Tharoor argues that India held about 25 per cent of the world's wealth in 1700, under Aurangzeb, largely because of its cloth and cotton industry. After 1757, he says, the Company set out to replace cheap Indian cloth with cloth made in England. It destroyed workshops and made Indian cloth makers pay taxes of up to about 80 per cent, so that their cloth became too expensive for anyone to buy.",
            "Tharoor calls the result de-industrialisation: India lost the industry it had, and many cloth workers were left with no work but farming in the villages as poor peasants. His opinion of the Company is clearly negative; the title of his chapter speaks of looting. When you use his interpretation, say that it is his view and show what in the figures supports it."
          ],
          worked: {
            q: "Use Source A. By how many cloths did the amount Britain sent to India rise between 1814 and 1821?",
            steps: [
              "Find the two figures for cloth from Britain to India: 818,000 in 1814 and 19.1 million in 1821.",
              "Write 19.1 million in full: 19,100,000.",
              "Subtract the earlier figure from the later one: 19,100,000 − 818,000.",
              "19,100,000 − 818,000 = 18,282,000. The rise was 18,282,000 cloths in seven years."
            ],
            answer: "A rise of 18,282,000 cloths.",
            checks: [{ expr: "19100000 - 818000", value: 18282000, tol: 0 }]
          },
          tip: "When a question says ‘according to Source A’, quote the figures. When it says ‘according to Tharoor’, say ‘Tharoor argues that…’ so your reader knows it is an interpretation."
        },
        {
          heading: "The Great Bengal Famine, 1770",
          paragraphs: [
            "A famine is when there is not enough food for the people, so many starve and die. In 1770, when the Company ruled Bengal, a terrible famine struck. Historians disagree about the numbers, but your lesson says that around 7 to 10 million people are thought to have died. People simply did not have enough to eat, and not enough food was being produced.",
            "Famines are usually caused by the weather, for example when the rains fail and the harvest is poor. Famine had been a common part of life in India before. So historians ask why this one was so deadly, and whether the Company, which was responsible for running Bengal, made it worse.",
            "The evidence your lesson gives points to two Company decisions. The Company increased the taxes farmers had to pay, even as the harvest failed. And it did not allow people to keep stocks of food that could have fed them through the shortage. Your task in the lesson was to sort statements into natural causes and Company causes. The judgement most historians reach is that the famine began with the weather, but Company rule made it far deadlier than it needed to be."
          ],
          tip: "Separate the cause of the shortage (the weather) from the causes of the deaths (taxes, no food stocks). That is how you show the Company's responsibility without saying it caused the drought."
        },
        {
          heading: "Schools, English and ‘British values’: economic or social change?",
          paragraphs: [
            "In the 1830s the British government gave the Company money to educate the people it had ruled since 1757. It hired Thomas Babington Macaulay to set up a British-style education system in India. Lessons were to be in English, and Macaulay focused on bringing what he called British values to India. He wanted the children of wealthy families educated, in the hope that they would one day work for the Company.",
            "Your lesson asked you to weigh this up. A benefit for some Indians was access to schooling and to jobs in the Company's offices. A disadvantage was that the system ignored Indian languages and culture, served the Company's needs rather than India's, and reached only the children of the rich. The schools are a social change: they changed how people learned and how they were treated.",
            "To decide whether the Company brought more economic or more social change, your lesson gives four tests of how significant a change was: its impact on ordinary people, their health and wealth; its impact on the whole country; its longer-term impact; and its impact on the wider world. De-industrialisation and the famine hit millions of ordinary people across Bengal and lasted for generations. The schools reached a small, wealthy group. Most pupils conclude that the economic changes were bigger, but you must give your own reasons."
          ],
          tip: "Social = people and society: schools, religion, culture, how people are treated. Economic = money: trade, taxes, industry, famine."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year did the Great Bengal Famine happen?", answer: 1770, tolerance: 0, units: "", why: "The Great Bengal Famine struck in 1770, when the Company had ruled Bengal for thirteen years and had collected its taxes since 1765.", check: "1770",
          misconceptions: [
            { answer: 1757, says: "1757 is the Battle of Plassey, when the Company took control of Bengal. The famine came thirteen years later, in 1770, under Company rule.", check: "1770 - 13" },
            { answer: 1765, says: "1765 is when the Company took charge of tax collection in Bengal. The famine came five years after that, in 1770, and the Company's taxes are one reason it was so deadly.", check: "1770 - 5" }
          ] },
        { kind: "mcq", q: "What does de-industrialisation mean?", options: ["A country loses its industries, so people go back to farming the land", "A country builds new factories and railways", "A country starts trading with new partners overseas", "A country's farmers move into towns to find work"], answer: 0, why: "De-industrialisation is the loss of industry. Tharoor argues that when India's cloth industry was destroyed, its workers had to go back to village farming to survive.",
          feedback: [
            "",
            "That is the opposite: building factories is industrialisation, which is what Britain was doing. India LOST its cloth industry under the Company; that is de-industrialisation.",
            "New trading partners is a change in trade, not in industry. De-industrialisation means industries closing down, as India's cloth workshops did under Company rule.",
            "You have the movement the wrong way round. In de-industrialisation workers leave industry and go BACK to the land. In India, cloth workers returned to the countryside as farmers."
          ] },
        { kind: "gap", q: "Under Company rule, Indian cloth makers had to pay very high ___, so that their cloth became too expensive to buy.", answer: "taxes", options: ["taxes", "wages", "rents"], why: "Tharoor argues the Company made Indian producers pay taxes of up to about 80 per cent, pricing their cloth out of the market so that British cloth would sell instead.",
          feedback: {
            "wages": "Wages are what a worker is paid, and cloth makers would want HIGHER wages, not be forced to pay them. The Company's weapon was taxes on Indian cloth, which made it expensive.",
            "rents": "Rent is paid for land or buildings. The Company's method, according to Tharoor, was to tax Indian cloth so heavily that it cost more than the British cloth shipped in."
          } }
      ],
      modules: [
        {
          title: "Reading the cloth figures",
          task: {
            kind: "numeric",
            q: "Use Source A. In 1814 India sent 1.2 million cloths to Britain. In 1835 it sent 306,000. By how many cloths did the amount India sent to Britain fall?",
            answer: 894000, tolerance: 0, units: "cloths",
            why: "1,200,000 − 306,000 = 894,000. Cloth from India to Britain fell by 894,000 in twenty-one years while cloth from Britain to India rose to 52 million.",
            check: "1200000 - 306000",
            misconceptions: [
              { answer: 1506000, says: "You added the two figures. The question asks how much the amount FELL, so subtract the later figure from the earlier one: 1,200,000 − 306,000 = 894,000.", check: "1200000 + 306000" },
              { answer: 666000, says: "That is 1,200,000 − 534,000, using the 1821 figure. The question asks about 1835, when India sent 306,000: 1,200,000 − 306,000 = 894,000.", check: "1200000 - 534000" }
            ]
          },
          levels: {
            support: {
              steps: [
                "Write 1.2 million in full: 1,200,000.",
                "Find the 1835 figure for cloth from India to Britain: 306,000.",
                "A fall means take the smaller, later figure away from the larger, earlier one: 1,200,000 − 306,000.",
                "Subtract in parts: 1,200,000 − 300,000 = 900,000, then 900,000 − 6,000 = 894,000."
              ],
              example: {
                q: "Use Source A. India sent 534,000 cloths to Britain in 1821 and 422,500 in 1828. By how many cloths did the amount fall?",
                steps: ["Earlier figure: 534,000. Later figure: 422,500.", "Fall = earlier − later: 534,000 − 422,500.", "534,000 − 422,500 = 111,500."],
                answer: "111,500 cloths",
                checks: [{ expr: "534000 - 422500", value: 111500, tol: 0 }]
              }
            },
            core: { hint: "Write both numbers in full first. A fall is the earlier figure minus the later one." },
            stretch: { extend: "Now compare the other direction: cloth from Britain to India rose from 818,000 to 52 million. Explain, in two sentences, what the two changes together tell you about who gained from Company rule." }
          },
          explain: "Say, in one sentence, why you subtract rather than add to find a fall.",
          why: "1,200,000 − 306,000 = 894,000. The fall in Indian cloth going to Britain, set beside the rise in British cloth going to India, is the clearest evidence of de-industrialisation in your lesson."
        },
        {
          title: "Who gained from this trade?",
          task: {
            kind: "mcq",
            q: "Between 1814 and 1835 cloth from India to Britain fell from 1.2 million to 306,000, while cloth from Britain to India rose from 818,000 to 52 million. Who gained most from this trade?",
            options: ["Britain", "India", "Both gained equally", "Neither: trade fell on both sides"],
            answer: 0,
            why: "British factories sold tens of millions of cloths to India while Indian makers sold less and less. The profit and the factory work went to Britain; Indian cloth workers lost their living.",
            feedback: [
              "",
              "India was selling less and less cloth and buying more and more. Its cloth makers lost their work. The side selling 52 million cloths, Britain, gained.",
              "The figures are not equal in any way: one side's sales collapsed while the other's rose to 52 million. Britain's factories and the Company gained; India's industry shrank.",
              "Trade did not fall on both sides. Cloth from Britain to India ROSE enormously, from 818,000 to 52 million. It was India's cloth exports that fell."
            ]
          },
          contexts: [
            { label: "Raw materials and factories", q: "The Company took raw cotton from India to factories in Britain, then sold the finished cloth back to Indians at a large profit. Who gained most from this trade?", why: "Britain had the factory work and the Company kept the profit; India supplied the cotton and then paid for the finished cloth." },
            { label: "Taxes on cloth makers", q: "Indian cloth makers were made to pay taxes of up to about 80 per cent, so their cloth cost more than the British cloth shipped in, and buyers chose the British cloth. Who gained most from this trade?", why: "The taxes drove Indian cloth out of the market so British factories could sell theirs; Britain gained and Indian makers lost their living." },
            { label: "Spices and tea", q: "The Company bought spices and tea in India for low prices and sold them in Britain for very high prices, keeping the difference. Who gained most from this trade?", why: "The Company, a British business, kept the difference between the low price in India and the high price in Britain." }
          ],
          levels: {
            support: {
              steps: [
                "Ask: who is selling more at the end than at the start?",
                "Ask: who keeps the profit from the sales?",
                "Ask: who has lost work or money?",
                "The side selling more and keeping the profit is the side that gained."
              ],
              example: {
                q: "A village shop used to sell home-made bread. A big company opened a store that sold cheaper factory bread, and the village bakery closed. Who gained most from this trade?",
                steps: ["Who sells more at the end? The big company.", "Who keeps the profit? The big company.", "Who lost work? The village baker."],
                answer: "The big company"
              }
            },
            core: { hint: "Follow the cloth and follow the money. Whoever is selling 52 million cloths is the one who gained." },
            stretch: { extend: "Tharoor argues that India was the first country in the world to lose an industry in this way. Explain in two sentences why losing an industry is worse for a country than one bad year of trade." }
          },
          explain: "Say, in one sentence, how the figures in Source A support Tharoor's interpretation.",
          why: "In every version of the story the Company and British factories sold more and kept the profit, while Indian producers lost their market. That is why historians describe Company rule as economic exploitation."
        },
        {
          title: "Economic or social change?",
          task: {
            kind: "written",
            q: "Did the East India Company bring more economic or more social change to India? Decide, and explain your choice in one paragraph of four to six sentences.",
            criteria: [
              "I state clearly whether I think the bigger change was economic or social.",
              "I give at least two specific examples from the chapter: the cloth figures, de-industrialisation, the famine, or Macaulay's schools.",
              "I use at least one of the four tests of significance: ordinary people, the whole country, the long term, the wider world.",
              "I explain why my examples show that kind of change, and I link back to the question."
            ],
            model: "I think the East India Company brought more economic than social change to India. The clearest example is the cloth trade: cloth sent from India to Britain fell from 1.2 million in 1814 to 306,000 in 1835, while British cloth sent to India rose to 52 million, and Tharoor argues that heavy taxes destroyed India's cloth industry. The Great Bengal Famine of 1770 also shows economic change, because the Company's higher taxes and its refusal to let people keep food stocks turned a poor harvest into a disaster for millions of ordinary people. The social change, Macaulay's English-language schools in the 1830s, mattered but reached only the children of wealthy families. Using the test of impact on ordinary people and on the whole country, the economic changes were far bigger, so I conclude that Company rule changed India's economy more than its society."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: I think the Company brought more [economic / social] change to India.",
                "Sentences 2 and 3: For example… (give two specific examples with a figure or a date).",
                "Sentence 4: Mention the other kind of change and say why it was smaller.",
                "Sentence 5: Using the test of…, I conclude that…"
              ],
              example: {
                q: "Did the Norman Conquest bring more political or more social change to England? Explain in a short paragraph.",
                steps: ["Decide: political.", "Examples: Norman lords replaced Anglo-Saxon nobles; William controlled the land through castles.", "The other side: French words entered English, a social change, but ordinary people's daily work stayed much the same.", "Judge with a test: the change in who held power affected the whole country, so political change was bigger."],
                answer: "Political change was bigger: the rulers and landholders changed across the whole country, while most people's daily lives changed less."
              }
            },
            core: { hint: "Pick a side, give two examples with numbers or dates, then use one of the four tests of significance to justify your choice." },
            stretch: { extend: "Argue the opposite case in two sentences: how could someone claim the schools were the more significant change in the long term?" }
          },
          explain: "Say, in one sentence, which test of significance you used and why.",
          why: "A strong answer chooses a side, supports it with specific examples such as the cloth figures or the famine, weighs the other side briefly, and uses one of the four tests of significance to justify the judgement."
        }
      ]
    },

    /* ───────────── 3 · the First War of Independence ───────────── */
    {
      key: "uprising-1857", n: 3, title: "The First War of Independence, 1857–58, and the birth of the Raj",
      lead: "Who the sepoys were, what sparked the rising of 1857 and the deeper causes behind it, how the Company lost control, and how the British Government took India for itself.",
      covers: [3],
      pretext: {
        words: [
          { word: "sepoy", means: "an Indian soldier who fought in the East India Company's army", sentence: "Most of the Company's soldiers were sepoys." },
          { word: "caste system", means: "a way of ordering people in Indian society by the group they were born into", sentence: "The Company recruited sepoys from the higher castes." },
          { word: "mutiny", means: "when soldiers refuse to follow their commanders' orders", sentence: "The rising began as a mutiny in the Bengal army." },
          { word: "cartridge", means: "the packet of powder and bullet loaded into a rifle", sentence: "The new cartridge was said to be greased with animal fat." },
          { word: "suppress", means: "to put down a rising by force", sentence: "The British Army was called in to suppress the rising." },
          { word: "Raj", means: "the Hindi word for rule; the British Raj was direct British rule of India", sentence: "The British Raj began in 1858." }
        ],
        passage: [
          "The Company's army was mostly made up of Indian soldiers called sepoys.",
          "For years the sepoys fought loyally for the Company.",
          "Most came from the higher castes in Indian society.",
          "In 1857 the sepoys were given a new rifle.",
          "Its cartridges were said to be greased with fat from cows and pigs.",
          "This offended Hindu and Muslim soldiers deeply.",
          "There were deeper causes too.",
          "Indians were kept out of government, and Company rule had made many people poorer.",
          "In 1857 sepoys in Bengal refused to follow orders, and the rising spread.",
          "The Company had to call in the British Army to crush it.",
          "By 1858 the rising was over.",
          "The British Government took India away from the Company.",
          "India was now ruled by Queen Victoria: the British Raj had begun."
        ]
      },
      sections: [
        {
          heading: "The Company's army",
          paragraphs: [
            "The East India Company's army was mostly made up of Indian soldiers. These soldiers were known as sepoys. For a hundred years the sepoys fought loyally for the Company as it ruled over and conquered most of India. Without them the Company, a business run from London, could never have held so much land.",
            "Most sepoys came from the upper groups in the Indian caste system. The caste system was a way of organising people by the group they were born into, a little like the feudal system you met in Year 7. Your lesson asked why the Company recruited only high-caste Hindus for so long: it wanted soldiers from the groups that already held respect in Indian society, and it believed they would be the most reliable.",
            "This mattered in 1857. Soldiers from the higher castes followed strict rules about food and purity. Anything that forced them to break those rules was not a small matter; it threatened their place in their own society."
          ],
          tip: "Sepoy is the key word of this chapter. Say it with the definition every time: sepoy, an Indian soldier in the Company's army."
        },
        {
          heading: "The spark and the deeper causes",
          paragraphs: [
            "The spark that started the rising was the Enfield rifle cartridge. In 1857 the sepoys were issued with a new rifle whose cartridges had to be bitten open before loading. The sepoys were told that the grease on the cartridges contained fat from cows and from pigs. Cows are sacred to Hindus, and pigs are forbidden to Muslims, so for both the cartridge was an insult to their religion. Your lesson's quiz makes the point: the cartridge angered the sepoys not because it was hard to use but because it was offensive.",
            "A spark is not the whole fire. Your lesson sorts the deeper causes into four factors. Political: India was governed by British people and Indians were blocked from positions in government. Economic: the Company had destroyed Indian industries and replaced them with British goods, and the people of India had become poorer. Military: the cartridge itself, and growing anger inside the army about pay, promotion and who was recruited. Social: the Company did not respect India's culture and religion.",
            "The sepoy Mangal Pandey is the subject of your homework. In 1857 his actions against his British officers helped to spark the rebellion, and he paid for it with his life. Your fact-file asks where he was from, what he did and why, what happened to him, and how India remembers him today, including on a postage stamp."
          ],
          tip: "Sort causes with PEMS: Political, Economic, Military, Social. In the assessment you may be asked which factor was the main cause; always name the factor before the example."
        },
        {
          heading: "Mutiny, uprising or war? What happened in 1857–58",
          paragraphs: [
            "In 1857 sepoys in the Bengal division of the Company's army refused to follow the orders of their British commanders. A mutiny is exactly this: soldiers refusing orders. The sepoys killed their commanders, and the rising spread across northern India. The soldiers the Company had relied on for a century were turning against it.",
            "The Company's own army lost control of the situation. It was forced to call in troops from the British Army, and soldiers came from across the Empire to suppress the uprisings. They succeeded, and by 1858 the rising was over. Many sepoys who were captured were executed, and some of the punishments were deliberately designed to insult the religions of the men being punished.",
            "The event has three names, and the name you choose says something about your view. In Britain it was long called the Sepoy Mutiny, which makes it sound like soldiers breaking rules. In India it is known as the First War of Independence, which makes it the first great fight to free India from British rule. Historians often call it the Uprising of 1857. Your lesson uses the Indian name in its title, and so does this chapter."
          ],
          worked: {
            q: "Explain one cause of the First War of Independence in a PEEL paragraph.",
            steps: [
              "Point: One cause of the First War of Independence was social: the Company's failure to respect Indian religion.",
              "Evidence: For example, in 1857 the sepoys were issued with Enfield cartridges they were told were greased with cow and pig fat, which they had to bite open.",
              "Explain: This caused the rising because cows are sacred to Hindus and pigs forbidden to Muslims, so the sepoys felt the Company was forcing them to break their faith.",
              "Link: Therefore disrespect for religion turned loyal soldiers into rebels, which is why the rising began in the army."
            ],
            answer: "Point (social cause), Evidence (the cartridge, 1857), Explain (sacred cow, forbidden pig, forced to break faith), Link (loyal soldiers became rebels)."
          },
          tip: "Your literacy focus is explaining WHY an event happened. Every Explain sentence should contain because, so or this meant that."
        },
        {
          heading: "Consequences: the British Government takes India",
          paragraphs: [
            "The Company won the fighting but lost its reputation. Many people in Britain believed the Company had caused the rising by refusing to respect India, its culture, its religion and its people. In 1858 Parliament passed the Act for the Better Government of India, and the Company was stripped of its control. From 1858 the British Government officially ruled India, with Queen Victoria as its ruler. This period of direct rule by Britain and the Crown is called the British Raj. Raj means rule in Hindi.",
            "To show that the Raj would be different from the Company, Queen Victoria issued a Proclamation in 1858. In it she promised that Britain would not seek new territory in India and would respect the rights of the local Nawabs; that Britain would respect the religious affairs of Indian people and not force Christianity on them; that all religions would have equal protection under the law; and that all Indian people would be able to work in the Indian Government and Civil Service.",
            "Your lesson asked you to test these promises against what the British had just done. Sepoys had been punished in ways designed to insult their religion while the fighting was still going on. So the Proclamation was a promise for the future that the recent past did not support. Whether the Raj kept its word is the question for the next chapter."
          ],
          tip: "Consequence words: as a result, this meant that, from 1858. The Company lost India; the Crown gained it; the Proclamation made promises."
        }
      ],
      gate: [
        { kind: "mcq", q: "Who were the sepoys?", options: ["Indian soldiers who fought in the East India Company's army", "British soldiers sent out to India from Britain", "Indian princes who ruled regions after the Mughals", "Company officials who collected taxes in Bengal"], answer: 0, why: "Sepoys were the Indian soldiers who made up most of the Company's army and conquered most of India for it.",
          feedback: [
            "",
            "That is backwards: the sepoys were Indian, not British. The Company's army was mostly Indian soldiers; British Army troops were only called in when the sepoys rose up in 1857.",
            "Indian princes were the Nawabs, who ruled the states left when the Mughal Empire collapsed. Sepoys were soldiers, not rulers.",
            "Tax collectors worked in the Company's offices. Sepoys were the soldiers in its army, the men who held India for the Company until 1857."
          ] },
        { kind: "gap", q: "A ___ is when soldiers refuse to follow the orders of their commanders.", answer: "mutiny", options: ["mutiny", "massacre", "proclamation"], why: "Mutiny means soldiers refusing orders. The rising of 1857 began as a mutiny in the Bengal division of the Company's army.",
          feedback: {
            "massacre": "A massacre is the killing of many defenceless people, like Amritsar in 1919. Soldiers refusing to obey their commanders is a mutiny.",
            "proclamation": "A proclamation is a public statement from the Queen, like Victoria's in 1858. Soldiers refusing orders is a mutiny."
          } },
        { kind: "mcq", q: "What was the main consequence of the First War of Independence?", options: ["From 1858 the British Government took control of India away from the Company", "The Company's army won and the Company became more powerful than ever", "India became an independent country in 1858", "The Mughal Empire was restored to power"], answer: 0, why: "The rising destroyed the Company's reputation. In 1858 the British Government took over and India became the British Raj.",
          feedback: [
            "",
            "The Company's army did not win on its own; it had to call in the British Army. And winning the fighting did not save the Company: in 1858 its control of India was taken away.",
            "Independence came in 1947, almost ninety years later. In 1858 India passed from the Company to the British Government; it was still ruled by Britain.",
            "The Mughal Empire had collapsed by 1720 and was not brought back. The power that replaced the Company in 1858 was the British Crown."
          ] }
      ],
      modules: [
        {
          title: "How long did the Company rule?",
          task: {
            kind: "numeric",
            q: "The Company became the ruler of Bengal after Plassey in 1757 and lost control of India to the British Government in 1858. For how many years was the Company a ruler in India?",
            answer: 101, tolerance: 0, units: "years",
            why: "1858 − 1757 = 101. For just over a century a private company governed a large part of India.",
            check: "1858 - 1757",
            misconceptions: [
              { answer: 100, says: "That is 1857 − 1757, using the year the rising began. The Company lost control in 1858, when the Act was passed: 1858 − 1757 = 101.", check: "1857 - 1757" },
              { answer: 93, says: "That is 1858 − 1765, counting from the year the Company took over tax collection. The question starts from Plassey in 1757: 1858 − 1757 = 101.", check: "1858 - 1765" }
            ]
          },
          contexts: [
            { label: "A weaving family", q: "A weaving family in Bengal lived under Company rule from Plassey in 1757 until the British Government took over in 1858. For how many years did they live under Company rule?", check: "1858 - 1757" },
            { label: "The Company's records", q: "The Company's rule in India ran from its victory at Plassey in 1757 to the Act that ended it in 1858. How many years do those records of Company rule cover?", check: "1858 - 1757" },
            { label: "A sepoy regiment", q: "A sepoy regiment first fought for the Company at Plassey in 1757. In 1858 it was taken over by the British Crown. For how many years had it served the Company?", check: "1858 - 1757" }
          ],
          levels: {
            support: {
              steps: [
                "Write the later date first: 1858.",
                "Subtract the earlier date: 1858 − 1757.",
                "Do it in parts: 1858 − 1700 = 158, then 158 − 57 = 101.",
                "Check it makes sense: a little over one hundred years, one century."
              ],
              example: {
                q: "The Company received its Royal Charter in 1600 and its first ships reached India in 1608. How many years apart were these events?",
                steps: ["Later date first: 1608.", "Subtract: 1608 − 1600.", "1608 − 1600 = 8."],
                answer: "8 years",
                checks: [{ expr: "1608 - 1600", value: 8, tol: 0 }]
              }
            },
            core: { hint: "Later date minus earlier date. Use 1858, the Act, not 1857, the rising." },
            stretch: { extend: "Explain in two sentences why it matters that a private company, rather than a government, ruled Bengal for 101 years. Use the famine or the cloth trade as your evidence." }
          },
          explain: "Say, in one sentence, why you used 1858 rather than 1857 as the end date.",
          why: "1858 − 1757 = 101 years. The rising began in 1857, but the Company lost India in 1858, when the Act for the Better Government of India was passed."
        },
        {
          title: "Sorting the causes",
          task: {
            kind: "match",
            q: "Match each cause of the First War of Independence to the factor it belongs to.",
            pairs: [
              ["Indian people were blocked from positions in government", "Political: power and government"],
              ["The Company destroyed Indian industries and people became poorer", "Economic: money and wealth"],
              ["The new Enfield cartridges were said to be greased with cow and pig fat", "Military: the army and its weapons"],
              ["The Company did not respect Indian culture and religion", "Social: people and society"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Political is about who holds power: look for the word government.",
                "Economic is about money: look for industries, trade, poorer or richer.",
                "Military is about the army: look for soldiers, weapons or cartridges.",
                "Social is about people and how they are treated: look for culture and religion."
              ],
              example: {
                q: "Sort these causes of the Norman invasion: Harold took the crown William believed was his (which factor?); England was rich in farmland and silver (which factor?).",
                steps: ["Taking the crown is about who holds power: political.", "Rich farmland and silver is about wealth: economic."],
                answer: "Harold and the crown: political. Farmland and silver: economic."
              }
            },
            core: { hint: "Government = political. Industries and poverty = economic. Cartridges = military. Culture and religion = social." },
            stretch: { extend: "Your lesson's extension asked which factor was the MAIN cause. Choose one and explain in three sentences why it mattered more than the others." }
          },
          explain: "Say, in one sentence, why the cartridge is usually called the spark rather than the main cause.",
          why: "Government jobs are political; destroyed industries are economic; the cartridge is military; disrespect for religion and culture is social. The spark lit a fire that the other three had been building for years."
        },
        {
          title: "Why did the First War of Independence begin?",
          task: {
            kind: "written",
            q: "Explain why the First War of Independence began in 1857. Write one PEEL paragraph of four to six sentences on the cause you think mattered most.",
            criteria: [
              "Point: I name one cause and say which factor it belongs to (political, economic, military or social).",
              "Evidence: I give a specific example from the chapter, with a date or a detail.",
              "Explain: I say how this cause led to the rising, using because, so or this meant that.",
              "Link: I return to the question and say why this cause mattered most."
            ],
            model: "The most important cause of the First War of Independence was social: the Company did not respect India's religions and culture. For example, in 1857 the sepoys were issued with Enfield rifle cartridges that they were told were greased with cow and pig fat, which they had to bite open. This led to the rising because cows are sacred to Hindus and pigs are forbidden to Muslims, so the sepoys believed the Company was forcing them to break their faith, and it confirmed years of feeling that the Company treated Indian beliefs with contempt. Sepoys in the Bengal division refused orders, killed their commanders and the rising spread. Therefore disrespect for religion was the cause that mattered most, because it turned the very soldiers the Company depended on into its enemies."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The most important cause of the First War of Independence was [political / economic / military / social]: …",
                "Sentence 2: For example, in 1857…",
                "Sentences 3 and 4: This led to the rising because… This meant that…",
                "Sentence 5: Therefore this cause mattered most because…"
              ],
              example: {
                q: "Explain why William of Normandy invaded England in 1066, in a PEEL paragraph.",
                steps: ["Point: the main cause was political: William believed the crown had been promised to him.", "Evidence: Edward had, William claimed, named him heir, and Harold had sworn an oath to support him.", "Explain: when Harold took the crown, William felt robbed and had a reason other lords would accept for war.", "Link: so the broken promise, a political cause, mattered most."],
                answer: "Point (political: the promised crown), Evidence (Edward's promise, Harold's oath), Explain (felt robbed, a reason for war), Link (so the broken promise mattered most)."
              }
            },
            core: { hint: "Name the factor in your first sentence. Your Explain sentence must contain because. Your last sentence must say why this cause beats the others." },
            stretch: { extend: "Add a second paragraph on a different factor and finish with one sentence judging which of the two was more important." }
          },
          explain: "Say, in one sentence, which factor you chose and the single piece of evidence that best supports it.",
          why: "A strong PEEL paragraph names the factor, gives dated evidence, explains the link with because or so, and returns to the question. The best answers show how the spark (the cartridge) connected to deeper anger about power, poverty and respect."
        }
      ]
    },

    /* ───────────── 4 · the Raj and growing opposition ───────────── */
    {
      key: "raj-opposition", n: 4, title: "The British Raj, 1858–1918: a fresh start, and growing opposition",
      lead: "How the Raj tried to look different from the Company, who the railways really served, the Indian National Congress, divide and rule in Bengal, and the Swadeshi movement that forced the British to back down.",
      covers: [4],
      pretext: {
        words: [
          { word: "Viceroy", means: "the official who governed India for the British Crown", sentence: "Lord Curzon was Viceroy of India from 1899 to 1905." },
          { word: "Empress", means: "a female ruler of an empire", sentence: "Queen Victoria was made Empress of India in 1877." },
          { word: "Indian National Congress", means: "the political group formed in 1885 to work for India's freedom", sentence: "The Indian National Congress held meetings and demonstrations." },
          { word: "partition", means: "splitting a region or country into separate parts", sentence: "The partition of Bengal made many Indians angry." },
          { word: "boycott", means: "refusing to buy or use something as a protest", sentence: "Indians organised a boycott of British cloth." },
          { word: "Swadeshi", means: "the movement that boycotted British goods and made Indian ones instead", sentence: "The Swadeshi movement encouraged people to weave cloth at home." }
        ],
        passage: [
          "In 1858 Queen Victoria made a Proclamation to the people of India.",
          "She promised to respect their religions and to let Indians work in government.",
          "In 1877 she was made Empress of India.",
          "The British built railways, roads and canals across India.",
          "They said this was for India's good.",
          "But the railways mainly moved goods for trade and carried troops.",
          "Many Indians wanted to rule themselves.",
          "In 1885 they formed the Indian National Congress.",
          "The British took no notice of its demands.",
          "The Viceroy, Lord Curzon, split Bengal in two to weaken the movement.",
          "Indians answered with the Swadeshi movement.",
          "They boycotted British cloth, salt, schools and courts.",
          "In 1911 the British gave in and reunited Bengal."
        ]
      },
      sections: [
        {
          heading: "A fresh start?",
          paragraphs: [
            "The Company had always had a difficult reputation in Britain, but most politicians and powerful people were making money from its exploitation of India, so they did not protest too hard. That changed in the mid-1800s. Victorian society prided itself on caring for people, on morality, which means doing the right thing, and on religion. To most Victorians the Company's open exploitation of India did not meet their standards.",
            "After 1858 Queen Victoria wanted a fresh start, leaving the Company's mistakes and terrible reputation behind. Her Proclamation of 1858 was the beginning. In 1877 the British made Victoria Empress of India, using her as a figurehead to encourage Indians to support British rule, and held huge celebrations to win that support. Britain pushed Victorian ideals, attitudes and technology onto the people of India.",
            "Your lesson puts it sharply. The Company's main priority had been to make as much money as possible. The Raj's priority was to appear to respect and care about the welfare and well-being of the Indian people. Britain was trying to rewrite the relationship: no longer exploitation, it said, but welfare. Your lesson then asks the hard question: why did Britain want it to LOOK as if it cared?"
          ],
          tip: "Notice the word appear. When you write about the Raj, separate what the British said they were doing from what the evidence shows they did."
        },
        {
          heading: "Railways and brotherhood: who gained?",
          paragraphs: [
            "In the past, many people justified the British Empire by listing the benefits the British claimed to have brought to India: wealth, Christianity and what they called civilisation. Historians call these people apologists for empire: people who argue that the British Empire did good in India. There is no doubt the British made a huge impact. By 1900 they had built nearly 80,000 km of road, as well as railways, and had dug nearly 12,000 km of canal. But your guided reading asks a sharper question: were these built for Indians? The evidence is that roads and railways were built to move goods for trade and to carry troops quickly, not to help the Indian people who lived alongside them. Your bell work asked you to sort the railway evidence into social and economic change; most of it is economic, and most of the gain was Britain's.",
            "A second argument made by apologists was brotherhood: that the Empire was one big family, and India gained by belonging to it. Your lesson tests this against the Indian soldiers who fought for Britain in the First World War, from 1914 to 1918. Your homework reading tells the stories of two of them. Awal Nur, of the Corps of Guides, served in Belgium, France and East Africa, was wounded three times, and in 1918 was one of 16 Indian soldiers chosen for a secret mission into Central Asia, riding a yak over the Himalayas. Pratap Singh, an elderly aristocratic officer, fought on the Western Front and at the Battle of Megiddo in 1918, where the Indian Army helped to bring down the Ottoman Empire.",
            "Yet when Singh asked to represent India at the peace conference in Paris, the British refused. He criticised the Treaty of Versailles of 1919 as a political mistake. Your homework asks what makes each man significant, and what in Singh's story shows he was NOT treated as significant. Brotherhood, it seems, had limits."
          ],
          tip: "Significant means important. To argue someone was significant, point to what they did and what it changed; to argue they were not, point to how they were treated."
        },
        {
          heading: "The Indian National Congress and divide and rule",
          paragraphs: [
            "Many Indians believed India should be free from British control. In 1885 Indians who wanted this set up a political group, the Indian National Congress, usually shortened to the INC. It held meetings and organised demonstrations, and the British took no notice of its demands. Britain did not want to lose India, because India supplied raw materials, cheap workers and trade. The INC was especially strong and popular in Bengal, in the north-east.",
            "The growing support for independence worried the British. Lord Curzon, Viceroy of India from 1899 to 1905, announced plans to partition Bengal, splitting it into separate regions. His thinking was that a divided Bengal would find it hard to join together in one independence movement. This is the divide and rule tactic you met at Plassey. The partition went ahead in 1905.",
            "People in India were strongly against it. Many Hindus were angry that a province with a Muslim majority had been created, which set the two communities against each other. That was the point of divide and rule: it worked by making Indians argue with one another rather than with the British."
          ],
          tip: "Divide and rule needs two steps in your explanation: how the British divided people, and WHY a divided people could not resist them."
        },
        {
          heading: "The Swadeshi movement",
          paragraphs: [
            "Indians answered the partition with the Swadeshi movement. Its aim was to cut into what British companies earned, by refusing to buy or use their goods at all. People stopped buying the cloth shipped in from Lancashire and the salt shipped in from Cheshire, and were urged to weave their own cloth at home instead. British-run schools and courts were boycotted too. In 1906 the National Council of Education was founded in Bengal to teach science and technology and to show that Indians could educate themselves.",
            "The British responded harshly. Protesters faced arrest, students who joined the boycotts were often thrown out of their colleges, and once the movement's leaders had been arrested they were hard to replace. But in 1911 the British reversed the partition, and Bengal was reunited.",
            "Your lesson asks for one short-term and one long-term impact of Swadeshi. In the short term, British companies lost sales and the British were forced to give up the partition in 1911. In the long term, many future leaders, including Mohandas Gandhi, were inspired by the movement. The boycott of British cloth and British salt would return, on a far bigger scale, in the next chapter."
          ],
          worked: {
            q: "Explain one short-term and one long-term impact of the Swadeshi movement.",
            steps: [
              "Short-term impact: name something that happened during or soon after the movement. The British reversed the partition of Bengal in 1911.",
              "Say why it was important: the boycott had cost British companies money and shown that organised protest could force the British to back down.",
              "Long-term impact: name something still felt much later. Future leaders such as Gandhi were inspired by Swadeshi.",
              "Say why it was important: the methods of boycott and home-made cloth became the methods of the whole independence movement."
            ],
            answer: "Short-term: the partition was reversed in 1911, showing protest could work. Long-term: Gandhi and others took up its methods, which shaped the road to independence."
          },
          tip: "Swadeshi means, roughly, of our own country. Every part of the movement (home-made cloth, Indian-run schools) fits that idea."
        }
      ],
      gate: [
        { kind: "gap", q: "In 1877 Queen Victoria was given the title ___ of India.", answer: "Empress", options: ["Empress", "Viceroy", "Nawab"], why: "In 1877 the British made Victoria Empress of India and used her as a figurehead to win support for British rule.",
          feedback: {
            "Viceroy": "The Viceroy was the official who governed India for the Crown, such as Lord Curzon. The Queen herself was given the title Empress of India in 1877.",
            "Nawab": "A Nawab was an Indian prince ruling one of the states left after the Mughal collapse. Victoria's new title in 1877 was Empress of India."
          } },
        { kind: "mcq", q: "Why was the Indian National Congress formed in 1885?", options: ["To campaign for India to be free from British control", "To help the British collect taxes more fairly", "To run the new railways across India", "To recruit sepoys for the Company's army"], answer: 0, why: "The INC was formed in 1885 by Indians who believed India should be free from British control. It held meetings and demonstrations, which the British ignored.",
          feedback: [
            "",
            "The INC was not part of the British system; it opposed it. It was formed to work for India's freedom from British control.",
            "Railways were built and run by the British, mainly for trade and troops. The INC was a political group campaigning for independence.",
            "By 1885 the Company no longer existed; India had been ruled by the Crown since 1858. The INC was a political movement for freedom, not a recruiting body."
          ] },
        { kind: "mcq", q: "What is a boycott?", options: ["Refusing to buy or use something as a protest", "Splitting a region into two separate parts", "A public statement from the Queen", "Soldiers refusing to follow orders"], answer: 0, why: "A boycott is a protest by refusal: Swadeshi supporters refused to buy British cloth and salt or to use British schools and courts.",
          feedback: [
            "",
            "Splitting a region is a partition, which is what Curzon did to Bengal. The Indian ANSWER to partition was the boycott: refusing British goods.",
            "A public statement from the Queen is a proclamation, like Victoria's in 1858. A boycott is a protest in which people refuse to buy or use something.",
            "Soldiers refusing orders is a mutiny, as in 1857. A boycott is a peaceful protest by consumers refusing to buy."
          ] }
      ],
      modules: [
        {
          title: "The early Raj: the order of events",
          task: {
            kind: "order",
            q: "Put these events of the early British Raj in the order they happened.",
            items: [
              "Queen Victoria's Proclamation promises to respect Indian religions (1858)",
              "Queen Victoria is made Empress of India (1877)",
              "The Indian National Congress is formed (1885)",
              "Lord Curzon partitions Bengal (1905)",
              "The National Council of Education is founded in Bengal (1906)",
              "The British reverse the partition and Bengal is reunited (1911)"
            ]
          },
          levels: {
            support: {
              steps: [
                "The Raj begins with the Proclamation, so that is first.",
                "The British spent the next decades trying to win support: Empress comes before any organised opposition.",
                "The INC must exist before the British try to divide Bengal to weaken it.",
                "Partition causes Swadeshi (including the new Council of Education), and the reversal comes last."
              ],
              example: {
                q: "Put these Norman events in order: the Domesday Book (1086); William crowned king (1066); the Harrying of the North (1069).",
                steps: ["Coronation first, 1066.", "Then the Harrying, 1069.", "Then Domesday, 1086."],
                answer: "William crowned king (1066); Harrying of the North (1069); Domesday Book (1086)"
              }
            },
            core: { hint: "Promise, Empress, Congress, partition, Council, reversal. Each British action produces an Indian response." },
            stretch: { extend: "Explain how the sequence shows a pattern of action and reaction between the British and Indian opposition." }
          },
          explain: "Say, in one sentence, why the partition of Bengal had to come after the formation of the INC.",
          why: "1858 Proclamation; 1877 Empress; 1885 INC; 1905 partition; 1906 National Council of Education; 1911 reunification. The British act, Indians respond, the British are forced to react."
        },
        {
          title: "Short-term or long-term?",
          task: {
            kind: "mcq",
            q: "Which of these is a LONG-term impact of the Swadeshi movement?",
            options: [
              "Future leaders such as Mohandas Gandhi were inspired by its methods",
              "Students who joined the boycotts were thrown out of their colleges",
              "Protesters were arrested by the British",
              "Shops in Bengal sold less cloth from Lancashire that year"
            ],
            answer: 0,
            why: "Inspiring the next generation of leaders is an impact still felt decades later, when Gandhi used boycotts of cloth and salt against the Raj. The other three happened during the movement itself.",
            feedback: [
              "",
              "Expulsions happened while the boycotts were going on: a short-term consequence for those students. A long-term impact is one still felt years later, such as Gandhi taking up Swadeshi's methods.",
              "Arrests were the immediate British response during the movement, so they are short-term. Look for the option that describes something still true decades later.",
              "Falling sales in one year is as short-term as it gets. The long-term impact is what Swadeshi taught the leaders who came after it."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask of each option: did this happen during the movement, or long afterwards?",
                "Arrests, expulsions and one year's sales all happened at the time: short-term.",
                "Something that shaped leaders decades later is long-term.",
                "Which option mentions the future?"
              ],
              example: {
                q: "Which is a long-term impact of the Norman Conquest: a village is burned in the Harrying of the North, or French words become part of the English language?",
                steps: ["A burned village is one event at the time: short-term.", "Words still used in English today is a change that lasted: long-term."],
                answer: "French words entering English is the long-term impact."
              }
            },
            core: { hint: "Three options describe the years 1905 to 1911. One reaches into the 1920s and beyond." },
            stretch: { extend: "Explain how a short-term impact (the 1911 reversal of partition) helped to create the long-term one (leaders believing boycotts could work)." }
          },
          explain: "Say, in one sentence, what makes an impact long-term rather than short-term.",
          why: "Long-term impacts outlast the events that caused them. Gandhi's campaigns of the 1920s and 1930s used Swadeshi's boycott methods; the arrests, expulsions and lost sales belonged to the moment."
        },
        {
          title: "Why did opposition to British rule grow?",
          task: {
            kind: "written",
            q: "Explain why there was growing opposition to British rule in India between 1858 and 1918. Write one PEEL paragraph of four to six sentences.",
            criteria: [
              "Point: I give one clear reason why opposition grew, naming whether it is political, economic or social.",
              "Evidence: I give a specific example with a date, such as the INC in 1885, the partition of Bengal in 1905, or the railways by 1900.",
              "Explain: I show how this made Indians want to resist British rule, using because or so.",
              "Link: I return to the question of why opposition grew."
            ],
            model: "One reason opposition to British rule grew was political: the British refused to listen to Indians who asked for a say in governing their own country. For example, the Indian National Congress was formed in 1885 to work for India's freedom, but the British took no notice of its demands, and in 1905 the Viceroy, Lord Curzon, partitioned Bengal in order to divide and weaken the movement there. This made opposition grow because the partition showed Indians that the Raj's promises of 1858 meant little, and that peaceful requests would be answered with divide and rule rather than reform. In response Indians organised the Swadeshi movement, boycotting British cloth, salt, schools and courts until the British reversed the partition in 1911. Therefore opposition grew because British actions, not just British rule, kept proving that Indians would have to force change themselves."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: One reason opposition grew was [political / economic / social]: …",
                "Sentence 2: For example, in [date]…",
                "Sentences 3 and 4: This made opposition grow because… So Indians…",
                "Sentence 5: Therefore opposition grew because…"
              ],
              example: {
                q: "Explain why opposition to William the Conqueror grew in the north of England after 1066, in a PEEL paragraph.",
                steps: ["Point: political: Norman lords replaced English ones.", "Evidence: Norman castles and new lords appeared in the north within three years of Hastings.", "Explain: English nobles lost land and power, so they had every reason to rebel.", "Link: so opposition grew because the conquest took power from the people who had held it."],
                answer: "Point (political), Evidence (castles and new lords by 1069), Explain (lost land and power, so rebelled), Link (power taken away, so opposition grew)."
              }
            },
            core: { hint: "One reason, one dated example, one because sentence, one link. The partition of Bengal is the easiest example to use." },
            stretch: { extend: "Add a second paragraph on an economic reason (the railways or the cloth trade) and finish with one sentence saying which reason mattered more." }
          },
          explain: "Say, in one sentence, which event between 1858 and 1918 you think did most to increase opposition, and why.",
          why: "A strong paragraph names a factor, gives a dated example such as the INC in 1885 or the partition of 1905, explains how it turned Indians against British rule, and links back to the question."
        }
      ]
    },

    /* ───────────── 5 · the road to independence ───────────── */
    {
      key: "independence", n: 5, title: "The road to independence and partition, 1919–1947",
      lead: "Why Britain clung to India, the Amritsar Massacre, Gandhi and the Salt March, the Muslim League, the Second World War and Quit India, and the independence and partition of 1947.",
      covers: [5],
      pretext: {
        words: [
          { word: "massacre", means: "the killing of many defenceless people", sentence: "The Amritsar Massacre of 1919 turned many Indians against British rule." },
          { word: "satyagraha", means: "Gandhi's name for non-violent protest, roughly truth force", sentence: "Gandhi believed satyagraha could win independence without violence." },
          { word: "Salt March", means: "Gandhi's 1930 protest march to the sea to make salt against British law", sentence: "Thousands joined the Salt March." },
          { word: "Muslim League", means: "the group that wanted a country of its own for India's Muslims", sentence: "The Muslim League was led by Mohammed Ali Jinnah." },
          { word: "Quit India", means: "Gandhi's 1942 demand that the British leave India at once", sentence: "The British answered Quit India with mass arrests." },
          { word: "partition", means: "splitting a country into separate parts", sentence: "In 1947 the partition of India created two countries." }
        ],
        passage: [
          "Indian soldiers fought for Britain in the First World War.",
          "Britain promised reforms in return, but little changed.",
          "In 1919, at Amritsar, British soldiers fired on a trapped crowd.",
          "Many people were killed.",
          "The massacre turned many Indians against British rule for good.",
          "In the 1920s Mohandas Gandhi led the independence movement.",
          "He believed in protest without violence.",
          "In 1930 he marched to the sea to make salt, breaking British law.",
          "Around 60,000 people were arrested.",
          "During the Second World War, Gandhi told the British to quit India.",
          "By 1946 Britain was too weak and too poor to hold on.",
          "In 1947 India became independent, but it was partitioned.",
          "Terrible violence between religious groups followed."
        ]
      },
      sections: [
        {
          heading: "Why Britain held on, and Amritsar, 1919",
          paragraphs: [
            "Your lesson opens with the words of Lord Curzon, Viceroy from 1899 to 1905, who said that as long as Britain ruled India it was the greatest power in the world, and that losing India would drop it to a third-rate power. His words answer the question of why Britain clung to India: India made Britain great. Your lesson asks who needed whom more. Under the Raj, the British also used the Hindu caste system as a divide and rule tool, keeping Indians divided so they could not unite against British rule.",
            "The Amritsar Massacre took place in 1919, a year after the end of the First World War. The British had promised Indians reforms in return for their brave efforts in the war, but not much changed. Instead many Indians suffered under harsh laws, such as the Rowlatt Act, which limited their rights and freedoms and was enforced especially hard in the Punjab. In Amritsar, in 1919, between 10,000 and 20,000 people gathered in a walled garden with only one small exit. Most had come to celebrate a religious holiday; some had come to protest against British rule.",
            "Gatherings had been banned to stop anti-British protests. British soldiers under Colonel Dyer entered the garden, blocked the exit, and were ordered to break up the crowd. They began firing. The people were trapped. Many were killed and many more were wounded. Your lesson asks how the British reacted to Dyer afterwards, and why the massacre was a turning point for Indian politicians: after Amritsar, many who had hoped for reform within the Empire decided that only independence would do."
          ],
          quote: { text: "As long as we rule India, we are the greatest power in the world. If we lose it, we shall drop straightaway to a third-rate power", source: "Lord Curzon, Viceroy of India 1899–1905, as printed in your lesson" },
          tip: "A turning point changes what people believe is possible. Before Amritsar, reform; after Amritsar, independence."
        },
        {
          heading: "Gandhi and the Salt March",
          paragraphs: [
            "In the 1920s the independence movement gained support under Mohandas Gandhi, a Hindu and a former lawyer. He believed independence could be won through non-violent protest, which today is often called passive resistance. Gandhi called it satyagraha, which roughly means truth force. Leaders who came later, among them Martin Luther King and Nelson Mandela, took up his ideas.",
            "The most famous protest was the Salt March of 1930. Indians were forbidden to make their own salt: they had to buy it, and the British government taxed it heavily. Gandhi and 78 leaders of the independence movement led thousands of protesters on a march to the sea, and there they made their own salt out of the seawater. Across India, thousands copied them, and around 60,000 people were arrested, including Gandhi himself.",
            "The march worked in a way the British had not expected. After Gandhi was released from prison, the British accepted that they could no longer brush the demand for independence aside, and they invited him to London to speak there for the Indian National Congress. A protest about salt had put independence on the table."
          ],
          tip: "Link the Salt March back to Swadeshi: boycotting British salt from Cheshire in 1905 became making Indian salt from seawater in 1930. The method grew."
        },
        {
          heading: "Towards independence: the 1935 Act, the Muslim League and the war",
          paragraphs: [
            "In 1935 the Government of India Act gave India some self-government. Some elections were brought in, and a small number of women were allowed to vote. But India was still part of the British Empire and still ruled by a Viceroy chosen by the British. Gandhi and the INC continued to demand complete independence. Many Muslims had formed their own group, the Muslim League, whose leader Mohammed Ali Jinnah wanted a separate country of their own for India's Muslims.",
            "In 1939 Britain declared war on Germany, and declared war on India's behalf too, without consulting Indian leaders. Even so, as in the First World War, Indians joined up in huge numbers: 2.5 million Indians fought, the largest volunteer army ever raised. The Muslim League supported the war. Many in the INC would support it only in exchange for full independence, and some refused to fight at all because of their non-violent beliefs. By 1942 Japanese forces were close to India's border and discontent was widespread. The British sent Sir Stafford Cripps to offer more self-government after the war in return for full cooperation now, but the INC wanted full independence, and no agreement was reached.",
            "In August 1942 Gandhi called on the British to Quit India immediately, and on all Indians to resist British rule peacefully. The British arrested Gandhi and almost all the INC's leaders at once and banned public meetings. The arrests set off mass demonstrations, strikes and disruption, and over 100,000 people were imprisoned. Quit India did not bring independence straight away, but it showed the British how many Indians stood against them."
          ],
          worked: {
            q: "Explain how the Second World War led to Indian independence.",
            steps: [
              "Point: The war led to independence because it left Britain unable to hold India and showed how strongly Indians opposed British rule.",
              "Evidence: 2.5 million Indians fought for Britain, yet in 1942 the Quit India movement led to over 100,000 arrests; by the end of the war Britain was exhausted and short of money.",
              "Explain: Britain no longer had the military strength or the wealth to hold on, and most British people wanted to rebuild Britain, not fight to keep distant colonies.",
              "Link: So by 1946 the British government had agreed that India would become independent."
            ],
            answer: "The war weakened Britain (strength, wealth, priorities at home) and strengthened the independence movement (Quit India), so Britain agreed by 1946 to leave."
          },
          tip: "Two sides to every war answer: what the war did to Britain, and what it did to the independence movement."
        },
        {
          heading: "Independence and partition, 1947",
          paragraphs: [
            "By the end of the war, India and many other British colonies were demanding the right to rule themselves. Britain no longer had the soldiers or the money to hold on to them, and many British people felt that rebuilding Britain at home mattered far more than keeping colonies far away. By 1946 the British government had agreed that India would become independent.",
            "In 1947 India became independent. But the country was partitioned, split into two: India, with a Hindu majority, and a new country for Muslims, Pakistan, as the Muslim League had demanded. Your lesson's video asks how the British had categorised Indians by religion and why that was a problem. Partition meant that enormous numbers of people had to leave their homes to cross the new border, and terrible violence broke out between religious groups.",
            "Your plenary lists the impacts of the end of the Raj: independence was granted; India was partitioned; there was violence between religious groups; and a long-term conflict began over Kashmir, a region both new countries claimed. Divide and rule had helped Britain hold India for almost two centuries. Its legacy was a divided subcontinent."
          ],
          tip: "When you write about 1947, give both sides: independence was a victory for the movement, and partition was a disaster for millions of ordinary people."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year did Gandhi lead the Salt March?", answer: 1930, tolerance: 0, units: "", why: "The Salt March took place in 1930. Gandhi and 78 leaders marched to the coast to make salt, and around 60,000 people were arrested across India.", check: "1930",
          misconceptions: [
            { answer: 1919, says: "1919 is the Amritsar Massacre, eleven years earlier. Gandhi's Salt March came in 1930, after he had led the movement through the 1920s.", check: "1930 - 11" },
            { answer: 1935, says: "1935 is the Government of India Act, which gave India some self-government. The Salt March came five years before it, in 1930, and helped to force that Act.", check: "1930 + 5" }
          ] },
        { kind: "mcq", q: "What did the Muslim League, led by Mohammed Ali Jinnah, call for?", options: ["A separate country of their own for India's Muslims", "India to stay in the British Empire for ever", "Bengal to be partitioned again", "The return of East India Company rule"], answer: 0, why: "The Muslim League wanted a country of its own for India's Muslims. In 1947 that country, Pakistan, was created when India was partitioned.",
          feedback: [
            "",
            "The League was an independence group too; it did not want British rule to continue. What made it different from the INC was its demand for a separate Muslim country.",
            "The partition of Bengal was a British divide and rule tactic in 1905 that Indians had fought against. The League's demand was for a separate country for Muslims, not a new split of Bengal.",
            "The Company had been gone since 1858 and no one wanted it back. The League's leader, Jinnah, wanted a country of its own for India's Muslims."
          ] },
        { kind: "gap", q: "Gandhi called his method of non-violent protest ___, which roughly means truth force.", answer: "satyagraha", options: ["satyagraha", "Swadeshi", "partition"], why: "Satyagraha, roughly truth force, was Gandhi's name for non-violent protest, often called passive resistance today.",
          feedback: {
            "Swadeshi": "Swadeshi was the earlier movement, from 1905, that boycotted British goods. Gandhi was inspired by it, but his own name for non-violent protest was satyagraha, truth force.",
            "partition": "Partition means splitting a country, which is what happened to India in 1947. Gandhi's method of non-violent protest was called satyagraha."
          } }
      ],
      modules: [
        {
          title: "The road to 1947: the order of events",
          task: {
            kind: "order",
            q: "Put these events on the road to independence in the order they happened.",
            items: [
              "The Amritsar Massacre (1919)",
              "Gandhi leads the Salt March (1930)",
              "The Government of India Act gives India some self-government (1935)",
              "Britain declares war on Germany on India's behalf (1939)",
              "Gandhi calls on the British to Quit India (1942)",
              "India becomes independent and is partitioned (1947)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the event a year after the First World War ended: Amritsar.",
                "Gandhi's great protest comes next, and it forces the British to offer something: the 1935 Act.",
                "The Second World War begins after that, and Quit India happens during the war.",
                "Independence comes last, two years after the war ended."
              ],
              example: {
                q: "Put these in order: Domesday Book (1086); Battle of Hastings (1066); Harrying of the North (1069).",
                steps: ["Hastings, 1066, first.", "The Harrying, 1069.", "Domesday, 1086, last."],
                answer: "Battle of Hastings (1066); Harrying of the North (1069); Domesday Book (1086)"
              }
            },
            core: { hint: "Massacre, march, Act, war, Quit India, independence. The two wars are your anchors: 1918 just before Amritsar, 1939 for the declaration." },
            stretch: { extend: "Explain how each event in this list helped to cause the next one." }
          },
          explain: "Say, in one sentence, why the Salt March had to come before the Government of India Act.",
          why: "1919 Amritsar; 1930 Salt March; 1935 Act; 1939 war; 1942 Quit India; 1947 independence. Each protest pushed the British a step further than they wanted to go."
        },
        {
          title: "Why did Britain agree to leave?",
          task: {
            kind: "mcq",
            q: "Why had the British government agreed, by 1946, that India would become independent?",
            options: [
              "After the war Britain no longer had the military strength or wealth to hold India, and rebuilding at home came first",
              "The Muslim League had asked Britain to leave and the British agreed at once",
              "Japan had conquered India during the war",
              "The Viceroy decided that India no longer had any value to Britain"
            ],
            answer: 0,
            why: "The Second World War exhausted Britain. It could no longer afford to hold distant colonies by force, and most British people wanted to rebuild Britain instead.",
            feedback: [
              "",
              "No single request made the British leave; they had ignored the INC's demands since 1885. What changed was Britain itself: after the war it lacked the strength and money to hold India.",
              "Japanese forces came close to India's border in 1942 but never conquered it. Britain left because the war had left it too weak and too poor, not because it had lost India to Japan.",
              "India was still valuable; Curzon's words about Britain's greatness still applied. Britain left because it could no longer afford to stay, not because India had lost its worth."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask: what had just happened to Britain by 1946? Six years of war.",
                "What does a long war cost? Soldiers, ships and money.",
                "What did British people want after the war? To rebuild their own country.",
                "Which option puts those three things together?"
              ],
              example: {
                q: "Why did the East India Company lose control of India in 1858: because it had grown too rich, or because the rising of 1857 had destroyed its reputation and it needed the British Army to survive?",
                steps: ["Being rich was not the problem; the Company had always been rich.", "The rising showed the Company could not hold India alone and had lost trust in Britain.", "So the rising, not the wealth, is the reason."],
                answer: "Because the rising destroyed its reputation and showed it could not hold India alone."
              }
            },
            core: { hint: "Think about Britain in 1946, not India. What could Britain no longer afford?" },
            stretch: { extend: "Explain how Quit India in 1942 and Britain's weakness in 1946 worked together: could either alone have brought independence by 1947?" }
          },
          explain: "Say, in one sentence, how the Second World War changed what Britain could afford.",
          why: "The war drained Britain's military strength and wealth, and British people wanted to rebuild at home. Combined with the strength of feeling shown by Quit India, this made holding India impossible."
        },
        {
          title: "One impact of the end of the Raj",
          task: {
            kind: "written",
            q: "Explain one impact that the end of the British Raj had on India. Write one paragraph of four to six sentences using Point, Evidence, Explain.",
            criteria: [
              "Point: I name one impact of the end of the Raj: independence, partition, violence between religious groups, or the conflict over Kashmir.",
              "Evidence: I give a specific detail from the chapter, such as the year 1947, the Muslim League's demand, or the new border.",
              "Explain: I say what this meant for people in India, using this led to, this meant that or this shows that.",
              "I say whether this impact was short-term or long-term, and why."
            ],
            model: "One impact the end of the British Raj had on India was partition. For example, when India became independent in 1947 it was split into two countries, India and a new state for Muslims, Pakistan, as the Muslim League under Jinnah had demanded. This meant that enormous numbers of people had to leave their homes to cross the new border, and terrible violence broke out between religious groups. It also led to a long-term conflict over Kashmir, which both new countries claimed. This shows that the end of the Raj was both a victory and a disaster: independence was won, but the divisions the British had used to rule became the borders of two hostile countries, and the Kashmir conflict is still unresolved, which makes this a long-term impact."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: One impact the end of the British Raj had on India was…",
                "Sentence 2: For example, in 1947…",
                "Sentences 3 and 4: This meant that… This led to…",
                "Sentence 5: This was a [short-term / long-term] impact because…"
              ],
              example: {
                q: "Explain one impact of the collapse of the Mughal Empire on India.",
                steps: ["Point: one impact was that India broke into smaller states ruled by Nawabs.", "Evidence: by 1720, after Aurangzeb's death in 1707, the Empire had collapsed.", "Explain: this meant there was no single power to stand up to the East India Company.", "Judge: this was long-term because it opened the way to a century of Company rule."],
                answer: "Point (India split into Nawab-ruled states), Evidence (1707, 1720), Explain (no one to resist the Company), Judge (long-term: led to Company rule)."
              }
            },
            core: { hint: "Choose ONE impact. Partition is the easiest to evidence. Finish by saying whether it is still felt today." },
            stretch: { extend: "Your lesson's final plenary asked you to agree and disagree with a quotation about the Raj. Add two sentences: one way the end of the Raj was a success for India, and one way it was a failure." }
          },
          explain: "Say, in one sentence, why partition is usually described as a long-term impact.",
          why: "A strong answer names one impact, gives dated evidence, explains what it meant for people, and judges it short- or long-term. Partition and Kashmir are long-term because their effects are still felt; the granting of independence was the event itself."
        }
      ]
    },

    /* ───────────── 6 · review and assessment ───────────── */
    {
      key: "assessment", n: 6, title: "Review and assessment: how did British rule change India?",
      lead: "How to pull five lessons into one answer: what change and continuity mean, a review grid of political, economic and social change across three periods, and how to answer each section of the end-of-topic assessment.",
      covers: [6],
      pretext: {
        words: [
          { word: "continuity", means: "when things stay the same instead of changing", sentence: "Farming was a continuity: most Indians still worked the land in 1947." },
          { word: "chronology", means: "the order in which events happened", sentence: "Section B asks you to put events into the right chronology." },
          { word: "evidence", means: "the facts and examples you use to prove a point", sentence: "A date or a figure is your strongest evidence." },
          { word: "judgement", means: "your overall decision, with reasons for it", sentence: "Your conclusion must give a judgement, not just a list." },
          { word: "conclusion", means: "the last part of an essay, where you weigh up both sides", sentence: "Write your conclusion after both paragraphs." }
        ],
        passage: [
          "Your assessment asks one question.",
          "How did British rule change India?",
          "You have five lessons of knowledge to answer it.",
          "Change means something became different.",
          "Continuity means something stayed the same.",
          "Historians sort change into three kinds.",
          "Political change is about power and government.",
          "Economic change is about money, trade and work.",
          "Social change is about people, religion and how they live.",
          "The paper has four parts.",
          "You answer quick questions, then put events in order.",
          "Then you give evidence for three statements.",
          "Last you write an essay with two sides and a conclusion."
        ]
      },
      sections: [
        {
          heading: "Change and continuity: the question behind the whole unit",
          paragraphs: [
            "The key concept for this unit is change and continuity. Change means being able to describe how something became different and explain why. Continuity means being able to describe how and why something stayed the same. You have used this pair of ideas before: in Year 7 you judged how much William the Conqueror changed England, and how much the Plantagenets changed it between 1154 and 1399. Your enquiry question here is the same shape: how much change did the British Empire bring to India?",
            "Strong answers find continuity as well as change. Four continuities run through this unit. Most Indians worked the land at the start and at the end, and de-industrialisation under the Company pushed even more of them back to farming. Famine was already a common part of life in India before 1770, which is why historians have to ask what the Company added to it. The caste system was there before the British came, and both the Company and the Raj used it. And for almost the whole period Indians did not choose their own rulers: Mughal emperors, then Nawabs, then the Company, then the Crown, until 1947.",
            "Change is sorted into three kinds, and your assessment uses all three. Political change is about power and government: who rules, who makes the laws, who is allowed into government. Economic change is about money and wealth: trade, taxes, industry, work and food. Social change is about people and society: religion, schools, culture and how people are treated. Keep the three words in your head as three boxes, and drop every fact you know into one of them."
          ],
          tip: "Every question in this assessment is really asking: what changed, how much, and for whom? Name the kind of change before you give the example."
        },
        {
          heading: "The review grid: three periods, three kinds of change",
          paragraphs: [
            "Your review task sets out a grid: three periods down the side and the three kinds of change across the top. Fill the top row first, Company rule from 1757 to 1858. Political: a private business became the ruler of Bengal after Plassey in 1757 and took charge of all tax collection in 1765, a job that belongs to rulers. Economic: cloth sent from India to Britain fell from 1.2 million in 1814 to 306,000 in 1835 while British cloth sent to India rose to 52 million; the Great Bengal Famine of 1770 killed an estimated 7 to 10 million people, and the Company's taxes made it deadlier. Social: in the 1830s Macaulay set up English-language schools for the children of wealthy families.",
            "The middle row is the early Raj, 1858 to 1918. Political: the Crown took India from the Company in 1858, Victoria was made Empress of India in 1877, the Indian National Congress was formed in 1885, and Lord Curzon partitioned Bengal to divide the independence movement. Economic: by 1900 the British had built nearly 80,000 km of road, railways and nearly 12,000 km of canal, mainly to move goods for trade and troops at speed. Social: Victoria's Proclamation promised to respect Indian religions, Britain pushed Victorian ideals onto India, and Indian soldiers such as Awal Nur and Pratap Singh served across the Empire in the First World War.",
            "The bottom row is the end of the Raj, 1918 to 1947. Political: the Amritsar Massacre of 1919 turned reformers into supporters of independence, the Government of India Act of 1935 gave India limited self-government, Quit India in 1942 led to over 100,000 imprisonments, and independence came in 1947. Economic: the salt tax, the boycott of British cloth, and a Britain too poor after the Second World War to hold on. Social: satyagraha gave the movement a method, the Muslim League asked for a separate country for Indian Muslims, and partition forced enormous numbers of people to move and set off violence between religious groups."
          ],
          tip: "Work one box at a time, and for each box make sure you can name an event, a date and the people it affected. A box with no date in it will not score."
        },
        {
          heading: "Section A and Section B: recall and chronology",
          paragraphs: [
            "Section A is worth 10 marks and is made up of multiple-choice questions. These test the key words and the facts, so the arcade and the gate questions in this unit are your revision: Empire, colony, monopoly, Nawab, sepoy, mutiny, British Raj, Proclamation, Viceroy, boycott, Swadeshi, satyagraha, de-industrialisation, famine, divide and rule and partition. Learn each word with its definition and one example from the unit.",
            "Section B is worth 5 marks and asks you to put events in order. Do not try to remember the whole list at once. Find your anchors first: 1757 Plassey, 1858 the start of the Raj, 1947 independence. Then ask of each remaining event whether it belongs to Company rule, the early Raj or the end of the Raj, and slot it into that stretch of the timeline.",
            "Four pairs catch pupils out every year. 1857 is when the First War of Independence began; 1858 is when the Act took India from the Company. 1770 is the famine, which is after Plassey, not before it. 1905 is the partition of Bengal; 1947 is the partition of India. And 1930 is the Salt March, which comes after Amritsar in 1919 and before the Act of 1935."
          ],
          worked: {
            q: "From the Battle of Plassey in 1757 to independence in 1947, how many years did British rule of India last?",
            steps: [
              "Write the later date first: 1947.",
              "Subtract the earlier date: 1947 − 1757.",
              "Do it in parts: 1947 − 1700 = 247, then 247 − 57 = 190.",
              "Check it makes sense: 190 years is almost two centuries, which is why your lesson says British rule shaped generations."
            ],
            answer: "190 years.",
            checks: [{ expr: "1947 - 1757", value: 190, tol: 0 }]
          },
          tip: "In Section B, write your three anchor dates in the margin before you start ordering. It turns a hard task into three small ones."
        },
        {
          heading: "Section C and Section D: evidence and the essay",
          paragraphs: [
            "Section C is worth 5 marks. You are given statements and asked for the specific evidence that proves each one. Your lesson's examples are: the end of British rule had a big political impact; the British did not give Indian people freedom after the First World War; and railways were used to exploit India, which means to take advantage of it. Specific means a name, a date or a figure. Saying that the British were unfair scores nothing; saying that by 1900 the British had built nearly 80,000 km of road, mainly to move goods for trade and troops, scores.",
            "Section D is worth 12 marks and is an essay on how British rule changed India. Your lesson sets the shape: one paragraph agreeing with the statement, one paragraph disagreeing, and a conclusion that weighs up the evidence and gives an overall judgement. Each paragraph follows the success criteria you have used all year. Agree or disagree and give a reason; support it with specific examples and knowledge; explain how your examples show political, economic or social change, and how big that change was; then link back to the question.",
            "The conclusion is where most marks are won and lost. A conclusion is not a summary. Do not list both sides again: choose one and say why it beats the other, using a test of significance. How many people did it affect? Did it change the whole country? Did it last? You have 45 minutes for the whole paper, so plan the essay in two minutes and spend the rest writing it."
          ],
          worked: {
            q: "Section C practice. Give specific evidence for the statement: the British did not give Indian people freedom after the First World War.",
            steps: [
              "Ask what the statement claims: that the promise made for wartime service was not kept.",
              "Find a fact that proves the promise: Indians fought for Britain from 1914 to 1918 and were promised reforms for their efforts.",
              "Find a fact that proves it was not kept: Indians still lived under harsh laws such as the Rowlatt Act, which limited their rights.",
              "Find the strongest single piece of evidence: in 1919, at Amritsar, British soldiers under Colonel Dyer blocked the only exit of a walled garden holding between 10,000 and 20,000 people and opened fire.",
              "Write it as evidence, not opinion: three dated facts, in order, with no adjectives."
            ],
            answer: "Indians fought for Britain from 1914 to 1918 and were promised reforms; instead the Rowlatt Act limited their rights, and in 1919 soldiers fired on a trapped crowd at Amritsar. Pratap Singh was even refused permission to represent India at the peace conference in 1919."
          },
          tip: "Highlight the key word in each Section C statement (political, freedom, exploit). Your evidence must prove that word, not the sentence in general."
        }
      ],
      gate: [
        { kind: "gap", q: "The key concept for this unit is change and ___: being able to describe how and explain why some things stayed the same.", answer: "continuity", options: ["continuity", "chronology", "conclusion"], why: "Change and continuity is the pair of ideas behind the whole unit. Continuity is what stayed the same, such as most Indians working the land, or the caste system.",
          feedback: {
            "chronology": "Chronology is the order events happened in, which is what Section B tests. The partner of change in this unit's key concept is continuity: what stayed the same.",
            "conclusion": "A conclusion is the end of your essay, where you weigh up both sides. The idea that pairs with change in this unit is continuity: what did not change."
          } },
        { kind: "mcq", q: "What does Section D of the assessment ask you to do?", options: ["Write two paragraphs giving both sides of the argument, then a conclusion with an overall judgement", "Write everything you can remember about India in one long paragraph", "Put the key events of the unit into the right order", "Answer multiple-choice questions about the key words and facts"], answer: 0, why: "Section D is the 12-mark essay. Your lesson sets the shape: one paragraph agreeing, one disagreeing, then a conclusion that weighs the evidence and judges.",
          feedback: [
            "",
            "An essay is not everything you can remember. Section D wants a shape: one paragraph for the statement, one against it, and a conclusion that decides between them.",
            "Putting events in order is Section B, worth 5 marks. Section D is the essay, where you argue both sides of how British rule changed India and then judge.",
            "Multiple choice is Section A, worth 10 marks. Section D is the 12-mark essay, so it needs paragraphs, evidence and a judgement, not one-word answers."
          ] },
        { kind: "numeric", q: "Section A is worth 10 marks, Section B 5 marks, Section C 5 marks and Section D 12 marks. How many marks is the whole assessment worth?", answer: 32, tolerance: 0, units: "marks", why: "10 + 5 + 5 + 12 = 32. Section D alone is worth more than a third of the paper, which is why the essay deserves most of your 45 minutes.", check: "10 + 5 + 5 + 12",
          misconceptions: [
            { answer: 20, says: "You have added Sections A, B and C and stopped. Section D, the essay, is worth 12 marks on its own: 10 + 5 + 5 + 12 = 32.", check: "10 + 5 + 5" },
            { answer: 22, says: "That is Section A plus Section D only. Sections B and C are worth 5 marks each as well, so the total is 10 + 5 + 5 + 12 = 32.", check: "10 + 12" }
          ] }
      ],
      modules: [
        {
          title: "Section B practice: the whole unit in order",
          task: {
            kind: "order",
            q: "Put these events from across the whole unit in the order they happened.",
            items: [
              "Queen Elizabeth I grants the East India Company a Royal Charter (1600)",
              "Robert Clive wins the Battle of Plassey (1757)",
              "The Great Bengal Famine (1770)",
              "The First War of Independence begins (1857)",
              "Queen Victoria is made Empress of India (1877)",
              "The Amritsar Massacre (1919)",
              "India becomes independent and is partitioned (1947)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Sort the seven events into three piles first: before Company rule, under Company rule, and under the Raj.",
                "Only the Charter comes before Company rule, so that is first.",
                "Plassey, the famine and the First War of Independence all belong to Company rule, in that order: the Company had to rule Bengal before its taxes could worsen a famine.",
                "The Empress, Amritsar and independence belong to the Raj, and independence ends the unit."
              ],
              example: {
                q: "Put these Year 7 events in order: the Plantagenet kings' rule ends (1399); William of Normandy wins at Hastings (1066); the Plantagenets begin to rule England (1154).",
                steps: ["Hastings is the earliest of the three: 1066.", "The Plantagenets came after the Normans: 1154.", "Their rule ended last: 1399."],
                answer: "William of Normandy wins at Hastings (1066); the Plantagenets begin to rule England (1154); the Plantagenet kings' rule ends (1399)"
              }
            },
            core: { hint: "Charter, Plassey, famine, rising, Empress, massacre, independence. Your anchors are 1757 and 1947." },
            stretch: { extend: "Choose the two events in this list that you would call turning points, and explain in two sentences each what changed because of them." }
          },
          explain: "Say, in one sentence, why the Great Bengal Famine has to come after the Battle of Plassey in this list.",
          why: "1600 Charter; 1757 Plassey; 1770 famine; 1857 the First War of Independence; 1877 Empress of India; 1919 Amritsar; 1947 independence and partition. Three events belong to the Company and three to the Raj, with 1857 and 1858 as the hinge between them."
        },
        {
          title: "Which kind of change?",
          task: {
            kind: "mcq",
            q: "Under Company rule, Indian cloth makers were taxed so heavily that their cloth could not sell, and India's cloth industry collapsed. Which kind of change does this show?",
            options: ["Economic change", "Political change", "Social change", "Continuity: nothing changed"],
            answer: 0,
            why: "Taxes, industry and the work people do are about money and wealth, so this is economic change. It is the clearest economic change in the unit.",
            feedback: [
              "",
              "Political change is about who holds power and who governs. No one's power changed here: an industry was taxed out of existence, which is economic change.",
              "Social change is about religion, schools, culture and how people are treated. Workers losing the industry they lived by is about money and work, so it is economic.",
              "Something very large did change: India lost a cloth industry it had held for centuries. Continuity would mean the industry carried on much as before."
            ]
          },
          contexts: [
            { label: "The Great Bengal Famine", q: "The Company raised the taxes farmers had to pay even as the harvest failed in 1770, and would not let people keep stocks of food. Which kind of change does this show?", why: "Taxes, harvests and food stocks are about money and how people make their living, so the change is economic." },
            { label: "Railways and canals", q: "By 1900 the British had built nearly 80,000 km of road and nearly 12,000 km of canal, mainly to move goods for trade and to move troops. Which kind of change does this show?", why: "The roads, railways and canals were built to carry trade and troops, so the change they brought to India was mostly economic." },
            { label: "The salt tax", q: "Indians were forbidden to make their own salt: they had to buy it, and the British government taxed it heavily. Which kind of change does this show?", why: "A tax on something every family has to buy is about money, so the change is economic. That is why the Salt March was such a powerful protest." }
          ],
          levels: {
            support: {
              steps: [
                "Ask what the change is mostly about: power, money, or people and beliefs?",
                "If it is about who governs, who votes or who holds power, it is political.",
                "If it is about taxes, trade, industry, work or food, it is economic.",
                "If it is about religion, schools, language, culture or how people are treated, it is social."
              ],
              example: {
                q: "Macaulay's new schools in the 1830s taught the children of wealthy Indian families in English and ignored Indian languages. Which kind of change does this show?",
                steps: ["What is this mostly about? Schools and language.", "Schools, language and culture belong to people and society.", "So this is social change, even though the Company set the schools up to get clerks for its offices."],
                answer: "Social change"
              }
            },
            core: { hint: "Follow the money. If the sentence is about taxes, trade, industry or food, the answer is economic." },
            stretch: { extend: "Some changes belong in two boxes at once. Explain in three sentences why Macaulay's schools could be argued to be an economic change as well as a social one." }
          },
          explain: "Say, in one sentence, the difference between an economic change and a social change.",
          why: "Economic change is about money and wealth: taxes, trade, industry, work and food. Sorting each fact into political, economic or social before you write is what Sections C and D of your assessment reward."
        },
        {
          title: "Section D practice: the end-of-topic essay",
          task: {
            kind: "written",
            q: "How did British rule change India? Write one paragraph agreeing that the biggest change was political, one paragraph arguing that it was economic or social instead, and a conclusion giving your overall judgement.",
            criteria: [
              "Paragraph 1: I agree that the biggest change was political, give a reason, and support it with a specific example and a date.",
              "Paragraph 2: I disagree and argue for economic or social change instead, again with a specific example and a date.",
              "In both paragraphs I explain HOW my examples show that kind of change, and how big the change was.",
              "My conclusion weighs the two sides against each other and gives one overall judgement, using a test of significance rather than a list."
            ],
            model: "I agree that the biggest change British rule brought to India was political. Before 1757 India was ruled by Mughal emperors and then by Nawabs; after the Battle of Plassey a private company governed Bengal, and from 1858 India was ruled directly by the British Crown, with Victoria made Empress of India in 1877. This shows political change because the people who held power changed completely, and Indians were blocked from positions in their own government until independence in 1947. However, it could be argued that the biggest change was economic. Cloth sent from India to Britain fell from 1.2 million in 1814 to 306,000 in 1835 while British cloth sent to India rose to 52 million, and Tharoor argues that taxes of up to about 80 per cent priced Indian cloth out of its own market. This shows economic change because it reached millions of ordinary workers rather than only the people at the top, and because the Great Bengal Famine of 1770 had already shown what Company taxes could do to the poorest. Overall I judge the economic change to be the bigger one. Political power changed hands three times, but in 1947 Indians governed themselves again, so that story ends close to where it began; the industry India lost under the Company never came back, and the way ordinary families earned and ate was changed for generations."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1, sentence 1: I agree that the biggest change was political because…",
                "Paragraph 1, evidence: give one example with a date. Choose from 1757, 1858, 1877, 1885 or 1947.",
                "Paragraph 2, sentence 1: However, it could be argued the biggest change was [economic / social] because…",
                "Paragraph 2, evidence: the cloth figures, the famine of 1770 or Macaulay's schools.",
                "Conclusion, sentence 1: Overall I judge that … was the bigger change, because it affected…"
              ],
              example: {
                q: "Plan an answer to this Year 7 question: did the Norman Conquest change England more politically or more socially?",
                steps: [
                  "Political side: Norman lords replaced the Anglo-Saxon nobles, and William held the land through castles.",
                  "Social side: French became the language of power and the Church was reorganised, but most people's farming year went on as before.",
                  "Judge with a test: who held land and power changed across the whole country and did not change back, so the political change was bigger."
                ],
                answer: "Political change was the bigger one: who held land and power changed across the whole country and never changed back."
              }
            },
            core: { hint: "One dated example in each paragraph, one sentence of explanation each, then a conclusion that picks a side and says why using a test of significance." },
            stretch: { extend: "Your lesson's final plenary asked you to agree and disagree with a quotation about the Indian experience of the Raj. Add two sentences on what your answer would look like if the question asked about continuity rather than change." }
          },
          explain: "Say, in one sentence, what your overall judgement is and the single piece of evidence that decided it.",
          why: "A strong Section D answer argues both sides with dated evidence, explains how each example shows its kind of change, and then judges. The judgement must rest on a test of significance: how many people were affected, how much of the country, and how long the change lasted."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y08_topic_2_the_british_empire_india.txt",
    decksUsed: [
      "L1 Taking Control, 1600-1757 / L1 EIC Taking Control.pptx",
      "L1 Taking Control, 1600-1757 / GR Battle of Plassey.pptx",
      "L1 Taking Control, 1600-1757 / Dan Snow Video Questions.pptx",
      "L2 Company Rule in India, 1757-1857 / L2 Company Rule in India.pptx",
      "L2 Company Rule in India, 1757-1857 / EIC Economic Impact Task.pptx",
      "L3 First War of Independence, 1857-1858 / L3 First War of Independence, 1857-58.pptx",
      "L4 Progress Check & the British Raj, 1858-1918 / L4 Progress Check & British Raj.pptx",
      "L4 Progress Check & the British Raj, 1858-1918 / Guided Reading - Opposition to the Raj.pptx",
      "L4 Progress Check & the British Raj, 1858-1918 / Homework - WW1 Stories.pptx",
      "L5 The Road to Independence & Partition, 1919-1947 / L5 Independence & Partition, 1919-47.pptx",
      "L5 The Road to Independence & Partition, 1919-1947 / Independence & WW2 Guided Reading.pptx",
      "L6 Assessment / L6 India Assessment.pptx",
      "L6 Assessment / Worksheet - India Review Task.pptx",
      "Y8 India Composite.pptx"
    ],
    notes: "All 14 decks that carry slides in the dump were used. A fifteenth file, 'L3 First War of Independence, 1857-1858 / Story of the First War of Independence.pptx', appears in the dump with no slides, so the story the deck reads aloud in L3 was not available; chapter 3 teaches the rising from the L3 lesson deck and its quiz answers instead (NOTES.md, open question 3). The Curzon sentence in chapter 5 is the only quotation in the unit and is reproduced as the department's L5 bell work prints it; Shashi Tharoor's Source B and the two guided readings are modern texts in copyright and are paraphrased only. See NOTES.md for corrections to the deck and for the numbered open questions."
  }
};
