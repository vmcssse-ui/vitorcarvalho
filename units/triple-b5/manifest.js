// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Biology 8461 · B5 Communicable diseases (4.3.1; with 4.2.2.1 health and
// 4.1.1.6 culturing microorganisms, which is Biology only) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; `pi` and `**` allowed) and are recomputed;
//   each numeric item carries 1–3 `misconceptions`, each with a `check` that reproduces the wrong answer.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py.
//   every mcq / gap answer is compared with the independent answer key held in verify.py.
//   every "match" pair naming a disease is compared with the pathogen → disease → spread → prevention
//   fact table held in verify.py (written from the decks and AQA 8461 4.3.1.2–4.3.1.5, not from this file).
//   passage sentences are counted (≤ 20 words) and all text is linted for known deck errors and misconceptions.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every module carries `explain`;
//   `contexts` never redefine the answer and carry the same numbers as the task; `connections` ⊂ glossary.
// (Biology only) marks content from decks B5.3 and B5.4 that is not in Combined Science 8464.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["triple-b5"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "triple-b5",
    subjectKey: "triple",
    subject: "Biology (Triple Science)",
    board: "AQA",
    spec: "8461",
    specRef: "4.3.1 Communicable diseases (pathogens; viral, bacterial, fungal and protist diseases; preventing spread), with 4.2.2.1 Health issues and 4.1.1.6 Culturing microorganisms (Biology only)",
    year: 10,
    tier: "GCSE Higher and Foundation (Biology 8461; chapter 3, from decks B5.3 and B5.4, is Biology only)",
    title: "Communicable Diseases",
    sub: "What pathogens are, how they pass from one living thing to another, and how doctors, farmers and scientists stop them.",
    bigQuestion: "How do pathogens spread disease between people, animals and plants, and how can we stop them?",
    lessonCount: 7,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "B5.1 Health and disease", question: "What is health, and how are communicable and non-communicable diseases different?", keywords: ["health", "communicable", "non-communicable", "pathogens", "transmit", "lifestyle"] },
    { n: 2, title: "B5.2 Pathogens and disease", question: "What are pathogens, how do bacteria and viruses make us ill, and how are they spread?", keywords: ["pathogen", "bacteria", "viruses", "fungi", "protists", "toxins", "direct contact", "airborne droplets", "vector"] },
    { n: 3, title: "B5.3 Growing bacteria in the lab (Biology only)", question: "How do scientists grow an uncontaminated culture of bacteria safely?", keywords: ["binary fission", "culture medium", "nutrient agar", "nutrient broth", "aseptic technique", "inoculate", "incubate", "contamination"] },
    { n: 4, title: "B5.4 Preventing bacterial growth (Biology only)", question: "How can we calculate how fast bacteria grow, and measure how well a chemical stops them?", keywords: ["mean division time", "zone of inhibition", "antiseptic", "antibiotic", "area of a circle", "πr²"] },
    { n: 5, title: "B5.5 Preventing infections", question: "How can the spread of communicable diseases be reduced or prevented?", keywords: ["pathogens", "disease", "hygiene", "isolation", "vectors", "vaccination", "Semmelweis", "Lister"] },
    { n: 6, title: "B5.6/7 Bacterial and viral diseases", question: "Which diseases are caused by bacteria and viruses, how do they spread, and how are they controlled?", keywords: ["Salmonella", "gonorrhoea", "HIV", "AIDS", "measles", "tobacco mosaic virus", "antibiotics"] },
    { n: 7, title: "B5.8 Diseases caused by fungi and protists", question: "What causes rose black spot, athlete's foot and malaria, and how are they controlled?", keywords: ["malaria", "athlete's foot", "Plasmodium", "rose black spot", "fungicide", "mosquito"] }
  ],

  glossary: [
    { term: "communicable disease", means: "A disease caused by a pathogen that can be passed from one person, animal or plant to another. Flu and measles are examples.", chapter: "health-disease" },
    { term: "non-communicable disease", means: "A disease that cannot be passed from one person to another, such as heart disease, diabetes or arthritis.", chapter: "health-disease" },
    { term: "pathogen", means: "A microorganism that causes disease. The four types are bacteria, viruses, fungi and protists.", chapter: "pathogens" },
    { term: "toxin", means: "A poison. Bacteria release toxins that damage your cells and make you feel ill.", chapter: "pathogens" },
    { term: "vector", means: "An animal, often an insect, that carries a pathogen from one organism to another. The mosquito is the vector for malaria.", chapter: "pathogens" },
    { term: "binary fission", means: "The simple cell division by which bacteria reproduce: one cell splits into two.", chapter: "culturing" },
    { term: "nutrient agar", means: "A jelly containing everything bacteria need to grow, set in a Petri dish.", chapter: "culturing" },
    { term: "aseptic technique", means: "The careful methods used to keep unwanted microorganisms out of a culture, such as sterilising the loop in a flame.", chapter: "culturing" },
    { term: "zone of inhibition", means: "The clear circle around a disc of antiseptic or antibiotic where bacteria have not grown. Its area shows how well the chemical works.", chapter: "culturing" },
    { term: "hygiene", means: "Keeping clean to stop pathogens spreading: washing hands, keeping raw meat away from cooked food, sneezing into a tissue.", chapter: "prevention" },
    { term: "isolation", means: "Keeping a person with a serious infectious disease away from other people so fewer people meet the pathogen.", chapter: "prevention" },
    { term: "vaccination", means: "Giving a small amount of a dead or inactive pathogen so that the body can fight the real pathogen quickly if it meets it.", chapter: "prevention" },
    { term: "antiseptic", means: "A chemical that kills or stops the growth of microorganisms on skin, wounds or surfaces. Lister used one in surgery.", chapter: "prevention" },
    { term: "antibiotic", means: "A medicine, such as penicillin, that kills bacteria inside the body. Antibiotics do not work on viruses.", chapter: "bacterial-viral" },
    { term: "antiviral drug", means: "A medicine that does not kill viruses but stops them making copies of themselves. Antiretroviral drugs control HIV.", chapter: "bacterial-viral" },
    { term: "fungicide", means: "A chemical that kills fungi. Fungicides are used to treat rose black spot.", chapter: "fungal-protist" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 drawn from the glossary. Groups are ideas, so two of them
  // cross chapter boundaries (vector is taught in chapter 2 and used in chapter 4; antiseptic in chapters 3 and 4).
  connections: [
    { group: "Disease and what causes it", terms: ["communicable disease", "non-communicable disease", "pathogen", "toxin"] },
    { group: "Growing bacteria in the lab", terms: ["binary fission", "nutrient agar", "aseptic technique", "zone of inhibition"] },
    { group: "Stopping the spread", terms: ["hygiene", "isolation", "vaccination", "vector"] },
    { group: "Chemicals that act on pathogens", terms: ["antiseptic", "antibiotic", "antiviral drug", "fungicide"] }
  ],

  chapters: [
    /* ───────────── 1 · health and disease ───────────── */
    {
      key: "health-disease", n: 1, title: "Health, disease and what makes us ill",
      lead: "What health means, the difference between communicable and non-communicable diseases, and how lifestyle and other illnesses affect your health.",
      covers: [1],
      pretext: {
        words: [
          { word: "health", means: "the state of physical and mental well-being", sentence: "Good health is about your mind as well as your body." },
          { word: "communicable", means: "able to be passed from one person to another", sentence: "Flu is a communicable disease because it spreads by coughs and sneezes." },
          { word: "non-communicable", means: "not able to be passed from one person to another", sentence: "Heart disease is a non-communicable disease." },
          { word: "lifestyle", means: "the way you live: what you eat, how you move, how you rest", sentence: "Lifestyle factors such as diet and stress affect your health." },
          { word: "correlation", means: "a link between two things, where one changes as the other changes", sentence: "The graph showed a correlation between stress and depression." }
        ],
        passage: [
          "Health is the state of physical and mental well-being.",
          "Disease is a major cause of ill health, but it is not the only one.",
          "Some diseases are communicable.",
          "They are caused by pathogens and can be passed from one person to another.",
          "Flu is communicable: it spreads when people cough and sneeze.",
          "Other diseases are non-communicable, so they cannot be passed on.",
          "Heart disease, diabetes and arthritis are non-communicable.",
          "Your lifestyle also affects your health.",
          "Diet, stress and life situations can all make you ill.",
          "Different illnesses can affect each other.",
          "Some viruses living in cells can trigger cancers.",
          "A long, serious physical illness can lead to depression.",
          "Scientists use graphs to look for links between two things.",
          "If one thing goes up as the other goes up, that is a positive correlation."
        ]
      },
      sections: [
        {
          heading: "What is health?",
          paragraphs: [
            "In biology, health has a precise meaning: it is the state of physical and mental well-being. Both halves matter. A person with a healthy body but a great deal of stress, or who feels low for months, is not in good health.",
            "Disease is the biggest cause of ill health, but not the only one. Your diet, the amount of stress in your life and your life situation (where you live, your work, your money worries) all affect both your physical and your mental health.",
            "Other factors also affect how healthy people are: age, gender, ethnicity, where you live, how much money you have and whether you can get to a doctor or a hospital when you need one."
          ],
          tip: "If an exam question asks you to define health, write the exact phrase: 'the state of physical and mental well-being'. Both words earn the mark."
        },
        {
          heading: "Communicable or non-communicable?",
          paragraphs: [
            "Communicable diseases are infectious. They are caused by pathogens, which are harmful microorganisms such as bacteria and viruses, and they can be transmitted (passed on) from one person to another. Flu, measles, Salmonella food poisoning, HIV and the common cold are all communicable.",
            "Non-communicable diseases cannot be passed from person to person. Coronary heart disease, diabetes, arthritis, cystic fibrosis and most cancers are non-communicable. Some, such as cystic fibrosis, are inherited; others, such as lung cancer, are linked to lifestyle.",
            "To decide which type a disease is, ask one question: is it caused by a pathogen that can move from one person to another? If yes, it is communicable."
          ],
          worked: {
            q: "Is measles a communicable or a non-communicable disease? Give a reason for your answer. (2 marks)",
            steps: [
              "Ask the key question: what causes it, and can that cause move between people?",
              "Measles is caused by a virus, which is a pathogen.",
              "The virus is passed on in droplets when an infected person coughs or sneezes.",
              "So: communicable, because it is caused by a pathogen that can be transmitted from person to person."
            ],
            answer: "Communicable, because it is caused by a pathogen (a virus) that can be passed from one person to another in droplets from coughs and sneezes."
          }
        },
        {
          heading: "How different diseases interact",
          paragraphs: [
            "In real life, diseases do not happen one at a time. Different types of disease and health conditions interact. Some viruses that live inside cells can be the trigger for a cancer: for example, the risk of cervical cancer rises with the number of HPV viruses in a person's cells.",
            "The body's reaction to a pathogen can also trigger other problems. An immune reaction that started with an infection can set off allergies, such as skin rashes or asthma.",
            "Physical and mental health are linked too. A severe or long-lasting physical illness can lead to depression and other mental illnesses. This is one reason why the definition of health includes mental well-being."
          ],
          tip: "An 'interaction' answer needs a chain: one condition (cause) leads to another (effect). Name both ends of the chain."
        },
        {
          heading: "Reading a graph: correlation",
          paragraphs: [
            "Scientists look for links between a factor and a disease by plotting one against the other. A positive correlation means that as one variable increases, the other increases too. A negative correlation means that as one variable increases, the other decreases.",
            "When you describe a correlation in an exam, name the type and then quote data from the graph to back it up: 'as X rises from 2 to 10, Y falls from 60 to 20'. Without numbers, the description scores less.",
            "Be careful: a correlation does not prove that one thing causes the other. Sample size matters too. A graph drawn from a handful of people is far less convincing than one drawn from thousands."
          ],
          tip: "Positive: both go the same way. Negative: one goes up while the other goes down. Always quote two points from the graph."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is the definition of health used in biology?", options: ["The state of physical and mental well-being", "Not having any disease", "Being physically fit and strong", "Having no stress in your life"], answer: 0, why: "Health is the state of physical and mental well-being. Disease is one cause of ill health, but not the only one.",
          feedback: [
            "",
            "Having no disease is part of health, but not all of it: diet, stress and life situations also affect health, and the definition includes mental well-being. Health is the state of physical and mental well-being.",
            "Fitness is only the physical half, and even a very fit person can be in poor mental health. The definition covers both physical and mental well-being.",
            "Stress is one lifestyle factor that affects health, but having no stress is not the same as being healthy. The biology definition is the state of physical and mental well-being."
          ] },
        { kind: "gap", q: "A disease that can be passed from one person to another is a ___ disease.", answer: "communicable", options: ["communicable", "non-communicable", "lifestyle"], why: "Communicable means infectious: caused by a pathogen that can be transmitted from person to person.",
          feedback: {
            "non-communicable": "Non-communicable is the opposite: a disease that cannot be passed on, such as heart disease. A disease that can be passed from person to person is communicable.",
            "lifestyle": "Lifestyle factors such as diet and stress affect health, but 'lifestyle disease' is not the biology term for a disease that is passed on. That is a communicable disease."
          } },
        { kind: "mcq", q: "Which of these is a non-communicable disease?", options: ["Coronary heart disease", "Measles", "Flu", "Salmonella food poisoning"], answer: 0, why: "Coronary heart disease cannot be passed from one person to another. Measles, flu and Salmonella are all caused by pathogens that spread.",
          feedback: [
            "",
            "Measles is caused by a virus that spreads in droplets from coughs and sneezes, so it is communicable. Coronary heart disease cannot be passed on, so it is the non-communicable one.",
            "Flu spreads from person to person when people cough and sneeze, so it is communicable. Coronary heart disease is the non-communicable disease here.",
            "Salmonella food poisoning is caused by bacteria taken in with food, so it is communicable. Coronary heart disease is the one that cannot be passed on."
          ] }
      ],
      modules: [
        {
          title: "Why is it communicable?",
          task: {
            kind: "mcq",
            q: "Why is flu classed as a communicable disease?",
            options: [
              "It is caused by a pathogen that can be passed from one person to another",
              "It makes people feel very unwell for several days",
              "It is caused by a poor diet and lack of exercise",
              "It cannot be passed on to other people"
            ],
            answer: 0,
            feedback: [
              "",
              "Feeling unwell is a symptom, and non-communicable diseases make people feel unwell too. What makes flu communicable is its cause: a pathogen that can be transmitted from person to person.",
              "Diet and exercise are lifestyle factors linked to non-communicable diseases such as heart disease. Flu is caused by a virus, a pathogen that passes from person to person, which is what makes it communicable.",
              "That is the definition of a non-communicable disease. Flu does pass from person to person, in droplets from coughs and sneezes, so it is communicable."
            ]
          },
          contexts: [
            { label: "Measles", q: "A child in a nursery has measles and two other children catch it the following week. Why is measles classed as a communicable disease?" },
            { label: "Food poisoning", q: "Several guests at a wedding become ill with Salmonella food poisoning after eating undercooked chicken. Why is Salmonella food poisoning classed as a communicable disease?" },
            { label: "The common cold", q: "Half of a science class have a cold within a fortnight of the first pupil catching one. Why is the common cold classed as a communicable disease?" }
          ],
          explain: "Say, in one sentence, the one question you ask to decide whether a disease is communicable.",
          levels: {
            support: {
              steps: [
                "Communicable means infectious: it can be passed on.",
                "Ask: what causes flu? A virus, which is a pathogen.",
                "Ask: can that pathogen move from one person to another? Yes, in droplets from coughs and sneezes.",
                "Pick the option that mentions both the pathogen and passing it on."
              ],
              example: {
                q: "Why is diabetes classed as a non-communicable disease?",
                steps: ["Ask: is it caused by a pathogen? No.", "Ask: can it be passed from one person to another? No.", "So it is non-communicable."],
                answer: "Because it is not caused by a pathogen and cannot be passed from one person to another."
              }
            },
            core: { hint: "Communicable is about the cause and whether it can be passed on, not about how ill you feel." },
            stretch: { extend: "Lung cancer is non-communicable, yet some cancers are triggered by viruses. Explain how a disease can be non-communicable even when a communicable disease helped to cause it." }
          },
          why: "A communicable disease is one caused by a pathogen that can be transmitted from one person to another. Flu is caused by a virus that spreads in droplets, so it is communicable."
        },
        {
          title: "When one illness leads to another",
          task: {
            kind: "gap",
            q: "A long and serious physical illness can lead to ___, which is a mental illness.",
            answer: "depression",
            options: ["depression", "arthritis", "flu"],
            why: "Different types of disease interact: severe physical ill health can lead to depression and other mental illnesses.",
            feedback: {
              "arthritis": "Arthritis is a physical, non-communicable disease of the joints, not a mental illness. The mental illness that a long physical illness can lead to is depression.",
              "flu": "Flu is a communicable disease caused by a virus, and it is physical, not mental. A long physical illness can lead to depression, a mental illness."
            }
          },
          explain: "Say, in one sentence, why the definition of health includes mental well-being as well as physical.",
          levels: {
            support: {
              steps: [
                "Find the cause in the story: a long, serious physical illness.",
                "Find the effect: depression, which is a mental illness.",
                "Ask: which option says that the physical illness led to the mental one?",
                "Rule out options that call depression communicable or caused by a pathogen: it is neither."
              ],
              example: {
                q: "A woman has a large number of HPV viruses in her cells and later develops cervical cancer. What does this show about how diseases interact?",
                steps: ["Cause: a virus living in cells.", "Effect: a cancer.", "So a virus (a communicable disease) can be the trigger for a cancer (a non-communicable disease)."],
                answer: "Viruses living in cells can be the trigger for cancers: a communicable disease can lead to a non-communicable one."
              }
            },
            core: { hint: "Which came first in the story, and which followed? The answer links the two." },
            stretch: { extend: "Give two other examples of diseases interacting: one involving a virus and a cancer, and one involving an immune reaction and an allergy. Say which comes first in each." }
          },
          why: "Different types of disease interact. A severe physical illness can lead to depression and other mental illnesses, so physical ill health can cause mental ill health."
        },
        {
          title: "Positive or negative correlation?",
          task: {
            kind: "mcq",
            q: "A graph shows that as the activity of a person's immune system increases, their risk of catching an infectious disease decreases. What type of correlation is this?",
            options: ["A negative correlation", "A positive correlation", "No correlation", "A straight-line correlation"],
            answer: 0,
            feedback: [
              "",
              "In a positive correlation both variables rise together. Here one rises (immune activity) while the other falls (risk of disease), and that is a negative correlation. The word 'negative' describes the direction, not whether the result is good or bad.",
              "There is a clear pattern: more immune activity goes with less risk. A pattern where one variable falls as the other rises is a negative correlation, not 'no correlation'.",
              "Whether the points make a straight line or a curve does not name the type of correlation. The type is set by the direction: one up, the other down, so it is negative."
            ]
          },
          contexts: [
            { label: "Exercise and heart rate", q: "A graph shows that as the number of hours of exercise a person does each week increases, their resting heart rate decreases. What type of correlation is this?" },
            { label: "Vaccination and measles", q: "A graph shows that as the percentage of children vaccinated against measles increases, the number of measles cases decreases. What type of correlation is this?" },
            { label: "Sleep and colds", q: "A graph shows that as the number of hours people sleep each night increases, the number of colds they catch in a year decreases. What type of correlation is this?" }
          ],
          explain: "Say, in one sentence, how you can tell a negative correlation from a positive one on a graph.",
          levels: {
            support: {
              steps: [
                "Find the two variables: immune system activity and risk of infectious disease.",
                "Ask: when the first goes up, what does the second do? It goes down.",
                "One up, the other down means a negative correlation.",
                "Both up together would be a positive correlation."
              ],
              example: {
                q: "A graph shows that as the number of HPV viruses in a person's cells increases, their risk of cervical cancer increases. What type of correlation is this?",
                steps: ["Variables: number of viruses and risk of cancer.", "As the first rises, the second rises too.", "Both go the same way, so it is a positive correlation."],
                answer: "A positive correlation."
              }
            },
            core: { hint: "Look at the direction of each variable. Same direction or opposite directions?" },
            stretch: { extend: "Explain why this graph on its own does not prove that a more active immune system causes a lower risk of disease, and say how sample size would affect how much you trust it." }
          },
          why: "A negative correlation is a relationship in which one variable decreases as the other increases. Here the risk of disease falls as immune activity rises."
        }
      ]
    },

    /* ───────────── 2 · pathogens ───────────── */
    {
      key: "pathogens", n: 2, title: "Pathogens and how they spread",
      lead: "The four types of pathogen, how bacteria and viruses make you ill, and the routes pathogens take from one organism to the next.",
      covers: [2],
      pretext: {
        words: [
          { word: "pathogen", means: "a microorganism that causes disease", sentence: "Bacteria, viruses, fungi and protists can all be pathogens." },
          { word: "bacteria", means: "tiny living cells; some cause disease, many are useful", sentence: "Bacteria divide very quickly inside the body." },
          { word: "virus", means: "a very small pathogen that can only reproduce inside living cells", sentence: "A virus takes over a cell and makes copies of itself." },
          { word: "toxin", means: "a poison made by a pathogen", sentence: "Toxins made by bacteria damage your cells and make you feel ill." },
          { word: "vector", means: "an animal that carries a pathogen from one organism to another", sentence: "The mosquito is the vector that spreads malaria." },
          { word: "droplet", means: "a tiny drop of liquid released when you cough or sneeze", sentence: "Flu spreads in droplets that other people breathe in." }
        ],
        passage: [
          "A pathogen is a microorganism that causes disease.",
          "There are four types: bacteria, viruses, fungi and protists.",
          "Pathogens can infect plants as well as animals.",
          "Bacteria are tiny cells that divide very rapidly inside the body.",
          "Bacteria make toxins, which are poisons that damage your cells.",
          "Viruses are much smaller than bacteria.",
          "A virus gets inside a cell, makes copies of itself and destroys the cell.",
          "Pathogens spread in different ways.",
          "Coughs and sneezes release droplets that carry pathogens through the air.",
          "Pathogens can also spread by direct contact, such as touching or through a cut.",
          "Dirty water and uncooked food can carry pathogens into your digestive system.",
          "Some insects carry pathogens from one person to another.",
          "An animal that carries a pathogen is called a vector."
        ]
      },
      sections: [
        {
          heading: "Four kinds of pathogen",
          paragraphs: [
            "Pathogens are microorganisms that cause disease. There are four types: bacteria, viruses, fungi and protists. They infect animals, including people, and they infect plants too.",
            "Bacteria are living cells, far smaller than your own: usually only a few microns across (a micron is a thousandth of a millimetre), so you need a microscope to see them. Viruses are much smaller still and can only be seen with an electron microscope. A virus cannot reproduce on its own; it has to get inside a living cell to make copies of itself, which is why the deck calls viruses parasites.",
            "Not all bacteria are harmful. We use bacteria to make yoghurt and cheese, to treat sewage and to make some medicines, and bacteria living in your intestines help to keep you healthy. Viruses, however, cause disease in every type of organism."
          ],
          tip: "Write 'microorganism that causes disease' for pathogen. A vague word such as 'bug' does not earn the mark."
        },
        {
          heading: "How bacteria and viruses make you ill",
          paragraphs: [
            "Once inside the body, bacteria divide rapidly by binary fission, so a few cells quickly become millions. As they grow they release toxins (poisons). The toxins damage your cells, and your body's response to that damage gives you the symptoms of disease.",
            "Viruses work differently. A virus gets into one of your cells and takes it over, using the cell to make many new copies of the virus. The copies burst out, destroying the cell, and go on to infect other cells. Both bacteria and viruses reproduce very rapidly.",
            "The common symptoms of infection are a high temperature or fever, a headache, a rash, vomiting and diarrhoea. They are caused by the way your body responds to the cell damage and to the toxins the pathogen produces."
          ],
          worked: {
            q: "Explain why a person with a bacterial infection develops a fever and feels unwell. (3 marks)",
            steps: [
              "Start with what the bacteria do: they reproduce rapidly by binary fission inside the body.",
              "Say what they release: toxins, which are poisons.",
              "Finish with the effect: the toxins damage cells, and the body's response to this damage causes the fever and other symptoms."
            ],
            answer: "The bacteria divide rapidly by binary fission and release toxins; the toxins damage body cells, and the body's response to this damage causes the fever and other symptoms."
          }
        },
        {
          heading: "How pathogens spread",
          paragraphs: [
            "Different pathogens have different transmission routes. Airborne droplets: when an infected person coughs or sneezes, droplets carrying the pathogen are released and another person breathes them in. Flu, measles and TB spread this way.",
            "Direct contact: a pathogen is passed when an infected person touches a healthy one, through a cut in the skin or by sexual contact; HIV is an example. In a field, a plant disease can pass from one plant to the plants touching it. Food and water: pathogens in dirty water (cholera) or undercooked food (Salmonella) are swallowed and enter the digestive system. Fungal spores can reach plants in water.",
            "Vectors: some animals carry a pathogen from one organism to another without being harmed themselves. Mosquitoes carry the protist that causes malaria; aphids carry more than 150 plant diseases; houseflies and rats carry many human diseases."
          ],
          tip: "In a 'how is it spread' answer, name the route AND the organism it carries pathogens between: 'in droplets, breathed in by another person'."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is a pathogen?", options: ["A microorganism that causes disease", "Any microorganism", "A poison made by bacteria", "An insect that carries disease"], answer: 0, why: "Pathogens are microorganisms that cause disease: bacteria, viruses, fungi and protists.",
          feedback: [
            "",
            "Many microorganisms are harmless or useful: bacteria make yoghurt and cheese and live in your intestines. Only a microorganism that causes disease is a pathogen.",
            "A poison made by bacteria is a toxin. Toxins are made by some pathogens, but the pathogen is the microorganism itself.",
            "An insect that carries a pathogen is a vector, such as the mosquito. The pathogen is the microorganism it carries, for example the protist that causes malaria."
          ] },
        { kind: "gap", q: "Bacteria make you feel ill by releasing ___ that damage your cells.", answer: "toxins", options: ["toxins", "spores", "droplets"], why: "Bacteria divide rapidly and produce toxins (poisons). Your body's response to the damage they cause gives you the symptoms.",
          feedback: {
            "spores": "Spores are how fungi spread, for example fungal spores carried to plants in water. Bacteria make you ill by releasing toxins, which are poisons that damage cells.",
            "droplets": "Droplets are the tiny drops from a cough or sneeze that carry pathogens from one person to another. They are a way of spreading, not what damages your cells. That is toxins."
          } },
        { kind: "mcq", q: "Which statement about viruses is correct?", options: ["They can only reproduce inside living cells", "They are larger than bacteria", "They make you ill by releasing toxins", "They can be seen with a school light microscope"], answer: 0, why: "Viruses take over living cells to make copies of themselves, which destroys the cells. They are far smaller than bacteria and need an electron microscope.",
          feedback: [
            "",
            "It is the other way round: viruses are much smaller than bacteria, so small that they can only be seen with an electron microscope. What marks viruses out is that they can only reproduce inside living cells.",
            "Toxins are how bacteria make you ill. Viruses damage you differently: they take over your cells to make copies of themselves and destroy the cells as they burst out.",
            "Bacteria can be seen with a light microscope, but viruses are far too small; they need an electron microscope. The correct statement is that viruses can only reproduce inside living cells."
          ] }
      ],
      modules: [
        {
          title: "How a sneeze spreads flu",
          task: {
            kind: "order",
            q: "Put the stages of droplet infection in the correct order.",
            items: [
              "An infected person coughs or sneezes",
              "Droplets carrying the pathogen are released into the air",
              "Another person breathes in the droplets",
              "The pathogen reproduces rapidly inside the new person's body",
              "Toxins and cell damage cause symptoms such as fever"
            ]
          },
          explain: "Say, in one sentence, why covering a sneeze with a tissue breaks this chain.",
          levels: {
            support: {
              steps: [
                "Start with the person who already has the disease. What do they do?",
                "What comes out of them, and what is in it?",
                "How does it get into the next person?",
                "The pathogen must reproduce before there are enough of it to cause symptoms. Symptoms come last."
              ],
              example: {
                q: "Put these stages of getting Salmonella food poisoning in order: bacteria release toxins in the gut; a person eats undercooked chicken; the person has cramps and vomiting; bacteria enter the digestive system.",
                steps: ["First the chicken is eaten.", "The bacteria in it enter the digestive system.", "They reproduce and release toxins.", "The toxins cause the symptoms."],
                answer: "Eats undercooked chicken; bacteria enter the digestive system; bacteria release toxins; cramps and vomiting."
              }
            },
            core: { hint: "Release, breathe in, reproduce, symptoms. The pathogen has to multiply before anyone feels ill." },
            stretch: { extend: "Explain why a person can pass flu on before they feel ill themselves, using the idea that the pathogen reproduces inside the body." }
          },
          why: "Droplets from the infected person's breathing system carry the pathogen; the next person breathes them in; the pathogen reproduces inside them; toxins and cell damage then cause the symptoms."
        },
        {
          title: "Routes of transmission",
          task: {
            kind: "match",
            q: "Match each way pathogens are spread to a disease spread that way.",
            pairs: [
              ["Airborne droplets", "Flu, passed on when an infected person coughs or sneezes"],
              ["Direct contact", "HIV, passed on by sexual contact or through a cut in the skin"],
              ["Contaminated food and water", "Cholera, caught by drinking dirty water"],
              ["Vector", "Malaria, carried from person to person by mosquitoes"]
            ]
          },
          explain: "Say, in one sentence, what a vector is and give one example.",
          levels: {
            support: {
              steps: [
                "Read each disease description and underline how it moves: coughs, touching, drinking, insect.",
                "Coughs and sneezes release droplets into the air.",
                "Touching, cuts and sexual contact are direct contact.",
                "Anything swallowed is food and water; anything carried by an animal is a vector."
              ],
              example: {
                q: "Match: measles; Salmonella food poisoning. Routes: airborne droplets; contaminated food.",
                steps: ["Measles spreads in droplets from sneezes and coughs: airborne droplets.", "Salmonella bacteria are taken in with food: contaminated food."],
                answer: "Measles: airborne droplets. Salmonella: contaminated food."
              }
            },
            core: { hint: "Match the verb: breathed in, touched, swallowed, bitten." },
            stretch: { extend: "Plants catch diseases too. For each of the four routes, say whether a plant pathogen could use it, and give one example from the unit where you can." }
          },
          why: "Droplets from coughs and sneezes spread flu; HIV passes by direct contact including sexual contact and through cuts; cholera is swallowed in dirty water; malaria is carried by the mosquito, a vector."
        },
        {
          title: "Into the body through the gut",
          task: {
            kind: "mcq",
            q: "Someone eats chicken that has not been cooked properly and becomes ill. How did the pathogen get into their body?",
            options: [
              "In contaminated food or water, into the digestive system",
              "In droplets that they breathed in",
              "Through an insect bite",
              "By direct contact with another person's skin"
            ],
            answer: 0,
            feedback: [
              "",
              "Droplets spread pathogens when someone coughs or sneezes near you. Here the pathogen was in the food itself, so it was swallowed and entered the digestive system.",
              "An insect bite is how a vector, such as a mosquito, passes on a pathogen. Nothing bit this person: they swallowed the bacteria in undercooked chicken, so the route was contaminated food.",
              "Direct contact means touching an infected person, through a cut or by sexual contact. The pathogen here was in the food, so it entered through the digestive system."
            ]
          },
          contexts: [
            { label: "A dirty stream", q: "A hiker drinks water straight from a stream below a village with no sewage treatment and develops cholera. How did the pathogen get into their body?" },
            { label: "Washed salad", q: "A salad is rinsed in water that is not clean, and the people who eat it become ill. How did the pathogen get into their bodies?" },
            { label: "Raw and cooked together", q: "Raw chicken is left touching cooked meat in a fridge. People who eat the cooked meat become ill. How did the pathogen get into their bodies?" }
          ],
          explain: "Say, in one sentence, why keeping raw meat away from cooked food stops this route.",
          levels: {
            support: {
              steps: [
                "Where was the pathogen? In the chicken.",
                "What did the person do with the chicken? Ate it.",
                "So the pathogen was swallowed. Which part of the body does swallowed food go to? The digestive system.",
                "Pick the option that names food and the digestive system."
              ],
              example: {
                q: "A person is bitten by a mosquito and later develops malaria. How did the pathogen get into their body?",
                steps: ["The pathogen was inside the mosquito.", "The mosquito bit the person, so the pathogen passed into their blood.", "The mosquito is a vector, so this is spread by a vector."],
                answer: "Through an insect bite: the mosquito is a vector that carries the pathogen."
              }
            },
            core: { hint: "Follow the pathogen: it was in the food. What happened to the food?" },
            stretch: { extend: "Explain why cooking chicken thoroughly, and keeping raw meat away from cooked meat, both prevent Salmonella food poisoning. Which one removes the pathogen and which one stops it moving?" }
          },
          why: "Pathogens in undercooked food or dirty water are swallowed and enter the digestive system. That is the food and water route of transmission."
        }
      ]
    },

    /* ───────────── 3 · culturing bacteria (Biology only) ───────────── */
    {
      key: "culturing", n: 3, title: "Growing bacteria in the lab (Biology only)",
      lead: "How scientists grow bacteria safely without contamination, how to work out how many bacteria there will be, and how to measure how well a chemical stops them.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "culture", means: "a population of microorganisms grown on purpose in the lab", sentence: "The scientist grew a culture of bacteria in a Petri dish." },
          { word: "nutrient agar", means: "a jelly containing everything bacteria need to grow", sentence: "The bacteria were spread across the surface of the nutrient agar." },
          { word: "aseptic technique", means: "careful methods that keep unwanted microorganisms out", sentence: "Aseptic technique stops the culture becoming contaminated." },
          { word: "inoculate", means: "to put the bacteria you want to grow onto the agar", sentence: "Use a sterile loop to inoculate the agar." },
          { word: "binary fission", means: "the way bacteria reproduce: one cell splits into two", sentence: "By binary fission, one bacterium becomes two, then four, then eight." },
          { word: "zone of inhibition", means: "the clear circle around a disc where bacteria have not grown", sentence: "The antiseptic with the biggest zone of inhibition worked best." }
        ],
        passage: [
          "Scientists grow bacteria in the lab to study them.",
          "Growing bacteria is called culturing them.",
          "Bacteria need food, warmth and usually oxygen to grow.",
          "They are grown on nutrient agar in a Petri dish, or in nutrient broth.",
          "Bacteria divide in two by binary fission, so one cell becomes two, then four.",
          "Unwanted microorganisms must be kept out of the culture.",
          "The careful methods used to keep them out are called aseptic technique.",
          "The loop is heated in a flame before it touches the bacteria.",
          "The lid is taped on, but not all the way round.",
          "The dish is stored upside down so drops of water do not fall on the agar.",
          "In school, the dish is kept at 25 °C, not 37 °C, so harmful bacteria are less likely to grow.",
          "A chemical such as an antiseptic can stop bacteria growing.",
          "The clear area around it is called the zone of inhibition.",
          "A bigger clear area means the chemical works better."
        ]
      },
      sections: [
        {
          heading: "Why and how we culture bacteria",
          paragraphs: [
            "Scientists grow (culture) bacteria so they can investigate how to treat bacterial infections, and so they can copy the conditions inside the human body and see how fast bacteria grow there. To culture bacteria you must give them everything they need: carbohydrates as an energy source, nitrogen to make proteins, various minerals, oxygen (most bacteria need it, but not all) and a warm temperature. Most bacteria grow best between 25 °C and 37 °C.",
            "A culture medium contains all of these nutrients. It can be a liquid, nutrient broth, in a flask, or a jelly, nutrient agar, set in a shallow dish called a Petri dish. Bacteria placed on the agar reproduce by binary fission, one cell splitting into two, and in a day or two each cell has grown into a visible colony.",
            "This chapter is Biology only. In the AQA specification it is 4.1.1.6 Culturing microorganisms and Required practical 2, which Combined Science pupils do not study."
          ],
          tip: "Broth is liquid, in a flask; agar is a jelly, in a Petri dish. Both are culture media."
        },
        {
          heading: "Aseptic technique: keeping other microbes out",
          paragraphs: [
            "Contamination means something unwanted has got into the culture. Bacteria and fungi are everywhere: on your skin, in the air, in soil and in water. If a culture is contaminated, the results are invalid, because the scientist cannot tell whether a treatment worked on the bacteria they meant to grow or on something else. Aseptic technique is the set of methods that prevents contamination.",
            "Before you start, the Petri dish and the agar must be sterile: plastic dishes are bought ready-sterilised, glass dishes and agar are sterilised by heating in an autoclave (a special oven), and UV light or gamma radiation can also be used to kill microorganisms. The inoculating loop is sterilised by heating it in a Bunsen flame; let it cool in the air, and never blow on it.",
            "Dip the cool loop in the broth and zigzag it across the agar, then put the lid back as quickly as possible. Tape the lid on, but do not seal it all the way round. Label the dish and store it upside down, so that condensation on the lid cannot drip onto the agar. In a school laboratory the dish is incubated at 25 °C; at 37 °C, human body temperature, there is a much higher risk of growing bacteria that are dangerous to people. Once a dish has been inoculated and sealed it is not opened again."
          ],
          worked: {
            q: "Explain why Petri dishes are incubated at 25 °C in a school laboratory rather than at 37 °C. (2 marks)",
            steps: [
              "Say what 37 °C is: human body temperature, the temperature at which pathogens of the human body grow best.",
              "Say what the risk is: at 37 °C there is a high risk of growing bacteria that are harmful to people.",
              "Finish with the effect of the lower temperature: at 25 °C that risk is much reduced, and the bacteria still grow, just more slowly."
            ],
            answer: "Because 37 °C is human body temperature, so pathogens that harm people would grow well; at 25 °C the risk of growing harmful bacteria is much lower."
          },
          tip: "Every aseptic step has a reason. Learn the pairs: flame the loop (kill microbes on it); lid on quickly (keep airborne microbes out); tape but do not seal all round (oxygen gets in, so harmful bacteria that grow without air do not take over); upside down (no drips); 25 °C (safer)."
        },
        {
          heading: "Calculating bacterial growth",
          paragraphs: [
            "Because bacteria double every time they divide, a population grows very fast. If you know the mean division time (how long, on average, one division takes), you can work out how many bacteria there will be after any length of time.",
            "Step 1: work out how many times the bacteria divide. Number of divisions = total time ÷ mean division time, with both in the same units. Step 2: the population doubles each time, so number of bacteria at the end = number at the start × 2 to the power of the number of divisions."
          ],
          worked: {
            q: "The mean division time for a population of bacteria is 30 minutes. Calculate how many bacteria will result from one bacterium after 8 hours.",
            steps: [
              "Convert the time: 8 hours = 8 × 60 = 480 minutes.",
              "Number of divisions = 480 ÷ 30 = 16. (Or: 60 ÷ 30 = 2 divisions per hour, and 8 × 2 = 16.)",
              "Each division doubles the population, so number of bacteria = 1 × 2¹⁶.",
              "2¹⁶ = 65 536 bacteria. In standard form to 2 significant figures that is 6.6 × 10⁴."
            ],
            answer: "65 536 bacteria (about 6.6 × 10⁴)",
            checks: [
              { expr: "8*60/30", value: 16, tol: 0 },
              { expr: "2**16", value: 65536, tol: 0 }
            ]
          },
          tip: "Change hours into minutes before you divide. Then the number of divisions goes in the power: 2 to the power of 16, not 2 × 16."
        },
        {
          heading: "Measuring the zone of inhibition",
          paragraphs: [
            "Temperature, the nutrients available, oxygen levels and pH all affect how fast bacteria grow. So do chemicals. To test an antiseptic or an antibiotic, a small paper disc is soaked in it and placed on agar that has been spread with bacteria. A disc soaked in water is the control.",
            "Where the chemical stops the bacteria growing, a clear circle forms around the disc. This is the zone of inhibition. The bigger the zone, the more effective the chemical is against that bacterium. To compare chemicals fairly, measure the diameter of each clear circle, halve it to get the radius, then calculate the area using area = πr²."
          ],
          worked: {
            q: "A disc of antiseptic cream leaves a clear circle of diameter 12.0 mm. Calculate the area of the zone of inhibition. Give your answer to 1 decimal place.",
            steps: [
              "Radius = diameter ÷ 2 = 12.0 ÷ 2 = 6.0 mm.",
              "Area = π × r² = π × 6.0² = π × 36.",
              "Area = 113.1 mm² (to 1 decimal place).",
              "Check the pattern with the other discs: a 4.0 mm circle gives 12.6 mm² and a 7.0 mm circle gives 38.5 mm². The 12.0 mm circle has by far the largest area, so this antiseptic was the most effective."
            ],
            answer: "113.1 mm²",
            checks: [
              { expr: "pi*(12.0/2)**2", value: 113.1, tol: 0.05 },
              { expr: "pi*(4.0/2)**2", value: 12.6, tol: 0.05 },
              { expr: "pi*(7.0/2)**2", value: 38.5, tol: 0.05 }
            ]
          },
          tip: "Halve the diameter first. Using the diameter in πr² gives an answer four times too big."
        }
      ],
      gate: [
        { kind: "gap", q: "Bacteria reproduce by a type of simple cell division called ___.", answer: "binary fission", options: ["binary fission", "mitosis", "fusion"], why: "Bacteria divide in two by binary fission. The population doubles with every division.",
          feedback: {
            "mitosis": "Mitosis is how the cells of your own body divide. Bacteria are much simpler cells and divide by binary fission, one cell splitting into two.",
            "fusion": "Fusion means joining together, the opposite of dividing. Bacteria reproduce by splitting in two, which is called binary fission."
          } },
        { kind: "numeric", q: "A bacterium has a mean division time of 30 minutes. How many times will it divide in 3 hours?", answer: 6, tolerance: 0, units: "divisions", check: "3*60/30", why: "Exact: 3 hours = 180 minutes, and 180 ÷ 30 = 6 divisions.",
          misconceptions: [
            { answer: 3, check: "3*60/60", says: "You counted one division per hour. The bacterium divides every 30 minutes, so it divides twice an hour: 3 hours = 180 minutes, and 180 ÷ 30 = 6." },
            { answer: 90, check: "3*30", says: "You multiplied 3 by 30. The number of divisions is the total time divided by the division time: change 3 hours to 180 minutes, then 180 ÷ 30 = 6." },
            { answer: 64, check: "2**6", says: "64 is the number of bacteria after 6 divisions (2 to the power 6). The question asks how many times it divides, which is 6." }
          ] },
        { kind: "mcq", q: "Why are Petri dishes incubated at 25 °C, not 37 °C, in a school laboratory?", options: ["Harmful pathogens that live in the human body are less likely to grow", "Bacteria grow fastest at 25 °C", "The agar melts above 25 °C", "Bacteria cannot grow at all at 37 °C"], answer: 0, why: "37 °C is human body temperature, so bacteria that are dangerous to people would grow well. 25 °C reduces that risk.",
          feedback: [
            "",
            "Most bacteria actually grow faster nearer 37 °C, which is exactly the problem: at body temperature the bacteria most dangerous to people grow well. School labs use 25 °C to reduce that risk, even though growth is slower.",
            "Nutrient agar stays set well above 25 °C; it is sterilised by heating in an autoclave. The reason for 25 °C is safety: human pathogens grow best at 37 °C.",
            "Bacteria grow very well at 37 °C; it is human body temperature. That is why hospital labs use it and school labs avoid it: human pathogens would be more likely to grow."
          ] }
      ],
      modules: [
        {
          title: "How many bacteria?",
          task: {
            kind: "numeric",
            q: "A single bacterium with a mean division time of 20 minutes is placed in nutrient broth. How many bacteria will there be after 2 hours?",
            answer: 64, tolerance: 0, units: "bacteria", check: "2**(2*60/20)",
            why: "Exact: 2 hours = 120 minutes; 120 ÷ 20 = 6 divisions; 1 × 2⁶ = 64 bacteria.",
            misconceptions: [
              { answer: 6, check: "2*60/20", says: "6 is the number of divisions, not the number of bacteria. The population doubles at each division, so after 6 divisions there are 2⁶ = 64 bacteria." },
              { answer: 12, check: "2*(2*60/20)", says: "You doubled the number of divisions once. The population doubles at every division: 2 × 2 × 2 × 2 × 2 × 2 = 2⁶ = 64." },
              { answer: 32, check: "2**(2*60/20-1)", says: "You are one doubling short. 2 hours is 120 minutes, which is 6 divisions of 20 minutes, so the answer is 2⁶ = 64, not 2⁵ = 32." }
            ]
          },
          contexts: [
            { label: "A swab from a door handle", q: "A swab picks up a single bacterium from a door handle and is spread on agar. The bacterium has a mean division time of 20 minutes. How many bacteria will there be after 2 hours?", check: "2**(2*60/20)", why: "Same calculation: 120 ÷ 20 = 6 divisions, so 2⁶ = 64 bacteria." },
            { label: "Making yoghurt", q: "A single bacterium with a mean division time of 20 minutes is added to warm milk to start making yoghurt. How many bacteria will there be after 2 hours?", check: "2**(2*60/20)", why: "Same calculation: 120 ÷ 20 = 6 divisions, so 2⁶ = 64 bacteria." },
            { label: "A cut on a finger", q: "A single bacterium with a mean division time of 20 minutes gets into a cut on a finger. If nothing stops it, how many bacteria will there be after 2 hours?", check: "2**(2*60/20)", why: "Same calculation: 120 ÷ 20 = 6 divisions, so 2⁶ = 64 bacteria." }
          ],
          explain: "Say, in one sentence, why the number of divisions goes in the power and is not multiplied by 2.",
          levels: {
            support: {
              steps: [
                "Change the time to minutes: 2 hours = 2 × 60 = 120 minutes.",
                "Number of divisions = 120 ÷ 20 = 6.",
                "The population doubles each division: 1 → 2 → 4 → 8 → 16 → 32 → 64.",
                "So the answer is 1 × 2⁶ = 64."
              ],
              example: {
                q: "A bacterium divides every 30 minutes. Starting from one bacterium, how many will there be after 1 hour?",
                steps: ["1 hour = 60 minutes.", "Number of divisions = 60 ÷ 30 = 2.", "Doubling twice: 1 → 2 → 4. So 1 × 2² = 4 bacteria."],
                answer: "4 bacteria",
                checks: [{ expr: "2**(60/30)", value: 4, tol: 0 }]
              }
            },
            core: { hint: "Minutes first, then divisions = time ÷ division time, then 2 to that power." },
            stretch: { extend: "Write the answer for 4 hours in standard form, and explain why a real population would not keep doubling like this for very long." }
          },
          why: "Divisions = 120 ÷ 20 = 6. Each division doubles the population, so 1 × 2⁶ = 64 bacteria."
        },
        {
          title: "Area of the zone of inhibition",
          task: {
            kind: "numeric",
            q: "A paper disc soaked in antiseptic leaves a clear circle of diameter 10.0 mm on the agar. Calculate the area of the zone of inhibition in mm², to 1 decimal place.",
            answer: 78.5, tolerance: 0.05, units: "mm²", check: "pi*(10.0/2)**2",
            why: "Radius = 10.0 ÷ 2 = 5.0 mm; area = π × 5.0² = 78.5 mm² to 1 d.p.",
            misconceptions: [
              { answer: 314.2, check: "pi*10.0**2", says: "You used the diameter in πr². The radius is half the diameter: 10.0 ÷ 2 = 5.0 mm, so the area is π × 5.0² = 78.5 mm²." },
              { answer: 15.7, check: "pi*10.0/2", says: "You forgot to square the radius. Area = π × r², so π × 5.0 × 5.0 = 78.5 mm², not π × 5.0." },
              { answer: 31.4, check: "2*pi*(10.0/2)", says: "That is the circumference (2πr), the distance round the circle. The zone of inhibition is an area: π × r² = π × 5.0² = 78.5 mm²." }
            ]
          },
          contexts: [
            { label: "Mouthwash", q: "A paper disc soaked in mouthwash leaves a clear circle of diameter 10.0 mm on the agar. Calculate the area of the zone of inhibition in mm², to 1 decimal place.", check: "pi*(10.0/2)**2", why: "Radius 5.0 mm; π × 5.0² = 78.5 mm²." },
            { label: "An antibiotic", q: "A paper disc soaked in an antibiotic leaves a clear circle of diameter 10.0 mm around it. Calculate the area of the zone of inhibition in mm², to 1 decimal place.", check: "pi*(10.0/2)**2", why: "Radius 5.0 mm; π × 5.0² = 78.5 mm²." },
            { label: "Toothpaste", q: "A paper disc coated in toothpaste is placed on agar spread with bacteria. The clear circle around it has a diameter of 10.0 mm. Calculate the area of the zone of inhibition in mm², to 1 decimal place.", check: "pi*(10.0/2)**2", why: "Radius 5.0 mm; π × 5.0² = 78.5 mm²." }
          ],
          explain: "Say, in one sentence, why scientists compare the areas of the clear circles rather than just looking at them.",
          levels: {
            support: {
              steps: [
                "Find the radius: radius = diameter ÷ 2 = 10.0 ÷ 2 = 5.0 mm.",
                "Square the radius: 5.0² = 5.0 × 5.0 = 25.",
                "Multiply by π: 25 × π = 78.54…",
                "Round to 1 decimal place: 78.5 mm²."
              ],
              example: {
                q: "A disc of TCP leaves a clear circle of diameter 6.0 mm. Calculate the area of the zone of inhibition to 1 decimal place.",
                steps: ["Radius = 6.0 ÷ 2 = 3.0 mm.", "Area = π × 3.0² = π × 9.", "Area = 28.3 mm² to 1 decimal place."],
                answer: "28.3 mm²",
                checks: [{ expr: "pi*(6.0/2)**2", value: 28.3, tol: 0.05 }]
              }
            },
            core: { hint: "Halve the diameter, square it, multiply by π, round." },
            stretch: { extend: "A second antiseptic gives a circle of diameter 20.0 mm. Without calculating, explain how many times bigger its zone of inhibition is, then check by calculation." }
          },
          why: "Area = πr². Radius = 10.0 ÷ 2 = 5.0 mm, so area = π × 25 = 78.5 mm² to 1 decimal place."
        },
        {
          title: "Culturing bacteria step by step",
          task: {
            kind: "order",
            q: "Put the steps for growing an uncontaminated culture of bacteria in the correct order.",
            items: [
              "Sterilise the inoculating loop in a Bunsen flame and let it cool without blowing on it",
              "Dip the loop in the bacterial broth and zigzag it across the surface of the agar",
              "Replace the lid quickly and tape it on, but not all the way round",
              "Label the dish and store it upside down",
              "Incubate the dish at 25 °C"
            ]
          },
          explain: "Say, in one sentence, why the dish is stored upside down.",
          levels: {
            support: {
              steps: [
                "Nothing may touch the bacteria until it is sterile, so the loop is flamed first.",
                "Then the bacteria go onto the agar.",
                "The lid goes on as soon as the bacteria are on the agar, to keep the air out.",
                "Label, turn over, then keep warm. Incubation is always last."
              ],
              example: {
                q: "Put these steps for making a cup of tea in order: pour in the boiling water; put a tea bag in the cup; boil the kettle; leave it to brew.",
                steps: ["You cannot pour boiling water until the kettle has boiled.", "The tea bag goes in the cup before the water.", "Brewing happens after the water is in."],
                answer: "Boil the kettle; put a tea bag in the cup; pour in the boiling water; leave it to brew."
              }
            },
            core: { hint: "Sterilise, inoculate, seal, label, incubate." },
            stretch: { extend: "For each of the five steps, give the reason it is done that way. Then explain why the dish must not be opened again once it has been sealed and incubated." }
          },
          why: "Sterilise the loop so nothing else is introduced; inoculate the agar; seal quickly so airborne microbes stay out; label and invert so condensation cannot drip onto the agar; then incubate at 25 °C so human pathogens are less likely to grow."
        }
      ]
    },

    /* ───────────── 4 · preventing infection ───────────── */
    {
      key: "prevention", n: 4, title: "Stopping the spread",
      lead: "How scientists learnt what causes disease, and the methods we now use to reduce or prevent the spread of pathogens: hygiene, isolation, controlling vectors and vaccination.",
      covers: [5],
      pretext: {
        words: [
          { word: "hygiene", means: "keeping clean so that pathogens are not passed on", sentence: "Washing your hands after using the toilet is good hygiene." },
          { word: "isolation", means: "keeping an infected person away from others", sentence: "The patient with Ebola was kept in isolation." },
          { word: "vector", means: "an animal that carries a pathogen from one organism to another", sentence: "Killing mosquitoes controls the vector for malaria." },
          { word: "vaccination", means: "giving a small amount of dead or inactive pathogen so the body can fight the real one", sentence: "Vaccination protects most children against measles." },
          { word: "antiseptic", means: "a chemical that kills microorganisms on skin, wounds or surfaces", sentence: "Lister used an antiseptic to clean wounds during surgery." }
        ],
        passage: [
          "For thousands of years, people did not know what caused disease.",
          "Only in the last 200 years have scientists really understood pathogens.",
          "Ignaz Semmelweis showed that washing hands saved lives in hospitals.",
          "Joseph Lister used antiseptic and clean equipment in surgery.",
          "Louis Pasteur showed that microorganisms cause disease.",
          "Today we know several ways to stop pathogens spreading.",
          "Good hygiene means washing your hands and keeping raw meat away from cooked food.",
          "People with a serious infectious disease can be isolated from others.",
          "Vectors such as mosquitoes can be destroyed or controlled.",
          "A vaccine gives you a small amount of dead or inactive pathogen.",
          "Then your body can fight the real pathogen quickly if it meets it.",
          "Plants cannot be vaccinated, because they do not have an immune system."
        ]
      },
      sections: [
        {
          heading: "Learning what causes disease",
          paragraphs: [
            "Some illnesses have been with us for thousands of years. For most of that time people used herbal remedies without knowing why some of them worked, and blamed disease on bad air or bad luck. It is only in the past 200 years that the causes of disease have really been understood.",
            "In the 1840s Ignaz Semmelweis, a doctor working in a maternity hospital, noticed that far more women died after childbirth on the wards where doctors came straight from examining dead bodies. He insisted that doctors wash their hands, and the number of deaths fell sharply. Later, Joseph Lister used an antiseptic, carbolic acid, to clean wounds and surgical instruments, and insisted on clean equipment and clean clothing in the operating theatre, at a time when many surgeons operated with unwashed instruments and in dirty coats.",
            "Louis Pasteur showed that microorganisms cause disease and decay. Together, the work of these pioneers let modern scientists prevent the spread of pathogens and, in some cases, cure the diseases they cause."
          ],
          tip: "Semmelweis = hand washing. Lister = antiseptic and clean surgery. Pasteur = microorganisms cause disease."
        },
        {
          heading: "Hygiene, isolation and controlling vectors",
          paragraphs: [
            "Hygiene removes pathogens before they can spread: washing your hands after using the toilet, before cooking, after handling animals and after contact with someone who is ill; using disinfectants in the house; keeping raw meat away from cooked meat; coughing or sneezing into a tissue. In farming, keeping machinery clean helps to stop plant diseases moving from field to field.",
            "Isolation keeps a person with a serious infectious disease, such as Ebola or cholera, away from other people, so that fewer people come into contact with the pathogen. The same idea works for plants: infected plants can be destroyed or, if they are small, moved away from healthy ones.",
            "Controlling vectors removes the carrier. Mosquitoes carry malaria and dengue fever, houseflies carry more than 100 human diseases, and rats carry disease too. Aphids transmit more than 150 plant diseases, and beetles carry viral, bacterial and fungal diseases of plants. Destroying the vectors, or stopping them breeding, prevents the spread of the diseases they carry."
          ],
          tip: "Each method stops one link in the chain: hygiene removes the pathogen, isolation removes contact, vector control removes the carrier."
        },
        {
          heading: "Vaccination",
          paragraphs: [
            "A vaccination gives a person a small amount of a dead or inactive form of a specific pathogen. The body learns to recognise it, so that if the person later meets the real, live pathogen, their body can fight it off quickly, before it causes serious illness.",
            "Vaccines protect large numbers of people and animals: most young children in the UK are vaccinated against measles, and poultry are vaccinated against Salmonella. When most of a population is vaccinated, the pathogen finds it hard to spread, so even people who are not vaccinated are safer.",
            "Vaccination cannot protect plants, because plants do not have an immune system. Plant diseases are controlled by the other methods: hygiene, destroying infected plants and controlling insect vectors."
          ],
          worked: {
            q: "Explain how good hygiene in a kitchen helps to prevent Salmonella food poisoning. (3 marks)",
            steps: [
              "Name the pathogen and its route: Salmonella bacteria are spread in food, especially undercooked meat.",
              "Give a hygiene action and link it to the route: keeping raw meat away from cooked food stops the bacteria moving onto food that will not be cooked again.",
              "Give a second action with a reason: washing hands after handling raw meat stops bacteria being carried to other food or surfaces."
            ],
            answer: "Salmonella bacteria are spread in contaminated food, so keeping raw meat away from cooked food stops bacteria moving onto food that will be eaten, and washing hands after handling raw meat stops them being carried to other food."
          }
        }
      ],
      gate: [
        { kind: "mcq", q: "What did Ignaz Semmelweis show?", options: ["Washing hands between patients reduced the spread of disease in hospitals", "Mosquitoes carry the pathogen that causes malaria", "Vaccination protects children against measles", "Viruses are smaller than bacteria"], answer: 0, why: "Semmelweis made doctors wash their hands, and deaths after childbirth fell sharply. Hand washing stops pathogens being carried from patient to patient.",
          feedback: [
            "",
            "The link between mosquitoes and malaria was shown much later by other scientists. Semmelweis worked in a hospital in the 1840s and showed that hand washing cut the number of deaths.",
            "Vaccination against measles came in the twentieth century. Semmelweis's discovery was about hygiene: making doctors wash their hands reduced the spread of disease.",
            "The size of viruses was found with the electron microscope, long after Semmelweis. His work showed that washing hands between patients reduced deaths in hospitals."
          ] },
        { kind: "gap", q: "Keeping a person with a serious infectious disease away from other people is called ___.", answer: "isolation", options: ["isolation", "vaccination", "hygiene"], why: "Isolation means fewer people come into contact with the infected person, so the pathogen spreads to fewer people.",
          feedback: {
            "vaccination": "Vaccination is giving a small amount of dead or inactive pathogen so the body can fight the real one. Keeping an infected person away from others is isolation.",
            "hygiene": "Hygiene is keeping clean: washing hands, keeping raw meat away from cooked food. Keeping an infected person separate from other people is called isolation."
          } },
        { kind: "mcq", q: "Why can plants not be protected by vaccination?", options: ["Plants do not have an immune system", "Plants are never infected by pathogens", "Plants are too small to inject", "Pathogens cannot reach plants in a field"], answer: 0, why: "A vaccine works by training the immune system. Plants have no immune system, so plant diseases are controlled by hygiene, destroying infected plants and controlling vectors.",
          feedback: [
            "",
            "Plants catch many diseases: tobacco mosaic virus, rose black spot and the 150 or more diseases carried by aphids. The reason vaccines cannot help them is that they have no immune system for a vaccine to train.",
            "Size is not the issue; some plants are far bigger than people. Vaccines work on the immune system, and plants do not have one.",
            "Pathogens reach plants easily, by wind, water, insects and contact between plants. Vaccines cannot protect plants because plants have no immune system."
          ] }
      ],
      modules: [
        {
          title: "Which method is this?",
          task: {
            kind: "mcq",
            q: "A hospital places a patient with Ebola in a separate room and limits the number of staff who enter it. Which method of preventing disease is this?",
            options: ["Isolation", "Controlling vectors", "Vaccination", "Hygiene"],
            answer: 0,
            feedback: [
              "",
              "Controlling vectors means destroying or controlling the animals that carry a pathogen, such as mosquitoes. Ebola is not carried by a vector here; the patient is being kept apart from other people, which is isolation.",
              "Vaccination gives people a dead or inactive form of the pathogen so their bodies can fight the real one. Nothing is being given to anyone here: the patient is being kept away from others, which is isolation.",
              "Hygiene is keeping clean, for example hand washing and disinfecting. The staff will do that too, but the method described, keeping the patient apart so fewer people meet the pathogen, is isolation."
            ]
          },
          contexts: [
            { label: "On a farm", q: "A grower finds a few small plants with a fungal disease and moves them well away from the rest of the crop. Which method of preventing disease is this?" },
            { label: "Cholera outbreak", q: "During a cholera outbreak, patients are treated in a separate tent and visitors are kept away. Which method of preventing disease is this?" },
            { label: "At school", q: "A pupil with a serious infectious illness is kept at home, away from classmates, until they are no longer infectious. Which method of preventing disease is this?" }
          ],
          explain: "Say, in one sentence, why isolation reduces the spread of a disease.",
          levels: {
            support: {
              steps: [
                "Ask: what is being done to the pathogen, the carrier or the people?",
                "Nothing is being killed or cleaned, and nothing is being injected.",
                "The infected person is being kept apart from others.",
                "Keeping an infected person apart so fewer people meet the pathogen is isolation."
              ],
              example: {
                q: "A council drains ponds of stagnant water near a village so that mosquitoes cannot breed. Which method of preventing disease is this?",
                steps: ["Mosquitoes carry the malaria protist: they are a vector.", "Draining the water stops the vector breeding.", "So this is controlling vectors."],
                answer: "Controlling vectors."
              }
            },
            core: { hint: "Who or what is being kept away from whom?" },
            stretch: { extend: "Isolation reduces spread but does not cure the patient. Explain which other method would protect the hospital staff in the long term, and why it would not work for a plant disease." }
          },
          why: "Isolation keeps a person with a serious infectious disease away from others, so fewer people come into contact with the pathogen and it spreads to fewer people."
        },
        {
          title: "Four ways to stop the spread",
          task: {
            kind: "match",
            q: "Match each method of preventing disease to how it works.",
            pairs: [
              ["Hygiene", "Washing hands and keeping raw meat separate removes pathogens before they spread"],
              ["Isolation", "Keeping an infected person apart so fewer people come into contact with the pathogen"],
              ["Controlling vectors", "Destroying the insects or animals that carry the pathogen from one organism to another"],
              ["Vaccination", "Giving small amounts of dead or inactive pathogen so the body can fight the real one quickly"]
            ]
          },
          explain: "Say, in one sentence, which of the four methods works on the person rather than on the pathogen, and why.",
          levels: {
            support: {
              steps: [
                "Hygiene is about being clean: look for washing.",
                "Isolation is about keeping apart: look for 'apart' or 'away from'.",
                "Vectors are carriers: look for insects or animals.",
                "Vaccination is about the body: look for 'dead or inactive pathogen'."
              ],
              example: {
                q: "Match: sneezing into a tissue; spraying aphids on a tomato crop. Methods: hygiene; controlling vectors.",
                steps: ["A tissue catches the droplets so pathogens are not released: hygiene.", "Aphids carry plant diseases, so killing them removes the vector: controlling vectors."],
                answer: "Sneezing into a tissue: hygiene. Spraying aphids: controlling vectors."
              }
            },
            core: { hint: "Clean, apart, carrier, body." },
            stretch: { extend: "For a plant disease spread by aphids, say which of the four methods can be used and which cannot, with reasons." }
          },
          why: "Hygiene removes pathogens; isolation removes contact between people; controlling vectors removes the carrier; vaccination prepares the body to fight the pathogen."
        },
        {
          title: "Stopping a cholera outbreak (6 marks)",
          task: {
            kind: "written",
            q: "After a flood, the drinking water in a town becomes contaminated with sewage and people begin to fall ill with cholera, a bacterial disease spread in dirty water. Explain how the spread of the disease could be reduced or prevented. (6 marks)",
            marks: 6,
            criteria: [
              "Identifies the route: cholera bacteria are spread in contaminated water, so stopping people drinking it is the first step (boiling or treating water, clean supplies)",
              "Hygiene: hand washing after using the toilet and before preparing food, so bacteria are not carried from person to person or onto food",
              "Isolation: people who are ill are treated away from others, so fewer people come into contact with the pathogen",
              "Prevents further contamination: safe disposal of sewage, so bacteria from patients do not get back into the water",
              "Links each method to how it breaks the chain of transmission (removes the pathogen, removes contact, protects the water)",
              "Clear, logical order and correct use of key words (pathogen, bacteria, transmitted, contaminated, hygiene, isolation)"
            ],
            model: "Cholera is caused by bacteria that are transmitted in contaminated water, so the most important step is to stop people drinking the dirty water: supply clean water, or boil or treat the water before it is used. Good hygiene also reduces the spread. Washing hands after using the toilet and before preparing food stops bacteria from an infected person reaching other people or their food. People who are ill should be isolated and treated separately, so that fewer people come into contact with the pathogen. Sewage from patients must be disposed of safely so that bacteria do not get back into the water supply and start the cycle again. Each of these methods breaks one link in the chain of transmission, so together they reduce the number of new cases."
          },
          explain: "Say, in one sentence, which link in the chain of transmission each of your methods breaks.",
          levels: {
            support: {
              steps: [
                "Start with the route: how is cholera spread? In dirty water. So what must people stop doing?",
                "Add a hygiene point and say why it works.",
                "Add isolation and say why it works.",
                "Finish with how to stop the water being contaminated again."
              ],
              example: {
                q: "Flu is spreading through a school. Explain two ways the spread could be reduced. (4 marks)",
                steps: [
                  "Route: flu spreads in droplets from coughs and sneezes.",
                  "Hygiene: coughing and sneezing into a tissue, and washing hands, so droplets and pathogens are not passed on.",
                  "Isolation: pupils who are ill stay at home, so fewer pupils come into contact with the virus."
                ],
                answer: "Pupils should cough and sneeze into tissues and wash their hands, so the virus in droplets is not passed on; pupils who are ill should stay at home, so fewer people come into contact with the virus."
              }
            },
            core: { hint: "Route first, then one method for each link: pathogen, contact, water." },
            stretch: { extend: "Explain why vaccination against cholera would help in the long term but is not the quickest way to stop this outbreak, and why controlling vectors is not relevant here." }
          },
          why: "A top answer names the route (contaminated water), then gives three or more methods, each linked to the part of the transmission chain it breaks, in a clear order."
        }
      ]
    },

    /* ───────────── 5 · bacterial and viral diseases ───────────── */
    {
      key: "bacterial-viral", n: 5, title: "Bacterial and viral diseases",
      lead: "Five diseases to know in detail: measles, HIV and tobacco mosaic virus (viruses), Salmonella and gonorrhoea (bacteria), and why antibiotics work on one group but not the other.",
      covers: [6],
      pretext: {
        words: [
          { word: "measles", means: "a viral disease with fever and a red skin rash", sentence: "Most young children are vaccinated against measles." },
          { word: "HIV", means: "a virus that attacks the body's immune cells", sentence: "HIV is spread by sexual contact or by sharing needles." },
          { word: "Salmonella", means: "bacteria spread in food that cause food poisoning", sentence: "Undercooked chicken can carry Salmonella." },
          { word: "gonorrhoea", means: "a bacterial disease spread by sexual contact", sentence: "Gonorrhoea is treated with antibiotics." },
          { word: "antibiotic", means: "a medicine that kills bacteria", sentence: "Antibiotics do not work on viruses." },
          { word: "antiviral", means: "a drug that stops viruses making copies of themselves", sentence: "Antiretroviral drugs are antivirals used to control HIV." }
        ],
        passage: [
          "Measles is caused by a virus.",
          "It spreads in droplets from coughs and sneezes.",
          "It causes a fever and a red skin rash, and it can be fatal.",
          "Most young children are vaccinated against measles.",
          "HIV is a virus spread by sexual contact or by sharing needles.",
          "At first it causes a flu-like illness, then it attacks the immune system.",
          "Antiretroviral drugs can control HIV.",
          "Tobacco mosaic virus gives plant leaves a mosaic pattern, so they make less food.",
          "Salmonella bacteria are spread in food and cause fever, cramps, vomiting and diarrhoea.",
          "In the UK, poultry are vaccinated against Salmonella.",
          "Gonorrhoea is a bacterial disease spread by sexual contact.",
          "It is treated with antibiotics, but some strains are now resistant.",
          "Antibiotics kill bacteria, but they do not work on viruses."
        ]
      },
      sections: [
        {
          heading: "Viral diseases: measles and HIV",
          paragraphs: [
            "Measles is a viral disease. Its symptoms are a fever and a red skin rash. It is a serious illness that can be fatal if complications arise, which is why most young children are vaccinated against it (the MMR vaccine). The measles virus is spread by inhaling droplets from the sneezes and coughs of an infected person.",
            "HIV is a virus spread by sexual contact, or by exchange of body fluids such as blood, which happens when drug users share needles. At first it causes a flu-like illness. Unless it is controlled with antiretroviral drugs, the virus then attacks the body's immune cells.",
            "Late-stage HIV infection is called AIDS. It occurs when the immune system has been so badly damaged that the body can no longer deal with other infections or with cancers. The spread of HIV is reduced by using condoms, by not sharing needles and by screening donated blood. There is no cure once AIDS has developed, which is why early treatment with antiretroviral drugs matters."
          ],
          tip: "HIV is the virus; AIDS is the late stage of the infection. Do not use the two words as if they meant the same thing."
        },
        {
          heading: "A viral disease of plants: tobacco mosaic virus",
          paragraphs: [
            "Tobacco mosaic virus (TMV) is a widespread plant pathogen that infects many species, including tomatoes. It gives the leaves a distinctive mosaic pattern of discolouration. The discoloured parts of the leaf cannot photosynthesise properly, so the plant makes less food and its growth is reduced.",
            "TMV spreads by contact with diseased plant material and can be carried by insects. There is no treatment for an infected plant. Farmers control the disease by growing TMV-resistant strains, by good field hygiene (removing infected plants and cleaning tools) and by controlling the insect pests that carry it."
          ],
          tip: "For every plant disease, link the symptom to photosynthesis: fewer or damaged leaves means less photosynthesis, so less growth."
        },
        {
          heading: "Bacterial diseases: Salmonella and gonorrhoea",
          paragraphs: [
            "Salmonella food poisoning is spread by bacteria taken in with food, or on food prepared in unhygienic conditions. The symptoms are fever, abdominal cramps, vomiting and diarrhoea, caused by the bacteria and the toxins they secrete. In the UK, poultry are vaccinated against Salmonella to control its spread.",
            "Gonorrhoea is a sexually transmitted disease caused by a bacterium. Its symptoms are a thick yellow or green discharge from the vagina or penis and pain on urinating. It is spread by sexual contact.",
            "Gonorrhoea was easily treated with the antibiotic penicillin until many resistant strains appeared. Its spread is now controlled by treatment with other antibiotics and by using a barrier method of contraception, such as a condom."
          ],
          worked: {
            q: "Compare the ways Salmonella food poisoning and gonorrhoea are spread and controlled. (4 marks)",
            steps: [
              "Similarity first: both are caused by bacteria.",
              "Difference in spread: Salmonella is taken in with contaminated food, whereas gonorrhoea is spread by sexual contact.",
              "Difference in control: the spread of Salmonella is controlled by vaccinating poultry and by food hygiene, whereas gonorrhoea is controlled with antibiotics and by using condoms.",
              "Use 'both' and 'whereas' so the two diseases sit side by side."
            ],
            answer: "Both are bacterial diseases. Salmonella is spread in contaminated food, whereas gonorrhoea is spread by sexual contact. Salmonella is controlled by vaccinating poultry and food hygiene, whereas gonorrhoea is controlled with antibiotics and barrier methods such as condoms."
          }
        },
        {
          heading: "Antibiotics and antivirals",
          paragraphs: [
            "Antibiotics, such as penicillin, are medicines that kill bacteria inside the body, and antibacterial chemicals destroy bacteria on surfaces. Because gonorrhoea and Salmonella are caused by bacteria, antibiotics can treat them, although resistant strains make this harder every year.",
            "Antibiotics do nothing to viruses. Viruses are not living cells like bacteria; they reproduce inside your own cells, so a drug that reaches them risks damaging your cells too. Antiviral drugs do not kill viruses; instead they prevent the virus from replicating (making copies of itself). Antiretroviral drugs used to control HIV work in this way. Viruses also replicate faster than bacteria, so treatment must start early."
          ],
          tip: "Bacterium: antibiotics kill it. Virus: antibiotics are useless; antivirals slow its copying. Never write 'antibiotics cure measles or flu'."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which type of pathogen causes measles?", options: ["A virus", "A bacterium", "A fungus", "A protist"], answer: 0, why: "Measles is a viral disease spread in droplets from coughs and sneezes; it causes fever and a red skin rash.",
          feedback: [
            "",
            "Salmonella and gonorrhoea are the bacterial diseases in this unit. Measles is caused by a virus, which is why antibiotics cannot treat it and vaccination is used instead.",
            "The fungal diseases in this unit are rose black spot and athlete's foot. Measles is caused by a virus.",
            "The protist disease in this unit is malaria, carried by mosquitoes. Measles is caused by a virus spread in droplets."
          ] },
        { kind: "gap", q: "Salmonella food poisoning is a ___ disease spread in food.", answer: "bacterial", options: ["bacterial", "viral", "fungal"], why: "Salmonella bacteria are taken in with contaminated food; they and their toxins cause fever, cramps, vomiting and diarrhoea.",
          feedback: {
            "viral": "The viral diseases in this unit are measles, HIV and tobacco mosaic virus. Salmonella is a bacterium, so Salmonella food poisoning is a bacterial disease and can be treated with antibiotics.",
            "fungal": "Rose black spot and athlete's foot are the fungal diseases in this unit. Salmonella food poisoning is caused by bacteria taken in with food."
          } },
        { kind: "mcq", q: "How is HIV spread from person to person?", options: ["By sexual contact or exchange of body fluids such as blood", "In droplets from coughs and sneezes", "In contaminated food", "By mosquito bites"], answer: 0, why: "HIV passes in body fluids: by sexual contact, or in blood when drug users share needles. Condoms and not sharing needles reduce its spread.",
          feedback: [
            "",
            "Droplets from coughs and sneezes spread measles and flu. HIV cannot be caught from the air; it passes in body fluids, by sexual contact or through shared needles.",
            "Contaminated food spreads Salmonella. HIV is not caught from food; it is spread by sexual contact or exchange of body fluids such as blood.",
            "Mosquitoes are the vector for malaria, not HIV. HIV is spread by sexual contact or exchange of body fluids such as blood when needles are shared."
          ] }
      ],
      modules: [
        {
          title: "Five diseases, five fact files",
          task: {
            kind: "match",
            q: "Match each disease to its pathogen type and the way it is spread.",
            pairs: [
              ["Measles", "Virus spread in droplets from coughs and sneezes; fever and a red skin rash"],
              ["HIV", "Virus spread by sexual contact or body fluids such as blood; attacks the immune cells"],
              ["Salmonella food poisoning", "Bacteria taken in with contaminated food; fever, cramps, vomiting and diarrhoea"],
              ["Gonorrhoea", "Bacterium spread by sexual contact; discharge and pain on urinating"],
              ["Tobacco mosaic virus", "Virus of plants spread by contact with diseased material; mosaic pattern on the leaves"]
            ]
          },
          explain: "Say, in one sentence, which two of the five diseases could be treated with antibiotics, and why.",
          levels: {
            support: {
              steps: [
                "Sort the five into viruses (three) and bacteria (two) first.",
                "Of the viruses, one infects plants: find 'leaves'.",
                "Of the two human viruses, one is caught from the air and one from body fluids.",
                "Of the two bacteria, one comes from food and one from sexual contact."
              ],
              example: {
                q: "Match: rose black spot; malaria. Facts: protist carried by mosquitoes, causing fever; fungus spread by wind and water, causing black spots on leaves.",
                steps: ["Rose black spot is a plant disease with spots on leaves: the fungus.", "Malaria has a mosquito vector: the protist."],
                answer: "Rose black spot: fungus spread by wind and water. Malaria: protist carried by mosquitoes."
              }
            },
            core: { hint: "Three viruses (one of plants), two bacteria. Then match the route: air, body fluids, food, sexual contact, plant contact." },
            stretch: { extend: "Gonorrhoea and HIV are both spread by sexual contact. Explain why one can be treated with antibiotics and the other cannot, and what is used instead." }
          },
          why: "Measles and HIV are viruses of people (droplets; body fluids); TMV is a virus of plants; Salmonella and gonorrhoea are bacteria (food; sexual contact)."
        },
        {
          title: "How many are protected?",
          task: {
            kind: "numeric",
            q: "About 80% of the world's young children are vaccinated against measles. In a town with 2500 young children, how many would you expect to be vaccinated?",
            answer: 2000, tolerance: 0, units: "children", check: "0.80*2500",
            why: "Exact: 80% of 2500 = 0.80 × 2500 = 2000 children.",
            misconceptions: [
              { answer: 500, check: "2500-0.8*2500", says: "500 is the 20% who are NOT vaccinated. The question asks how many are vaccinated: 80% of 2500 = 2000." },
              { answer: 2420, check: "2500-80", says: "You subtracted 80 from 2500. A percentage is a fraction of the total, not a number to take away: 80% of 2500 = 0.80 × 2500 = 2000." },
              { answer: 3125, check: "2500/0.8", says: "You divided by 0.8 instead of multiplying. 80% of a number is smaller than the number: 0.80 × 2500 = 2000." }
            ]
          },
          contexts: [
            { label: "A poultry farm", q: "On a poultry farm, 80% of the 2500 chickens have been vaccinated against Salmonella. How many chickens have been vaccinated?", check: "0.80*2500", why: "80% of 2500 = 0.80 × 2500 = 2000 chickens." },
            { label: "A school", q: "A secondary school has 2500 pupils and 80% of them had the MMR vaccine as young children. How many pupils is that?", check: "0.80*2500", why: "80% of 2500 = 0.80 × 2500 = 2000 pupils." },
            { label: "A health survey", q: "A health survey covers 2500 young children in one city and finds that 80% have been vaccinated against measles. How many children is that?", check: "0.80*2500", why: "80% of 2500 = 0.80 × 2500 = 2000 children." }
          ],
          explain: "Say, in one sentence, why a high percentage of vaccinated children leads to fewer measles cases, even among the unvaccinated.",
          levels: {
            support: {
              steps: [
                "80% means 80 out of every 100, or 0.80 as a decimal.",
                "'Of' means multiply: 0.80 × 2500.",
                "0.80 × 2500 = 2000.",
                "Check: 10% of 2500 is 250, so 80% is 8 × 250 = 2000."
              ],
              example: {
                q: "In a flock of 1200 chickens, 75% have been vaccinated against Salmonella. How many chickens is that?",
                steps: ["75% = 0.75.", "0.75 × 1200 = 900.", "Check: 25% of 1200 is 300, so 75% is 3 × 300 = 900."],
                answer: "900 chickens",
                checks: [{ expr: "0.75*1200", value: 900, tol: 0 }]
              }
            },
            core: { hint: "Turn the percentage into a decimal, then multiply by the total." },
            stretch: { extend: "The number of measles cases falls as the percentage vaccinated rises. Explain why, using the idea that the virus needs unvaccinated people to pass between." }
          },
          why: "80% of 2500 = 0.80 × 2500 = 2000 children. The more children who are vaccinated, the fewer cases of measles there are."
        },
        {
          title: "Why antibiotics fail against measles (6 marks)",
          task: {
            kind: "written",
            q: "Explain why antibiotics can be used to treat gonorrhoea but not measles, and why treating gonorrhoea with antibiotics has become more difficult. (6 marks)",
            marks: 6,
            criteria: [
              "Gonorrhoea is caused by a bacterium; antibiotics kill bacteria, so they can treat it",
              "Measles is caused by a virus; antibiotics do not kill viruses",
              "Viruses reproduce inside the body's own cells, which makes them hard to attack without damaging the cells",
              "Antiviral drugs do not kill viruses but stop them replicating; vaccination is used to prevent measles",
              "Gonorrhoea was once easily treated with penicillin, but many resistant strains have appeared, so penicillin no longer works on them",
              "Other antibiotics and barrier methods (condoms) are now used to treat and control gonorrhoea"
            ],
            model: "Gonorrhoea is caused by a bacterium. Antibiotics such as penicillin kill bacteria, so they can be used to treat it. Measles is caused by a virus, and antibiotics have no effect on viruses. Viruses reproduce inside the body's own cells, so it is hard to destroy them without damaging the cells; antiviral drugs can only slow the virus down by stopping it replicating, which is why measles is prevented by vaccination rather than treated with antibiotics. Treating gonorrhoea has become harder because many strains of the bacterium are now resistant to penicillin, so it no longer kills them. Doctors have to use other antibiotics, and the spread of the disease is also controlled by barrier methods of contraception such as condoms."
          },
          explain: "Say, in one sentence, what makes a virus harder to treat than a bacterium.",
          levels: {
            support: {
              steps: [
                "Sentence 1: what causes gonorrhoea, and what do antibiotics do to it?",
                "Sentence 2: what causes measles, and what do antibiotics do to viruses?",
                "Sentence 3: where do viruses reproduce, and why does that make them hard to attack?",
                "Sentences 4 and 5: what happened to penicillin and gonorrhoea, and what is used now?"
              ],
              example: {
                q: "Explain why a doctor will not prescribe antibiotics to a patient with flu. (3 marks)",
                steps: [
                  "Flu is caused by a virus.",
                  "Antibiotics kill bacteria, not viruses.",
                  "Viruses reproduce inside the body's cells, so antibiotics cannot reach them without harming the cells; the patient's own body has to fight the virus."
                ],
                answer: "Flu is caused by a virus, and antibiotics kill only bacteria; viruses reproduce inside the body's own cells, so antibiotics have no effect on them."
              }
            },
            core: { hint: "Bacterium versus virus; where viruses reproduce; what 'resistant strains' means for penicillin." },
            stretch: { extend: "Explain why it matters that viruses replicate faster than bacteria, and why antiretroviral drugs have to be taken for life by someone with HIV." }
          },
          why: "The marks come from the contrast (bacterium: antibiotics kill it; virus: they do not, because it reproduces inside cells) plus the resistance story (penicillin no longer works on many strains, so other antibiotics and condoms are used)."
        }
      ]
    },

    /* ───────────── 6 · fungal and protist diseases ───────────── */
    {
      key: "fungal-protist", n: 6, title: "Fungal and protist diseases",
      lead: "Rose black spot and athlete's foot, both caused by fungi, and malaria, caused by a protist with a mosquito vector: symptoms, spread and control.",
      covers: [7],
      pretext: {
        words: [
          { word: "fungus", means: "a type of pathogen; moulds and yeasts are fungi", sentence: "Rose black spot is caused by a fungus." },
          { word: "protist", means: "a single-celled organism; some protists cause disease", sentence: "Malaria is caused by a protist." },
          { word: "Plasmodium", means: "the protist that causes malaria", sentence: "Plasmodium is carried from person to person by mosquitoes." },
          { word: "fungicide", means: "a chemical that kills fungi", sentence: "Gardeners spray roses with fungicide to treat black spot." },
          { word: "photosynthesis", means: "how plants make food using light in their leaves", sentence: "When leaves drop early, less photosynthesis can happen." }
        ],
        passage: [
          "Rose black spot is a disease of plants caused by a fungus.",
          "Purple or black spots grow on the leaves.",
          "The leaves turn yellow and drop early.",
          "The plant makes less food, because less photosynthesis can take place.",
          "The fungus spreads by water or wind.",
          "Gardeners treat it with fungicides and by removing the infected leaves.",
          "Athlete's foot is a fungal disease of the skin between the toes.",
          "It spreads where feet are warm, damp and bare.",
          "Malaria is caused by a protist called Plasmodium.",
          "A mosquito carries the protist from one person to another, so it is a vector.",
          "Malaria causes repeated fevers and can be fatal.",
          "Stopping mosquitoes breeding and sleeping under nets help to stop malaria."
        ]
      },
      sections: [
        {
          heading: "Rose black spot",
          paragraphs: [
            "Rose black spot is a fungal disease. Purple or black spots develop on the leaves, which often turn yellow and drop early. Because the plant loses leaves, and the spotted leaves work less well, less photosynthesis takes place, so the plant makes less food and its growth is reduced.",
            "The fungus is spread in the environment by water or wind, so it moves easily from plant to plant in a garden. Rose black spot can be treated by spraying with fungicides, chemicals that kill fungi, and by removing and destroying the affected leaves so that the fungus cannot spread from them."
          ],
          tip: "Spots, yellow, drop early, less photosynthesis, less growth: five words that earn the symptom-and-effect marks."
        },
        {
          heading: "Athlete's foot",
          paragraphs: [
            "Athlete's foot is a rash caused by a fungus, usually between the toes. The skin becomes itchy, red, scaly, dry, cracked or blistered. The fungi feed on the dead skin and keratin in your skin, growing fastest where it is warm and damp, and damage the cells as they grow.",
            "It is not usually serious, but it should be treated so that it does not spread to other parts of the body or to other people. Scratching the rash and then touching other parts of your body can spread it. To prevent it, keep your feet clean and dry, do not share towels, socks or shoes, and do not walk barefoot in public changing rooms. Treatment is with antifungal creams, sprays or liquids from a pharmacy."
          ],
          tip: "Athlete's foot is in the deck but not in the AQA specification; the examined fungal disease is rose black spot. Learn athlete's foot as a second example of how fungal diseases spread and are treated."
        },
        {
          heading: "Malaria: a protist with a vector",
          paragraphs: [
            "The pathogens that cause malaria are protists called Plasmodium. The protist's life cycle includes the mosquito. When an infected mosquito feeds on a person, it passes Plasmodium into their blood. The protist travels to the liver, multiplies inside liver cells and bursts out of them, then infects red blood cells, reproducing inside them until they too burst and release more protists. If another mosquito bites the infected person, it picks up the protist and can carry it to someone else. The mosquito is the vector.",
            "The bursting of red blood cells causes recurrent episodes of fever, with sweats and chills, headaches, vomiting and diarrhoea. The blood also loses some of its ability to carry oxygen. Malaria can be fatal if it is not treated quickly.",
            "The spread of malaria is controlled by stopping the vector: preventing mosquitoes from breeding by removing stagnant water, and avoiding bites by sleeping under mosquito nets, wearing long sleeves and trousers and using insect repellent. Antimalarial medicines can be taken before, during and after a visit to an area with malaria; they stop Plasmodium infecting the liver or red blood cells, or destroy it directly."
          ],
          worked: {
            q: "Explain how sleeping under a mosquito net reduces the spread of malaria. (3 marks)",
            steps: [
              "Name the vector and what it does: mosquitoes carry the Plasmodium protist and pass it on when they bite.",
              "Say what the net does: it stops mosquitoes reaching the sleeper, so they cannot bite.",
              "Link to spread in both directions: an uninfected person is not given the protist, and an infected person cannot pass it on to a mosquito that would carry it to someone else."
            ],
            answer: "Malaria is spread by mosquitoes, the vector, when they bite; the net stops mosquitoes biting the sleeper, so the protist is neither passed to the sleeper nor picked up from them to be carried to another person."
          }
        },
        {
          heading: "Comparing treatments",
          paragraphs: [
            "Each type of pathogen needs a different kind of treatment. Bacterial diseases can be treated with antibiotics, which kill bacteria, though resistant strains are a growing problem. Viral diseases cannot be treated with antibiotics; antiviral drugs slow the virus by stopping it replicating, and vaccination prevents many viral diseases.",
            "Fungal diseases are treated with antifungal creams in people and with fungicides in plants, and by removing infected material. Protist diseases such as malaria are treated with antimalarial drugs, but the most powerful tool is controlling the vector so that the protist cannot move from person to person."
          ],
          tip: "Match the drug to the pathogen: antibiotic to bacterium, antiviral to virus, antifungal or fungicide to fungus, antimalarial to protist."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which type of pathogen causes rose black spot?", options: ["A fungus", "A virus", "A bacterium", "A protist"], answer: 0, why: "Rose black spot is a fungal disease spread by water or wind, treated with fungicides and by removing infected leaves.",
          feedback: [
            "",
            "The plant virus in this unit is tobacco mosaic virus, which gives leaves a mosaic pattern. Rose black spot, with its purple or black spots and yellowing leaves, is caused by a fungus.",
            "Salmonella and gonorrhoea are the bacterial diseases in this unit. Rose black spot is a fungal disease; that is why it is treated with a fungicide.",
            "The protist disease in this unit is malaria, carried by mosquitoes. Rose black spot is caused by a fungus spread by water or wind."
          ] },
        { kind: "gap", q: "Malaria is caused by a protist called ___.", answer: "Plasmodium", options: ["Plasmodium", "Salmonella", "dermatophyte"], why: "Plasmodium is the protist that causes malaria. Its life cycle includes the mosquito, which carries it from person to person.",
          feedback: {
            "Salmonella": "Salmonella is a bacterium spread in food that causes food poisoning. The protist that causes malaria is Plasmodium.",
            "dermatophyte": "Dermatophytes are the fungi that cause athlete's foot by feeding on dead skin. Malaria is caused by a protist, Plasmodium."
          } },
        { kind: "mcq", q: "How does rose black spot reduce the growth of a rose plant?", options: ["Leaves drop early, so less photosynthesis takes place", "The fungus eats the roots, so the plant cannot take up water", "The flowers cannot make pollen", "The stem is blocked, so water cannot reach the leaves"], answer: 0, why: "The spotted leaves turn yellow and drop early, so the plant has less leaf area for photosynthesis and makes less food.",
          feedback: [
            "",
            "Rose black spot attacks the leaves, not the roots: the spots appear on the leaves, which turn yellow and drop. Losing leaves means less photosynthesis, which is why growth is reduced.",
            "The disease is about leaves, not flowers. Fewer, damaged leaves means less photosynthesis, so the plant makes less food and grows less.",
            "Nothing blocks the stem in rose black spot. The damage is to the leaves, which drop early, so less photosynthesis takes place and growth is reduced."
          ] }
      ],
      modules: [
        {
          title: "The life cycle of Plasmodium",
          task: {
            kind: "order",
            q: "Put the stages of the malaria life cycle in the correct order, starting with the bite.",
            items: [
              "An infected mosquito bites a person",
              "Plasmodium travels in the blood to the liver",
              "It reproduces inside liver cells and bursts out of them",
              "It infects red blood cells and keeps reproducing",
              "Infected red blood cells burst, causing fever and chills",
              "Another mosquito bites the person and picks up the protist"
            ]
          },
          explain: "Say, in one sentence, why killing mosquitoes breaks this cycle.",
          levels: {
            support: {
              steps: [
                "The cycle starts with the vector putting the protist into a person: the bite.",
                "The protist goes to one organ first, then to the blood cells. Which organ does the deck name?",
                "Fever happens when the blood cells burst.",
                "The cycle ends when a new mosquito picks the protist up to carry it on."
              ],
              example: {
                q: "Put these stages of a cold spreading in order: the virus reproduces in the new person's cells; a person with a cold sneezes; the new person sneezes and passes it on; someone nearby breathes in the droplets.",
                steps: ["Start with the person who already has it: the sneeze.", "Then the droplets are breathed in.", "The virus reproduces before the new person has symptoms.", "Finally the new person passes it on."],
                answer: "A person with a cold sneezes; someone breathes in the droplets; the virus reproduces in their cells; they sneeze and pass it on."
              }
            },
            core: { hint: "Bite, liver, blood cells, fever, next mosquito." },
            stretch: { extend: "Antimalarial drugs stop Plasmodium infecting the liver or red blood cells. Say which stages of the cycle they interrupt, and why the drugs are taken before, during and after a visit to a malaria area." }
          },
          why: "The mosquito bite delivers Plasmodium; it multiplies in the liver, then in red blood cells; bursting red blood cells cause the fever; another mosquito picks up the protist and carries it on."
        },
        {
          title: "Stopping the vector breeding",
          task: {
            kind: "mcq",
            q: "A village removes all the containers and puddles of stagnant water where mosquitoes lay their eggs. How does this reduce the spread of malaria?",
            options: [
              "It stops the vector breeding, so fewer mosquitoes carry the protist from person to person",
              "It kills the Plasmodium protist directly",
              "It stops people being bitten while they sleep",
              "It makes people immune to the protist"
            ],
            answer: 0,
            feedback: [
              "",
              "Removing water does nothing to the protist itself, which lives inside mosquitoes and people. It works on the vector: with nowhere to lay eggs, fewer mosquitoes hatch, so fewer can carry Plasmodium between people.",
              "Mosquito nets, long sleeves and repellent stop bites. Removing stagnant water works earlier in the chain: mosquitoes cannot breed, so there are fewer of them to bite anyone at all.",
              "Nothing here changes a person's body; there is no vaccine involved. The method controls the vector by stopping mosquitoes breeding, so fewer of them can carry the protist."
            ]
          },
          contexts: [
            { label: "A campsite", q: "The owners of a campsite drain a marshy pond where mosquitoes breed. How does this reduce the spread of malaria?" },
            { label: "A city", q: "A city council clears blocked drains and old tyres full of rainwater where mosquitoes lay their eggs. How does this reduce the spread of malaria?" },
            { label: "A rice farm", q: "A farmer stops leaving pools of stagnant water standing between the rice fields where mosquitoes breed. How does this reduce the spread of malaria?" }
          ],
          explain: "Say, in one sentence, the difference between stopping the vector breeding and avoiding being bitten.",
          levels: {
            support: {
              steps: [
                "Where do mosquitoes lay their eggs? In stagnant water.",
                "If the water is removed, what happens to the number of new mosquitoes? It falls.",
                "Mosquitoes are the vector: they carry Plasmodium from person to person.",
                "Fewer mosquitoes means fewer chances for the protist to be carried."
              ],
              example: {
                q: "A family in a malaria area sleeps under mosquito nets every night. How does this reduce the spread of malaria?",
                steps: ["The net keeps mosquitoes away from the sleepers.", "So the vector cannot bite them.", "So the protist is not passed to them, and cannot be picked up from them."],
                answer: "It stops the vector biting, so Plasmodium is not passed to or from the sleepers."
              }
            },
            core: { hint: "The method acts on the mosquito, not on the protist or the person. At which stage of the mosquito's life?" },
            stretch: { extend: "Explain why controlling the vector can protect a whole village, whereas antimalarial tablets protect only the person who takes them." }
          },
          why: "Mosquitoes breed in stagnant water. Removing it stops the vector breeding, so fewer mosquitoes are around to carry Plasmodium from one person to another."
        },
        {
          title: "Pathogen and treatment",
          task: {
            kind: "match",
            q: "Match each disease to its type of pathogen and how it is treated or controlled.",
            pairs: [
              ["Rose black spot", "Fungus; treated with fungicide and by removing and destroying infected leaves"],
              ["Athlete's foot", "Fungus; antifungal cream, and keeping feet clean and dry"],
              ["Malaria", "Protist; mosquito nets, stopping mosquitoes breeding, antimalarial drugs"],
              ["Tobacco mosaic virus", "Virus; no treatment, so resistant plant strains and field hygiene are used"]
            ]
          },
          explain: "Say, in one sentence, why there is a chemical treatment for the fungal diseases but not for the viral one.",
          levels: {
            support: {
              steps: [
                "Two of the four are fungi: the one on roses and the one on feet.",
                "Fungi are treated with fungicide (plants) or antifungal cream (people).",
                "Malaria is the protist: look for mosquitoes.",
                "The virus has no treatment, so look for 'resistant strains'."
              ],
              example: {
                q: "Match: gonorrhoea; measles. Facts: virus, prevented by vaccination; bacterium, treated with antibiotics.",
                steps: ["Gonorrhoea is bacterial, so antibiotics treat it.", "Measles is viral, so it is prevented by vaccination rather than treated with antibiotics."],
                answer: "Gonorrhoea: bacterium, antibiotics. Measles: virus, vaccination."
              }
            },
            core: { hint: "Fungus, fungus, protist, virus. Then: fungicide, antifungal, nets and drugs, no treatment." },
            stretch: { extend: "Compare how effectively each type of disease (bacterial, viral, fungal, protist) can be treated once a person or plant is infected, using one example of each from this unit." }
          },
          why: "Rose black spot and athlete's foot are fungal (fungicide; antifungal cream); malaria is a protist disease controlled by vector control and antimalarial drugs; TMV is viral with no treatment, so resistant strains and hygiene are used."
        }
      ]
    }
  ],

  sources: {
    deckDump: "sc_ks4_sep_b5_triple.txt",
    decksUsed: [
      "B5.1- Health-and-disease.pptx",
      "B5.2- 9V5-Pathogens-080617.pptx",
      "B5.3-Growing-bacteria-in-the-lab.pptx",
      "B5.4-Preventing-bacterial-growth.pptx",
      "B5.5- Preventing infections.pptx",
      "B5.6 and 5.7- Bac-Vi-disease-PPT.pptx",
      "B5.8- fungi and protist lesson.pptx"
    ],
    notes: "Lesson titles and order from the seven department decks (B5.6 and B5.7 are one deck and are counted as one lesson). House furniture skipped (settler/silent-starter timers, 'Link to specification' placeholders, homework and peer-assessment slides, the research-poster table with pupil-name placeholders, the celebrity-illness video prompt). Board answers on question slides were used only to see what the deck teaches; no answer slide is reproduced. B5.3 and B5.4 are marked Biology only in the deck and in this manifest (AQA 8461 4.1.1.6 Culturing microorganisms / Required practical 2, not in 8464). Human defence systems (4.3.1.6), vaccination as a topic in its own right (4.3.1.7), antibiotics and painkillers (4.3.1.8), drug discovery (4.3.1.9) and plant diseases and defences (4.3.3) are NOT in this dump and are not built; vaccination appears only at the depth the B5.5 and B5.6/7 decks give it. Where a deck statement is inaccurate it was corrected or left out: see NOTES.md. All calculations (binary fission doublings, zone-of-inhibition areas, vaccination percentages) are recomputed by verify.py; disease facts are checked against an independent fact table in verify.py. No pretext.l1 (home-language lines are added by a separate translation pass)."
  }
};
