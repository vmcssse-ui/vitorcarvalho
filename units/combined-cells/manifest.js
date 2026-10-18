// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Combined Science: Trilogy 8464 · Biology B1 Cell Biology · schema astra/2
//
// MACHINE CHECKS (recomputed by verify.py in this folder):
//   check:"<python expression>"  on every numeric item, every computable mcq, and every worked / example
//                                answer that contains a number. verify.py evaluates it and compares it with
//                                `answer` (numeric: within `tolerance`; worked: the first number in the answer
//                                string, which must be correctly rounded; mcq: exactly one option matches).
//   misconceptions[].check       (astra/2) every wrong answer offered as a misconception carries the arithmetic
//                                that produces it; verify.py confirms it reproduces `answer` and differs from the
//                                right answer, so the "says" text names a real slip, not an invented one.
//   contexts[].q                 (astra/2) numeric tasks: carry exactly the same numbers as the task q (checked as
//                                a multiset), so the shared answer is right by construction; mcq tasks: end in "?".
//   ANSWER KEY / CANON           every mcq and gap answer is checked against an independent key held in verify.py;
//                                every order task against a canonical sequence held there.
//   Content is Combined Science (8464) only. The decks contain no Biology-only (8461) content (culturing
//   microorganisms, 4.1.1.6, is not in the dump); nothing had to be marked. See NOTES.md.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["combined-cells"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "combined-cells",
    subjectKey: "combined",
    subject: "Biology (Combined Science)",
    board: "AQA",
    spec: "8464",
    specRef: "Biology 4.1.1 Cell structure (eukaryotes and prokaryotes, animal and plant cells, cell specialisation and differentiation, microscopy) and 4.1.3 Transport in cells (diffusion, osmosis, active transport)",
    year: 10,
    tier: "GCSE Higher and Foundation",
    title: "Cell Biology",
    sub: "From the microscope that lets you see a cell to the three ways substances move in and out of it.",
    bigQuestion: "What is a cell made of, and how does it get what it needs?",
    lessonCount: 8,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Microscopes and magnification", question: "How do we see cells, and how do we work out how big they really are?", keywords: ["microscope", "magnification", "resolution", "light microscope", "electron microscope", "micrometres", "nanometres"] },
    { n: 2, title: "Animal and plant cells", question: "What are the parts of animal and plant cells, and what does each part do?", keywords: ["nucleus", "cytoplasm", "cell membrane", "mitochondria", "ribosomes", "cell wall", "cellulose", "chloroplasts", "chlorophyll", "vacuole"] },
    { n: 3, title: "Eukaryotic and prokaryotic cells", question: "How is a bacterial cell different from an animal or plant cell?", keywords: ["prokaryote", "eukaryote", "bacteria", "plasmid", "flagella", "slime capsule", "genetic material", "DNA"] },
    { n: 4, title: "Specialised animal cells", question: "How are animal cells adapted to do a particular job?", keywords: ["specialised", "nerve", "muscle", "sperm", "myelin sheath", "mitochondria", "acrosome", "glycogen"] },
    { n: 5, title: "Specialisation in plant cells", question: "How are plant cells adapted to do a particular job?", keywords: ["xylem", "phloem", "lignin", "root hair cell", "palisade cell", "surface area", "minerals"] },
    { n: 6, title: "Diffusion", question: "What is diffusion, and what makes it faster or slower?", keywords: ["net movement", "concentration gradient", "particles", "surface area", "solute", "solution", "microvilli"] },
    { n: 7, title: "Osmosis", question: "What happens to animal and plant cells in dilute and concentrated solutions?", keywords: ["partially permeable", "hypotonic", "hypertonic", "isotonic", "plasmolysed", "turgid", "dilute", "concentrated"] },
    { n: 8, title: "Active transport", question: "How do cells move substances against a concentration gradient?", keywords: ["active transport", "concentration gradient", "root hair cell", "minerals", "uptake", "respiration"] }
  ],

  glossary: [
    { term: "magnification", means: "How many times bigger an image is than the real object: image size ÷ real size.", chapter: "microscopes-and-magnification" },
    { term: "resolution", means: "The ability to see two points that are close together as separate; higher resolution means finer detail.", chapter: "microscopes-and-magnification" },
    { term: "electron microscope", means: "A microscope that uses a beam of electrons instead of light, giving much higher magnification and resolution.", chapter: "microscopes-and-magnification" },
    { term: "micrometre", means: "A unit for measuring cells, written µm; there are 1000 micrometres in 1 millimetre.", chapter: "microscopes-and-magnification" },
    { term: "nucleus", means: "The part of a eukaryotic cell that controls its activities and contains its DNA.", chapter: "animal-and-plant-cells" },
    { term: "chloroplast", means: "The part of a plant cell where photosynthesis happens; it contains the green pigment chlorophyll.", chapter: "animal-and-plant-cells" },
    { term: "plasmid", means: "A small ring of extra DNA found in a bacterial cell.", chapter: "prokaryotes-and-eukaryotes" },
    { term: "flagellum", means: "A tail-like structure that a bacterium uses to move.", chapter: "prokaryotes-and-eukaryotes" },
    { term: "sperm cell", means: "A specialised cell with a tail and many mitochondria, adapted to swim to the egg cell.", chapter: "specialised-cells" },
    { term: "nerve cell", means: "A long, thin specialised cell that carries electrical impulses around the body.", chapter: "specialised-cells" },
    { term: "root hair cell", means: "A plant root cell with a long hair that gives a large surface area for taking in water and mineral ions.", chapter: "specialised-cells" },
    { term: "xylem", means: "Hollow tubes of dead cells, strengthened with lignin, that carry water and mineral ions up a plant.", chapter: "specialised-cells" },
    { term: "diffusion", means: "The net movement of particles from a higher concentration to a lower concentration; it needs no energy from the cell.", chapter: "diffusion" },
    { term: "concentration gradient", means: "The difference in concentration between two places; the steeper it is, the faster diffusion happens.", chapter: "diffusion" },
    { term: "osmosis", means: "The movement of water from a dilute solution to a concentrated solution through a partially permeable membrane.", chapter: "osmosis-and-active-transport" },
    { term: "active transport", means: "Moving particles from a lower to a higher concentration, against the gradient, using energy from respiration.", chapter: "osmosis-and-active-transport" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 drawn from the glossary above.
  connections: [
    { group: "Seeing and measuring cells", terms: ["magnification", "resolution", "electron microscope", "micrometre"] },
    { group: "Structures inside or on a cell", terms: ["nucleus", "chloroplast", "plasmid", "flagellum"] },
    { group: "Specialised cells", terms: ["sperm cell", "nerve cell", "root hair cell", "xylem"] },
    { group: "How substances move", terms: ["diffusion", "concentration gradient", "osmosis", "active transport"] }
  ],

  chapters: [
    /* ───────────── 1 · microscopes and magnification ───────────── */
    {
      key: "microscopes-and-magnification", n: 1, title: "Microscopes and magnification",
      lead: "This chapter gives you the tools for seeing cells: two kinds of microscope, the units cells are measured in, and the magnification equation.",
      covers: [1],
      pretext: {
        words: [
          { word: "microscope", means: "an instrument that makes very small things look bigger", sentence: "We used a microscope to look at cells from an onion." },
          { word: "magnification", means: "how many times bigger the image is than the real object", sentence: "At a magnification of 400, the cell looked 400 times bigger than it really is." },
          { word: "resolution", means: "how much fine detail a microscope can show", sentence: "An electron microscope has a higher resolution, so it shows more detail." },
          { word: "micrometre", means: "a unit for measuring cells; a thousand of them make one millimetre", sentence: "The cell was about fifty micrometres wide." },
          { word: "electron microscope", means: "a microscope that uses a beam of electrons instead of light", sentence: "The electron microscope showed the tiny ribosomes inside the cell." }
        ],
        passage: [
          "Cells are too small to see with your eyes alone.",
          "A microscope makes a tiny object look much bigger.",
          "How many times bigger it looks is called the magnification.",
          "A light microscope uses light and glass lenses.",
          "It can magnify a cell up to about two thousand times.",
          "An electron microscope uses a beam of electrons instead of light.",
          "It can magnify many thousands of times more.",
          "It also shows much finer detail, which we call resolution.",
          "Cells are measured in micrometres.",
          "There are one thousand micrometres in one millimetre.",
          "To find the magnification, divide the image size by the real size.",
          "To find the real size, divide the image size by the magnification."
        ]
      },
      sections: [
        {
          heading: "Light microscopes and electron microscopes",
          paragraphs: [
            "A light microscope shines light through a thin specimen on a glass slide and uses two lenses to make it look bigger. You look through the eyepiece lens; the objective lens sits just above the slide, which rests on the stage. The coarse focus knob moves the stage up and down quickly; the fine focus knob makes small changes so the image is sharp. Light microscopes were first used in the seventeenth century, and a good school microscope today magnifies up to about 400 times. The best light microscopes reach about 1500 to 2000 times.",
            "Two words describe how good a microscope is. Magnification is how many times bigger the image is than the real object. Resolution, also called resolving power, is the ability to see two points that are very close together as two separate points. A light microscope cannot separate points closer than about 200 nanometres, however much you magnify, because of the way light behaves. Mitochondria and ribosomes are too small to be seen clearly.",
            "An electron microscope uses a beam of electrons instead of light. Electrons give a far higher resolution and a magnification of up to about two million times. With it, scientists have seen the inside of mitochondria, the structure of ribosomes and the detail of the cell membrane, which has transformed how we understand cells. The cost is high: electron microscopes are very expensive, need a trained operator, are large, and the specimen must be dead and dried, because the beam travels through a vacuum."
          ],
          tip: "Magnification = how big it looks. Resolution = how much detail you can see. More magnification without more resolution just gives you a bigger blur."
        },
        {
          heading: "Units: millimetres, micrometres and nanometres",
          paragraphs: [
            "Cells are measured in units smaller than the millimetres on your ruler. There are 10 millimetres (mm) in a centimetre, 1000 micrometres (µm) in a millimetre, and 1000 nanometres (nm) in a micrometre. The symbol µ is the Greek letter mu, and µm is said as micrometre or micron.",
            "To change millimetres into micrometres, multiply by 1000. To change micrometres back into millimetres, divide by 1000. A typical animal cell is between about 10 µm and 100 µm across; a bacterium is about 1 µm to 2 µm, roughly ten times smaller than an animal cell.",
            "Before you use the magnification equation, put both sizes into the same unit. The commonest exam slip is to divide millimetres by micrometres and get an answer a thousand times too big or too small."
          ],
          worked: {
            q: "A cheek cell is 0.05 mm wide. Write its width in micrometres.",
            steps: [
              "Remember the link: 1 mm = 1000 µm.",
              "Going from millimetres to micrometres, multiply by 1000.",
              "0.05 × 1000 = 50 µm."
            ],
            answer: "50 µm",
            check: "0.05 * 1000"
          },
          tip: "mm → µm: multiply by 1000. µm → mm: divide by 1000. Smaller unit, bigger number."
        },
        {
          heading: "Calculating magnification",
          paragraphs: [
            "The magnification tells you how many times bigger the image is than the real object, so you divide the size of the image by the real size: magnification = image size ÷ real size. Real size is also called actual size.",
            "Magnification has no unit. Write it with a multiplication sign in front, such as ×200, which means two hundred times bigger. Measure the image with a ruler, in millimetres, and make sure the real size is in millimetres too before you divide.",
            "Draw the equation as a triangle if it helps: image size on top, magnification and real size underneath. Cover the one you want and the triangle shows you whether to multiply or divide."
          ],
          worked: {
            q: "A drawing of an onion cell is 20 mm long. The real cell is 0.1 mm long. Calculate the magnification of the drawing.",
            steps: [
              "Write the equation: magnification = image size ÷ real size.",
              "Check the units: both sizes are in millimetres, so no conversion is needed.",
              "Substitute: magnification = 20 ÷ 0.1.",
              "Calculate: magnification = ×200."
            ],
            answer: "×200",
            check: "20 / 0.1"
          },
          tip: "Image over real. The image is always the bigger number, so the magnification is always more than 1."
        },
        {
          heading: "Finding the real size",
          paragraphs: [
            "Often you know how big a cell looks and the magnification, and you want its real size. Rearrange the equation: real size = image size ÷ magnification. The image size divided by how many times it has been magnified gives you the size it started with.",
            "The answer comes out in the same unit as the image size. If you measured the image in millimetres, your real size is in millimetres. The question may then ask for it in micrometres, so multiply by 1000 at the end.",
            "Always show your working: equation, numbers substituted, answer with its unit. Even if you slip on the arithmetic, a clear method earns marks."
          ],
          worked: {
            q: "Under the microscope at ×300, a plant cell appears 15 mm long. Calculate its real length in millimetres, then give it in micrometres.",
            steps: [
              "Rearrange: real size = image size ÷ magnification.",
              "Substitute: real size = 15 ÷ 300 = 0.05 mm.",
              "Change to micrometres: 0.05 × 1000 = 50 µm."
            ],
            answer: "0.05 mm, which is 50 µm",
            check: "15 / 300"
          },
          tip: "Cover 'real size' in the triangle: image size over magnification, so divide."
        }
      ],
      gate: [
        { kind: "numeric", q: "A drawing of a cell is 30 mm wide. The real cell is 0.2 mm wide. Calculate the magnification of the drawing.", answer: 150, tolerance: 0, units: "×", check: "30 / 0.2", why: "Magnification = image size ÷ real size = 30 ÷ 0.2 = ×150 (exact, both sizes already in mm).",
          misconceptions: [
            { answer: 0.0067, check: "0.2 / 30", says: "You divided the real size by the image size, the wrong way up. Magnification = image ÷ real = 30 ÷ 0.2 = ×150. A magnification is always bigger than 1." },
            { answer: 6, check: "30 * 0.2", says: "You multiplied the two sizes. Magnification is a division: image size ÷ real size = 30 ÷ 0.2 = ×150." },
            { answer: 30.2, check: "30 + 0.2", says: "You added the two sizes. Magnification asks how many times bigger the image is, so divide: 30 ÷ 0.2 = ×150." }
          ] },
        { kind: "mcq", q: "How many micrometres are there in 1 mm?", options: ["10 µm", "100 µm", "1000 µm", "10 000 µm"], answer: 2, check: "1000", why: "1 mm = 1000 µm. Micrometres are a thousand times smaller than millimetres, so there are a thousand of them in one millimetre.",
          feedback: [
            "You used the centimetre-to-millimetre link (×10). Millimetres to micrometres is a bigger jump: 1 mm = 1000 µm.",
            "You used the metre-to-centimetre link (×100). Millimetres to micrometres is ×1000: 1 mm = 1000 µm.",
            "",
            "That is how many micrometres are in a centimetre (10 mm × 1000). In one millimetre there are 1000 µm."
          ] },
        { kind: "gap", q: "Resolution is the ability to tell two points apart as ___ structures.", answer: "separate", options: ["separate", "magnified", "coloured"], why: "Resolution (resolving power) is about seeing two close points as two separate things. It is not the same as magnification.",
          feedback: {
            "magnified": "You have mixed resolution up with magnification. Magnification makes things look bigger; resolution is being able to see two close points as separate, which is about detail, not size.",
            "coloured": "Colour has nothing to do with resolution. Resolution is the ability to see two close points as separate points, so that fine detail is clear."
          } }
      ],
      modules: [
        {
          title: "Calculate the magnification",
          task: { kind: "numeric", q: "A student draws a cheek cell 24 mm wide. The real cell is 0.06 mm wide. Calculate the magnification of the drawing.", answer: 400, tolerance: 0, units: "×", check: "24 / 0.06", why: "Both sizes are in mm. Magnification = 24 ÷ 0.06 = ×400 (exact).",
            misconceptions: [
              { answer: 0.0025, check: "0.06 / 24", says: "You divided real by image, the wrong way up. Magnification = image ÷ real = 24 ÷ 0.06 = ×400. If your answer is less than 1, the division is upside down." },
              { answer: 1.44, check: "24 * 0.06", says: "You multiplied the two sizes. Magnification is image size ÷ real size: 24 ÷ 0.06 = ×400." },
              { answer: 4, check: "24 / 6", says: "You seem to have used 6 mm instead of 0.06 mm. Check the decimal point: 24 ÷ 0.06 = ×400." }
            ] },
          contexts: [
            { label: "Onion cell", q: "A drawing of an onion skin cell is 24 mm long. The real cell is 0.06 mm long. Calculate the magnification of the drawing." },
            { label: "Pollen grain", q: "In a photograph taken through a microscope, a pollen grain is 24 mm across. The real grain is 0.06 mm across. Calculate the magnification of the photograph." },
            { label: "Yeast cells", q: "A diagram shows a clump of yeast cells 24 mm wide. The real clump is 0.06 mm wide. Calculate the magnification of the diagram." }
          ],
          levels: {
            support: {
              steps: ["Write the equation: magnification = image size ÷ real size.", "Check both sizes are in the same unit (here both are mm).", "Divide the image size by the real size and write × in front of the answer."],
              example: { q: "A drawing of a cell is 18 mm long. The real cell is 0.09 mm long. Calculate the magnification.", steps: ["Magnification = image ÷ real.", "Both in mm, so no conversion.", "18 ÷ 0.09 = ×200."], answer: "×200", check: "18 / 0.09" }
            },
            core: { hint: "Image over real. Both numbers are already in millimetres." },
            stretch: { extend: "The same student draws the same cell again, this time 36 mm wide. Without redoing the division from scratch, state the new magnification and explain how you know." }
          },
          why: "Magnification = image size ÷ real size = 24 ÷ 0.06 = ×400.",
          explain: "Say why the magnification had to come out bigger than 1, and what an answer less than 1 would have told you."
        },
        {
          title: "Find the real size in micrometres",
          task: { kind: "numeric", q: "A cell appears 36 mm long when viewed at a magnification of ×900. Calculate the real length of the cell in micrometres.", answer: 40, tolerance: 0, units: "µm", check: "36 / 900 * 1000", why: "Real size = image ÷ magnification = 36 ÷ 900 = 0.04 mm; 0.04 × 1000 = 40 µm (exact).",
            misconceptions: [
              { answer: 0.04, check: "36 / 900", says: "That is the right real size, but in millimetres. The question asks for micrometres: 0.04 mm × 1000 = 40 µm." },
              { answer: 32400, check: "36 * 900", says: "You multiplied the image size by the magnification. To get back to the real size you divide: 36 ÷ 900 = 0.04 mm = 40 µm." },
              { answer: 25, check: "900 / 36", says: "You divided the magnification by the image size, the wrong way up. Real size = image ÷ magnification = 36 ÷ 900 = 0.04 mm, which is 40 µm." }
            ] },
          contexts: [
            { label: "Cheek cell", q: "A cheek cell appears 36 mm across in a photograph taken at a magnification of ×900. Calculate the real width of the cell in micrometres." },
            { label: "Leaf cell", q: "A cell from a leaf looks 36 mm long through a microscope set to ×900. Calculate the real length of the cell in micrometres." },
            { label: "Moss cell", q: "A moss leaf cell is drawn 36 mm long at a magnification of ×900. Calculate the real length of the cell in micrometres." }
          ],
          levels: {
            support: {
              steps: ["Rearrange: real size = image size ÷ magnification.", "Divide: the answer is in the same unit as the image (mm).", "Change mm to µm by multiplying by 1000."],
              example: { q: "A cell looks 20 mm long at ×500. Find its real length in micrometres.", steps: ["Real size = 20 ÷ 500 = 0.04 mm.", "0.04 × 1000 = 40 µm."], answer: "40 µm", check: "20 / 500 * 1000" }
            },
            core: { hint: "Divide first to get millimetres, then multiply by 1000 for micrometres." },
            stretch: { extend: "A bacterium is about 2 µm long. How many of them would fit end to end across this cell? Explain how the answer shows the difference in size between the two kinds of cell." }
          },
          why: "36 ÷ 900 = 0.04 mm. 1 mm = 1000 µm, so 0.04 mm = 40 µm.",
          explain: "Say why you divided by the magnification, and why the answer then needed multiplying by 1000."
        },
        {
          title: "Light or electron microscope?",
          task: { kind: "written", q: "A school wants to look at living pond organisms. A research laboratory wants to study the structure of mitochondria. Evaluate which type of microscope suits each one, using your knowledge of light and electron microscopes.", marks: 6,
            criteria: [
              "States that electron microscopes have a much higher magnification than light microscopes.",
              "States that electron microscopes have a much higher resolution, so they show sub-cellular detail such as the inside of mitochondria.",
              "Points out that an electron microscope cannot view living specimens (specimens must be dead and in a vacuum), so a light microscope is needed for living pond organisms.",
              "Mentions cost and ease of use: light microscopes are cheap and simple; electron microscopes are expensive and need trained staff.",
              "Gives a clear judgement for each user (school: light microscope; laboratory: electron microscope).",
              "Links each judgement to a reason, rather than listing facts."
            ],
            model: "The school should use a light microscope. It is cheap, simple to use, and can view living specimens, so the pond organisms can be watched moving. Its resolution is low, but the school only needs to see whole organisms and cells. The laboratory should use an electron microscope. Mitochondria are far too small to be seen in detail with light, but an electron microscope has a much higher magnification and resolution, so the internal structure of a mitochondrion can be studied. The specimen will have to be dead and prepared in a vacuum, and the microscope is expensive and needs a trained operator, but for this research the detail is worth it." },
          levels: {
            support: {
              steps: ["Write down two differences in what each microscope can do (magnification, resolution).", "Write down two practical differences (living or dead specimen, cost and skill).", "Give a decision for each user, each with a reason."],
              example: { q: "A hospital wants to count red blood cells in a sample quickly and cheaply. Which microscope should it use, and why?", steps: ["Red blood cells are about 7 µm across, big enough to see with light.", "A light microscope is cheap, quick to set up and simple to use.", "An electron microscope would show more detail but is slow, costly and needs trained staff."], answer: "A light microscope: the cells are large enough to see, and it is quick, cheap and simple." }
            },
            core: { hint: "Six marks: two differences in what you can see, two practical differences, one decision for each user with a reason." },
            stretch: { extend: "Explain why increasing the magnification of a light microscope beyond about ×2000 does not help you see ribosomes." }
          },
          why: "A full answer compares magnification and resolution, notes that electron microscopes cannot view living specimens and are costly and complex, and gives a reasoned choice for each user.",
          explain: "Say, in one sentence, why resolution rather than magnification is the reason the laboratory needs an electron microscope."
        }
      ]
    },

    /* ───────────── 2 · animal and plant cells ───────────── */
    {
      key: "animal-and-plant-cells", n: 2, title: "Animal and plant cells",
      lead: "This chapter names the parts of animal and plant cells, says what each part does, and takes you through the microscopy required practical.",
      covers: [2],
      pretext: {
        words: [
          { word: "cell", means: "the smallest living part of a living thing", sentence: "Your body is made of trillions of cells." },
          { word: "nucleus", means: "the part that controls the cell and holds the DNA", sentence: "The nucleus was stained dark so we could see it." },
          { word: "cytoplasm", means: "the jelly inside the cell where chemical reactions happen", sentence: "Most of the cell's reactions happen in the cytoplasm." },
          { word: "membrane", means: "the thin skin around the cell that controls what goes in and out", sentence: "Oxygen passes through the cell membrane into the cell." },
          { word: "chloroplast", means: "the green part of a plant cell where food is made", sentence: "Leaf cells are packed with chloroplasts." },
          { word: "vacuole", means: "a space inside a plant cell filled with a watery liquid called sap", sentence: "The vacuole keeps the plant cell firm." }
        ],
        passage: [
          "Every living thing is made of cells.",
          "A cell is the smallest living part of a body.",
          "Animal cells and plant cells share some parts.",
          "The nucleus controls the cell and holds the DNA.",
          "The cytoplasm is a jelly where chemical reactions happen.",
          "The cell membrane controls what goes in and out.",
          "Mitochondria release energy from food by respiration.",
          "Ribosomes make proteins.",
          "Plant cells have three extra parts.",
          "A cell wall made of cellulose gives the plant cell its shape and strength.",
          "Chloroplasts hold green chlorophyll and make food by photosynthesis.",
          "A permanent vacuole stores sap and keeps the cell firm.",
          "We can see plant cells by looking at a thin piece of onion."
        ]
      },
      sections: [
        {
          heading: "What every animal and plant cell has",
          paragraphs: [
            "A cell is the smallest unit of life. Animal and plant cells are eukaryotic cells: they keep their DNA inside a nucleus and contain small structures with particular jobs, called organelles, which means little organs. Five parts are found in both animal and plant cells.",
            "The nucleus controls the cell's activities and contains the genetic material, DNA, arranged in chromosomes. The cytoplasm is a jelly-like liquid in which most of the cell's chemical reactions take place. The cell membrane surrounds the cytoplasm and controls which substances enter and leave the cell.",
            "Mitochondria are where aerobic respiration happens; they release the energy the cell needs from glucose. Cells that use a lot of energy, such as muscle cells, have many mitochondria. Ribosomes are tiny structures where proteins are made, by joining amino acids together. Ribosomes are so small that they can only be seen with an electron microscope."
          ],
          tip: "Mitochondria RELEASE energy; they do not make it. Energy is transferred from the chemical store in glucose."
        },
        {
          heading: "What plant cells have as well",
          paragraphs: [
            "Plant cells, and the cells of algae, have three parts that animal cells never have. The cell wall is a tough layer outside the membrane, made of cellulose. It strengthens the cell, gives it a fixed shape and stops it bursting when it takes in water.",
            "Chloroplasts are disc-shaped organelles containing the green pigment chlorophyll. Chlorophyll absorbs light, and the chloroplast uses that light to make glucose from carbon dioxide and water in photosynthesis. Only plant cells that receive light have chloroplasts: leaf cells are full of them, but root cells and the pale inner layers of an onion bulb have none.",
            "The permanent vacuole is a large space in the middle of the cell filled with cell sap, a solution of sugars and salts. It pushes the cytoplasm against the wall and keeps the cell firm, or turgid, which helps the plant stay upright."
          ],
          worked: {
            q: "A student sees cells with a cell wall and a nucleus but no chloroplasts. Are they plant cells? Suggest where in the plant they came from.",
            steps: [
              "A cell wall is found in plant (and algal) cells and never in animal cells, so these are plant cells.",
              "Chloroplasts are only in cells that get light; roots and the inside of a bulb are in the dark.",
              "So the cells are plant cells from a part that is not exposed to light, such as a root or an onion bulb."
            ],
            answer: "Yes, plant cells (they have a cell wall); from a root or the inside of a bulb, where there is no light for photosynthesis."
          },
          tip: "Cell wall, chloroplast, permanent vacuole: the three plant-only parts. Remember that not every plant cell has chloroplasts."
        },
        {
          heading: "Required practical: looking at onion cells",
          paragraphs: [
            "In this practical you prepare a slide of plant cells and view them with a light microscope. Peel a thin, almost transparent layer from the inside of an onion with forceps and lay it flat on a microscope slide. Add a drop of iodine solution. Iodine is a stain: it colours the nucleus and cytoplasm so you can see them, because living cells are nearly see-through. Lower a coverslip gently at an angle with a mounted needle so that no air bubbles are trapped.",
            "Put the slide on the stage and clip it in place. Start with the lowest-power objective lens, use the coarse focus to bring the cells into view, then the fine focus to sharpen them. Only then switch to a higher-power lens. Safety: iodine stains skin and clothes, so wear goggles and rinse any splashes; slides and coverslips are thin glass and break easily; keep the microscope away from the edge of the bench.",
            "Record what you see as a scientific drawing: a sharp pencil, clear single lines, no shading, labels joined to the right part with ruled lines, and the magnification written underneath. You can also work out how big a cell appears at a given magnification using the equation from Chapter 1."
          ],
          worked: {
            q: "An onion cell is 0.1 mm long. The microscope is set to ×100. How long will the cell appear in the image?",
            steps: [
              "Rearrange: image size = real size × magnification.",
              "Substitute: image size = 0.1 × 100.",
              "Calculate: image size = 10 mm."
            ],
            answer: "10 mm",
            check: "0.1 * 100"
          },
          tip: "Lowest-power lens first, coarse focus, then fine focus. Never wind the stage up while looking through a high-power lens: you can crack the slide."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which part of a cell controls its activities and contains the DNA?", options: ["nucleus", "cytoplasm", "cell membrane", "mitochondria"], answer: 0, why: "The nucleus controls the cell and holds the genetic material, DNA, in chromosomes.",
          feedback: [
            "",
            "The cytoplasm is the jelly where most chemical reactions happen. It does not control the cell; that is the job of the nucleus, which holds the DNA.",
            "The cell membrane controls what enters and leaves the cell, not what the cell does. The nucleus controls the cell's activities and contains the DNA.",
            "Mitochondria release energy by respiration. The DNA and the control of the cell are in the nucleus."
          ] },
        { kind: "mcq", q: "Which of these structures is in a plant cell but not in an animal cell?", options: ["ribosome", "chloroplast", "nucleus", "cell membrane"], answer: 1, why: "Chloroplasts, the cell wall and the permanent vacuole are the three plant-only structures. Ribosomes, a nucleus and a cell membrane are in both.",
          feedback: [
            "Ribosomes are in both animal and plant cells (and bacteria): every cell makes proteins. The plant-only parts are the chloroplast, cell wall and permanent vacuole.",
            "",
            "Both animal and plant cells have a nucleus; they are both eukaryotic. The plant-only parts are the chloroplast, cell wall and permanent vacuole.",
            "Every cell has a cell membrane, animal or plant. You may be thinking of the cell WALL, which is plant-only, like the chloroplast."
          ] },
        { kind: "gap", q: "The cell wall of a plant cell is made of ___.", answer: "cellulose", options: ["cellulose", "chlorophyll", "protein"], why: "Plant cell walls are made of cellulose, a tough carbohydrate that gives the cell strength and shape.",
          feedback: {
            "chlorophyll": "Chlorophyll is the green pigment inside chloroplasts that absorbs light for photosynthesis. The cell wall is made of cellulose, a strong carbohydrate.",
            "protein": "Proteins are made by ribosomes and do many jobs, but the plant cell wall is made of cellulose, a carbohydrate that gives the wall its strength."
          } }
      ],
      modules: [
        {
          title: "Match the part to its job",
          task: { kind: "match", q: "Match each part of a cell to its function.", pairs: [
            ["nucleus", "controls the cell's activities and contains the DNA"],
            ["mitochondria", "where aerobic respiration releases energy"],
            ["ribosomes", "where proteins are made"],
            ["cell membrane", "controls which substances enter and leave the cell"],
            ["chloroplast", "absorbs light for photosynthesis"]
          ] },
          levels: {
            support: {
              steps: ["Start with the two you are surest of: the nucleus (control, DNA) and the chloroplast (green, light, photosynthesis).", "Energy words (respiration, release energy) go with mitochondria.", "Protein goes with ribosomes; 'in and out' goes with the membrane."],
              example: { q: "Match: cell wall; permanent vacuole; cytoplasm — to: where most chemical reactions happen; strengthens and supports the cell; filled with cell sap, keeps the cell turgid.", steps: ["Cell wall = strengthens and supports.", "Permanent vacuole = cell sap, turgid.", "Cytoplasm = where most chemical reactions happen."], answer: "cell wall → strengthens and supports; permanent vacuole → sap, turgid; cytoplasm → chemical reactions" }
            },
            core: { hint: "Control, energy, protein, in-and-out, light: one word for each part." },
            stretch: { extend: "A cell makes a very large amount of a protein hormone. Predict two organelles it will have in large numbers and explain each choice." }
          },
          why: "Nucleus = control and DNA; mitochondria = respiration and energy; ribosomes = proteins; membrane = what enters and leaves; chloroplast = light for photosynthesis.",
          explain: "Say which two of these parts a bacterium would NOT have, and why that matters for where its DNA is."
        },
        {
          title: "Plant or animal?",
          task: { kind: "mcq", q: "Under the microscope a student sees cells from the skin of an onion. Which structure do all plant cells have that no animal cell has?", options: ["nucleus", "cell wall", "chloroplast", "cell membrane"], answer: 1, why: "Every plant cell has a cellulose cell wall; no animal cell does. Chloroplasts are plant-only too, but not every plant cell has them, and onion skin cells do not.",
            feedback: [
              "Both animal and plant cells have a nucleus; it is not a way to tell them apart. Every plant cell has a cell wall and no animal cell does.",
              "",
              "Chloroplasts are found only in plant cells, but not in ALL plant cells: onion skin and root cells have none because no light reaches them. The structure every plant cell has is the cell wall.",
              "Every cell has a cell membrane, animal or plant. You may be thinking of the cell WALL, outside the membrane, which only plant cells have."
            ] },
          contexts: [
            { label: "Bean root", q: "A student looks at cells from the root of a bean seedling. Which structure do all plant cells have that no animal cell has?" },
            { label: "Moss leaf", q: "A student looks at a leaf from a moss plant under the microscope. Which structure do all plant cells have that no animal cell has?" },
            { label: "Celery stem", q: "A student examines a thin slice of celery stem under the microscope. Which structure do all plant cells have that no animal cell has?" }
          ],
          levels: {
            support: {
              steps: ["Cross off anything both kinds of cell have: nucleus, cytoplasm, cell membrane, mitochondria, ribosomes.", "Of the plant-only parts, ask which one EVERY plant cell has, even in the dark.", "Chloroplasts need light; the cell wall is always there."],
              example: { q: "A cell from a potato has a cell wall, a nucleus and no chloroplasts. Is it a plant cell or an animal cell? Give the reason.", steps: ["Animal cells never have a cell wall.", "So a cell wall proves it is a plant cell.", "No chloroplasts is normal for a potato: it grows underground, in the dark."], answer: "A plant cell, because it has a cell wall." }
            },
            core: { hint: "Which plant-only part is still there when there is no light?" },
            stretch: { extend: "Explain why a plant cell with chloroplasts also needs mitochondria. What does each organelle do that the other cannot?" }
          },
          why: "The cell wall is the one structure found in every plant cell and never in an animal cell.",
          explain: "Say why 'chloroplast' is a tempting but wrong answer for an onion or root cell."
        },
        {
          title: "Make the slide",
          task: { kind: "order", q: "Put the steps for preparing and viewing an onion-cell slide in the correct order.", items: [
            "Peel a thin layer from the inside of an onion with forceps",
            "Lay the layer flat on a microscope slide",
            "Add a drop of iodine solution to stain the cells",
            "Lower a coverslip gently at an angle with a mounted needle",
            "Place the slide on the stage and focus with the lowest-power objective lens first"
          ] },
          levels: {
            support: {
              steps: ["You cannot stain or cover what is not on the slide yet: get the specimen onto the slide first.", "Stain before you cover, or the iodine cannot reach the cells.", "The coverslip goes on before the slide goes under the microscope."],
              example: { q: "Order these steps for viewing a prepared slide: switch to a higher-power lens; focus with the coarse knob; put the slide on the stage; sharpen with the fine knob.", steps: ["Slide on the stage first.", "Coarse focus, then fine focus, both on low power.", "Only then move to a higher-power lens."], answer: "stage → coarse focus → fine focus → higher-power lens" }
            },
            core: { hint: "Specimen, stain, cover, stage." },
            stretch: { extend: "Explain why the coverslip is lowered at an angle, and why you start with the lowest-power objective lens rather than the highest." }
          },
          why: "Specimen on the slide, iodine to stain it, coverslip lowered at an angle to avoid air bubbles, then the stage and low power first.",
          explain: "Say what the iodine is for and what would happen to your view of the cells without it."
        }
      ]
    },

    /* ───────────── 3 · prokaryotes and eukaryotes ───────────── */
    {
      key: "prokaryotes-and-eukaryotes", n: 3, title: "Eukaryotic and prokaryotic cells",
      lead: "This chapter compares the cells you have met so far with bacterial cells: what a bacterium has, what it lacks, and how much smaller it is.",
      covers: [3],
      pretext: {
        words: [
          { word: "bacteria", means: "very small living things made of just one cell", sentence: "Bacteria in yoghurt turn milk sour." },
          { word: "prokaryote", means: "a cell with no nucleus, such as a bacterium", sentence: "A prokaryote keeps its DNA loose in the cytoplasm." },
          { word: "eukaryote", means: "a cell with a nucleus, such as an animal or plant cell", sentence: "Every cell in your body is a eukaryote." },
          { word: "plasmid", means: "a small ring of extra DNA in a bacterium", sentence: "A plasmid can carry a gene that protects the bacterium from an antibiotic." },
          { word: "flagellum", means: "a tail that some bacteria use to swim", sentence: "The bacterium spun its flagellum to move towards food." }
        ],
        passage: [
          "There are two main types of cell.",
          "Animal and plant cells are eukaryotic cells.",
          "Their DNA is kept inside a nucleus.",
          "Bacteria are prokaryotic cells.",
          "They are much smaller than animal and plant cells.",
          "A bacterium has no nucleus.",
          "Its DNA floats free in the cytoplasm as one big loop.",
          "It may also have small rings of DNA called plasmids.",
          "It has a cell membrane and a cell wall.",
          "Some bacteria have a tail called a flagellum to swim with.",
          "Some have a slime capsule to protect them.",
          "Bacteria have no mitochondria and no chloroplasts."
        ]
      },
      sections: [
        {
          heading: "Two kinds of cell",
          paragraphs: [
            "All living things are built from one of two kinds of cell. Eukaryotic cells have a nucleus that holds their DNA, and they contain organelles surrounded by membranes, such as mitochondria. Animals, plants, fungi (including yeast) and algae are all made of eukaryotic cells. Prokaryotic cells have no nucleus: their DNA lies free in the cytoplasm. Bacteria are prokaryotes. Each bacterium is a single prokaryotic cell.",
            "Size is the other big difference. A typical animal cell is 10 µm to 100 µm across. A typical bacterium is 1 µm to 2 µm long, so bacteria are roughly ten to a hundred times smaller than the cells of your body. Scientists say they are one or two orders of magnitude smaller: each order of magnitude is a factor of ten.",
            "Because they are so small, bacteria can only be seen as dots with a school microscope. Their internal structure was worked out with electron microscopes."
          ],
          worked: {
            q: "An animal cell is 20 µm across. A bacterium is 2 µm long. How many times bigger is the animal cell?",
            steps: [
              "Both sizes are already in micrometres, so no conversion is needed.",
              "Divide the larger size by the smaller: 20 ÷ 2.",
              "The animal cell is 10 times bigger: one order of magnitude."
            ],
            answer: "10 times bigger (one order of magnitude)",
            check: "20 / 2"
          },
          tip: "Pro-karyote = 'before the nucleus'. Eu-karyote = 'true nucleus'. Bacteria are prokaryotes."
        },
        {
          heading: "Inside a bacterial cell",
          paragraphs: [
            "A bacterial cell has cytoplasm surrounded by a cell membrane, and outside that a cell wall. The bacterial cell wall is not made of cellulose like a plant's; it has its own chemistry, but it does the same job of supporting the cell and stopping it bursting. In the cytoplasm are ribosomes, so bacteria can make proteins, and the genetic material: a single large loop of DNA that is not inside a nucleus.",
            "Many bacteria also carry one or more plasmids. A plasmid is a small ring of extra DNA with a few genes on it, which can give the bacterium a particular feature, such as resistance to an antibiotic. Plasmids can be passed from one bacterium to another.",
            "Some bacteria have extra structures on the outside. A flagellum is a long, whip-like tail that rotates to push the cell along, so the bacterium can move towards food or away from harm. A slime capsule is a sticky outer coat that protects the cell from drying out and from being attacked, and helps it stick to surfaces such as teeth or the lining of the gut."
          ],
          tip: "Bacteria have ribosomes but no mitochondria. They still respire: the reactions happen in the cytoplasm and across the membrane."
        },
        {
          heading: "Comparing prokaryotes and eukaryotes",
          paragraphs: [
            "Both kinds of cell have cytoplasm, a cell membrane, ribosomes and DNA, and both can make proteins and release energy by respiration. The differences are in how the DNA is stored and in what else the cell contains.",
            "In a eukaryotic cell, the DNA is in chromosomes inside a nucleus, which protects it, and the cell has membrane-bound organelles such as mitochondria, and in plants chloroplasts. In a prokaryotic cell, the DNA is a single loop free in the cytoplasm, there may be plasmids, and there is no nucleus, no mitochondria and no chloroplasts. Prokaryotes are far smaller.",
            "A good exam answer about the differences names at least two: no nucleus (DNA free in the cytoplasm), plasmids, no mitochondria or chloroplasts, and the much smaller size. A cell wall is not a reliable difference, because plant and fungal cells have one too."
          ],
          tip: "Two safe differences: where the DNA is (nucleus or free), and size (bacteria are much smaller)."
        }
      ],
      gate: [
        { kind: "mcq", q: "Where is the DNA in a prokaryotic cell?", options: ["inside a nucleus", "free in the cytoplasm as a single loop", "inside the mitochondria", "inside the cell wall"], answer: 1, why: "Prokaryotes have no nucleus. Their main DNA is one large loop lying free in the cytoplasm, often with small plasmids as well.",
          feedback: [
            "A nucleus is exactly what a prokaryote does NOT have. Its DNA is a single loop lying free in the cytoplasm.",
            "",
            "Prokaryotes have no mitochondria at all (and mitochondria are not where a cell keeps its main DNA). In a bacterium the DNA lies free in the cytoplasm.",
            "The cell wall is a tough outer layer for support; it holds no DNA. In a prokaryote the DNA floats free in the cytoplasm as a loop."
          ] },
        { kind: "gap", q: "A ___ is a small ring of extra DNA found in a bacterial cell.", answer: "plasmid", options: ["plasmid", "flagellum", "ribosome"], why: "Plasmids are small rings of DNA, separate from the main loop, that can carry useful extra genes such as antibiotic resistance.",
          feedback: {
            "flagellum": "A flagellum is the tail a bacterium uses to move; it is not made of DNA. The small ring of extra DNA is a plasmid.",
            "ribosome": "Ribosomes are where proteins are made and are found in all cells. The small ring of extra DNA in a bacterium is a plasmid."
          } },
        { kind: "mcq", q: "Which of these is a prokaryote?", options: ["a yeast cell", "a bacterium", "a palisade cell", "a sperm cell"], answer: 1, why: "Bacteria are prokaryotes: single cells with no nucleus. Yeast is a fungus, and palisade and sperm cells are plant and animal cells; all three are eukaryotic.",
          feedback: [
            "Yeast is a fungus. Fungal cells have a nucleus, so they are eukaryotes, even though yeast is single-celled like a bacterium. The prokaryote here is the bacterium.",
            "",
            "A palisade cell is a plant leaf cell with a nucleus and chloroplasts; it is eukaryotic. The prokaryote is the bacterium.",
            "A sperm cell is an animal cell with a nucleus; it is eukaryotic. The prokaryote is the bacterium."
          ] }
      ],
      modules: [
        {
          title: "Parts of a bacterium",
          task: { kind: "match", q: "Match each part of a bacterial cell to its function.", pairs: [
            ["slime capsule", "protects the cell and helps it stick to surfaces"],
            ["flagellum", "rotates to move the cell along"],
            ["plasmid", "small ring of DNA that can carry extra genes, such as antibiotic resistance"],
            ["cell wall", "supports the cell and stops it bursting"],
            ["single loop of DNA", "carries most of the genetic information, free in the cytoplasm"]
          ] },
          levels: {
            support: {
              steps: ["Anything with 'DNA' in it is the loop or the plasmid: the big loop carries most of the genes, the small ring carries extras.", "Movement goes with the flagellum (the tail).", "Slime is sticky and protective; the wall is for support."],
              example: { q: "Match: cell membrane; cytoplasm; ribosomes — to: where proteins are made; controls what enters and leaves; where most reactions happen.", steps: ["Membrane = controls what enters and leaves.", "Cytoplasm = where most reactions happen.", "Ribosomes = where proteins are made."], answer: "membrane → enters and leaves; cytoplasm → reactions; ribosomes → proteins" }
            },
            core: { hint: "Two DNA parts (big loop, small ring), one moving part, one sticky coat, one supporting wall." },
            stretch: { extend: "Explain how a plasmid carrying an antibiotic-resistance gene could make an infection harder to treat, and why it matters that plasmids can pass between bacteria." }
          },
          why: "Slime capsule = protection and sticking; flagellum = movement; plasmid = ring of extra genes; cell wall = support; DNA loop = the main genetic information, free in the cytoplasm.",
          explain: "Say which of these five parts a plant cell also has, and which three it never has."
        },
        {
          title: "How big is a bacterium?",
          task: { kind: "numeric", q: "A bacterium is 2 µm long. In an electron micrograph it appears 50 mm long. Calculate the magnification of the micrograph.", answer: 25000, tolerance: 0, units: "×", check: "50 * 1000 / 2", why: "Convert first: 50 mm = 50 × 1000 = 50 000 µm. Magnification = image ÷ real = 50 000 ÷ 2 = ×25 000 (exact).",
            misconceptions: [
              { answer: 25, check: "50 / 2", says: "You divided millimetres by micrometres without converting. Put both in the same unit first: 50 mm = 50 000 µm, then 50 000 ÷ 2 = ×25 000." },
              { answer: 0.00004, check: "2 / (50 * 1000)", says: "You divided real by image, upside down. Magnification = image ÷ real = 50 000 µm ÷ 2 µm = ×25 000. A magnification is never less than 1." },
              { answer: 100000, check: "50 * 1000 * 2", says: "You multiplied the image size by the real size. Magnification is a division: 50 000 µm ÷ 2 µm = ×25 000." }
            ] },
          contexts: [
            { label: "Yoghurt bacterium", q: "A bacterium from yoghurt is 2 µm long. In an electron micrograph it appears 50 mm long. Calculate the magnification of the micrograph." },
            { label: "Kitchen cloth", q: "A bacterium found on a kitchen cloth is 2 µm long. In a photograph taken with an electron microscope it is 50 mm long. Calculate the magnification of the photograph." },
            { label: "Pond water", q: "A bacterium from a pond water sample is 2 µm long and appears 50 mm long in an electron micrograph. Calculate the magnification of the micrograph." }
          ],
          levels: {
            support: {
              steps: ["Convert the image size to micrometres: multiply mm by 1000.", "Write magnification = image size ÷ real size.", "Divide and write × in front of the answer."],
              example: { q: "A bacterium 4 µm long appears 20 mm long in a micrograph. Calculate the magnification.", steps: ["20 mm = 20 × 1000 = 20 000 µm.", "Magnification = 20 000 ÷ 4.", "= ×5000."], answer: "×5000", check: "20 * 1000 / 4" }
            },
            core: { hint: "The two sizes are in different units. Make them the same before you divide." },
            stretch: { extend: "Explain why a light microscope could not have produced this image, using the words resolution and magnification correctly." }
          },
          why: "50 mm = 50 000 µm; 50 000 ÷ 2 = ×25 000.",
          explain: "Say what would have gone wrong if you had divided 50 by 2 without changing the units."
        },
        {
          title: "Built to survive",
          task: { kind: "written", q: "A species of bacterium lives in soil and has a flagellum, a slime capsule and several plasmids. Explain how the structures of this bacterial cell help it to survive.", marks: 6,
            criteria: [
              "Flagellum rotates to move the cell, so the bacterium can move towards nutrients or away from harmful conditions.",
              "Slime capsule protects the cell (from drying out or from attack) and helps it stick to surfaces such as soil particles or roots.",
              "Plasmids carry extra genes, for example antibiotic resistance, which can help the bacterium survive and can be passed to other bacteria.",
              "Cell wall supports the cell and stops it bursting when water enters.",
              "Mentions the single DNA loop free in the cytoplasm (no nucleus) or the ribosomes making proteins.",
              "Each structure is linked to a benefit for survival, not just named."
            ],
            model: "The flagellum is a tail that rotates, so the bacterium can swim through the water in the soil towards nutrients and away from harmful substances. The slime capsule is a sticky outer coat that protects the cell from drying out and from attack, and lets it stick to soil particles and roots so it is not washed away. Its plasmids are small rings of DNA carrying extra genes, such as resistance to an antibiotic produced by soil fungi; these genes help it survive and can be passed on to other bacteria. The cell wall supports the cell and stops it bursting when water moves in, and the ribosomes in the cytoplasm make the proteins the cell needs. Its DNA is a single loop free in the cytoplasm, so there is no nucleus to build, and the small cell can divide quickly." },
          levels: {
            support: {
              steps: ["Take each structure in the question in turn: flagellum, slime capsule, plasmids.", "For each one write: what it is, what it does, and how that helps the bacterium survive.", "Add one more structure (cell wall or DNA loop) and finish with a sentence about size or dividing quickly."],
              example: { q: "A bacterium living in the gut has a slime capsule. Explain how this helps it.", steps: ["The slime capsule is a sticky protective outer coat.", "It helps the cell stick to the gut lining so it is not swept away.", "It also protects the cell from being digested or attacked."], answer: "The capsule lets the bacterium stick to the gut wall and protects it, so it survives and stays where the food is." }
            },
            core: { hint: "Six marks: three structures from the question, each with what it does AND how that helps survival; then one more structure." },
            stretch: { extend: "Explain why the lack of a nucleus and the small size of a prokaryote might let it reproduce faster than a eukaryotic cell." }
          },
          why: "A full answer takes each structure (flagellum, capsule, plasmids, plus the wall or DNA loop) and links what it does to how the bacterium survives.",
          explain: "Say, in one sentence, why 'it has a flagellum' on its own would not earn an explain mark."
        }
      ]
    },

    /* ───────────── 4 · specialised cells ───────────── */
    {
      key: "specialised-cells", n: 4, title: "Specialised cells in animals and plants",
      lead: "This chapter shows how cells are shaped and equipped for one job each, in animals and in plants, and how to write an 'explain how it is adapted' answer.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "specialised", means: "built to do one particular job", sentence: "A red blood cell is specialised to carry oxygen." },
          { word: "adapted", means: "changed so that it suits its job", sentence: "The root hair cell is adapted to take in water." },
          { word: "differentiation", means: "the way a cell changes to become specialised", sentence: "Differentiation turns a young cell into a nerve cell or a muscle cell." },
          { word: "nerve cell", means: "a long cell that carries electrical signals", sentence: "A nerve cell can run from your spine to your toe." },
          { word: "root hair cell", means: "a root cell with a long hair that takes in water", sentence: "Each root hair cell reaches between the grains of soil." },
          { word: "xylem", means: "tubes that carry water up a plant", sentence: "Water travels up the stem in the xylem." }
        ],
        passage: [
          "Your body has many kinds of cell.",
          "Each kind has a special job.",
          "A specialised cell is shaped and built for its job.",
          "This is called being adapted.",
          "A sperm cell has a tail so it can swim to the egg.",
          "A nerve cell is long and thin to carry signals around the body.",
          "A muscle cell can shorten to make you move.",
          "Plants have specialised cells too.",
          "A root hair cell has a long hair to take in water from the soil.",
          "Xylem cells form hollow tubes that carry water up the plant.",
          "Phloem cells carry sugar from the leaves to the rest of the plant.",
          "As a cell grows, it changes to become specialised.",
          "This change is called differentiation."
        ]
      },
      sections: [
        {
          heading: "Specialised cells and differentiation",
          paragraphs: [
            "A specialised cell is one that is adapted to carry out a particular function. Its shape, its size and the organelles it contains all suit the job it does. A cell that needs a lot of energy has many mitochondria; a cell that makes a lot of protein has many ribosomes; a cell that absorbs things has a large surface area.",
            "Cells become specialised through a process called differentiation. A young, unspecialised cell develops the structures it needs for its job and switches off the ones it does not. In animals, most cells differentiate early, as the embryo develops, and once specialised they usually stay that way: a mature nerve cell cannot turn into a muscle cell. In animals, cell division in adults is mostly for repair and replacement.",
            "Plants are different. Many plant cells keep the ability to differentiate all through the plant's life, which is why a cutting from a stem can grow new roots."
          ],
          tip: "Specialised = adapted to one job. Differentiation = the process of becoming specialised."
        },
        {
          heading: "Specialised animal cells",
          paragraphs: [
            "A sperm cell's job is to reach and fertilise an egg cell. It has a long tail to swim, many mitochondria in the middle section to release the energy for swimming, a nucleus carrying the father's genetic information, and a tip (the acrosome) containing enzymes that digest a way into the egg. The egg cell is large and contains a food store in its cytoplasm for the new cell that forms after fertilisation.",
            "A nerve cell, or neurone, carries electrical impulses from one part of the body to another. It is very long, so one cell can carry a signal a long way, it has branched connections at each end to link with other nerve cells, and a fatty layer called the myelin sheath insulates it so the impulse travels faster. A muscle cell contracts to move the body. It contains special protein filaments that slide over each other to shorten the cell, many mitochondria for the energy this needs, and a store of glycogen that can be broken down to glucose for respiration.",
            "Two more examples are often taught. A red blood cell carries oxygen: it is packed with haemoglobin, which binds to oxygen, it has no nucleus so there is more room for haemoglobin, and its flattened shape gives a large surface area for oxygen to pass through. Ciliated cells line the airways; the tiny hairs on their surface, the cilia, sweep mucus with trapped dust and bacteria up and out of the lungs."
          ],
          tip: "Every adaptation sentence has three parts: the feature, what it does, and the job it helps with. Tail → swims → reaches the egg."
        },
        {
          heading: "Specialised plant cells",
          paragraphs: [
            "A root hair cell takes in water and dissolved mineral ions from the soil. Its long, thin hair pushes between soil particles and gives the cell a large surface area, its cell wall is thin so substances have a short distance to cross, and it has many mitochondria to release the energy needed to absorb mineral ions by active transport. Its large permanent vacuole helps keep water moving in by osmosis. Root hair cells have no chloroplasts: there is no light underground.",
            "Xylem cells carry water and mineral ions from the roots up to the leaves. They join end to end to form hollow tubes; the cells are dead, with no cytoplasm, so water flows freely, and their walls are strengthened with rings or spirals of a tough substance called lignin so the tubes do not collapse. Phloem cells carry dissolved sugars made in the leaves to every part of the plant, up or down. Their end walls are perforated like a sieve (sieve plates) so the sugary solution flows through, and each is supported by a companion cell that provides energy.",
            "A palisade cell is found in the upper part of a leaf. It is tall, packed with chloroplasts and arranged near the top surface where the light is strongest, so it carries out most of the leaf's photosynthesis."
          ],
          tip: "Xylem: water, up, dead cells, lignin. Phloem: sugar, both ways, living cells, sieve plates."
        },
        {
          heading: "Writing an 'explain how it is adapted' answer",
          paragraphs: [
            "Exam questions ask you to explain how a cell is adapted to its function. Naming a feature earns little on its own; the mark comes from linking the feature to what it does and to the job. Use the pattern: the cell has X, which does Y, so that it can Z.",
            "Pick the adaptations that are specific to that cell. 'It has a nucleus' is true of almost every cell and earns nothing. 'It has many mitochondria to release energy for the tail to beat' is specific to the sperm cell and earns the mark."
          ],
          worked: {
            q: "A sperm cell has a tail, many mitochondria and an acrosome. Explain how two of these features suit the cell to its function.",
            steps: [
              "Choose two features and state what each one does.",
              "The tail beats, which pushes the cell along, so it can swim to the egg.",
              "The many mitochondria release energy by respiration, so there is enough energy for the tail to keep beating.",
              "Each sentence links feature → what it does → the job."
            ],
            answer: "The tail beats to swim towards the egg; the many mitochondria release the energy that swimming needs."
          },
          tip: "Feature → what it does → so that. Three links, one mark each."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is a specialised cell?", options: ["a cell with adaptations that suit it to a particular job", "a cell that has no nucleus", "a cell that is larger than other cells", "a cell found only in plants"], answer: 0, why: "A specialised cell is adapted, in shape, size and organelles, to carry out one particular function.",
          feedback: [
            "",
            "Having no nucleus is one adaptation of one cell, the red blood cell; it is not what specialised means. A specialised cell is any cell adapted to a particular job.",
            "Size is only one possible adaptation (an egg cell is large; a red blood cell is small). Specialised means adapted to a particular job, whatever the size.",
            "Both animals and plants have specialised cells: sperm and nerve cells in animals, root hair and xylem cells in plants. Specialised means adapted to a particular job."
          ] },
        { kind: "gap", q: "A sperm cell has a ___ so that it can swim to the egg.", answer: "tail", options: ["tail", "cilia", "wall"], why: "The sperm's long tail beats to move the cell towards the egg; its mitochondria release the energy for this.",
          feedback: {
            "cilia": "Cilia are the many tiny hairs on ciliated cells in the airways, which sweep mucus along. A sperm cell swims with one long tail (a flagellum).",
            "wall": "Animal cells never have a cell wall, and a wall would not help a cell move. The sperm cell swims using its long tail."
          } },
        { kind: "mcq", q: "What do xylem cells carry?", options: ["water and dissolved mineral ions from the roots to the leaves", "dissolved sugars from the leaves to the rest of the plant", "oxygen from the leaves to the roots", "electrical impulses along the stem"], answer: 0, why: "Xylem forms hollow tubes of dead cells, strengthened with lignin, that carry water and mineral ions upwards from the roots.",
          feedback: [
            "",
            "Carrying dissolved sugars from the leaves is the job of the phloem. Xylem carries water and mineral ions up from the roots.",
            "Oxygen moves in and out of a plant by diffusion through the leaves; it is not carried in tubes. Xylem carries water and mineral ions up from the roots.",
            "Electrical impulses are carried by nerve cells in animals; plants have no nerves. Xylem carries water and mineral ions up from the roots."
          ] }
      ],
      modules: [
        {
          title: "Cell and adaptation",
          task: { kind: "match", q: "Match each specialised cell to one of its adaptations.", pairs: [
            ["nerve cell", "very long, with branched connections at each end"],
            ["red blood cell", "no nucleus, leaving more room for haemoglobin"],
            ["root hair cell", "long hair gives a large surface area for absorbing water"],
            ["xylem cell", "hollow tube strengthened with lignin"],
            ["palisade cell", "packed with chloroplasts, near the top of the leaf"]
          ] },
          levels: {
            support: {
              steps: ["Start with the job: what does each cell do? Carry signals, carry oxygen, absorb water, carry water, photosynthesise.", "Match the job to the feature that helps it: signals need length; oxygen needs haemoglobin; absorbing needs surface area.", "Carrying water up needs a strong hollow tube; photosynthesis needs chloroplasts and light."],
              example: { q: "Match: sperm cell; muscle cell; ciliated cell — to: protein filaments that slide to contract; tiny hairs that sweep mucus; a tail for swimming.", steps: ["Sperm cell = tail for swimming.", "Muscle cell = filaments that slide to contract.", "Ciliated cell = hairs that sweep mucus."], answer: "sperm → tail; muscle → sliding filaments; ciliated → hairs that sweep mucus" }
            },
            core: { hint: "Think of each cell's job first, then ask which feature makes that job possible." },
            stretch: { extend: "Both the root hair cell and the red blood cell are adapted for a large surface area. Explain what each one is absorbing and why surface area matters for both." }
          },
          why: "Nerve = long with connections; red blood cell = no nucleus, more haemoglobin; root hair = large surface area; xylem = lignin-strengthened hollow tube; palisade = chloroplasts near the light.",
          explain: "Say why 'it has a nucleus' would never be a good answer for how a cell is specialised."
        },
        {
          title: "Reading the mitochondria",
          task: { kind: "mcq", q: "A sperm cell has many mitochondria. What does this tell you about its job?", options: ["It needs a lot of energy, transferred by respiration", "It makes a lot of protein", "It stores a lot of water", "It needs to absorb a lot of light"], answer: 0, why: "Mitochondria are where aerobic respiration releases energy. A cell with many mitochondria has a job that needs a lot of energy; for the sperm cell, that is swimming.",
            feedback: [
              "",
              "Making a lot of protein would need many ribosomes, not mitochondria. Mitochondria release energy by respiration, so many of them means the cell needs a lot of energy.",
              "Storing water is the job of a plant cell's permanent vacuole. Mitochondria release energy by respiration, so many of them means the cell uses a lot of energy.",
              "Absorbing light is what chloroplasts do, in plant cells only. Mitochondria release energy by respiration, so many of them means the cell needs a lot of energy."
            ] },
          contexts: [
            { label: "Muscle cell", q: "A muscle cell has many mitochondria. What does this tell you about its job?" },
            { label: "Root hair cell", q: "A root hair cell has many mitochondria. What does this tell you about its job?" },
            { label: "Heart cell", q: "A cell from the wall of the heart has many more mitochondria than a skin cell. What does this tell you about its job?" }
          ],
          levels: {
            support: {
              steps: ["Remember what mitochondria do: aerobic respiration, which releases energy.", "More of an organelle means more of its job is needed.", "So many mitochondria means the cell needs a lot of energy."],
              example: { q: "A cell has many ribosomes. What does this tell you about its job?", steps: ["Ribosomes make proteins.", "Many ribosomes means a lot of protein is being made."], answer: "The cell makes a lot of protein, for example a cell that produces enzymes." }
            },
            core: { hint: "What happens inside a mitochondrion? Then ask: what does more of that mean?" },
            stretch: { extend: "For the sperm cell, the muscle cell and the root hair cell, say what each uses its energy for. Which one uses it for active transport?" }
          },
          why: "Mitochondria release energy by respiration; many of them means the cell's job needs a lot of energy.",
          explain: "Say what the sperm cell, the muscle cell and the root hair cell each spend that energy on."
        },
        {
          title: "Explain the root hair cell",
          task: { kind: "written", q: "Explain how a root hair cell is adapted to absorb water and mineral ions from the soil.", marks: 6,
            criteria: [
              "Long, thin hair (extension) that pushes between soil particles, giving a large surface area for absorption.",
              "Thin cell wall (and membrane), so water and ions have a short distance to cross.",
              "Many mitochondria release energy by respiration for the active transport of mineral ions.",
              "Water enters by osmosis (large permanent vacuole helps keep the gradient); mineral ions enter by active transport.",
              "No chloroplasts, because the cell is underground and does not photosynthesise.",
              "Each feature is linked to how it helps the function, not just listed."
            ],
            model: "A root hair cell has a long, thin hair that grows out between the soil particles. This gives the cell a very large surface area, so more water and mineral ions can be absorbed at once. The cell wall is thin, so the substances have only a short distance to travel into the cell. Water moves in by osmosis, from the dilute soil water to the more concentrated cell contents, and the large permanent vacuole helps keep that difference. Mineral ions are at a lower concentration in the soil than in the cell, so they must be taken in by active transport, which needs energy; the many mitochondria in the cell release this energy by respiration. The cell has no chloroplasts because it is underground, so it does not waste resources on structures it cannot use." },
          levels: {
            support: {
              steps: ["List the features: long hair, thin wall, many mitochondria, large vacuole, no chloroplasts.", "For each, write what it does: surface area, short distance, energy for active transport, osmosis gradient.", "Finish each sentence with 'so that it can absorb more water / mineral ions'."],
              example: { q: "Explain how a palisade cell is adapted for photosynthesis.", steps: ["It is packed with chloroplasts containing chlorophyll, which absorb light.", "It sits near the top of the leaf where light is strongest.", "Its tall shape lets many cells pack together under the leaf surface."], answer: "Many chloroplasts near the top of the leaf absorb the most light, so the cell photosynthesises as much as possible." }
            },
            core: { hint: "Six marks: four features, each linked to absorption, plus the two processes (osmosis for water, active transport for ions)." },
            stretch: { extend: "Explain why a plant whose root hair cells were damaged might wilt even in well-watered soil, and why it might also show signs of mineral deficiency." }
          },
          why: "A full answer links the hair to surface area, the thin wall to distance, the mitochondria to energy for active transport, and names osmosis for water and active transport for mineral ions.",
          explain: "Say, in one sentence, why the root hair cell needs energy for mineral ions but not for water."
        }
      ]
    },

    /* ───────────── 5 · diffusion ───────────── */
    {
      key: "diffusion", n: 5, title: "Diffusion and surface area",
      lead: "This chapter explains how substances get into and out of cells by diffusion, what makes it faster or slower, and why cells are so small.",
      covers: [6],
      pretext: {
        words: [
          { word: "diffusion", means: "the spreading out of particles from where there are many to where there are few", sentence: "The smell of the perfume reached us by diffusion." },
          { word: "particles", means: "the tiny pieces that everything is made of", sentence: "Particles in a gas move quickly in all directions." },
          { word: "concentration", means: "how much of something is packed into a space", sentence: "The concentration of oxygen is higher in the lungs than in the blood." },
          { word: "concentration gradient", means: "the difference in concentration between two places", sentence: "A steep concentration gradient makes diffusion faster." },
          { word: "net movement", means: "the overall movement, after counting particles going both ways", sentence: "The net movement of oxygen was into the cell." },
          { word: "surface area", means: "the total area of the outside of something", sentence: "A large surface area lets more particles in at once." }
        ],
        passage: [
          "Particles in gases and liquids are always moving.",
          "They spread out from where there are many to where there are few.",
          "This spreading out is called diffusion.",
          "Diffusion needs no energy from the cell.",
          "Oxygen and glucose diffuse into your cells.",
          "Carbon dioxide and water diffuse out.",
          "The bigger the difference in concentration, the faster the diffusion.",
          "Warm particles move faster, so diffusion is faster when it is warm.",
          "A short distance means faster diffusion.",
          "A large surface area means faster diffusion.",
          "Small cells have a large surface area for their volume.",
          "That is one reason cells are so small."
        ]
      },
      sections: [
        {
          heading: "What diffusion is",
          paragraphs: [
            "Diffusion is the spreading out of the particles of a gas, or of any substance in solution, so that there is a net movement from an area of higher concentration to an area of lower concentration. The particles are moving randomly all the time; diffusion is simply the result of there being more of them in one place than another, so more drift away from the crowded place than drift back into it. Net movement means the overall movement once you have counted the particles going both ways.",
            "Diffusion is a passive process: it needs no energy from the cell. You see it when a drop of ink spreads through water, when a tea bag colours a cup, or when a smell crosses a room.",
            "Cells rely on diffusion to get what they need. Oxygen and glucose, needed for respiration, diffuse into cells from the blood. Carbon dioxide and other waste products, such as urea, diffuse out. In the lungs, oxygen diffuses from the air into the blood and carbon dioxide diffuses the other way."
          ],
          tip: "Diffusion: HIGH to LOW, down the gradient, no energy needed. The word 'net' belongs in your definition."
        },
        {
          heading: "What makes diffusion faster",
          paragraphs: [
            "Four factors affect the rate of diffusion. The first is the concentration gradient: the bigger the difference in concentration between the two places, the faster the net movement. Cells keep the gradient steep by using up what comes in; for example, respiration uses oxygen as fast as it arrives.",
            "The second is temperature. Warmer particles have more kinetic energy and move faster, so they spread out faster. A crystal of purple potassium permanganate colours hot water much faster than cold water for this reason.",
            "The third is the distance the particles must travel. The thinner the membrane or surface, the shorter the path and the faster the diffusion; the lining of the lungs is only one cell thick. The fourth is surface area. A larger surface gives more places for particles to cross at once, so the rate increases. The cells lining the small intestine have tiny folds called microvilli that multiply their surface area."
          ],
          tip: "Gradient up, temperature up, surface area up: faster. Distance up: slower."
        },
        {
          heading: "Surface area to volume ratio",
          paragraphs: [
            "Why are cells so small? The answer is surface area to volume ratio. Everything a cell needs must cross its surface, but everything it uses is spread through its volume. As an object gets bigger, its volume grows faster than its surface area, so each unit of volume has less surface to serve it.",
            "Try it with cubes. A cube with sides of 1 cm has a surface area of 6 cm² (six faces of 1 cm²) and a volume of 1 cm³, so its surface area to volume ratio is 6 : 1. A cube with sides of 2 cm has a surface area of 24 cm² and a volume of 8 cm³: the ratio has fallen to 3 : 1. The bigger cube has only half as much surface for each cubic centimetre inside it.",
            "A single cell is small enough that diffusion across its surface supplies all of it. A large organism, such as a person, has a tiny surface area to volume ratio, so diffusion through the skin could never supply the body. That is why large animals have exchange surfaces with huge areas, such as the lungs and the small intestine, and transport systems, such as the blood, to carry substances to every cell."
          ],
          worked: {
            q: "A cube has sides of 2 cm. Calculate its surface area to volume ratio.",
            steps: [
              "Surface area: a cube has 6 faces, each 2 cm × 2 cm = 4 cm², so 6 × 4 = 24 cm².",
              "Volume: 2 × 2 × 2 = 8 cm³.",
              "Ratio = surface area ÷ volume = 24 ÷ 8 = 3, written 3 : 1."
            ],
            answer: "3 : 1 (3 cm² of surface for every 1 cm³ of volume)",
            check: "6 * 2 * 2 / (2 * 2 * 2)"
          },
          tip: "Bigger object, smaller ratio. To compare two objects, work out surface area ÷ volume for each."
        },
        {
          heading: "Explaining a rate in the exam",
          paragraphs: [
            "A six-mark question on diffusion asks you to explain how factors affect the rate. For each factor, write three things: what changes, what that does to the rate, and why, in terms of particles. For example: a higher temperature increases the rate, because the particles have more kinetic energy and move faster.",
            "Avoid saying particles 'want' to move or 'know' where to go. Particles move randomly; the net movement is a result of the numbers, not a decision."
          ],
          tip: "Factor → effect on rate → particle explanation. Three parts for each factor."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which sentence describes diffusion?", options: ["the net movement of particles from a higher concentration to a lower concentration", "the movement of water only, through a partially permeable membrane", "the movement of particles against a concentration gradient using energy", "the movement of particles from a lower concentration to a higher concentration without energy"], answer: 0, why: "Diffusion is the net movement of particles down a concentration gradient, from high to low, and it needs no energy from the cell.",
          feedback: [
            "",
            "That is osmosis, a special case for water crossing a membrane. Diffusion is the net movement of any particles from a higher to a lower concentration.",
            "Moving against the gradient using energy is active transport. Diffusion goes the other way, from high to low, and needs no energy.",
            "Particles cannot move overall from low to high concentration without energy; that would need active transport. Diffusion is net movement from HIGH to LOW."
          ] },
        { kind: "numeric", q: "A cube has sides of 3 cm. Calculate its total surface area in cm².", answer: 54, tolerance: 0, units: "cm²", check: "6 * 3 * 3", why: "A cube has 6 faces, each 3 × 3 = 9 cm², so the total surface area is 6 × 9 = 54 cm² (exact).",
          misconceptions: [
            { answer: 9, check: "3 * 3", says: "That is the area of one face. A cube has six faces: 6 × 9 = 54 cm²." },
            { answer: 27, check: "3 * 3 * 3", says: "That is the volume (3 × 3 × 3 cm³), not the surface area. Surface area is six faces of 9 cm²: 54 cm²." },
            { answer: 36, check: "4 * 3 * 3", says: "You counted four faces. A cube has six, including the top and bottom: 6 × 9 = 54 cm²." }
          ] },
        { kind: "gap", q: "Increasing the temperature ___ the rate of diffusion.", answer: "increases", options: ["increases", "decreases", "stops"], why: "Warmer particles have more kinetic energy and move faster, so they spread out faster.",
          feedback: {
            "decreases": "You have the effect the wrong way round. Warmer particles have more kinetic energy and move faster, so diffusion speeds up as the temperature rises.",
            "stops": "Diffusion never stops while particles are moving, and warming makes them move faster. A higher temperature increases the rate of diffusion."
          } }
      ],
      modules: [
        {
          title: "Surface area to volume",
          task: { kind: "numeric", q: "A model cell is a cube with sides of 4 cm. Calculate its surface area to volume ratio. Give your answer as surface area ÷ volume.", answer: 1.5, tolerance: 0, units: ": 1", check: "6 * 4 * 4 / (4 * 4 * 4)", why: "Surface area = 6 × 4 × 4 = 96 cm². Volume = 4 × 4 × 4 = 64 cm³. Ratio = 96 ÷ 64 = 1.5, so 1.5 : 1 (exact).",
            misconceptions: [
              { answer: 0.67, check: "4 * 4 * 4 / (6 * 4 * 4)", says: "You divided volume by surface area, upside down. The ratio is surface area ÷ volume: 96 ÷ 64 = 1.5." },
              { answer: 96, check: "6 * 4 * 4", says: "That is the surface area on its own. Now divide it by the volume (64 cm³): 96 ÷ 64 = 1.5." },
              { answer: 0.25, check: "4 * 4 / (4 * 4 * 4)", says: "You used the area of one face (16 cm²) instead of all six (96 cm²). 96 ÷ 64 = 1.5." }
            ] },
          contexts: [
            { label: "Agar jelly", q: "A cube of agar jelly has sides of 4 cm. Calculate its surface area to volume ratio. Give your answer as surface area ÷ volume." },
            { label: "Potato cube", q: "A model cell is cut from a potato as a cube with sides of 4 cm. Calculate its surface area to volume ratio. Give your answer as surface area ÷ volume." },
            { label: "Ice cube", q: "An ice cube has sides of 4 cm. Calculate its surface area to volume ratio. Give your answer as surface area ÷ volume." }
          ],
          levels: {
            support: {
              steps: ["Surface area: area of one face (side × side), then × 6.", "Volume: side × side × side.", "Ratio: surface area ÷ volume."],
              example: { q: "A cube has sides of 3 cm. Calculate its surface area to volume ratio.", steps: ["Surface area = 6 × 3 × 3 = 54 cm².", "Volume = 3 × 3 × 3 = 27 cm³.", "Ratio = 54 ÷ 27 = 2, so 2 : 1."], answer: "2 : 1", check: "6 * 3 * 3 / (3 * 3 * 3)" }
            },
            core: { hint: "Six faces for the surface area; side cubed for the volume; then divide." },
            stretch: { extend: "Compare your ratio with that of a 1 cm cube (6 : 1). Explain, using diffusion, why a cell the size of the 4 cm cube could not survive." }
          },
          why: "96 cm² ÷ 64 cm³ = 1.5, so the ratio is 1.5 : 1, far lower than the 6 : 1 of a 1 cm cube.",
          explain: "Say why the ratio got smaller as the cube got bigger, and what that means for a cell."
        },
        {
          title: "Slower or faster?",
          task: { kind: "mcq", q: "Which change would make oxygen diffuse into a cell more slowly?", options: ["a thicker cell membrane", "a higher concentration of oxygen outside the cell", "a higher temperature", "a larger surface area of membrane"], answer: 0, why: "A thicker membrane means a longer distance for the particles to travel, which slows diffusion. The other three changes all speed it up.",
            feedback: [
              "",
              "More oxygen outside makes the concentration gradient steeper, which speeds diffusion up. The change that slows it is a longer distance: a thicker membrane.",
              "A higher temperature gives the particles more kinetic energy, so they move faster and diffusion speeds up. A thicker membrane is what slows it.",
              "A larger surface area gives more places for oxygen to cross at once, so diffusion speeds up. A thicker membrane, a longer distance, slows it."
            ] },
          levels: {
            support: {
              steps: ["List the four factors: gradient, temperature, distance, surface area.", "Three of them speed diffusion up when they increase; only distance slows it.", "Find the option that increases the distance."],
              example: { q: "Which would make carbon dioxide leave a cell faster: a thicker cell membrane, or a higher temperature?", steps: ["A thicker membrane is a longer distance to travel, so it slows diffusion.", "A higher temperature gives the particles more kinetic energy, so they move faster."], answer: "A higher temperature: the particles move faster, so carbon dioxide leaves more quickly." }
            },
            core: { hint: "Which of the four factors slows diffusion when it increases?" },
            stretch: { extend: "The lining of the lungs is one cell thick and is kept at body temperature with a constant blood supply. Explain how each of these three facts keeps oxygen diffusing quickly into the blood." }
          },
          why: "Distance is the only factor that slows diffusion as it increases; a thicker membrane is a longer distance.",
          explain: "Say, in one sentence, why a thin exchange surface helps diffusion."
        },
        {
          title: "Three ways to speed it up",
          task: { kind: "written", q: "A single-celled organism lives in a pond and gets its oxygen by diffusion. Explain three ways in which the rate at which oxygen diffuses into the organism could be increased. Explain each one in terms of particles.", marks: 6,
            criteria: [
              "Steeper concentration gradient (more oxygen in the water, or oxygen used up faster inside): more particles move in than out.",
              "Higher temperature: particles have more kinetic energy and move faster.",
              "Shorter distance (thinner membrane or surface): particles have less far to travel.",
              "Larger surface area: more places for particles to cross at the same time.",
              "Each factor is linked to the rate (faster) and explained with particle movement, not just named.",
              "Uses the words 'concentration gradient' and 'net movement' correctly."
            ],
            model: "First, a steeper concentration gradient would increase the rate. If the pond water held more dissolved oxygen, or the organism used oxygen faster inside, the difference in concentration across its surface would be bigger, so more oxygen particles would cross in than out and the net movement inward would be faster. Second, a higher temperature would increase the rate, because the particles would have more kinetic energy and move faster, so they would reach and cross the surface more often. Third, a larger surface area, for example a flatter or more folded shape, would increase the rate, because there would be more places where oxygen particles could cross at the same time. A thinner surface would also help, since particles would have a shorter distance to travel." },
          levels: {
            support: {
              steps: ["Choose three factors from: gradient, temperature, distance, surface area.", "For each, say what change makes diffusion faster.", "Then say why, using the words particles, move, faster or more."],
              example: { q: "Explain one way the rate at which carbon dioxide leaves a leaf cell could be increased.", steps: ["Make the gradient steeper: if the air outside has less carbon dioxide, the difference is bigger.", "More particles then move out than in, so the net movement out is faster."], answer: "A steeper concentration gradient: more carbon dioxide particles leave than return, so the net rate out rises." }
            },
            core: { hint: "Three factors × (what changes + what happens to the rate + why, in particles) = six marks." },
            stretch: { extend: "Explain why the same organism, if it grew to ten times its size, would struggle to get enough oxygen even with all three changes." }
          },
          why: "A full answer takes three factors, says how each change speeds up diffusion, and explains each using the random movement of particles and the idea of net movement.",
          explain: "Say why 'the particles want to spread out' would lose a mark, and what you should write instead."
        }
      ]
    },

    /* ───────────── 6 · osmosis and active transport ───────────── */
    {
      key: "osmosis-and-active-transport", n: 6, title: "Osmosis and active transport",
      lead: "This chapter covers the two other ways substances move: water by osmosis, with the potato practical, and minerals by active transport.",
      covers: [7, 8],
      pretext: {
        words: [
          { word: "osmosis", means: "the movement of water through a membrane from a weak solution to a strong one", sentence: "Water entered the potato by osmosis." },
          { word: "dilute", means: "a weak solution, with lots of water and little dissolved in it", sentence: "Pure water is the most dilute solution of all." },
          { word: "concentrated", means: "a strong solution, with a lot dissolved in it", sentence: "The syrup was a very concentrated sugar solution." },
          { word: "partially permeable", means: "letting some particles through but not others", sentence: "The cell membrane is partially permeable: water passes, sugar does not." },
          { word: "turgid", means: "firm and swollen with water", sentence: "The plant cells were turgid, so the leaf stood up straight." },
          { word: "active transport", means: "moving particles from low to high concentration using energy", sentence: "Root hair cells take in minerals by active transport." }
        ],
        passage: [
          "Osmosis is the movement of water.",
          "Water moves across a partially permeable membrane.",
          "This membrane lets water through but not big dissolved particles.",
          "Water moves from a dilute solution to a concentrated solution.",
          "A dilute solution has lots of water and little sugar or salt.",
          "A concentrated solution has less water and more sugar or salt.",
          "In pure water, an animal cell swells and may burst.",
          "A plant cell swells too, but its cell wall stops it bursting.",
          "In a strong sugar solution, cells lose water and shrink.",
          "Active transport is different.",
          "It moves particles from a low concentration to a high concentration.",
          "This needs energy from respiration.",
          "Root hair cells use it to take in minerals from the soil."
        ]
      },
      sections: [
        {
          heading: "Osmosis: water on the move",
          paragraphs: [
            "Osmosis is the diffusion of water from a dilute solution to a concentrated solution through a partially permeable membrane. A partially permeable membrane has tiny holes that let small water molecules through but hold back larger dissolved particles such as sugar. The cell membrane is one. Like diffusion, osmosis is passive: it needs no energy from the cell.",
            "Think about the water. A dilute solution has a lot of water and only a little dissolved in it, so its water concentration is high. A concentrated solution has less water and more dissolved particles, so its water concentration is low. Water moves down its own concentration gradient, from where there is more water to where there is less: from dilute to concentrated.",
            "Your department uses three words for solutions compared with the inside of a cell. A hypotonic solution is more dilute than the cell, so water moves in. A hypertonic solution is more concentrated than the cell, so water moves out. An isotonic solution has the same concentration as the cell, so there is no net movement of water."
          ],
          tip: "Osmosis is WATER ONLY, through a membrane, from dilute to concentrated. If sugar or salt is moving, it is not osmosis."
        },
        {
          heading: "Cells in different solutions",
          paragraphs: [
            "Put an animal cell in pure water or a very dilute solution and water moves in by osmosis. The cell swells. It has no cell wall to hold it, so if enough water enters the membrane splits and the cell bursts. Put the same cell in a concentrated solution and water moves out; the cell shrinks and its surface wrinkles. This is why the concentration of your blood is controlled so carefully.",
            "A plant cell in a dilute solution also takes in water, and its vacuole swells and presses the cytoplasm against the cell wall. The strong cellulose wall stops the cell bursting; the cell becomes firm, or turgid, which is what holds leaves and stems up. In a concentrated solution a plant cell loses water, the vacuole shrinks and the cell goes soft, or flaccid. If it loses a lot of water, the membrane and cytoplasm pull away from the cell wall; the cell is plasmolysed and the plant wilts.",
            "In an isotonic solution nothing visible happens to either kind of cell, because water moves in and out at the same rate."
          ],
          tip: "Animal cell in pure water: bursts. Plant cell in pure water: turgid. The difference is the cell wall."
        },
        {
          heading: "Required practical: osmosis in potato cylinders",
          paragraphs: [
            "In this practical you find how the concentration of a sugar solution affects the mass of plant tissue. Use a cork borer to cut cylinders of potato the same length and thickness; trim them and blot them dry with a paper towel. Measure and record the mass of each cylinder. Place one cylinder in each of several sugar solutions of different concentration, including distilled water, for the same length of time, for example overnight. Take the cylinders out, blot them the same way as before, and measure their mass again.",
            "Blotting the same way each time matters: water on the outside of a cylinder adds to its mass without having entered the cells. Using cylinders cut with the same borer keeps the surface area the same. Safety: the cork borer and knife are sharp, so cut on a tile away from your hand; keep the electronic balance well away from spills.",
            "Because the cylinders start at slightly different masses, you compare them using the percentage change in mass: percentage change = (final mass − starting mass) ÷ starting mass × 100. A positive value means the cylinder gained water from a dilute solution; a negative value means it lost water to a concentrated one. Plot percentage change against concentration. Where the line crosses zero, the solution has the same concentration as the potato cells."
          ],
          worked: {
            q: "A potato cylinder had a mass of 4.0 g at the start and 4.5 g after a night in distilled water. Calculate the percentage change in mass.",
            steps: [
              "Find the change: 4.5 − 4.0 = 0.5 g (a gain).",
              "Divide by the starting mass: 0.5 ÷ 4.0 = 0.125.",
              "Multiply by 100 to make it a percentage: 12.5 %."
            ],
            answer: "+12.5 %",
            check: "(4.5 - 4.0) / 4.0 * 100"
          },
          tip: "Change ÷ START × 100. Divide by the starting mass, never the final mass, and keep the sign."
        },
        {
          heading: "Active transport: moving against the gradient",
          paragraphs: [
            "Sometimes a cell needs to take in a substance that is already more concentrated inside the cell than outside. Diffusion cannot do this, because the net movement would be outwards. Active transport moves particles from a more dilute solution to a more concentrated solution, against the concentration gradient. It is active because it needs energy from respiration; carrier proteins in the cell membrane use that energy to pump the particles across.",
            "Plants need mineral ions such as nitrate and magnesium from the soil, but the soil water is very dilute and the root cells already contain more of these ions. Root hair cells take them in by active transport, which is why they have so many mitochondria. In your small intestine, after a meal the glucose in the gut diffuses into the blood; when its concentration in the gut falls below that of the blood, the last of it is absorbed by active transport, so none is wasted.",
            "Three processes, then. Diffusion moves any particles down a gradient with no energy. Osmosis is diffusion of water only, through a partially permeable membrane, with no energy. Active transport moves particles up a gradient, needs energy from respiration, and uses carrier proteins."
          ],
          tip: "Active transport: LOW to HIGH, AGAINST the gradient, needs ENERGY. Everything diffusion is not."
        }
      ],
      gate: [
        { kind: "mcq", q: "In osmosis, which substance moves across the partially permeable membrane?", options: ["water", "sugar", "salt", "oxygen"], answer: 0, why: "Osmosis is the movement of water, and only water, through a partially permeable membrane from a dilute to a concentrated solution.",
          feedback: [
            "",
            "Sugar particles are too big to pass through a partially permeable membrane; that is the point of the membrane. In osmosis it is the water that moves.",
            "Dissolved salt does not move in osmosis; the membrane holds it back. The substance that crosses is water, moving from the dilute side to the concentrated side.",
            "Oxygen moves in and out of cells by ordinary diffusion. Osmosis is the word for water moving through a partially permeable membrane."
          ] },
        { kind: "gap", q: "Active transport needs ___ from respiration.", answer: "energy", options: ["energy", "water", "oxygen"], why: "Active transport moves particles against the gradient, which cannot happen on its own; the energy comes from respiration, which is why root hair cells have many mitochondria.",
          feedback: {
            "water": "Water is what moves in osmosis, not what active transport needs. Active transport needs energy, released by respiration, to pump particles against the gradient.",
            "oxygen": "Respiration uses oxygen, but the thing active transport itself needs is the energy that respiration releases. That energy pumps particles against the gradient."
          } },
        { kind: "numeric", q: "A potato cylinder has a mass of 2.0 g at the start and 2.3 g at the end of the experiment. Calculate the percentage change in mass.", answer: 15, tolerance: 0, units: "%", check: "(2.3 - 2.0) / 2.0 * 100", why: "Change = 2.3 − 2.0 = 0.3 g; 0.3 ÷ 2.0 × 100 = 15 % (exact). A positive change: water moved in.",
          misconceptions: [
            { answer: 0.3, check: "2.3 - 2.0", says: "That is the change in mass in grams, not the percentage change. Divide it by the starting mass and multiply by 100: 0.3 ÷ 2.0 × 100 = 15 %." },
            { answer: 13, check: "(2.3 - 2.0) / 2.3 * 100", says: "You divided by the final mass. Percentage change is always compared with the STARTING mass: 0.3 ÷ 2.0 × 100 = 15 %." },
            { answer: 115, check: "2.3 / 2.0 * 100", says: "You worked out the final mass as a percentage of the start (115 %). The percentage CHANGE is the extra 15 %: (2.3 − 2.0) ÷ 2.0 × 100." }
          ] }
      ],
      modules: [
        {
          title: "Percentage change in mass",
          task: { kind: "numeric", q: "A potato cylinder has a mass of 6.0 g at the start. After a night in a concentrated sugar solution its mass is 5.4 g. Calculate the percentage change in mass.", answer: -10, tolerance: 0, units: "%", check: "(5.4 - 6.0) / 6.0 * 100", why: "Change = 5.4 − 6.0 = −0.6 g; −0.6 ÷ 6.0 × 100 = −10 % (exact). The minus sign shows the cylinder lost water to the concentrated solution.",
            misconceptions: [
              { answer: 10, check: "(6.0 - 5.4) / 6.0 * 100", says: "You have the right size but lost the sign. The mass went DOWN, so the change is negative: (5.4 − 6.0) ÷ 6.0 × 100 = −10 %." },
              { answer: -0.6, check: "5.4 - 6.0", says: "That is the change in grams. For the percentage, divide by the starting mass and multiply by 100: −0.6 ÷ 6.0 × 100 = −10 %." },
              { answer: -11, check: "(5.4 - 6.0) / 5.4 * 100", says: "You divided by the final mass. Always divide by the STARTING mass: −0.6 ÷ 6.0 × 100 = −10 %." }
            ] },
          contexts: [
            { label: "Apple cube", q: "A cube of apple has a mass of 6.0 g at the start. After a night in a concentrated sugar solution its mass is 5.4 g. Calculate the percentage change in mass." },
            { label: "Carrot stick", q: "A carrot stick with a starting mass of 6.0 g is left in strong salt water overnight. Its final mass is 5.4 g. Calculate the percentage change in mass." },
            { label: "Cucumber slice", q: "A cucumber slice has a mass of 6.0 g. After it has sat in a concentrated sugar solution for a day its mass is 5.4 g. Calculate the percentage change in mass." }
          ],
          levels: {
            support: {
              steps: ["Change = final − start (keep the sign).", "Divide the change by the START mass.", "Multiply by 100 and add the % sign."],
              example: { q: "A potato cylinder goes from 5.0 g to 4.6 g. Calculate the percentage change in mass.", steps: ["Change = 4.6 − 5.0 = −0.4 g.", "−0.4 ÷ 5.0 = −0.08.", "−0.08 × 100 = −8 %."], answer: "−8 %", check: "(4.6 - 5.0) / 5.0 * 100" }
            },
            core: { hint: "Final minus start, over start, times 100. Expect a minus sign: the cylinder lost water." },
            stretch: { extend: "Explain, in terms of osmosis and water concentration, why this cylinder lost mass, and predict the sign of the change for a cylinder in distilled water." }
          },
          why: "(5.4 − 6.0) ÷ 6.0 × 100 = −10 %. Negative because water left the cells by osmosis into the more concentrated solution.",
          explain: "Say why the result is negative and what that tells you about the solution compared with the potato cells."
        },
        {
          title: "Cell in pure water",
          task: { kind: "mcq", q: "A red blood cell is placed in pure water. What happens to it?", options: ["Water moves in by osmosis; the cell swells and bursts", "Water moves out by osmosis; the cell shrinks", "Nothing happens, because water cannot cross the membrane", "Water moves in by active transport; the cell swells"], answer: 0, why: "Pure water is more dilute than the cell contents, so water moves into the cell by osmosis. With no cell wall to hold it, the cell swells and bursts.",
            feedback: [
              "",
              "You have the direction the wrong way round. Pure water is MORE dilute than the cell, so water moves INTO the cell, which swells and, with no wall, bursts.",
              "Water crosses the cell membrane easily; the membrane is partially permeable. In pure water, water moves in by osmosis and the cell swells and bursts.",
              "Water moves by osmosis, which is passive; active transport is for particles pumped against their gradient. Water does move in, and the cell swells and bursts."
            ] },
          contexts: [
            { label: "Cheek cell", q: "A cheek cell is placed in a very dilute solution. What happens to it?" },
            { label: "Any animal cell", q: "An animal cell is dropped into distilled water. What happens to it?" }
          ],
          levels: {
            support: {
              steps: ["Compare the two sides: pure water (very dilute) outside; cytoplasm (more concentrated) inside.", "Water moves by osmosis from dilute to concentrated: into the cell.", "An animal cell has no wall, so when it swells enough it bursts."],
              example: { q: "A plant cell is placed in pure water. What happens to it?", steps: ["Water moves in by osmosis, as for the animal cell.", "The cell swells and becomes turgid.", "The cellulose wall stops it bursting."], answer: "Water enters by osmosis; the cell becomes turgid but does not burst, because of its cell wall." }
            },
            core: { hint: "Which side has more water? Water moves towards the other side. Then: wall or no wall?" },
            stretch: { extend: "Explain why a plant cell in the same pure water does not burst, and what would happen to each kind of cell in a concentrated salt solution instead." }
          },
          why: "Water moves by osmosis from the dilute water into the more concentrated cell; an animal cell has no wall to stop it swelling, so it bursts.",
          explain: "Say what single difference between a plant cell and an animal cell decides whether it bursts."
        },
        {
          title: "Water and minerals into a root",
          task: { kind: "written", q: "A plant takes in water and mineral ions through its root hair cells. Explain how water enters the cell and how mineral ions enter the cell, and compare the two processes.", marks: 6,
            criteria: [
              "Water enters by osmosis, from the dilute soil water to the more concentrated cell contents.",
              "Osmosis is through a partially permeable membrane and needs no energy (passive).",
              "Mineral ions enter by active transport, because they are at a lower concentration in the soil than in the cell (against the gradient).",
              "Active transport needs energy from respiration, so the cell has many mitochondria.",
              "Comparison: both cross the membrane; osmosis is water only and down the gradient, active transport is ions and up the gradient; only active transport needs energy.",
              "Uses the terms concentration gradient, partially permeable membrane and respiration correctly."
            ],
            model: "Water enters the root hair cell by osmosis. The soil water is a dilute solution and the cell's cytoplasm and vacuole are more concentrated, so water moves down its concentration gradient into the cell, through the partially permeable cell membrane. This is passive and needs no energy. Mineral ions such as nitrate are already more concentrated inside the cell than in the soil water, so they cannot enter by diffusion. They are taken in by active transport: carrier proteins in the membrane pump the ions against the concentration gradient, using energy released by respiration in the cell's many mitochondria. Both processes move substances across the cell membrane, but osmosis moves only water and goes down the gradient with no energy, while active transport moves mineral ions up the gradient and needs energy." },
          levels: {
            support: {
              steps: ["Water first: name the process (osmosis), say which way the gradient points and that no energy is needed.", "Ions second: name the process (active transport), say they go against the gradient and need energy from respiration.", "Finish with one sentence of comparison: direction, substance, energy."],
              example: { q: "Compare diffusion and active transport in one paragraph.", steps: ["Diffusion: particles move down a concentration gradient, high to low, with no energy.", "Active transport: particles move up the gradient, low to high, using energy from respiration.", "Both move particles across the membrane."], answer: "Both move particles across a membrane, but diffusion goes down the gradient without energy and active transport goes up it using energy from respiration." }
            },
            core: { hint: "Six marks: two for osmosis (direction, no energy), two for active transport (against the gradient, energy from respiration), two for the comparison." },
            stretch: { extend: "A farmer floods a field with salty water. Using osmosis, explain why the crop wilts, and suggest why its mineral uptake might fall too." }
          },
          why: "A full answer names osmosis for water and active transport for ions, gives the direction of each relative to the gradient, says which needs energy and why, and ends with an explicit comparison.",
          explain: "Say, in one sentence, why the root hair cell can take in water for free but has to pay, in energy, for its mineral ions."
        }
      ]
    }
  ],

  sources: {
    deckDump: "sc_ks4_bio_b1.txt",
    decksUsed: [
      "Microscope and magnification MD.pptx",
      "Plant and animal cells MD.pptx",
      "Prokaryotes and eukaryotes FB.pptx",
      "Specialisation in Animal cells FB.pptx",
      "Specialisation in Plant Cells FB.pptx",
      "Diffusion FB.pptm.pptx",
      "Osmosis MD.pptx",
      "Active transport FB.pptx"
    ],
    notes: "Lesson sequence, titles ('Today I am learning about…'), steps to success, Tier 2/3 vocabulary, the organelle functions, the microscope comparison table, the bacterial cell parts, the specialised-cell adaptations, the four diffusion factors, the hypotonic/hypertonic/isotonic terms, the potato-cylinder practical and the diffusion/osmosis/active-transport comparison are from the eight B1 decks. All questions, numbers and model paragraphs are original; no answer slide was copied. Four spec items the decks do not reach are taught briefly and flagged in NOTES.md: cell differentiation (4.1.1.4), surface area to volume ratio (4.1.3.1), percentage change in mass for the osmosis practical, and active transport of glucose in the gut (4.1.3.3). The dump lists the Diffusion deck five times (identical copies) and two macOS resource-fork entries that returned HTTP 416; eight distinct decks were used."
  }
};
