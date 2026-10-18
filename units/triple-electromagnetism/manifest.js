// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Physics 8463 · 4.7 Magnetism and electromagnetism (P15) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   check:"<plain arithmetic>"  on every numeric item and on every worked / support example whose answer contains a
//                               number. verify.py evaluates it: numeric answers within `tolerance` and correctly
//                               rounded; the first number in a worked answer must be the check value correctly rounded.
//   misconceptions[].check      every wrong answer offered carries the arithmetic that produces it; verify.py confirms
//                               it reproduces `answer` and differs from the right answer.
//   contexts[].q                carry exactly the same numbers as the task q (checked as a multiset) and, for mcq
//                               tasks, end in a question mark, so the shared answer/options hold by construction.
//   every mcq / gap answer is compared with an independent answer key held in verify.py; every "order" task is
//   compared with a canonical sequence held there; passage sentences <= 20 words; Fleming's left-hand rule and the
//   AQA equations F = B I l, Vp / Vs = np / ns and Vp Ip = Vs Is must appear with the correct finger / symbol
//   assignments; a lint rejects known misconceptions (field lines as lines of equal strength, iron core "does not
//   conduct", microphone as the motor effect, transformers working on d.c.).
// TIER MARKS: (Higher) = HT-only in AQA 8463. (Physics only) = not in Combined Science 8464 at all:
//   chapters 1–3 and the motor in chapter 4 are also in Combined (F = B I l and the motor are HT there too);
//   the loudspeaker (chapter 4), the generator effect (chapter 5) and transformers (chapter 6) are Physics only.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["triple-electromagnetism"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "triple-electromagnetism",
    subjectKey: "triple",
    subject: "Physics (Triple Science)",
    board: "AQA",
    spec: "8463",
    specRef: "4.7 Magnetism and electromagnetism (permanent and induced magnets, magnetic fields, electromagnets, the motor effect and F = B I l, electric motors; Physics only: loudspeakers, the generator effect, alternators and dynamos, microphones, transformers)",
    year: 11,
    tier: "GCSE Higher and Foundation (chapters 1–4 also in Combined Science; chapters 5–6 and the loudspeaker are Physics only)",
    title: "Electromagnetism",
    sub: "From a compass needle to the National Grid: how magnets, currents and movement push on each other and make electricity useful.",
    bigQuestion: "How can a coil of wire and a magnet turn electricity into movement, movement into electricity, and 230 V into 400 000 V?",
    lessonCount: 8,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "P15.1 Magnetic fields", question: "How does a permanent magnet induce magnetism in a piece of unmagnetised iron, and how do we picture its field?", keywords: ["permanent magnet", "induced magnetism", "magnetic field", "poles", "plotting compass", "field lines"] },
    { n: 2, title: "P15.2 Magnetic fields of electric current", question: "What shape is the magnetic field around a current-carrying wire and a solenoid, and how could you investigate it?", keywords: ["current", "magnetic field", "solenoid", "electromagnet", "plotting compass", "iron core"] },
    { n: 3, title: "P15.3 Electromagnets in devices (H)", question: "What affects the strength of an electromagnet, and how would you investigate it?", keywords: ["electromagnet", "coil", "iron core", "independent variable", "dependent variable", "control variable"] },
    { n: 4, title: "P15.4 The motor effect", question: "Why does a current-carrying wire in a magnetic field feel a force, and how does a motor use it?", keywords: ["motor effect", "Fleming's left-hand rule", "magnetic flux density", "F = B I l", "split-ring commutator", "d.c. motor"] },
    { n: 5, title: "P15.5 The generator effect (H)", question: "How can moving a wire or a magnet make a potential difference, and what decides its size and direction?", keywords: ["generator effect", "induced potential difference", "induced current", "relative motion", "coil", "opposes"] },
    { n: 6, title: "P15.6 The alternating current generator (H)", question: "How do an alternator, a dynamo, a microphone and a loudspeaker use coils and magnets?", keywords: ["alternator", "slip rings", "dynamo", "split-ring commutator", "microphone", "loudspeaker"] },
    { n: 7, title: "P15.7 Transformers (H)", question: "How does a transformer change the size of an alternating potential difference, and why does it only work with a.c.?", keywords: ["transformer", "primary coil", "secondary coil", "iron core", "step-up", "step-down"] },
    { n: 8, title: "P15.8 Transformers in action (H)", question: "How do the transformer equations work, and why does the National Grid run at a very high potential difference?", keywords: ["Vp / Vs = np / ns", "Vp Ip = Vs Is", "efficiency", "National Grid", "power", "current"] }
  ],

  glossary: [
    { term: "permanent magnet", means: "A magnet that produces its own magnetic field all the time, with a north pole and a south pole.", chapter: "magnets-fields" },
    { term: "induced magnet", means: "A magnetic material that becomes a magnet only while it is in another magnetic field. It is always attracted, never repelled.", chapter: "magnets-fields" },
    { term: "magnetic field", means: "The region around a magnet where another magnet or a magnetic material feels a force.", chapter: "magnets-fields" },
    { term: "solenoid", means: "A long coil of insulated wire. With a current in it, the field inside is strong and uniform and the outside looks like a bar magnet's.", chapter: "electromagnets" },
    { term: "electromagnet", means: "A solenoid with an iron core. Its magnetism can be switched on and off with the current.", chapter: "electromagnets" },
    { term: "motor effect", means: "A wire carrying a current in a magnetic field feels a force, because the two magnetic fields interact.", chapter: "motor-effect" },
    { term: "Fleming's left-hand rule", means: "Thumb for Force (motion), First finger for Field (north to south), seCond finger for conventional Current (+ to −).", chapter: "motor-effect" },
    { term: "magnetic flux density", means: "The strength of a magnetic field, symbol B, measured in tesla (T). Used in F = B I l.", chapter: "motor-effect" },
    { term: "split-ring commutator", means: "The split metal ring on a d.c. motor or dynamo that swaps the current direction in the coil every half turn.", chapter: "motors-speakers" },
    { term: "loudspeaker", means: "A coil fixed to a paper cone inside a magnet's field. An alternating current makes the coil, and the cone, move in and out, making sound.", chapter: "motors-speakers" },
    { term: "generator effect", means: "Moving a conductor through a magnetic field, or changing the field around it, induces a potential difference across the conductor.", chapter: "generator-effect" },
    { term: "alternator", means: "A generator with slip rings whose coil spins in a magnetic field to give an alternating current.", chapter: "generator-effect" },
    { term: "dynamo", means: "A generator with a split-ring commutator, so the current it gives always flows the same way (d.c.).", chapter: "generator-effect" },
    { term: "microphone", means: "A diaphragm fixed to a coil in a magnet's field. Sound makes the coil move, which induces a changing potential difference.", chapter: "generator-effect" },
    { term: "transformer", means: "Two coils on an iron core. An alternating p.d. across the primary coil induces an alternating p.d. across the secondary coil.", chapter: "transformers" },
    { term: "National Grid", means: "The system of cables and transformers that carries electricity from power stations to homes at a very high potential difference.", chapter: "transformers" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "Magnets and their fields", terms: ["permanent magnet", "induced magnet", "magnetic field", "solenoid"] },
    { group: "A current in a field feels a force", terms: ["motor effect", "Fleming's left-hand rule", "magnetic flux density", "split-ring commutator"] },
    { group: "Movement makes electricity", terms: ["generator effect", "alternator", "dynamo", "microphone"] },
    { group: "Coils at work, from the scrapyard to the power station", terms: ["electromagnet", "loudspeaker", "transformer", "National Grid"] }
  ],

  chapters: [
    /* ───────────── 1 · magnets and magnetic fields (also in Combined) ───────────── */
    {
      key: "magnets-fields", n: 1, title: "Magnets and magnetic fields",
      lead: "What a magnet does to another magnet and to a piece of iron, how to picture its invisible field, and why a compass points north. (Also in Combined Science.)",
      covers: [1],
      pretext: {
        words: [
          { word: "pole", means: "one of the two ends of a magnet, where its magnetism is strongest", sentence: "Every magnet has a north pole and a south pole." },
          { word: "repel", means: "push away", sentence: "Two north poles repel each other." },
          { word: "attract", means: "pull towards", sentence: "A north pole and a south pole attract each other." },
          { word: "permanent magnet", means: "a magnet that keeps its magnetism all the time", sentence: "A bar magnet is a permanent magnet." },
          { word: "induced magnet", means: "a piece of magnetic material that becomes a magnet only while it is near a magnet", sentence: "The paperclip became an induced magnet when it touched the bar magnet." },
          { word: "magnetic field", means: "the space around a magnet where its force can be felt", sentence: "The magnetic field is strongest at the poles." }
        ],
        passage: [
          "Every magnet has two poles: a north pole and a south pole.",
          "Like poles repel: north pushes north away.",
          "Unlike poles attract: north pulls south towards it.",
          "This push or pull works without touching.",
          "Only a few metals are magnetic: iron, steel, cobalt and nickel.",
          "A permanent magnet keeps its own magnetism all the time.",
          "A piece of iron near a magnet becomes a magnet too.",
          "We call this an induced magnet.",
          "An induced magnet is always attracted to the magnet, never repelled.",
          "Take the magnet away, and the iron soon loses its magnetism.",
          "The space around a magnet where its force acts is its magnetic field.",
          "The field is strongest at the poles and gets weaker further away.",
          "A compass needle is a small magnet that lines up with the Earth's magnetic field."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أحد طرفَي المغناطيس، حيث تكون مغناطيسيته أقوى ما تكون (pole)",
            "يدفع بعيداً (repel)",
            "يجذب نحوه (attract)",
            "مغناطيس يحتفظ بمغناطيسيته طوال الوقت (permanent magnet)",
            "قطعة من مادّة مغناطيسية تصبح مغناطيساً فقط وهي قريبة من مغناطيس (induced magnet)",
            "الفضاء حول المغناطيس حيث يمكن الإحساس بقوّته (magnetic field)"
          ],
          "passage": [
            "لكل مغناطيس قطبان (poles): قطب شمالي وقطب جنوبي.",
            "القطبان المتشابهان يتنافران: الشمالي يدفع الشمالي بعيداً.",
            "القطبان المختلفان يتجاذبان: الشمالي يجذب الجنوبي نحوه.",
            "هذا الدفع أو الجذب يعمل من دون تلامس.",
            "قليل من الفلزّات فقط مغناطيسي: الحديد، والفولاذ، والكوبالت، والنيكل.",
            "المغناطيس الدائم (permanent magnet) يحتفظ بمغناطيسيته طوال الوقت.",
            "قطعة الحديد القريبة من مغناطيس تصبح مغناطيساً أيضاً.",
            "نسمّي هذا مغناطيساً مستحثّاً (induced magnet).",
            "المغناطيس المستحثّ يُجذب دائماً نحو المغناطيس، ولا يُدفع بعيداً أبداً.",
            "أبعد المغناطيس، فيفقد الحديد مغناطيسيته بسرعة.",
            "الفضاء حول المغناطيس حيث تعمل قوّته هو مجاله المغناطيسي (magnetic field).",
            "المجال أقوى ما يكون عند القطبَين ويضعف كلما ابتعدنا.",
            "إبرة البوصلة مغناطيس صغير يتّجه مع المجال المغناطيسي للأرض."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "jeden z dwóch końców magnesu, gdzie jego magnetyzm jest najsilniejszy (pole)",
            "odpychać (repel)",
            "przyciągać (attract)",
            "magnes, który cały czas zachowuje swój magnetyzm (permanent magnet)",
            "kawałek materiału magnetycznego, który staje się magnesem tylko wtedy, gdy jest blisko magnesu (induced magnet)",
            "przestrzeń wokół magnesu, w której można odczuć jego siłę (magnetic field)"
          ],
          "passage": [
            "Każdy magnes ma dwa bieguny (poles): biegun północny i biegun południowy.",
            "Jednakowe bieguny się odpychają: północny odpycha północny.",
            "Różne bieguny się przyciągają: północny przyciąga południowy do siebie.",
            "To odpychanie lub przyciąganie działa bez dotykania.",
            "Tylko kilka metali jest magnetycznych: żelazo, stal, kobalt i nikiel.",
            "Magnes trwały (permanent magnet) cały czas zachowuje swój własny magnetyzm.",
            "Kawałek żelaza blisko magnesu też staje się magnesem.",
            "Nazywamy to magnesem indukowanym (induced magnet).",
            "Magnes indukowany jest zawsze przyciągany do magnesu, nigdy odpychany.",
            "Zabierz magnes, a żelazo szybko straci swój magnetyzm.",
            "Przestrzeń wokół magnesu, w której działa jego siła, to jego pole magnetyczne (magnetic field).",
            "Pole jest najsilniejsze przy biegunach i słabnie dalej od nich.",
            "Igła kompasu to mały magnes, który ustawia się wzdłuż pola magnetycznego Ziemi."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma das duas pontas de um ímã/íman, onde o seu magnetismo é mais forte (pole, polo)",
            "empurrar para longe (repel, repelir)",
            "puxar para si (attract, atrair)",
            "um ímã/íman que mantém o seu magnetismo o tempo todo (permanent magnet, ímã/íman permanente)",
            "um pedaço de material magnético que só é ímã/íman enquanto está perto de um ímã/íman (induced magnet, ímã/íman induzido)",
            "o espaço à volta de um ímã/íman onde a sua força se faz sentir (magnetic field, campo magnético)"
          ],
          "passage": [
            "Todo ímã/íman tem dois polos: um polo norte e um polo sul.",
            "Polos iguais repelem-se: o norte empurra o norte para longe.",
            "Polos diferentes atraem-se: o norte puxa o sul para si.",
            "Este empurrão ou puxão funciona sem tocar.",
            "Só alguns metais são magnéticos: o ferro, o aço, o cobalto e o níquel.",
            "Um ímã/íman permanente (permanent magnet) mantém o seu próprio magnetismo o tempo todo.",
            "Um pedaço de ferro perto de um ímã/íman também se torna um ímã/íman.",
            "Chamamos a isto um ímã/íman induzido (induced magnet).",
            "Um ímã/íman induzido é sempre atraído pelo ímã/íman, nunca repelido.",
            "Afaste o ímã/íman, e o ferro perde depressa o seu magnetismo.",
            "O espaço à volta de um ímã/íman onde a sua força atua é o seu campo magnético (magnetic field).",
            "O campo é mais forte nos polos e fica mais fraco ao afastar-se.",
            "A agulha de uma bússola é um pequeno ímã/íman que se alinha com o campo magnético da Terra."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "mid ka mid ah labada daraf ee bir-lab (magnet), halka xooggeedu ugu badan yahay (pole)",
            "iska riixid (repel)",
            "isu soo jiidid (attract)",
            "bir-lab had iyo jeer magnetism-keeda haysa (permanent magnet)",
            "gabal walax magnetic ah oo noqda bir-lab keliya inta ay bir-lab u dhow dahay (induced magnet)",
            "booska bir-lab ku wareegsan oo xooggeeda la dareemi karo (magnetic field)"
          ],
          "passage": [
            "Bir-lab (magnet) kastaa waxay leedahay laba daraf (poles): daraf woqooyi iyo daraf koonfur.",
            "Darfo isku mid ah way is riixaan (repel): woqooyi woqooyi ayuu riixaa.",
            "Darfo kala duwan way is soo jiitaan (attract): woqooyi koonfur ayuu soo jiitaa.",
            "Riixiddan ama jiididdan taabasho la'aan ayay ku shaqaysaa.",
            "Dhawr bir keliya ayaa magnetic ah: bir (iron), bir-adag (steel), cobalt iyo nickel.",
            "Permanent magnet had iyo jeer magnetism-keeda ayay haysaa.",
            "Gabal bir oo bir-lab u dhow isna wuxuu noqdaa bir-lab.",
            "Tan waxaan ugu yeernaa induced magnet.",
            "Induced magnet mar walba bir-labta ayay u soo jiidataa, weligeed lama riixo.",
            "Bir-labta ka fogee, birtuna dhaqso ayay magnetism-keeda u lumisaa.",
            "Booska bir-lab ku wareegsan oo xooggeedu ku shaqeeyo waa magnetic field-keeda.",
            "Field-ku darfaha ayuu ugu xoog badan yahay, wuxuuna sii daciifaa markuu sii fogaado.",
            "Irbadda kombaaska (compass) waa bir-lab yar oo la safta magnetic field-ka Dhulka."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "один із двох кінців магніту, де його магнетизм найсильніший (pole)",
            "відштовхувати (repel)",
            "притягувати (attract)",
            "магніт, який зберігає свій магнетизм увесь час (permanent magnet)",
            "шматок магнітного матеріалу, який стає магнітом лише тоді, коли він поруч із магнітом (induced magnet)",
            "простір навколо магніту, де відчувається його сила (magnetic field)"
          ],
          "passage": [
            "Кожний магніт має два полюси (poles): північний і південний.",
            "Однакові полюси відштовхуються (repel): північний відштовхує північний.",
            "Різні полюси притягуються (attract): північний притягує до себе південний.",
            "Це відштовхування або притягання діє без дотику.",
            "Лише кілька металів є магнітними: залізо, сталь, кобальт і нікель.",
            "Постійний магніт (permanent magnet) зберігає свій магнетизм увесь час.",
            "Шматок заліза поруч із магнітом також стає магнітом.",
            "Ми називаємо це наведеним магнітом (induced magnet).",
            "Наведений магніт завжди притягується до магніту й ніколи не відштовхується.",
            "Заберіть магніт — і залізо скоро втратить свій магнетизм.",
            "Простір навколо магніту, де діє його сила, — це його магнітне поле (magnetic field).",
            "Поле найсильніше біля полюсів і слабшає далі від них.",
            "Стрілка компаса — це маленький магніт, який вирівнюється за магнітним полем Землі."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "مقناطیس کے دو سروں میں سے ایک، جہاں اس کی مقناطیسیت سب سے زیادہ ہو (pole)",
            "دور دھکیلنا (repel)",
            "اپنی طرف کھینچنا (attract)",
            "ایسا مقناطیس جو ہر وقت اپنی مقناطیسیت رکھتا ہے (permanent magnet)",
            "مقناطیسی مادے کا ایک ٹکڑا جو صرف مقناطیس کے قریب ہونے پر مقناطیس بنتا ہے (induced magnet)",
            "مقناطیس کے گرد وہ جگہ جہاں اس کی قوت محسوس ہو سکتی ہے (magnetic field)"
          ],
          "passage": [
            "ہر مقناطیس کے دو قطب (poles) ہوتے ہیں: ایک شمالی قطب اور ایک جنوبی قطب۔",
            "ایک جیسے قطب ایک دوسرے کو دھکیلتے (repel) ہیں: شمالی شمالی کو دور کرتا ہے۔",
            "الگ قطب ایک دوسرے کو کھینچتے (attract) ہیں: شمالی جنوبی کو اپنی طرف کھینچتا ہے۔",
            "یہ دھکا یا کھنچاؤ بغیر چھوئے کام کرتا ہے۔",
            "صرف چند دھاتیں مقناطیسی ہیں: لوہا، اسٹیل، کوبالٹ اور نکل۔",
            "مستقل مقناطیس (permanent magnet) ہر وقت اپنی مقناطیسیت رکھتا ہے۔",
            "مقناطیس کے قریب لوہے کا ٹکڑا بھی مقناطیس بن جاتا ہے۔",
            "ہم اسے induced magnet کہتے ہیں۔",
            "Induced magnet ہمیشہ مقناطیس کی طرف کھنچتا ہے، کبھی دور نہیں ہوتا۔",
            "مقناطیس ہٹا لیں تو لوہا جلد اپنی مقناطیسیت کھو دیتا ہے۔",
            "مقناطیس کے گرد وہ جگہ جہاں اس کی قوت کام کرتی ہے اس کا مقناطیسی میدان (magnetic field) ہے۔",
            "میدان قطبوں پر سب سے مضبوط ہوتا ہے اور دور جاتے جاتے کمزور ہو جاتا ہے۔",
            "قطب نما (compass) کی سوئی ایک چھوٹا مقناطیس ہے جو زمین کے مقناطیسی میدان کے ساتھ سیدھ میں آ جاتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Poles, forces and magnetic materials",
          paragraphs: [
            "Every magnet has two poles, a north pole and a south pole, and this is where its magnetism is strongest. Bring two magnets together and you feel a force. Two like poles (north and north, or south and south) repel each other. Two unlike poles (north and south) attract. This is a non-contact force: the magnets do not have to touch.",
            "Only a few materials are magnetic. The ones you need to know are iron, steel, cobalt and nickel. Aluminium, copper, gold, plastic, wood and card are not magnetic, which is why a sheet of card between a magnet and a paperclip does not stop the paperclip being pulled.",
            "A magnet attracts a piece of unmagnetised iron, but it cannot repel it. Repulsion only happens between two magnets. That gives you a quick test: if two objects repel, they are both magnets."
          ],
          tip: "Attraction alone does not prove something is a magnet; a plain iron bar is attracted too. Repulsion is the only test that proves both objects are magnets."
        },
        {
          heading: "Permanent magnets and induced magnets",
          paragraphs: [
            "A permanent magnet produces its own magnetic field all the time. A bar magnet is a permanent magnet. Steel is used to make permanent magnets because, once it is magnetised, it does not lose its magnetism easily. The deck calls steel a hard magnetic material.",
            "An induced magnet is a magnetic material that becomes a magnet only while it is inside another magnetic field. Hold a bar magnet near a paperclip or an iron nail and it becomes a magnet: the end nearest the bar magnet becomes the opposite pole, so the two attract. That is why a second paperclip will hang from the first, and a third from the second.",
            "When you take the permanent magnet away, soft iron loses most or all of its magnetism quickly. Because an induced magnet always has the opposite pole facing the magnet that made it, induced magnetism always causes attraction, never repulsion."
          ],
          worked: {
            q: "A bar magnet's south pole is held near one end of an unmagnetised iron bar. Explain why the iron bar is attracted. (3 marks)",
            steps: [
              "Name what happens to the iron: it is in the magnet's field, so it becomes an induced magnet.",
              "Say which pole is induced where: the end of the iron nearest the magnet's south pole becomes a north pole.",
              "Finish with the rule: unlike poles attract, so the induced north pole is pulled towards the magnet's south pole."
            ],
            answer: "The iron becomes an induced magnet; its near end becomes a north pole; unlike poles attract, so it is pulled towards the magnet's south pole."
          },
          tip: "Induced magnet questions nearly always want three ideas: becomes a magnet, opposite pole is induced nearest, so attraction."
        },
        {
          heading: "Picturing the field: field lines and the plotting compass",
          paragraphs: [
            "You cannot see a magnetic field, so we draw it with field lines. The magnetic field is the region around a magnet where another magnet, or a piece of magnetic material, experiences a force. The field lines have arrows that point from the north pole round to the south pole. The direction of the field at any point is the direction of the force that would act on a north pole placed there.",
            "Where the lines are close together the field is strong; where they are spread out it is weak. That is why the lines crowd together at the poles, where the field is strongest, and spread out further away, where the field gets weaker with distance.",
            "A plotting compass is a tiny bar magnet on a pivot. Put it in the field and its needle lines up with the field line at that point. Mark where the needle points, move the compass to that mark, and repeat: the dots join up into a field line. Iron filings sprinkled on card over a magnet show the same pattern."
          ],
          tip: "Field lines never cross, and they come out of N and go into S. Draw the arrows; a field line without arrows loses the mark."
        },
        {
          heading: "The Earth is a magnet",
          paragraphs: [
            "The needle of a compass is a small bar magnet, and it is free to turn. It settles pointing roughly north, so there must be a magnetic field there for it to line up with: the Earth has a magnetic field. The Earth's core contains iron and nickel, and the Earth behaves as if it had a huge bar magnet inside it.",
            "The end of the compass needle that points north is called its north-seeking pole, or simply its north pole. Since unlike poles attract, the point it is attracted to, up near the geographic North Pole, must be a magnetic south pole. The deck puts it neatly: the Earth's magnetic north is really the south pole of the Earth's magnetic field.",
            "Away from any magnets and wires, a plotting compass points north. That is the first check you make in any field-plotting experiment: if the compass does not point north with nothing nearby, something magnetic is affecting it."
          ]
        }
      ],
      gate: [
        { kind: "mcq", q: "What happens when the north pole of one magnet is brought near the north pole of another?", options: ["They repel", "They attract", "Nothing: poles only act on iron", "They swap poles"], answer: 0, why: "Like poles repel. Only unlike poles (north and south) attract.",
          feedback: [
            "",
            "Attraction happens between unlike poles, north and south. Two north poles are like poles, and like poles repel.",
            "Poles act on other magnets as well as on iron: that is how two magnets push and pull on each other. Two north poles repel.",
            "Poles do not swap when magnets come near each other. Two north poles simply push each other away: like poles repel."
          ] },
        { kind: "gap", q: "A piece of iron that becomes a magnet only while it is in another magnetic field is called an ___ magnet.", answer: "induced", options: ["induced", "permanent", "electric"], why: "Induced magnetism is temporary: it lasts only while the material is in the field.",
          feedback: {
            "permanent": "A permanent magnet makes its own field all the time, even with no other magnet nearby. Iron that is only magnetic while a magnet is near it is an induced magnet.",
            "electric": "An electromagnet is a coil with a current in it, which is Chapter 2. Iron that becomes magnetic just by being in a magnet's field is an induced magnet."
          } },
        { kind: "mcq", q: "Where is the magnetic field of a bar magnet strongest?", options: ["At the poles", "In the middle of the magnet", "About 10 cm away from it", "It is the same strength everywhere"], answer: 0, why: "The field lines are closest together at the poles, which is where the field is strongest. It gets weaker with distance.",
          feedback: [
            "",
            "The middle of a bar magnet is where the fewest field lines leave the surface, so the field is weakest there. The field is strongest at the two poles.",
            "The field gets weaker the further you are from the magnet, so 10 cm away is weaker than at the surface. It is strongest at the poles.",
            "The field is not uniform around a bar magnet: the lines crowd together at the poles and spread out elsewhere. It is strongest at the poles."
          ] }
      ],
      modules: [
        {
          title: "Why the second paperclip hangs on",
          task: {
            kind: "mcq",
            q: "A steel paperclip hangs from the end of a bar magnet. A second paperclip hangs from the first, even though it is not touching the magnet. Why?",
            options: [
              "The first paperclip has become an induced magnet, so it attracts the second",
              "The second paperclip is a permanent magnet",
              "Steel is sticky when it is near a magnet",
              "The two paperclips repel each other, which holds them together"
            ],
            answer: 0,
            feedback: [
              "",
              "An ordinary paperclip is not a permanent magnet: it has no field of its own until it is placed in a field. Here the first paperclip, sitting in the bar magnet's field, has become an induced magnet, and that is what attracts the second.",
              "There is no stickiness involved; the force is magnetic and acts without contact. The first paperclip has been turned into an induced magnet by the bar magnet's field, and it attracts the second.",
              "Repulsion pushes objects apart; it could never hold the second paperclip on. Induced magnets are always attracted, never repelled. The first paperclip is an induced magnet attracting the second."
            ]
          },
          contexts: [
            { label: "Iron nails", q: "An iron nail hangs from the end of a bar magnet. A second nail hangs from the point of the first, even though it is not touching the magnet. Why?" },
            { label: "Iron filings", q: "Iron filings sprinkled near a magnet's pole stand up in little spikes, with filings clinging to other filings that are not touching the magnet. Why?" },
            { label: "Steel pins", q: "A steel pin hangs from a magnet, and a second pin hangs from the first one. The second pin is not touching the magnet. Why?" }
          ],
          explain: "Say, in one sentence, why an induced magnet can never be repelled by the magnet that made it.",
          levels: {
            support: {
              steps: [
                "Ask: is the first paperclip inside the bar magnet's field? Yes, it is touching the pole.",
                "Recall what a magnetic material does in a field: it becomes an induced magnet.",
                "An induced magnet has poles of its own, so it can attract another magnetic material.",
                "Pick the option that says the first paperclip is now a magnet attracting the second."
              ],
              example: {
                q: "A magnet picks up an iron nail. Grains of iron filings then stick to the far end of the nail. Explain why.",
                steps: ["The nail is in the magnet's field, so it becomes an induced magnet.", "Its far end is now a pole.", "Magnetic materials are attracted to a pole, so the filings stick to the nail."],
                answer: "The nail becomes an induced magnet, so its far end is a pole that attracts the iron filings."
              }
            },
            core: { hint: "The first paperclip is sitting inside the bar magnet's field. What does a magnetic material become when it is in a field?" },
            stretch: { extend: "Predict what happens to the chain when the bar magnet is lifted away, and explain the difference you would expect between steel paperclips and soft iron nails." }
          },
          why: "Steel is a magnetic material. In the bar magnet's field the first paperclip becomes an induced magnet with its own poles, so it attracts the second paperclip. Induced magnetism always gives attraction."
        },
        {
          title: "Reading a field diagram",
          task: {
            kind: "match",
            q: "Match each feature of a magnetic field diagram to what it tells you.",
            pairs: [
              ["Arrows on the field lines", "The field direction: out of the north pole, into the south pole"],
              ["Field lines close together", "A strong field"],
              ["Field lines far apart", "A weak field"],
              ["Direction of the field at a point", "The direction of the force on a north pole placed there"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the arrows: they always point from N to S.",
                "Think of the lines as showing how much field there is: more lines in a space means a stronger field.",
                "Fewer lines in a space means a weaker field.",
                "The definition of field direction uses a north pole: which way would it be pushed?"
              ],
              example: {
                q: "On a field diagram the lines are much closer together near the poles than along the sides of the magnet. What does this tell you?",
                steps: ["Close lines mean a strong field.", "So the field is strongest near the poles and weaker along the sides."],
                answer: "The field is strongest near the poles, where the lines are closest, and weaker along the sides."
              }
            },
            core: { hint: "Arrows give direction; spacing gives strength; the formal definition of direction is about a north pole." },
            stretch: { extend: "Explain why two field lines can never cross each other. Use the idea that the field at a point has one direction." }
          },
          explain: "Say, in one sentence, how a field diagram shows where the field is strongest.",
          why: "Arrows show direction, N to S. Spacing shows strength: close lines, strong field; spread-out lines, weak field. The field direction at a point is the direction of the force on a north pole there."
        },
        {
          title: "Plot a field with a compass (4 marks)",
          task: {
            kind: "written",
            q: "Describe how you would use a plotting compass to draw the magnetic field pattern around a bar magnet. (4 marks)",
            marks: 4,
            criteria: [
              "Places the magnet on paper and puts the plotting compass near one pole",
              "Marks the position the needle points to, moves the compass to that mark and repeats",
              "Joins the dots to make a field line and repeats from several starting points around the magnet",
              "Adds arrows from the north pole to the south pole"
            ],
            model: "Put the bar magnet in the middle of a sheet of paper and draw round it. Place the plotting compass near the north pole and make a dot at the end of the needle. Move the compass so that the back of the needle is on the dot and make a new dot. Keep going until you reach the south pole, then join the dots to make a field line. Repeat from several places around the magnet. Finally draw arrows on each line pointing from the north pole to the south pole."
          },
          levels: {
            support: {
              steps: [
                "Set up: magnet on paper, draw round it.",
                "One step of the method: compass near a pole, dot at the needle tip.",
                "Repeat: move the compass to the dot, dot again, until you reach the other pole; join the dots.",
                "Finish: repeat from new starting points, and add arrows N to S."
              ],
              example: {
                q: "Describe how you would use iron filings to show the field pattern of a bar magnet. (3 marks)",
                steps: ["Put a sheet of card over the magnet.", "Sprinkle iron filings over the card and tap it gently.", "The filings line up along the field lines, showing the pattern."],
                answer: "Place card over the magnet, sprinkle iron filings on it and tap gently; the filings line up along the field lines and show the pattern (but not its direction)."
              }
            },
            core: { hint: "Dot, move, dot, move: the compass needle shows the direction at each point, and the dots join into a line." },
            stretch: { extend: "Explain one advantage of a plotting compass over iron filings, and say what you would check about the compass before you start." }
          },
          explain: "Say, in one sentence, what the compass needle tells you at each point.",
          why: "The compass needle lines up with the field at each point. Marking and moving it step by step traces one field line; repeating from several points gives the whole pattern; arrows run N to S."
        }
      ]
    },
    /* ───────────── 2 · electromagnets (also in Combined) ───────────── */
    {
      key: "electromagnets", n: 2, title: "Currents make magnetic fields: solenoids and electromagnets",
      lead: "How a current in a wire makes a magnetic field, how coiling the wire makes it stronger, and how to investigate what makes an electromagnet strong. (Also in Combined Science.)",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "current", means: "the flow of electric charge through a wire", sentence: "When the switch is closed, a current flows in the wire." },
          { word: "solenoid", means: "a long coil of insulated wire", sentence: "A solenoid with a current in it acts like a bar magnet." },
          { word: "electromagnet", means: "a solenoid with an iron core inside it", sentence: "The scrapyard crane uses an electromagnet to lift cars." },
          { word: "iron core", means: "a bar of iron placed inside a coil to make its field stronger", sentence: "Adding an iron core made the electromagnet pick up more paperclips." },
          { word: "uniform", means: "the same everywhere", sentence: "The field inside a solenoid is strong and uniform." }
        ],
        passage: [
          "A wire carrying a current has a magnetic field around it.",
          "The field is a set of circles around the wire.",
          "A plotting compass near the wire turns to follow the circles.",
          "A bigger current makes a stronger field.",
          "Reverse the current and the field reverses too.",
          "A solenoid is a long coil of insulated wire.",
          "Inside a solenoid the field is strong and uniform.",
          "Outside, it looks like the field of a bar magnet.",
          "Put an iron core inside the coil and the field gets much stronger.",
          "A solenoid with an iron core is called an electromagnet.",
          "You can switch an electromagnet on and off.",
          "More turns, more current or an iron core all make it stronger."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "تدفّق الشحنة الكهربائية في السلك (current)",
            "ملفّ طويل من سلك معزول (solenoid)",
            "ملفّ لولبي بداخله قلب من الحديد (electromagnet)",
            "قضيب من الحديد يوضع داخل الملفّ ليجعل مجاله أقوى (iron core)",
            "متساوٍ في كل مكان (uniform)"
          ],
          "passage": [
            "السلك الذي يمرّ فيه تيار له مجال مغناطيسي حوله.",
            "المجال مجموعة من الدوائر حول السلك.",
            "بوصلة الرسم القريبة من السلك تدور لتتبع الدوائر.",
            "التيار الأكبر يصنع مجالاً أقوى.",
            "اعكس التيار فينعكس المجال أيضاً.",
            "الملفّ اللولبي (solenoid) ملفّ طويل من سلك معزول.",
            "داخل الملفّ اللولبي يكون المجال قوياً ومنتظماً (uniform).",
            "وفي الخارج، يبدو مثل مجال مغناطيس قضيبي.",
            "ضع قلباً من الحديد (iron core) داخل الملفّ فيصبح المجال أقوى بكثير.",
            "الملفّ اللولبي الذي بداخله قلب من الحديد يُسمّى مغناطيساً كهربائياً (electromagnet).",
            "يمكنك أن تشغّل المغناطيس الكهربائي وتطفئه.",
            "لفّات أكثر، أو تيار أكبر، أو قلب من الحديد، كلها تجعله أقوى."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przepływ ładunku elektrycznego przez przewód (current)",
            "długa zwojnica z izolowanego przewodu (solenoid)",
            "zwojnica z żelaznym rdzeniem w środku (electromagnet)",
            "sztabka żelaza umieszczona wewnątrz zwojnicy, żeby wzmocnić jej pole (iron core)",
            "takie samo wszędzie (uniform)"
          ],
          "passage": [
            "Przewód, przez który płynie prąd, ma wokół siebie pole magnetyczne.",
            "Pole to zbiór okręgów wokół przewodu.",
            "Mały kompas blisko przewodu obraca się, żeby podążać za okręgami.",
            "Większy prąd daje silniejsze pole.",
            "Odwróć prąd, a pole też się odwróci.",
            "Solenoid (solenoid) to długa zwojnica z izolowanego przewodu.",
            "Wewnątrz solenoidu pole jest silne i jednorodne (uniform).",
            "Na zewnątrz wygląda jak pole magnesu sztabkowego.",
            "Włóż żelazny rdzeń (iron core) do zwojnicy, a pole stanie się dużo silniejsze.",
            "Solenoid z żelaznym rdzeniem nazywa się elektromagnesem (electromagnet).",
            "Elektromagnes możesz włączać i wyłączać.",
            "Więcej zwojów, większy prąd albo żelazny rdzeń — każde z nich go wzmacnia."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o fluxo de carga elétrica através de um fio (current, corrente)",
            "uma bobina comprida de fio isolado (solenoid, solenoide)",
            "um solenoide com um núcleo de ferro dentro (electromagnet, eletroímã/eletroíman)",
            "uma barra de ferro colocada dentro de uma bobina para tornar o seu campo mais forte (iron core, núcleo de ferro)",
            "igual em todo o lado (uniform, uniforme)"
          ],
          "passage": [
            "Um fio percorrido por uma corrente tem um campo magnético à sua volta.",
            "O campo é um conjunto de círculos à volta do fio.",
            "Uma bússola pequena perto do fio roda para seguir os círculos.",
            "Uma corrente maior faz um campo mais forte.",
            "Inverta a corrente e o campo também se inverte.",
            "Um solenoide (solenoid) é uma bobina comprida de fio isolado.",
            "Dentro de um solenoide o campo é forte e uniforme.",
            "Por fora, parece o campo de um ímã/íman em barra.",
            "Ponha um núcleo de ferro dentro da bobina e o campo fica muito mais forte.",
            "Um solenoide com um núcleo de ferro chama-se eletroímã/eletroíman (electromagnet).",
            "Você pode ligar e desligar um eletroímã/eletroíman.",
            "Mais voltas, mais corrente ou um núcleo de ferro tornam-no todos mais forte."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "socodka shixnadda korontada (charge) ee silig dhex mara (current)",
            "duub dheer oo silig dahaaran (solenoid)",
            "solenoid leh xudun bir (iron core) gudaheeda ku jirta (electromagnet)",
            "ul bir oo duub gudihiis la geliyo si field-kiisu u xoogaysto (iron core)",
            "isku mid meel walba (uniform)"
          ],
          "passage": [
            "Silig current qaada wuxuu leeyahay magnetic field ku wareegsan.",
            "Field-ku waa goobaabyo siligga ku wareegsan.",
            "Plotting compass siligga u dhow wuu wareegaa si uu goobaabyada u raaco.",
            "Current ka weyn wuxuu samaystaa field ka xoog badan.",
            "Current-ka rogo, field-kuna wuu rogmaa.",
            "Solenoid waa duub dheer oo silig dahaaran.",
            "Solenoid gudihiisa field-ku waa xoog badan oo uniform ah.",
            "Dibadda, wuxuu u eg yahay field-ka bir-lab ul ah (bar magnet).",
            "Xudun bir (iron core) duubka geli, field-kuna aad ayuu u sii xoogaystaa.",
            "Solenoid leh iron core waxaa la yiraahdaa electromagnet.",
            "Electromagnet waad shidi kartaa oo demin kartaa.",
            "Duubab badan, current badan ama iron core dhammaantood way ka xoog badiyaan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "потік електричного заряду через провід (current)",
            "довга котушка з ізольованого проводу (solenoid)",
            "соленоїд із залізним осердям усередині (electromagnet)",
            "залізний брусок, вставлений у котушку, щоб зробити її поле сильнішим (iron core)",
            "однаковий у кожній точці (uniform)"
          ],
          "passage": [
            "Провід, по якому тече струм (current), має навколо себе магнітне поле.",
            "Поле — це набір кіл навколо проводу.",
            "Маленький компас біля проводу повертається вздовж цих кіл.",
            "Більший струм створює сильніше поле.",
            "Змініть напрямок струму — і поле також зміниться на протилежне.",
            "Соленоїд (solenoid) — це довга котушка з ізольованого проводу.",
            "Усередині соленоїда поле сильне й однорідне (uniform).",
            "Зовні воно схоже на поле смугового магніту.",
            "Вставте в котушку залізне осердя (iron core) — і поле стане набагато сильнішим.",
            "Соленоїд із залізним осердям називається електромагнітом (electromagnet).",
            "Електромагніт можна вмикати й вимикати.",
            "Більше витків, більший струм або залізне осердя — усе це робить його сильнішим."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "تار میں برقی چارج کا بہاؤ (current)",
            "روکی ہوئی (insulated) تار کی ایک لمبی کنڈلی (solenoid)",
            "ایک solenoid جس کے اندر لوہے کا core ہو (electromagnet)",
            "لوہے کی ایک سلاخ جو کنڈلی کے اندر رکھی جائے تا کہ اس کا میدان مضبوط ہو (iron core)",
            "ہر جگہ ایک جیسا (uniform)"
          ],
          "passage": [
            "جس تار میں کرنٹ گزر رہا ہو اس کے گرد ایک مقناطیسی میدان ہوتا ہے۔",
            "یہ میدان تار کے گرد دائروں کا ایک مجموعہ ہے۔",
            "تار کے پاس رکھا plotting compass دائروں کے ساتھ گھوم جاتا ہے۔",
            "زیادہ کرنٹ زیادہ مضبوط میدان بناتا ہے۔",
            "کرنٹ کا رخ الٹ دیں تو میدان بھی الٹ جاتا ہے۔",
            "Solenoid روکی ہوئی تار کی ایک لمبی کنڈلی ہے۔",
            "Solenoid کے اندر میدان مضبوط اور یکساں (uniform) ہوتا ہے۔",
            "باہر یہ ایک سلاخ مقناطیس (bar magnet) کے میدان جیسا لگتا ہے۔",
            "کنڈلی کے اندر لوہے کا core رکھ دیں تو میدان بہت زیادہ مضبوط ہو جاتا ہے۔",
            "لوہے کے core والے solenoid کو electromagnet کہتے ہیں۔",
            "آپ electromagnet کو چلا اور بند کر سکتے ہیں۔",
            "زیادہ چکر، زیادہ کرنٹ یا لوہے کا core، سب اسے مضبوط بناتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The field around a wire",
          paragraphs: [
            "When a current flows along a wire, a magnetic field is set up around the wire. The field lines are circles centred on the wire. A plotting compass placed near the wire swings round to lie along one of these circles, and moving it round the wire traces the circle out.",
            "The strength of this field depends on two things: the size of the current, and the distance from the wire. A bigger current gives a stronger field. Further from the wire the circles are more spread out, so the field is weaker.",
            "The direction of the field depends on the direction of the current. Looking down on a wire with the current flowing downwards, away from you, the field runs clockwise. Reverse the current so it flows upwards, towards you, and the field runs anticlockwise. The deck calls this the corkscrew rule: turn a corkscrew the way the field goes and it moves the way the current flows."
          ],
          tip: "Three things to say about the field round a wire: circular, stronger with more current and closer to the wire, reversed if the current reverses."
        },
        {
          heading: "Solenoids",
          paragraphs: [
            "Wind the wire into a long coil and you have a solenoid. Each turn of the coil adds its own circular field, and inside the coil these all point the same way. The result is a field inside the solenoid that is strong and uniform: the field lines are parallel to the axis of the coil and all in the same direction.",
            "Outside the solenoid the field lines bend round from one end to the other, so the field outside looks just like the field of a bar magnet. One end of the solenoid behaves as a north pole and the other as a south pole. Look straight at one end: if the current goes round anticlockwise, that end is the north pole; if it goes round clockwise, that end is the south pole.",
            "Like the field around a single wire, the solenoid's field gets stronger if the current is increased, and it reverses direction if the current is reversed."
          ],
          worked: {
            q: "A pupil looks at one end of a solenoid and sees the current going round anticlockwise. The current is then reversed. Describe the pole at that end before and after. (2 marks)",
            steps: [
              "Use the end-on rule: anticlockwise current means that end is a north pole.",
              "Reversing the current reverses the field, so the current now looks clockwise from that end and it becomes a south pole."
            ],
            answer: "Before: a north pole (anticlockwise current). After: a south pole, because reversing the current reverses the field."
          }
        },
        {
          heading: "Electromagnets and how to make them stronger",
          paragraphs: [
            "An electromagnet is a solenoid with an iron core: the insulated wire is wrapped round an iron bar. Iron is a magnetic material, so it becomes an induced magnet inside the coil's field, and that adds to the field. Adding an iron core makes the field of a solenoid much stronger, and you can see this on a diagram as field lines packed much more densely through the core.",
            "There are three ways to make an electromagnet stronger: wrap the coil round an iron core, increase the number of turns on the coil, and increase the current. In the department's investigation the current is raised by turning up the potential difference of the supply.",
            "The big advantage of an electromagnet over a permanent magnet is that it can be switched on and off. A scrapyard crane picks up a car with the current on and drops it with the current off. Electromagnets are also used as switches, called relays, inside electrical devices."
          ],
          tip: "Iron, not steel, for the core: iron loses its magnetism as soon as the current stops, so the electromagnet switches off cleanly."
        },
        {
          heading: "Investigating the strength of an electromagnet",
          paragraphs: [
            "The department's investigation measures strength by counting paperclips. Wrap insulated wire round an iron nail, connect it to a supply through a switch, press the switch and count how many paperclips the nail picks up. More paperclips means a stronger electromagnet.",
            "Experiment 1 changes the number of turns, from 0 to 70 in steps of 10, with the potential difference kept at 2 V. Here the number of turns is the independent variable, the number of paperclips is the dependent variable, and the potential difference, the type and size of paperclip and the nail are the control variables. The sample results rise steadily and the graph is close to a straight line through the origin.",
            "Experiment 2 keeps the turns the same and raises the potential difference in 0.5 V steps. Again more paperclips are picked up as the p.d., and so the current, rises. To improve either experiment you could repeat each reading and take a mean, and use a greater range of turns or p.d. Switch off between readings so the coil does not get hot."
          ],
          tip: "Independent = what you change. Dependent = what you measure. Control = what you keep the same so the test is fair."
        }
      ],
      gate: [
        { kind: "mcq", q: "The current in a straight wire is reversed. What happens to the magnetic field around the wire?", options: ["It reverses direction", "It disappears", "It becomes twice as strong", "It stays exactly the same"], answer: 0, why: "The field direction depends on the current direction, so reversing the current reverses the field. Its strength does not change.",
          feedback: [
            "",
            "The field only disappears when the current stops. A reversed current is still a current, so there is still a field; it now runs the other way round the wire.",
            "The strength of the field depends on the size of the current, and the size has not changed, only the direction. The field keeps its strength but reverses direction.",
            "Direction matters: the field around a wire runs clockwise for one current direction and anticlockwise for the other. Reversing the current reverses the field."
          ] },
        { kind: "gap", q: "A solenoid with an ___ core is called an electromagnet.", answer: "iron", options: ["iron", "copper", "plastic"], why: "Iron is a magnetic material that becomes an induced magnet inside the coil, making the field much stronger.",
          feedback: {
            "copper": "Copper is what the wire is made from, but copper is not a magnetic material and would not strengthen the field. The core of an electromagnet is iron.",
            "plastic": "Plastic is not magnetic, so a plastic core would add nothing to the field. The core of an electromagnet is iron, which becomes an induced magnet inside the coil."
          } },
        { kind: "mcq", q: "Which of these would NOT make an electromagnet stronger?", options: ["Using thicker card to wrap the coil on", "Adding an iron core", "Adding more turns to the coil", "Increasing the current"], answer: 0, why: "Card is not magnetic, so it has no effect on the field. The three ways to make an electromagnet stronger are an iron core, more turns and more current.",
          feedback: [
            "",
            "An iron core does make the electromagnet stronger: the iron becomes an induced magnet inside the coil and adds to the field. The question asks for the change that would NOT help.",
            "More turns does make it stronger: each turn adds to the field inside the coil. The question asks for the change that would NOT help.",
            "A bigger current does make it stronger: the field around every part of the wire grows with the current. The question asks for the change that would NOT help."
          ] }
      ],
      modules: [
        {
          title: "Plot the field around a wire",
          task: {
            kind: "order",
            q: "Put the steps of the department's method for finding the shape of the field around a current-carrying wire in order.",
            items: [
              "Check that the compass points north with no magnets or wires nearby",
              "Clamp the card horizontally with the wire passing vertically through it",
              "Connect the wire, variable resistor, switch and supply in series, with the current flowing downwards",
              "Switch on and increase the current until the compass needle moves",
              "Move the compass to different positions round the wire and record which way it points",
              "Switch off, swap the supply connections so the current flows upwards, and repeat"
            ]
          },
          levels: {
            support: {
              steps: [
                "Before anything is set up, make sure the compass works: it should point north.",
                "Set up the apparatus, then the circuit.",
                "Only now switch on, and get the current high enough to move the needle.",
                "Take the readings, then change one thing (current direction) and repeat."
              ],
              example: {
                q: "Put these steps for plotting the field of a bar magnet in order: join the dots; place the compass by a pole; mark the needle tip; move the compass to the mark.",
                steps: ["Start with the compass next to a pole.", "Mark where the needle points, then move the compass to that mark.", "Only when you have a set of dots can you join them."],
                answer: "place the compass by a pole; mark the needle tip; move the compass to the mark; join the dots"
              }
            },
            core: { hint: "Check, set up, connect, switch on, record, then reverse and repeat." },
            stretch: { extend: "Explain why the method starts the variable resistor at its maximum resistance, and why the compass is first placed on the south side of the wire." }
          },
          explain: "Say, in one sentence, why you reverse the current and repeat the plotting.",
          why: "Check the compass first, set up the card and wire, connect the circuit, switch on and raise the current, plot round the wire, then reverse the current and repeat to show the field reverses."
        },
        {
          title: "Make it stronger",
          task: {
            kind: "mcq",
            q: "An electromagnet is not quite strong enough to lift a steel plate. Which change would make it stronger without changing the supply?",
            options: ["Wind more turns of wire on the coil", "Replace the iron core with a wooden one", "Use thinner card between the coil and the plate", "Move the plate further away"],
            answer: 0,
            feedback: [
              "",
              "Wood is not a magnetic material, so a wooden core would not become an induced magnet and the field would get much weaker, not stronger. More turns is the change that helps.",
              "Card has no effect on the field; it is not magnetic. Thinner card only brings the plate a little closer, which is not a change to the electromagnet itself. More turns is the change that helps.",
              "The field gets weaker with distance, so moving the plate away makes lifting harder. More turns on the coil makes the electromagnet stronger."
            ]
          },
          contexts: [
            { label: "Scrapyard crane", q: "A scrapyard crane's electromagnet is not quite strong enough to lift a car door. Which change would make it stronger without changing the supply?" },
            { label: "Electric bell", q: "The electromagnet in an electric bell is too weak to pull the hammer across. Which change would make it stronger without changing the supply?" },
            { label: "Lab investigation", q: "In the paperclip investigation an electromagnet picks up too few paperclips to see a pattern. Which change would make it stronger without changing the supply?" }
          ],
          explain: "Say, in one sentence, the three ways to make an electromagnet stronger.",
          levels: {
            support: {
              steps: [
                "Recall the three ways: iron core, more turns, more current.",
                "The supply cannot change, so more current is not on offer.",
                "Look for the option that adds turns or keeps an iron core.",
                "Reject anything that removes iron or increases distance."
              ],
              example: {
                q: "A pupil's electromagnet picks up 5 paperclips with 10 turns at 2 V. Suggest two changes that would let it pick up more.",
                steps: ["Add more turns to the coil.", "Increase the current by turning up the p.d.", "(An iron core, if it does not have one already.)"],
                answer: "Add more turns, or increase the current; an iron core also helps."
              }
            },
            core: { hint: "Iron core, more turns, more current. Which of these does the question allow?" },
            stretch: { extend: "Explain why the iron core makes such a large difference, using the idea of induced magnetism from Chapter 1." }
          },
          why: "The three ways to strengthen an electromagnet are an iron core, more turns and more current. With the supply fixed, winding more turns is the change that works; wood, card and distance all make it weaker or do nothing."
        },
        {
          title: "Plan the paperclip investigation (6 marks)",
          task: {
            kind: "written",
            q: "Describe how you would investigate how the number of turns on a coil affects the strength of an electromagnet. Include the variables you would control and how you would make your results reliable. (6 marks)",
            marks: 6,
            criteria: [
              "Wraps insulated wire round an iron nail and connects it to a supply through a switch",
              "Independent variable: the number of turns, changed in equal steps over a good range (for example 10 to 70 turns)",
              "Dependent variable: the strength, measured by the number of paperclips picked up",
              "Control variables: the potential difference (or current), the same nail, the same type and size of paperclip",
              "Repeats each reading and takes a mean; switches off between readings",
              "Says how the results would be presented and what pattern is expected (a graph of paperclips against turns; more turns, more paperclips)"
            ],
            model: "Wrap insulated wire ten times round an iron nail and connect it to a 2 V supply through a switch. Press the switch, dip the nail into a tray of paperclips, lift it out and count how many it holds. Release the switch so they fall off. Repeat with 20, 30, 40, 50, 60 and 70 turns. The number of turns is the independent variable and the number of paperclips is the dependent variable. Keep the potential difference, the nail and the type and size of paperclip the same. Repeat each reading three times and take a mean, switching off between readings so the coil does not heat up. Plot paperclips against turns; I would expect a straight line showing that more turns gives a stronger electromagnet."
          },
          levels: {
            support: {
              steps: [
                "Say what you build: wire round a nail, supply, switch.",
                "Name the three kinds of variable for this experiment.",
                "Say what you change, in what steps, and what you count.",
                "Finish with repeats, a mean, and the graph you would plot."
              ],
              example: {
                q: "A pupil investigates how the potential difference affects an electromagnet's strength. Name the independent, dependent and two control variables. (4 marks)",
                steps: ["Independent: the potential difference of the supply.", "Dependent: the number of paperclips picked up.", "Control: the number of turns; the same nail and paperclips."],
                answer: "Independent: p.d.; dependent: number of paperclips; control: number of turns, and the same nail and paperclips."
              }
            },
            core: { hint: "Build, change, measure, keep the same, repeat, plot. One sentence for each." },
            stretch: { extend: "Explain why counting paperclips is only a rough measure of strength, and suggest a better way to measure the force an electromagnet exerts." }
          },
          explain: "Say, in one sentence, which variable you keep the same and why.",
          why: "A full answer names the apparatus, the independent variable (turns) changed in steps, the dependent variable (paperclips), the controls (p.d., nail, paperclips), repeats with a mean, and the expected pattern."
        }
      ]
    },
    /* ───────────── 3 · the motor effect and F = B I l (also in Combined; equation HT) ───────────── */
    {
      key: "motor-effect", n: 3, title: "The motor effect and F = B I l",
      lead: "Why a wire carrying a current is pushed when it sits in a magnetic field, how to find which way it is pushed, and how to calculate the size of the push. (Also in Combined Science; the equation is Higher.)",
      covers: [4],
      pretext: {
        words: [
          { word: "motor effect", means: "the force on a wire carrying a current in a magnetic field", sentence: "The motor effect makes the wire jump when the switch is pressed." },
          { word: "conductor", means: "a material, such as a copper wire, that a current can flow through", sentence: "A force acts on the conductor when it carries a current in a magnetic field." },
          { word: "at right angles", means: "at 90 degrees, like the corner of a square", sentence: "The force is biggest when the current is at right angles to the field." },
          { word: "magnetic flux density", means: "the strength of a magnetic field, measured in tesla", sentence: "A strong magnet has a high magnetic flux density." },
          { word: "tesla", means: "the unit of magnetic flux density, symbol T", sentence: "The field between the magnets was 0.2 tesla." }
        ],
        passage: [
          "A wire carrying a current has its own magnetic field.",
          "Put that wire between the poles of a magnet.",
          "Now there are two fields, and they push on each other.",
          "The wire feels a force. This is the motor effect.",
          "The magnet feels an equal force the other way.",
          "The force is biggest when the current is at right angles to the field.",
          "There is no force when the current runs along the field lines.",
          "Fleming's left-hand rule tells you the direction of the force.",
          "Thumb for force, first finger for field, second finger for current.",
          "Reverse the current and the force reverses.",
          "Reverse the field and the force reverses too.",
          "More current, a stronger field or a longer wire means a bigger force."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "القوّة على سلك يمرّ فيه تيار داخل مجال مغناطيسي (motor effect)",
            "مادّة، مثل سلك النحاس، يستطيع التيار أن يسري فيها (conductor)",
            "بزاوية 90 درجة، مثل ركن المربّع (at right angles)",
            "قوّة المجال المغناطيسي، تُقاس بالتسلا (magnetic flux density)",
            "وحدة كثافة التدفّق المغناطيسي، رمزها T (tesla)"
          ],
          "passage": [
            "السلك الذي يمرّ فيه تيار له مجاله المغناطيسي الخاص.",
            "ضع هذا السلك بين قطبَي مغناطيس.",
            "الآن هناك مجالان، وهما يدفعان بعضهما.",
            "يشعر السلك بقوّة. هذا هو تأثير المحرّك (motor effect).",
            "ويشعر المغناطيس بقوّة مساوية في الاتجاه المعاكس.",
            "تكون القوّة أكبر ما تكون عندما يكون التيار بزاوية قائمة على المجال.",
            "لا توجد قوّة عندما يسري التيار على طول خطوط المجال.",
            "قاعدة اليد اليسرى لفلمنغ (Fleming's left-hand rule) تخبرك باتجاه القوّة.",
            "الإبهام للقوّة، والسبّابة للمجال، والوسطى للتيار.",
            "اعكس التيار فتنعكس القوّة.",
            "اعكس المجال فتنعكس القوّة أيضاً.",
            "تيار أكبر، أو مجال أقوى، أو سلك أطول، يعني قوّة أكبر."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "siła działająca na przewód z prądem w polu magnetycznym (motor effect)",
            "materiał, taki jak miedziany przewód, przez który może płynąć prąd (conductor)",
            "pod kątem 90 stopni, jak róg kwadratu (at right angles)",
            "siła pola magnetycznego, mierzona w teslach (magnetic flux density)",
            "jednostka indukcji magnetycznej, symbol T (tesla)"
          ],
          "passage": [
            "Przewód, przez który płynie prąd, ma swoje własne pole magnetyczne.",
            "Umieść ten przewód między biegunami magnesu.",
            "Teraz są dwa pola i napierają na siebie.",
            "Przewód odczuwa siłę. To jest efekt silnikowy (motor effect).",
            "Magnes odczuwa równą siłę w drugą stronę.",
            "Siła jest największa, kiedy prąd płynie pod kątem prostym do pola.",
            "Nie ma siły, kiedy prąd płynie wzdłuż linii pola.",
            "Reguła lewej dłoni Fleminga (Fleming's left-hand rule) mówi ci, w którą stronę działa siła.",
            "Kciuk dla siły, palec wskazujący dla pola, palec środkowy dla prądu.",
            "Odwróć prąd, a siła się odwróci.",
            "Odwróć pole, a siła też się odwróci.",
            "Większy prąd, silniejsze pole albo dłuższy przewód oznaczają większą siłę."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a força sobre um fio percorrido por uma corrente dentro de um campo magnético (motor effect, efeito motor)",
            "um material, como um fio de cobre, pelo qual uma corrente pode passar (conductor, condutor)",
            "a 90 graus, como o canto de um quadrado (at right angles, em ângulo reto)",
            "a intensidade de um campo magnético, medida em tesla (magnetic flux density, densidade de fluxo magnético)",
            "a unidade de densidade de fluxo magnético, símbolo T (tesla)"
          ],
          "passage": [
            "Um fio percorrido por uma corrente tem o seu próprio campo magnético.",
            "Ponha esse fio entre os polos de um ímã/íman.",
            "Agora há dois campos, e eles empurram-se um ao outro.",
            "O fio sente uma força. Isto é o efeito motor (motor effect).",
            "O ímã/íman sente uma força igual no sentido contrário.",
            "A força é maior quando a corrente está em ângulo reto com o campo.",
            "Não há força quando a corrente corre ao longo das linhas do campo.",
            "A regra da mão esquerda de Fleming diz a direção da força.",
            "Polegar para a força, indicador para o campo, dedo do meio para a corrente.",
            "Inverta a corrente e a força inverte-se.",
            "Inverta o campo e a força também se inverte.",
            "Mais corrente, um campo mais forte ou um fio mais comprido quer dizer uma força maior."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xoogga ku dhaca silig current qaada oo magnetic field ku jira (motor effect)",
            "walax, sida silig naxaas ah, oo current dhex mari karo (conductor)",
            "90 digrii, sida geeska afar-gees (at right angles)",
            "xoogga magnetic field, oo lagu cabbiro tesla (magnetic flux density)",
            "halbeegga magnetic flux density, calaamaddeedu waa T (tesla)"
          ],
          "passage": [
            "Silig current qaada wuxuu leeyahay magnetic field u gaar ah.",
            "Siliggaas geli darfaha bir-lab dhexdooda.",
            "Hadda waxaa jira laba fields, wayna is riixaan.",
            "Siliggu xoog ayuu dareemaa. Tani waa motor effect.",
            "Bir-labtu xoog la mid ah ayay dareentaa dhanka kale.",
            "Xooggu wuxuu ugu weyn yahay marka current-ku xagal qumman la samaysto field-ka.",
            "Xoog ma jiro marka current-ku ku socdo xariiqyada field-ka.",
            "Xeerka gacanta bidix ee Fleming (Fleming's left-hand rule) wuxuu kuu sheegaa jihada xoogga.",
            "Suulka xoogga, farta koowaad field-ka, farta labaad current-ka.",
            "Current-ka rogo, xooggana wuu rogmaa.",
            "Field-ka rogo, xooggana sidoo kale wuu rogmaa.",
            "Current badan, field ka xoog badan ama silig ka dheer micnaheedu waa xoog ka weyn."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "сила, що діє на провід зі струмом у магнітному полі (motor effect)",
            "матеріал, наприклад мідний провід, через який може текти струм (conductor)",
            "під кутом 90 градусів, як кут квадрата (at right angles)",
            "сила магнітного поля, вимірюється в теслах (magnetic flux density)",
            "одиниця густини магнітного потоку, символ T (tesla)"
          ],
          "passage": [
            "Провід, по якому тече струм, має власне магнітне поле.",
            "Помістіть цей провід між полюсами магніту.",
            "Тепер є два поля, і вони штовхають одне інше.",
            "Провід відчуває силу. Це ефект двигуна (motor effect).",
            "Магніт відчуває таку ж силу в протилежному напрямку.",
            "Сила найбільша, коли струм тече під прямим кутом до поля.",
            "Сили немає, коли струм тече вздовж ліній поля.",
            "Правило лівої руки Флемінга говорить вам напрямок сили.",
            "Великий палець — сила, вказівний палець — поле, середній палець — струм.",
            "Змініть напрямок струму — і сила зміниться на протилежну.",
            "Змініть напрямок поля — і сила також зміниться на протилежну.",
            "Більший струм, сильніше поле або довший провід означають більшу силу."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "مقناطیسی میدان میں کرنٹ والی تار پر لگنے والی قوت (motor effect)",
            "ایسا مادہ، جیسے تانبے کی تار، جس میں سے کرنٹ گزر سکے (conductor)",
            "90 درجے پر، جیسے مربع کا کونا (at right angles)",
            "مقناطیسی میدان کی مضبوطی، جو tesla میں ناپی جاتی ہے (magnetic flux density)",
            "magnetic flux density کی اکائی، علامت T (tesla)"
          ],
          "passage": [
            "جس تار میں کرنٹ گزر رہا ہو اس کا اپنا مقناطیسی میدان ہوتا ہے۔",
            "اس تار کو مقناطیس کے قطبوں کے بیچ رکھیں۔",
            "اب دو میدان ہیں، اور وہ ایک دوسرے کو دھکیلتے ہیں۔",
            "تار ایک قوت محسوس کرتی ہے۔ یہ motor effect ہے۔",
            "مقناطیس دوسری طرف برابر قوت محسوس کرتا ہے۔",
            "قوت تب سب سے بڑی ہوتی ہے جب کرنٹ میدان سے قائمہ زاویے پر ہو۔",
            "جب کرنٹ میدان کی لکیروں کے ساتھ ساتھ چلے تو کوئی قوت نہیں ہوتی۔",
            "Fleming کا بائیں ہاتھ کا قاعدہ آپ کو قوت کی سمت بتاتا ہے۔",
            "انگوٹھا قوت کے لیے، پہلی انگلی میدان کے لیے، دوسری انگلی کرنٹ کے لیے۔",
            "کرنٹ الٹ دیں تو قوت الٹ جاتی ہے۔",
            "میدان الٹ دیں تو قوت بھی الٹ جاتی ہے۔",
            "زیادہ کرنٹ، مضبوط میدان یا لمبی تار کا مطلب ہے بڑی قوت۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Two fields push on each other",
          paragraphs: [
            "You know from Chapter 2 that a current-carrying wire has a magnetic field round it. Place that wire between the poles of a magnet and there are now two magnetic fields in the same space: the magnet's and the wire's. They interact, and the wire experiences a force. This is called the motor effect, because it is what makes every electric motor turn.",
            "The force is not one-sided. The magnet producing the field and the conductor exert equal and opposite forces on each other. In a classroom demonstration the wire jumps because it is light and free to move; the heavy magnet feels the same size of force the other way.",
            "The force is at its maximum when the current is perpendicular (at right angles) to the magnetic field lines. If the wire runs parallel to the field lines there is no force at all. The exam equation assumes the wire is at right angles to the field."
          ],
          tip: "Motor effect in one line: a conductor carrying a current in a magnetic field experiences a force, because the two fields interact."
        },
        {
          heading: "Which way? Fleming's left-hand rule",
          paragraphs: [
            "Hold your left hand with the thumb, first finger and second finger all at right angles to each other. Fleming's left-hand rule says: the First finger points along the Field, from the north pole to the south pole; the seCond finger points along the Current, in the direction of conventional current from + to −; and the thuMb then points in the direction of the force, which is the direction of Motion.",
            "Take the deck's example. The field runs from left to right, from the N pole on the left to the S pole on the right. The current in the wire comes out of the page towards you. Point your first finger right and your second finger towards yourself: your thumb points up. The wire is pushed upwards.",
            "Because the force direction depends on both the field and the current, reversing either one reverses the force. Reverse both and the force is back where it started. Remember that the rule uses conventional current, the direction a positive charge would move, from the + terminal to the −, not the direction the electrons actually flow."
          ],
          worked: {
            q: "A wire runs horizontally between two magnetic poles, N on the left and S on the right. The current in the wire flows into the page, away from you. In which direction is the force on the wire?",
            steps: [
              "First finger (Field): points right, from N to S.",
              "Second finger (Current): points into the page, away from you.",
              "Hold them at right angles with the left hand: the thumb now points downwards.",
              "So the force on the wire is downwards. (With the current out of the page it would be upwards, as in the deck.)"
            ],
            answer: "Downwards: the thumb of the left hand points down when the first finger points right and the second finger points into the page."
          },
          tip: "Left hand for motors (the motor effect). Field N to S; current + to −; thumb gives the push. Practise with a real hand, not in your head."
        },
        {
          heading: "How big? Magnetic flux density and F = B I l (Higher)",
          paragraphs: [
            "The strength of a magnetic field is called its magnetic flux density. The symbol is B and the unit is the tesla, T. The Earth's field is about 0.00005 T; a strong school magnet is around 0.1 T; the magnets in an MRI scanner reach a few tesla.",
            "For a conductor at right angles to a magnetic field and carrying a current, the force depends on three things: the magnetic flux density of the field, the size of the current, and the length of conductor that is inside the field. The equation is force = magnetic flux density × current × length, written F = B I l. F is in newtons (N), B in tesla (T), I in amperes (A) and l in metres (m).",
            "Every quantity must be in its SI unit before you substitute. Lengths are often given in centimetres: 20 cm is 0.2 m. To find B or I, rearrange: B = F ÷ (I l) and I = F ÷ (B l). This equation is Higher tier, and it is given on the equation sheet, so your job is to rearrange and substitute correctly."
          ],
          worked: {
            q: "A 0.5 m length of wire carries a current of 2 A at right angles to a magnetic field of flux density 0.3 T. Calculate the force on the wire.",
            steps: [
              "Write the equation: F = B I l.",
              "Check the units: B = 0.3 T, I = 2 A, l = 0.5 m. All SI, so substitute.",
              "F = 0.3 × 2 × 0.5 = 0.3 N."
            ],
            answer: "0.3 N",
            check: "0.3 * 2 * 0.5"
          }
        },
        {
          heading: "Rearranging F = B I l (Higher)",
          paragraphs: [
            "When the force is known and you want the current or the flux density, rearrange first and substitute second. Cover the letter you want: F = B I l with I covered leaves F over B l, so I = F ÷ (B l). With B covered, B = F ÷ (I l).",
            "The commonest slip is to divide by only one of the two quantities. The force is divided by the product of the other two, so work out B × l (or I × l) first, then divide. The second commonest slip is leaving a length in centimetres."
          ],
          worked: {
            q: "A wire 0.5 m long in a field of 0.4 T experiences a force of 0.6 N. Calculate the current in the wire.",
            steps: [
              "Rearrange: I = F ÷ (B l).",
              "Work out the bottom first: B l = 0.4 × 0.5 = 0.2.",
              "I = 0.6 ÷ 0.2 = 3 A."
            ],
            answer: "3 A",
            check: "0.6 / (0.4 * 0.5)"
          },
          tip: "Always calculate B × l (or I × l) as one number before you divide. Then check the unit of the answer: A for current, T for flux density."
        }
      ],
      gate: [
        { kind: "mcq", q: "In Fleming's left-hand rule, what does the thumb represent?", options: ["The force (direction of motion)", "The magnetic field", "The current", "The north pole"], answer: 0, why: "Thumb: force or motion. First finger: field (N to S). Second finger: conventional current.",
          feedback: [
            "",
            "The field is the First finger, pointing from N to S. The thumb is the force, the direction the wire moves.",
            "The current is the seCond finger, pointing the way conventional current flows from + to −. The thumb is the force.",
            "No finger stands for a pole; the first finger points from the north pole towards the south pole to show the field direction. The thumb shows the force on the wire."
          ] },
        { kind: "numeric", q: "A wire of length 0.5 m carries a current of 3 A at right angles to a magnetic field of flux density 0.2 T. Calculate the force on the wire in newtons.", answer: 0.3, tolerance: 0, units: "N", check: "0.2 * 3 * 0.5", why: "F = B I l = 0.2 × 3 × 0.5 = 0.3 N. Exact from the data (1 s.f. data gives 0.3).",
          misconceptions: [
            { answer: 1.2, check: "0.2 * 3 / 0.5", says: "You divided by the length instead of multiplying. F = B I l means multiply all three: 0.2 × 3 × 0.5 = 0.3 N." },
            { answer: 3.7, check: "0.2 + 3 + 0.5", says: "You added the three numbers. F = B I l is a multiplication: 0.2 × 3 × 0.5 = 0.3 N." },
            { answer: 0.6, check: "0.2 * 3", says: "You left out the length. The force depends on how much wire is in the field: 0.2 × 3 × 0.5 = 0.3 N." }
          ] },
        { kind: "gap", q: "The force on a current-carrying wire is at its maximum when the current is ___ to the magnetic field.", answer: "perpendicular", options: ["perpendicular", "parallel", "opposite"], why: "At right angles (perpendicular) the force is biggest; parallel to the field there is no force at all.",
          feedback: {
            "parallel": "Parallel is the other way round: a wire running along the field lines feels no force at all. The force is largest when the current is perpendicular (at right angles) to the field.",
            "opposite": "Opposite would mean running along the field lines but the other way, and a wire along the field lines feels no force. The force is largest when the current is perpendicular to the field."
          } }
      ],
      modules: [
        {
          title: "Which way does it move?",
          task: {
            kind: "mcq",
            q: "A wire sits between two poles, with the field running from left to right (N on the left, S on the right). The conventional current in the wire flows out of the page, towards you. Using Fleming's left-hand rule, which way is the wire pushed?",
            options: ["Upwards", "Downwards", "To the left, towards the N pole", "Out of the page, towards you"],
            answer: 0,
            feedback: [
              "",
              "Downwards is what you get with the current into the page, or if you use your right hand by mistake. Left hand: first finger to the right, second finger towards you, and the thumb points up.",
              "The force is never along the field lines: it is always at right angles to both the field and the current. With the field left to right, the push is up or down, and here it is up.",
              "The force is never along the current either. The current comes towards you, the field goes left to right, so the force is at right angles to both: upwards."
            ]
          },
          contexts: [
            { label: "Lab demonstration", q: "A copper rod rests on two rails between the poles of a magnet, with the field from left to right (N on the left, S on the right). The conventional current in the rod flows out of the page, towards you. Using Fleming's left-hand rule, which way is the rod pushed?" },
            { label: "Motor coil", q: "One side of a motor coil lies between the poles, with the field from left to right (N on the left, S on the right). The conventional current in that side flows out of the page, towards you. Using Fleming's left-hand rule, which way is that side pushed?" },
            { label: "Loudspeaker wire", q: "A section of a loudspeaker coil sits in a field that runs from left to right (N on the left, S on the right). The conventional current in it flows out of the page, towards you. Using Fleming's left-hand rule, which way is the wire pushed?" }
          ],
          explain: "Say, in one sentence, what would happen to the direction of the force if both the current and the field were reversed.",
          levels: {
            support: {
              steps: [
                "Hold out your LEFT hand: thumb, first finger and second finger at right angles.",
                "First finger = Field: point it to the right (N to S).",
                "Second finger = Current: point it towards your face (out of the page).",
                "Look at your thumb. It gives the force direction."
              ],
              example: {
                q: "The field runs left to right and the current flows into the page, away from you. Which way is the wire pushed?",
                steps: ["First finger right.", "Second finger pointing away from you.", "The thumb points down, so the force is downwards."],
                answer: "Downwards"
              }
            },
            core: { hint: "Left hand. First finger right, second finger towards you. Where is your thumb?" },
            stretch: { extend: "Explain why a wire running parallel to the field lines, from the N pole straight towards the S pole, would feel no force at all." }
          },
          why: "Left-hand rule: first finger along the field (left to right), second finger along the conventional current (towards you), and the thumb points upwards. Reversing the current or the field would make it downwards."
        },
        {
          title: "Calculate the force (Higher)",
          task: { kind: "numeric", q: "A 0.25 m length of wire carries a current of 4 A at right angles to a magnetic field of flux density 0.05 T. Calculate the force on the wire in newtons.", answer: 0.05, tolerance: 0, units: "N", check: "0.05 * 4 * 0.25", why: "F = B I l = 0.05 × 4 × 0.25 = 0.05 N (exact from the data).",
            misconceptions: [
              { answer: 0.8, check: "0.05 * 4 / 0.25", says: "You divided by the length. All three quantities multiply: F = B I l = 0.05 × 4 × 0.25 = 0.05 N." },
              { answer: 0.2, check: "0.05 * 4", says: "You left out the length of wire in the field. F = B I l = 0.05 × 4 × 0.25 = 0.05 N." },
              { answer: 20, check: "4 * 0.25 / 0.05", says: "You divided by the flux density instead of multiplying by it. F = B I l = 0.05 × 4 × 0.25 = 0.05 N." }
            ] },
          contexts: [
            { label: "Lab rig", q: "In a lab rig a 0.25 m copper rod carries a current of 4 A at right angles to a magnetic field of flux density 0.05 T. Calculate the force on the rod in newtons." },
            { label: "Motor coil", q: "One side of a motor coil is 0.25 m long and carries a current of 4 A at right angles to a field of flux density 0.05 T. Calculate the force on that side in newtons." },
            { label: "Loudspeaker coil", q: "A loudspeaker coil has 0.25 m of wire in a field of flux density 0.05 T, at right angles to the field, carrying a current of 4 A. Calculate the force on the coil in newtons." }
          ],
          explain: "Say, in one sentence, what would happen to the force if the current were doubled.",
          levels: {
            support: {
              steps: ["Write F = B I l.", "Check every quantity is in SI units: T, A, m.", "Multiply the three numbers together.", "Write the unit N."],
              example: { q: "A 0.4 m wire carries 2 A at right angles to a 0.1 T field. Calculate the force.", steps: ["F = B I l.", "F = 0.1 × 2 × 0.4.", "F = 0.08 N."], answer: "0.08 N", check: "0.1 * 2 * 0.4" }
            },
            core: { hint: "Three numbers, all multiplied. The answer is in newtons." },
            stretch: { extend: "The same wire is turned so that it runs parallel to the field lines. State the force now and explain why." }
          },
          why: "F = B I l = 0.05 × 4 × 0.25 = 0.05 N. All the data were already in SI units, so no conversion was needed."
        },
        {
          title: "Find the flux density (Higher)",
          task: { kind: "numeric", q: "A 20 cm length of wire carries a current of 2 A at right angles to a magnetic field. The force on the wire is 0.12 N. Calculate the magnetic flux density of the field in tesla.", answer: 0.3, tolerance: 0, units: "T", check: "0.12 / (2 * 0.2)", why: "l = 20 cm = 0.2 m. B = F ÷ (I l) = 0.12 ÷ (2 × 0.2) = 0.3 T (exact from the data).",
            misconceptions: [
              { answer: 0.003, check: "0.12 / (2 * 20)", says: "You left the length in centimetres. Convert first: 20 cm = 0.2 m. Then B = 0.12 ÷ (2 × 0.2) = 0.3 T." },
              { answer: 0.048, check: "0.12 * 2 * 0.2", says: "You multiplied everything together, as if finding F. You already have F, so rearrange: B = F ÷ (I l) = 0.12 ÷ (2 × 0.2) = 0.3 T." },
              { answer: 0.06, check: "0.12 / 2", says: "You divided by the current only and forgot the length. Divide by the product I l: B = 0.12 ÷ (2 × 0.2) = 0.3 T." }
            ] },
          contexts: [
            { label: "Lab rig", q: "In a lab rig a 20 cm rod carries a current of 2 A at right angles to the field of a magnet. The force on the rod is 0.12 N. Calculate the magnetic flux density of the field in tesla." },
            { label: "Motor coil", q: "One side of a motor coil is 20 cm long and carries a current of 2 A at right angles to the field. The force on that side is 0.12 N. Calculate the magnetic flux density of the field in tesla." }
          ],
          explain: "Say, in one sentence, why the length had to be changed to metres before you divided.",
          levels: {
            support: {
              steps: ["Convert the length: 20 cm = 0.2 m.", "Rearrange F = B I l to B = F ÷ (I l).", "Work out I × l first.", "Divide F by that number and write the unit T."],
              example: { q: "A 50 cm wire carries 3 A at right angles to a field and feels a force of 0.75 N. Calculate the flux density.", steps: ["50 cm = 0.5 m.", "B = F ÷ (I l) = 0.75 ÷ (3 × 0.5).", "B = 0.75 ÷ 1.5 = 0.5 T."], answer: "0.5 T", check: "0.75 / (3 * 0.5)" }
            },
            core: { hint: "Centimetres to metres first. Then B = F ÷ (I × l)." },
            stretch: { extend: "Without recalculating, explain what the flux density would be if the same force were measured on a 40 cm length of the same wire carrying the same current." }
          },
          why: "Convert 20 cm to 0.2 m, then B = F ÷ (I l) = 0.12 ÷ (2 × 0.2) = 0.12 ÷ 0.4 = 0.3 T."
        }
      ]
    },
    /* ───────────── 4 · electric motors (Combined, Higher) and loudspeakers (Physics only) ───────────── */
    {
      key: "motors-speakers", n: 4, title: "Electric motors and loudspeakers",
      lead: "How a coil in a magnetic field is made to spin, why it needs a split-ring commutator to keep going, and how the same push moves a loudspeaker cone to make sound. (Motor: also in Combined, Higher. Loudspeaker: Physics only.)",
      covers: [4, 6],
      pretext: {
        words: [
          { word: "coil", means: "wire wound round and round into loops", sentence: "The motor has a coil of wire that spins between the magnets." },
          { word: "split-ring commutator", means: "a metal ring cut into two halves that swaps the current direction every half turn", sentence: "The split-ring commutator keeps the motor turning the same way." },
          { word: "brushes", means: "the contacts that press on the commutator and carry current into the spinning coil", sentence: "The brushes rub against the commutator as it turns." },
          { word: "alternating current", means: "a current that keeps changing direction, written a.c.", sentence: "The loudspeaker is fed with an alternating current." },
          { word: "cone", means: "the paper or plastic part of a loudspeaker that moves the air", sentence: "The cone moves in and out to make a sound wave." },
          { word: "amplitude", means: "the size of a vibration; for sound, how loud it is", sentence: "A bigger current gives a bigger amplitude, so the sound is louder." }
        ],
        passage: [
          "An electric motor has a coil of wire between two magnetic poles.",
          "A current flows through the coil.",
          "The two long sides of the coil carry current in opposite directions.",
          "So one side is pushed up and the other is pushed down.",
          "These two forces make the coil turn.",
          "After half a turn the forces would push the coil back.",
          "The split-ring commutator swaps the current direction every half turn.",
          "So the coil keeps turning the same way.",
          "A loudspeaker also uses a coil in a magnetic field.",
          "The coil is fixed to a cone.",
          "An alternating current makes the coil move in and out.",
          "The cone moves the air and makes a sound wave.",
          "The sound has the same frequency as the current."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "سلك ملفوف مرة بعد مرة في حلقات (coil)",
            "حلقة معدنية مقطوعة نصفَين تبدّل اتجاه التيار كل نصف دورة (split-ring commutator)",
            "نقاط التلامس التي تضغط على المبدّل وتنقل التيار إلى الملفّ الدوّار (brushes)",
            "تيار يغيّر اتجاهه باستمرار، يُكتب a.c. (alternating current)",
            "الجزء الورقي أو البلاستيكي في مكبّر الصوت الذي يحرّك الهواء (cone)",
            "حجم الاهتزاز؛ وبالنسبة إلى الصوت، مدى علوّه (amplitude)"
          ],
          "passage": [
            "المحرّك الكهربائي فيه ملفّ (coil) من السلك بين قطبَين مغناطيسيَّين.",
            "يسري تيار في الملفّ.",
            "الضلعان الطويلان في الملفّ يحملان التيار في اتجاهَين متعاكسَين.",
            "فيُدفع أحد الضلعَين إلى الأعلى والآخر إلى الأسفل.",
            "هاتان القوّتان تجعلان الملفّ يدور.",
            "بعد نصف دورة، كانت القوّتان ستدفعان الملفّ إلى الوراء.",
            "المبدّل ذو الحلقة المشقوقة (split-ring commutator) يبدّل اتجاه التيار كل نصف دورة.",
            "فيستمرّ الملفّ في الدوران في الاتجاه نفسه.",
            "مكبّر الصوت أيضاً يستعمل ملفّاً في مجال مغناطيسي.",
            "الملفّ مثبّت في مخروط (cone).",
            "التيار المتردّد (alternating current) يجعل الملفّ يتحرّك إلى الداخل والخارج.",
            "يحرّك المخروط الهواء ويصنع موجة صوتية.",
            "للصوت التردّد نفسه الذي للتيار."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przewód nawinięty wiele razy w pętle (coil)",
            "metalowy pierścień przecięty na dwie połówki, który zamienia kierunek prądu co pół obrotu (split-ring commutator)",
            "styki, które dociskają do komutatora i doprowadzają prąd do obracającej się zwojnicy (brushes)",
            "prąd, który ciągle zmienia kierunek, zapisywany a.c. (alternating current)",
            "papierowa lub plastikowa część głośnika, która porusza powietrzem (cone)",
            "wielkość drgania; dla dźwięku — jak jest głośny (amplitude)"
          ],
          "passage": [
            "Silnik elektryczny ma zwojnicę z przewodu między dwoma biegunami magnetycznymi.",
            "Przez zwojnicę płynie prąd.",
            "Dwa długie boki zwojnicy przewodzą prąd w przeciwnych kierunkach.",
            "Więc jeden bok jest pchany w górę, a drugi w dół.",
            "Te dwie siły sprawiają, że zwojnica się obraca.",
            "Po pół obrotu siły pchałyby zwojnicę z powrotem.",
            "Komutator pierścieniowy (split-ring commutator) zamienia kierunek prądu co pół obrotu.",
            "Więc zwojnica wciąż obraca się w tę samą stronę.",
            "Głośnik też używa zwojnicy w polu magnetycznym.",
            "Zwojnica jest przymocowana do membrany (cone).",
            "Prąd przemienny (alternating current) sprawia, że zwojnica rusza się do przodu i do tyłu.",
            "Membrana porusza powietrzem i tworzy falę dźwiękową.",
            "Dźwięk ma tę samą częstotliwość co prąd."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "fio enrolado várias vezes em voltas (coil, bobina)",
            "um anel de metal cortado em duas metades que troca o sentido da corrente a cada meia volta (split-ring commutator, comutador de anel dividido)",
            "os contactos/contatos que pressionam o comutador e levam a corrente para a bobina que gira (brushes, escovas)",
            "uma corrente que muda de sentido o tempo todo, escrita a.c. (alternating current, corrente alternada)",
            "a parte de papel ou plástico de um altifalante/alto-falante que move o ar (cone)",
            "o tamanho de uma vibração; para o som, quão forte ele é (amplitude)"
          ],
          "passage": [
            "Um motor elétrico tem uma bobina de fio entre dois polos magnéticos.",
            "Uma corrente passa pela bobina.",
            "Os dois lados compridos da bobina levam a corrente em sentidos opostos.",
            "Por isso, um lado é empurrado para cima e o outro é empurrado para baixo.",
            "Estas duas forças fazem a bobina girar.",
            "Depois de meia volta, as forças empurrariam a bobina de volta.",
            "O comutador de anel dividido (split-ring commutator) troca o sentido da corrente a cada meia volta.",
            "Por isso, a bobina continua a girar no mesmo sentido.",
            "Um altifalante/alto-falante também usa uma bobina num campo magnético.",
            "A bobina está fixa a um cone.",
            "Uma corrente alternada (alternating current) faz a bobina mover-se para dentro e para fora.",
            "O cone move o ar e produz uma onda sonora.",
            "O som tem a mesma frequência que a corrente."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "silig wareeg wareeg loo duubay oo loops ah (coil)",
            "giraangir bir ah oo laba kala badh loo gooyay oo jihada current beddesha wareeg kala badh kasta (split-ring commutator)",
            "xiriiriyeyaasha commutator-ka ku dhegga oo current geliya duubka wareegaya (brushes)",
            "current jihada sii beddela, oo loo qoro a.c. (alternating current)",
            "qaybta warqad ama caag ah ee sameecadda oo hawada dhaqaajisa (cone)",
            "cabbirka gariir; dhawaaqa, waa inta uu u weyn yahay (amplitude)"
          ],
          "passage": [
            "Matoor koronto (electric motor) wuxuu leeyahay duub silig (coil) oo u dhexeeya laba daraf magnetic.",
            "Current duubka ayuu dhex maraa.",
            "Labada dhinac ee dhaadheer ee duubku current jihooyin lid isku ah ayay ku qaadaan.",
            "Sidaas darteed hal dhinac kor ayaa loo riixaa, kan kalena hoos ayaa loo riixaa.",
            "Labadan xoog duubka ayay wareejiyaan.",
            "Wareeg kala badh kadib xoogaggu duubka dib ayay u riixi lahaayeen.",
            "Split-ring commutator jihada current-ka ayuu beddelaa wareeg kala badh kasta.",
            "Sidaas darteed duubku isla jihadaas ayuu ku sii wareegaa.",
            "Sameecad (loudspeaker) isna wuxuu isticmaalaa duub magnetic field ku jira.",
            "Duubku koon (cone) ayuu ku xiran yahay.",
            "Alternating current duubka ayuu ka dhigaa inuu gudaha iyo dibadda u dhaqaaqo.",
            "Koonku hawada ayuu dhaqaajiyaa, hir dhawaaqna wuxuu samaystaa.",
            "Dhawaaqu wuxuu leeyahay isla frequency-ga current-ka."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "провід, намотаний багато разів у витки (coil)",
            "металеве кільце, розрізане на дві половини, яке міняє напрямок струму кожні пів оберту (split-ring commutator)",
            "контакти, які притискаються до комутатора і проводять струм у котушку, що обертається (brushes)",
            "струм, який постійно змінює напрямок, пишеться a.c. (alternating current)",
            "паперова або пластикова частина гучномовця, яка рухає повітря (cone)",
            "розмір коливання; для звуку — наскільки він гучний (amplitude)"
          ],
          "passage": [
            "Електродвигун має котушку (coil) з проводу між двома магнітними полюсами.",
            "Через котушку тече струм.",
            "Дві довгі сторони котушки проводять струм у протилежних напрямках.",
            "Тому одну сторону штовхає вгору, а іншу — вниз.",
            "Ці дві сили змушують котушку обертатися.",
            "Після пів оберту сили штовхнули б котушку назад.",
            "Розрізний кільцевий комутатор (split-ring commutator) міняє напрямок струму кожні пів оберту.",
            "Тому котушка продовжує обертатися в той самий бік.",
            "Гучномовець також використовує котушку в магнітному полі.",
            "Котушка закріплена на конусі (cone).",
            "Змінний струм (alternating current) змушує котушку рухатися вперед і назад.",
            "Конус рухає повітря і створює звукову хвилю.",
            "Звук має ту саму частоту, що й струм."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "تار جو گھما کر لوپوں میں لپیٹی گئی ہو (coil)",
            "دو آدھوں میں کٹا دھات کا چھلا جو ہر آدھے چکر پر کرنٹ کا رخ بدل دیتا ہے (split-ring commutator)",
            "وہ رابطے جو commutator پر دبتے ہیں اور گھومتی کنڈلی میں کرنٹ پہنچاتے ہیں (brushes)",
            "ایسا کرنٹ جو مسلسل رخ بدلتا رہتا ہے، جسے a.c. لکھا جاتا ہے (alternating current)",
            "لاؤڈ اسپیکر کا کاغذ یا پلاسٹک کا حصہ جو ہوا کو حرکت دیتا ہے (cone)",
            "ارتعاش کا سائز؛ آواز کے لیے، وہ کتنی بلند ہے (amplitude)"
          ],
          "passage": [
            "برقی موٹر میں دو مقناطیسی قطبوں کے بیچ تار کی ایک کنڈلی (coil) ہوتی ہے۔",
            "کنڈلی میں کرنٹ گزرتا ہے۔",
            "کنڈلی کی دو لمبی طرفیں الٹی سمتوں میں کرنٹ لے جاتی ہیں۔",
            "اس لیے ایک طرف اوپر دھکیلی جاتی ہے اور دوسری نیچے۔",
            "یہ دو قوتیں کنڈلی کو گھماتی ہیں۔",
            "آدھے چکر کے بعد قوتیں کنڈلی کو واپس دھکیل دیتیں۔",
            "Split-ring commutator ہر آدھے چکر پر کرنٹ کا رخ بدل دیتا ہے۔",
            "اس لیے کنڈلی اسی طرف گھومتی رہتی ہے۔",
            "لاؤڈ اسپیکر بھی مقناطیسی میدان میں ایک کنڈلی استعمال کرتا ہے۔",
            "کنڈلی ایک شنک (cone) سے جڑی ہوتی ہے۔",
            "متبادل کرنٹ (alternating current) کنڈلی کو اندر باہر حرکت دیتا ہے۔",
            "شنک ہوا کو حرکت دیتا ہے اور آواز کی لہر بناتا ہے۔",
            "آواز کی فریکوئنسی وہی ہوتی ہے جو کرنٹ کی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Why the coil turns",
          paragraphs: [
            "A simple d.c. motor is a coil of wire that can spin between the poles of a magnet. When a current flows, each long side of the coil is a conductor carrying a current in a magnetic field, so each side feels a force from the motor effect.",
            "The current goes up one side of the coil and comes back down the other, so the two sides carry current in opposite directions. Fleming's left-hand rule then gives forces in opposite directions: one side is pushed up while the other is pushed down. Two opposite forces on opposite sides of a pivot make the coil rotate.",
            "The deck's example has the current going anticlockwise round the coil and the field running left to right from N to S. The left-hand side of the coil is pushed upwards, the right-hand side downwards, so the coil spins clockwise."
          ],
          worked: {
            q: "Explain why a current in a coil between two magnetic poles makes the coil start to turn. (3 marks)",
            steps: [
              "Each side of the coil is a current-carrying conductor in a magnetic field, so it feels a force (the motor effect).",
              "The current in the two sides flows in opposite directions, so by Fleming's left-hand rule the forces on them are in opposite directions.",
              "Opposite forces on opposite sides of the coil make it rotate."
            ],
            answer: "Each side of the coil feels a force from the motor effect; the currents in the two sides are opposite, so the forces are opposite; opposite forces on the two sides make the coil rotate."
          }
        },
        {
          heading: "Keeping it going: the split-ring commutator",
          paragraphs: [
            "There is a catch. After half a turn the two sides of the coil have swapped places. If the current kept flowing the same way round the coil, the side now on the left would be pushed down and the side on the right up: the forces would turn the coil back the other way and it would stop, rocking to and fro.",
            "The fix is to reverse the current in the coil every half turn. This is done with a split-ring commutator: a metal ring cut into two halves, one half connected to each end of the coil, spinning with it. Two fixed brushes press on the ring and carry the current in. Every half turn each brush touches the other half of the ring, so the current through the coil reverses and the side on the left is always pushed the same way.",
            "To make a motor turn faster or with more force you can increase the current, use a stronger magnet, or use more turns of wire on the coil. Reversing the current, or reversing the magnet, makes the motor run backwards."
          ],
          tip: "The exam wants the commutator's job in one phrase: it reverses the current in the coil every half turn so the coil keeps turning in the same direction."
        },
        {
          heading: "Loudspeakers and headphones (Physics only)",
          paragraphs: [
            "A loudspeaker uses the motor effect to make sound. A coil of wire is fixed to a paper or plastic cone and sits in the field of a permanent magnet. When a current flows in the coil, the coil feels a force and moves, taking the cone with it.",
            "The current fed to the speaker is an alternating current that copies the shape of the sound: its direction keeps reversing. Each time the current reverses, the force on the coil reverses, so the coil and the cone move in, then out, then in again. The moving cone pushes and pulls on the air, making compressions and rarefactions: a sound wave.",
            "The cone vibrates at the frequency of the alternating current, so the sound has the same frequency as the electrical signal. A bigger current gives a bigger force and a bigger movement of the cone, so the amplitude of the sound wave is larger and the sound is louder. Headphones work the same way with a very small cone."
          ],
          tip: "Loudspeaker: current changes → force changes → cone moves → air moves. Say the frequency of the sound matches the frequency of the current."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is the job of the split-ring commutator in a d.c. motor?", options: ["To reverse the current in the coil every half turn", "To make the magnetic field stronger", "To stop the coil overheating", "To hold the magnets in place"], answer: 0, why: "Reversing the current every half turn keeps the forces pushing the coil round in the same direction.",
          feedback: [
            "",
            "The commutator does nothing to the field; the field comes from the magnets. The commutator reverses the current in the coil every half turn so the coil keeps turning the same way.",
            "Overheating is not what it is for; in fact the brushes rubbing on it make a little heat. Its job is to reverse the current in the coil every half turn.",
            "The magnets are fixed to the motor casing and do not move. The commutator spins with the coil and reverses the current in it every half turn."
          ] },
        { kind: "gap", q: "A loudspeaker is supplied with an ___ current, so the force on its coil keeps changing direction.", answer: "alternating", options: ["alternating", "direct", "induced"], why: "An alternating current reverses direction repeatedly, so the force on the coil reverses and the cone vibrates.",
          feedback: {
            "direct": "A direct current flows one way only, so the force on the coil would push the cone once and hold it there: no vibration, no sound. A loudspeaker needs an alternating current.",
            "induced": "An induced current is one made by the generator effect, which is how a microphone works, not a loudspeaker. A loudspeaker is supplied with an alternating current."
          } },
        { kind: "mcq", q: "Why do the two long sides of a motor coil feel forces in opposite directions?", options: ["The current in them flows in opposite directions", "They are made of different metals", "One side is nearer the north pole", "The field is stronger on one side"], answer: 0, why: "The current goes up one side and down the other; with the same field, the left-hand rule gives opposite forces.",
          feedback: [
            "",
            "Both sides are the same copper wire; the metal does not change the direction of the force. The current in the two sides flows in opposite directions, so the forces are opposite.",
            "Both sides are in the same field, between the same two poles; being nearer one pole does not reverse a force. The force is reversed because the current direction is reversed on the other side.",
            "The field is roughly uniform between the poles, and a stronger field would only change the size of the force, not its direction. The direction is opposite because the current flows the opposite way."
          ] }
      ],
      modules: [
        {
          title: "How a d.c. motor keeps turning",
          task: {
            kind: "order",
            q: "Put the stages of one half turn of a simple d.c. motor in order.",
            items: [
              "Current flows through the coil, up one side and down the other",
              "Each side of the coil feels a force from the motor effect, in opposite directions",
              "The opposite forces make the coil rotate half a turn",
              "The split-ring commutator reverses the current in the coil",
              "The forces keep pushing the coil round in the same direction"
            ]
          },
          levels: {
            support: {
              steps: [
                "Nothing happens until a current flows: that is first.",
                "Current in a field means forces: that is second.",
                "Forces make it turn: that is third.",
                "Then the commutator does its job, and the turning continues."
              ],
              example: {
                q: "Put these stages of switching on an electromagnet in order: the iron core becomes an induced magnet; the switch is closed; the coil produces a magnetic field; a current flows in the coil.",
                steps: ["Closing the switch comes first.", "Then a current flows, and the current makes a field.", "The field magnetises the core last."],
                answer: "the switch is closed; a current flows in the coil; the coil produces a magnetic field; the iron core becomes an induced magnet"
              }
            },
            core: { hint: "Current, then forces, then turning, then the commutator swaps the current, then it keeps turning." },
            stretch: { extend: "Explain what would happen to the coil if the commutator were replaced by a plain, unsplit ring." }
          },
          explain: "Say, in one sentence, what would happen to the coil without the commutator.",
          why: "Current first; forces on the two sides from the motor effect; the coil rotates; the commutator reverses the current every half turn; so the push stays in the same rotational direction."
        },
        {
          title: "Why the cone vibrates (Physics only)",
          task: {
            kind: "mcq",
            q: "A loudspeaker's coil sits in the field of a permanent magnet. Why does the cone move in and out?",
            options: [
              "The alternating current in the coil reverses, so the force on the coil reverses",
              "The permanent magnet switches its poles round",
              "The cone is attracted to the magnet and then springs back",
              "Sound waves from the room push the cone"
            ],
            answer: 0,
            feedback: [
              "",
              "A permanent magnet keeps the same poles; it does not switch. What changes is the current in the coil: it alternates, so the force on the coil reverses and the cone moves in and out.",
              "The cone is paper or plastic, not a magnetic material, so the magnet does not attract it. The force is on the coil, from the motor effect, and it reverses because the current alternates.",
              "That is a microphone, working the other way round. In a loudspeaker the cone is moved by the force on the coil, which reverses because the current in the coil alternates."
            ]
          },
          contexts: [
            { label: "Headphones", q: "Inside a pair of headphones a tiny coil sits in the field of a permanent magnet, fixed to a small cone. Why does the cone move in and out?" },
            { label: "Phone speaker", q: "The speaker in a mobile phone has a coil in the field of a small permanent magnet, attached to a thin cone. Why does the cone move in and out?" },
            { label: "Car speaker", q: "A car door speaker has a large coil in the field of a permanent magnet, attached to a paper cone. Why does the cone move in and out?" }
          ],
          explain: "Say, in one sentence, why a bigger current makes a louder sound.",
          levels: {
            support: {
              steps: [
                "Where is the force? On the coil, because it carries a current in a magnetic field.",
                "What kind of current? Alternating: it keeps reversing.",
                "Reverse the current and the force reverses.",
                "The coil is fixed to the cone, so the cone moves with it."
              ],
              example: {
                q: "A wire in a magnetic field is connected to an a.c. supply. Describe what the wire does and why.",
                steps: ["The wire carries a current in a field, so it feels a force.", "The current reverses, so the force reverses.", "So the wire moves one way, then the other: it vibrates."],
                answer: "The wire vibrates, because the force on it from the motor effect reverses every time the alternating current reverses."
              }
            },
            core: { hint: "Motor effect on the coil, plus a current that keeps reversing." },
            stretch: { extend: "Explain how the loudspeaker makes a higher-pitched note, and how it makes a louder one, in terms of the current." }
          },
          why: "The coil carries a current in a magnetic field, so it feels a force (the motor effect). The current alternates, so the force reverses, and the coil and cone move in and out at the frequency of the current."
        },
        {
          title: "Explain the motor (6 marks)",
          task: {
            kind: "written",
            q: "Explain how a simple d.c. electric motor works. Include the part played by the split-ring commutator. (6 marks)",
            marks: 6,
            criteria: [
              "A current flows in a coil that sits in a magnetic field",
              "Each side of the coil experiences a force because of the motor effect (a current-carrying conductor in a magnetic field)",
              "The currents in the two sides flow in opposite directions, so the forces are in opposite directions (Fleming's left-hand rule)",
              "The opposite forces make the coil rotate",
              "The split-ring commutator reverses the current in the coil every half turn",
              "So the forces keep turning the coil in the same direction; mentions a way to increase the speed (more current, stronger field, more turns)"
            ],
            model: "A d.c. motor has a coil of wire between the poles of a magnet. When a current flows, each side of the coil is a conductor carrying a current in a magnetic field, so it experiences a force: this is the motor effect. The current flows up one side of the coil and down the other, so by Fleming's left-hand rule the two sides are pushed in opposite directions, one up and one down. These opposite forces make the coil rotate. After half a turn the forces would reverse the rotation, so the split-ring commutator reverses the current in the coil every half turn. This keeps the force on each side pointing the same way round, so the coil keeps rotating in one direction. The motor turns faster with a bigger current, a stronger magnet or more turns on the coil."
          },
          levels: {
            support: {
              steps: [
                "Start with what there is: a coil, a magnetic field, a current.",
                "Say why there is a force (motor effect) and why the two sides are pushed opposite ways.",
                "Say the coil rotates.",
                "Give the commutator's job and finish with one way to speed the motor up."
              ],
              example: {
                q: "Explain why a current-carrying wire placed between the poles of a magnet moves. (3 marks)",
                steps: ["The wire has a magnetic field round it because of the current.", "This field interacts with the magnet's field, so the wire feels a force: the motor effect.", "The direction of the force is given by Fleming's left-hand rule, at right angles to the field and the current."],
                answer: "The current gives the wire its own field; the two fields interact, so the wire feels a force (the motor effect) at right angles to both the field and the current."
              }
            },
            core: { hint: "Coil, current, field; force on each side; opposite currents so opposite forces; rotation; commutator reverses the current every half turn." },
            stretch: { extend: "Add a sentence explaining why the forces on the two short ends of the coil do not make it rotate." }
          },
          explain: "Say, in one sentence, why the current in the coil has to be reversed every half turn.",
          why: "Top answers link each step: current in a field gives a force; opposite currents give opposite forces; the pair of forces rotates the coil; the commutator reverses the current every half turn so the rotation continues."
        }
      ]
    },
    /* ───────────── 5 · the generator effect (Physics only, Higher) ───────────── */
    {
      key: "generator-effect", n: 5, title: "The generator effect: alternators, dynamos and microphones",
      lead: "How moving a wire through a magnetic field makes a potential difference, what decides its size and direction, and how alternators, dynamos and microphones put it to work. (Physics only, Higher.)",
      covers: [5, 6],
      pretext: {
        words: [
          { word: "induce", means: "to cause something to appear without touching, here a potential difference", sentence: "Moving the magnet into the coil induces a potential difference." },
          { word: "potential difference", means: "the electrical push across two points, measured in volts", sentence: "The voltmeter showed a potential difference while the wire moved." },
          { word: "generator", means: "a machine that turns movement into electricity", sentence: "A bike dynamo is a small generator." },
          { word: "alternator", means: "a generator that gives an alternating current", sentence: "Power stations use huge alternators." },
          { word: "slip rings", means: "two complete rings that connect a spinning coil to the outside circuit", sentence: "An alternator uses slip rings, not a split ring." },
          { word: "diaphragm", means: "a thin, flexible sheet that vibrates when sound hits it", sentence: "The microphone's diaphragm moves with the sound wave." }
        ],
        passage: [
          "Move a wire through a magnetic field and something happens.",
          "A potential difference appears across the ends of the wire.",
          "We say it is induced.",
          "If the wire is part of a complete circuit, a current flows.",
          "This is the generator effect.",
          "Moving the magnet instead of the wire works just as well.",
          "Nothing happens if neither one moves.",
          "A faster movement, a stronger magnet or more turns gives a bigger potential difference.",
          "Move the other way and the potential difference reverses.",
          "An alternator spins a coil in a field to make alternating current.",
          "A dynamo uses a split ring to make direct current.",
          "A microphone uses the generator effect to turn sound into an electrical signal."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن تجعل شيئاً يظهر من دون تلامس، وهنا فرق الجهد (induce)",
            "الدفع الكهربائي بين نقطتَين، يُقاس بالفولت (potential difference)",
            "آلة تحوّل الحركة إلى كهرباء (generator)",
            "مولّد يعطي تياراً متردّداً (alternator)",
            "حلقتان كاملتان تصلان ملفّاً دوّاراً بالدارة الخارجية (slip rings)",
            "صفيحة رقيقة مرنة تهتزّ عندما يصيبها الصوت (diaphragm)"
          ],
          "passage": [
            "حرّك سلكاً خلال مجال مغناطيسي فيحدث شيء.",
            "يظهر فرق جهد (potential difference) بين طرفَي السلك.",
            "نقول إنه مستحثّ (induced).",
            "إذا كان السلك جزءاً من دارة مكتملة، يسري تيار.",
            "هذا هو تأثير المولّد (generator effect).",
            "تحريك المغناطيس بدلاً من السلك يعمل بالطريقة نفسها.",
            "لا يحدث شيء إذا لم يتحرّك أي منهما.",
            "حركة أسرع، أو مغناطيس أقوى، أو لفّات أكثر، تعطي فرق جهد أكبر.",
            "حرّك في الاتجاه الآخر فينعكس فرق الجهد.",
            "المولّد المتردّد (alternator) يدير ملفّاً في مجال ليصنع تياراً متردّداً.",
            "الدينامو (dynamo) يستعمل حلقة مشقوقة ليصنع تياراً مستمرّاً.",
            "الميكروفون يستعمل تأثير المولّد ليحوّل الصوت إلى إشارة كهربائية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "sprawić, że coś pojawia się bez dotykania, tutaj różnica potencjałów (induce)",
            "elektryczne „pchnięcie” między dwoma punktami, mierzone w woltach (potential difference)",
            "maszyna, która zamienia ruch na elektryczność (generator)",
            "generator, który daje prąd przemienny (alternator)",
            "dwa pełne pierścienie, które łączą obracającą się zwojnicę z obwodem zewnętrznym (slip rings)",
            "cienka, giętka płytka, która drga, kiedy uderza w nią dźwięk (diaphragm)"
          ],
          "passage": [
            "Przesuń przewód przez pole magnetyczne, a coś się stanie.",
            "Na końcach przewodu pojawia się różnica potencjałów (potential difference), w skrócie p.d., czyli napięcie.",
            "Mówimy, że zostało ono wyindukowane (induced).",
            "Jeśli przewód jest częścią zamkniętego obwodu, płynie prąd.",
            "To jest efekt generatora (generator effect).",
            "Poruszanie magnesem zamiast przewodu działa równie dobrze.",
            "Nic się nie dzieje, jeśli żadne z nich się nie rusza.",
            "Szybszy ruch, silniejszy magnes albo więcej zwojów daje większe napięcie (p.d.).",
            "Porusz w drugą stronę, a napięcie się odwróci.",
            "Alternator obraca zwojnicę w polu, żeby wytworzyć prąd przemienny.",
            "Dynamo (dynamo) używa przeciętego pierścienia, żeby wytworzyć prąd stały.",
            "Mikrofon używa efektu generatora, żeby zamienić dźwięk na sygnał elektryczny."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "fazer aparecer algo sem tocar, aqui uma diferença de potencial (induce, induzir)",
            "o empurrão elétrico entre dois pontos, medido em volts (potential difference, diferença de potencial, d.d.p.)",
            "uma máquina que transforma movimento em eletricidade (generator, gerador)",
            "um gerador que dá uma corrente alternada (alternator, alternador)",
            "dois anéis completos que ligam uma bobina que gira ao circuito exterior (slip rings, anéis coletores)",
            "uma lâmina fina e flexível que vibra quando o som bate nela (diaphragm, diafragma)"
          ],
          "passage": [
            "Mova um fio através de um campo magnético e acontece alguma coisa.",
            "Aparece uma diferença de potencial, ou d.d.p. (em inglês, p.d.), entre as pontas do fio.",
            "Dizemos que ela é induzida (induced).",
            "Se o fio faz parte de um circuito completo, passa uma corrente.",
            "Isto é o efeito gerador (generator effect).",
            "Mover o ímã/íman em vez do fio funciona igualmente bem.",
            "Não acontece nada se nenhum dos dois se mover.",
            "Um movimento mais rápido, um ímã/íman mais forte ou mais voltas dão uma d.d.p. (p.d.) maior.",
            "Mova no sentido contrário e a d.d.p. (p.d.) inverte-se.",
            "Um alternador (alternator) faz girar uma bobina num campo para produzir corrente alternada.",
            "Um dínamo usa um anel dividido para produzir corrente contínua.",
            "Um microfone usa o efeito gerador para transformar o som num sinal elétrico."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "wax ka dhigid inuu soo baxo taabasho la'aan, halkan potential difference (induce)",
            "riixidda korontada ee u dhexaysa laba bar, oo lagu cabbiro volts (potential difference)",
            "mishiin dhaqaaq u beddela koronto (generator)",
            "generator bixiya alternating current (alternator)",
            "laba giraangir oo dhammaystiran oo duub wareegaya ku xira wareegga dibadda (slip rings)",
            "xaashi khafiif ah oo laalaaban oo gariirta marka dhawaaq ku dhaco (diaphragm)"
          ],
          "passage": [
            "Silig dhex dhaqaaji magnetic field, wax ayaa dhacaya.",
            "Potential difference ayaa ka soo baxa darfaha siligga.",
            "Waxaan oranno waa la kiciyay (induced).",
            "Haddii siliggu qayb ka yahay wareeg dhammaystiran, current ayaa socda.",
            "Tani waa generator effect.",
            "Bir-labta dhaqaajinta halkii siligga sidaas oo kale ayay u shaqaysaa.",
            "Waxba ma dhacaan haddii midkoodna aan dhaqaaqin.",
            "Dhaqaaq ka dhaqso badan, bir-lab ka xoog badan ama duubab ka badan waxay bixiyaan potential difference ka weyn.",
            "Dhanka kale u dhaqaaji, potential difference-kuna wuu rogmaa.",
            "Alternator duub ayuu field ku wareejiyaa si uu u sameeyo alternating current.",
            "Dynamo split ring ayuu isticmaalaa si uu u sameeyo direct current.",
            "Makarafoon (microphone) wuxuu isticmaalaa generator effect si uu dhawaaq u beddelo calaamad koronto."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "спричинити появу чогось без дотику, тут — різниці потенціалів (induce)",
            "електричний «поштовх» між двома точками, вимірюється у вольтах (potential difference)",
            "машина, яка перетворює рух на електрику (generator)",
            "генератор, який дає змінний струм (alternator)",
            "два суцільні кільця, які з’єднують котушку, що обертається, із зовнішнім колом (slip rings)",
            "тонка гнучка пластинка, яка коливається, коли на неї падає звук (diaphragm)"
          ],
          "passage": [
            "Проведіть провід через магнітне поле — і щось станеться.",
            "На кінцях проводу з’являється різниця потенціалів (potential difference).",
            "Ми кажемо, що вона наведена (induced).",
            "Якщо провід є частиною замкненого кола, тече струм.",
            "Це ефект генератора (generator effect).",
            "Рухати магніт замість проводу працює так само добре.",
            "Нічого не стається, якщо не рухається ні те, ні інше.",
            "Швидший рух, сильніший магніт або більше витків дають більшу різницю потенціалів.",
            "Рухайте в інший бік — і різниця потенціалів зміниться на протилежну.",
            "Альтернатор (alternator) обертає котушку в полі, щоб створити змінний струм.",
            "Динамо (dynamo) використовує розрізне кільце, щоб створити постійний струм.",
            "Мікрофон використовує ефект генератора, щоб перетворити звук на електричний сигнал."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "بغیر چھوئے کسی چیز کو پیدا کرنا، یہاں ایک potential difference (induce)",
            "دو نقطوں کے بیچ برقی دھکا، جو volts میں ناپا جاتا ہے (potential difference)",
            "ایک مشین جو حرکت کو بجلی میں بدلتی ہے (generator)",
            "ایسا generator جو متبادل کرنٹ دیتا ہے (alternator)",
            "دو مکمل چھلے جو گھومتی کنڈلی کو باہر کے سرکٹ سے جوڑتے ہیں (slip rings)",
            "ایک باریک، لچک دار چادر جو آواز لگنے پر ہلتی ہے (diaphragm)"
          ],
          "passage": [
            "ایک تار کو مقناطیسی میدان میں سے گزاریں تو کچھ ہوتا ہے۔",
            "تار کے سروں کے بیچ ایک potential difference پیدا ہو جاتا ہے۔",
            "ہم کہتے ہیں کہ یہ induced ہوا ہے۔",
            "اگر تار ایک مکمل سرکٹ کا حصہ ہو تو کرنٹ بہتا ہے۔",
            "یہ generator effect ہے۔",
            "تار کے بجائے مقناطیس کو حرکت دینا بھی اتنا ہی اچھا کام کرتا ہے۔",
            "اگر دونوں میں سے کوئی بھی حرکت نہ کرے تو کچھ نہیں ہوتا۔",
            "تیز حرکت، مضبوط مقناطیس یا زیادہ چکر بڑا potential difference دیتے ہیں۔",
            "دوسری طرف حرکت دیں تو potential difference الٹ جاتا ہے۔",
            "Alternator متبادل کرنٹ بنانے کے لیے ایک کنڈلی کو میدان میں گھماتا ہے۔",
            "Dynamo یک رخا کرنٹ (direct current) بنانے کے لیے split ring استعمال کرتا ہے۔",
            "مائیکروفون آواز کو برقی سگنل میں بدلنے کے لیے generator effect استعمال کرتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Movement makes a potential difference",
          paragraphs: [
            "The motor effect turns a current into movement. The generator effect is the reverse: movement makes electricity. If a conductor, such as a wire, moves relative to a magnetic field, or if the magnetic field around a conductor changes, a potential difference is induced across the ends of the conductor.",
            "That potential difference exists whether or not anything is connected. If the conductor is part of a complete circuit, the induced potential difference drives an induced current round the circuit. A voltmeter across the ends shows the p.d.; an ammeter in the loop shows the current.",
            "It is the relative motion that matters. You can move the wire through the field, move the magnet past the wire, or spin either one. Hold both still and nothing is induced: a wire sitting in a steady field gives no reading at all."
          ],
          tip: "Two words the examiner wants: 'relative motion' (or 'changing field') and 'induced'. No motion, no change: nothing induced."
        },
        {
          heading: "Size and direction of the induced p.d.",
          paragraphs: [
            "Three things make the induced potential difference bigger: moving faster, so the wire cuts the field lines more quickly; using a stronger magnet, so there are more field lines to cut; and using a coil with more turns, since each turn has a p.d. induced in it and they add up. The department's simulation shows the ammeter reading jump from 1 to 10 when the field, the number of loops or the speed is increased.",
            "Reverse the direction of movement and the induced p.d. reverses. Reverse the magnetic field, by swapping the poles, and it reverses too. Push a magnet into a coil and the needle flicks one way; pull it out and the needle flicks the other way.",
            "There is a rule hidden in that. An induced current produces its own magnetic field, and that field always opposes the change that made it. Push a north pole into a coil and the near end of the coil becomes a north pole, repelling the magnet. Pull it out and the near end becomes a south pole, attracting it. Either way the coil resists the movement, which is why it takes effort to turn a generator."
          ],
          worked: {
            q: "A pupil pushes the north pole of a magnet into a coil connected to a sensitive ammeter. Describe what happens to the ammeter and the coil, and what the pupil would notice if she pulled the magnet out faster. (4 marks)",
            steps: [
              "As the magnet moves in, the field through the coil changes, so a p.d. is induced and a current flows: the needle flicks one way.",
              "The induced current makes the near end of the coil a north pole, opposing the magnet's approach, so the coil pushes back on the magnet.",
              "Pulling the magnet out reverses the change, so the current, and the needle, go the other way.",
              "Pulling out faster means a bigger induced p.d. and current, so the needle flicks further."
            ],
            answer: "The needle flicks one way as the magnet goes in and the coil repels it; pulled out, the needle flicks the other way and the coil attracts it; pulled out faster, the needle flicks further."
          }
        },
        {
          heading: "Alternators and dynamos",
          paragraphs: [
            "An alternator is a coil that spins in a uniform magnetic field, with its two ends connected to two slip rings. Brushes press on the rings so the current can be taken off while the coil turns. As each side of the coil sweeps down through the field and then back up, the direction of the induced p.d. keeps reversing: the output is an alternating current.",
            "The size of the induced p.d. changes as the coil turns. It is at its peak when the sides of the coil are cutting straight across the field lines, which happens when the plane of the coil is parallel to the field. It falls to zero when the sides are moving along the field lines, when the plane of the coil is perpendicular to the field. On an oscilloscope the output is a smooth wave crossing zero twice every turn. Spinning the coil faster raises the peak p.d. and raises the frequency of the wave.",
            "A dynamo is the same coil and magnet but with a split-ring commutator instead of slip rings. Every half turn the connections swap, so the output never changes sign. The result is a direct current that rises and falls, from zero to a peak and back, but always in the same direction. A bicycle dynamo lamp flickers at low speed for exactly this reason."
          ],
          tip: "Alternator: slip rings, a.c., peak when the plane of the coil is parallel to the field. Dynamo: split-ring commutator, d.c. that varies but never reverses."
        },
        {
          heading: "Microphones",
          paragraphs: [
            "A moving-coil microphone is a loudspeaker working backwards. A thin diaphragm is fixed to a small coil that sits in the field of a permanent magnet. When a sound wave reaches the diaphragm, the compressions and rarefactions of the air push it in and pull it out, so the coil moves backwards and forwards in the field.",
            "A coil moving in a magnetic field has a potential difference induced across it: the generator effect. Because the coil moves with the sound, the induced p.d. rises and falls in time with the pressure variations of the sound wave. The microphone has turned the sound into an electrical signal of the same frequency, which can then be amplified, recorded, or sent to a loudspeaker.",
            "Be careful with the two devices. A loudspeaker takes a current and makes movement: the motor effect. A microphone takes movement and makes a p.d.: the generator effect. The department deck has a slide that puts the microphone under the left-hand rule and the motor effect; that is a slip. A microphone generates."
          ]
        }
      ],
      gate: [
        { kind: "mcq", q: "A wire is moved through a magnetic field. What is induced across the ends of the wire?", options: ["A potential difference", "A magnetic pole", "A resistance", "A charge of exactly 1 coulomb"], answer: 0, why: "Relative motion between a conductor and a magnetic field induces a potential difference. A current flows only if there is a complete circuit.",
          feedback: [
            "",
            "A wire does not gain a pole by moving; the induced current does make a field, but what appears across the ends of the wire is a potential difference.",
            "The wire's resistance is a property of the wire and does not change because it moves. Moving it through the field induces a potential difference across its ends.",
            "No fixed amount of charge appears. What is induced is a potential difference, and if the wire is part of a complete circuit that p.d. drives a current."
          ] },
        { kind: "gap", q: "The magnetic field produced by an induced current always ___ the change that caused it.", answer: "opposes", options: ["opposes", "copies", "strengthens"], why: "This is why a coil pushes back on a magnet being pushed into it, and why generators are hard to turn.",
          feedback: {
            "copies": "If the induced field copied the change, pushing a magnet in would pull it in further and energy would come from nowhere. The induced field opposes the change: the coil pushes back.",
            "strengthens": "Strengthening the change would make the magnet speed up by itself, giving out energy for free. The induced field opposes the change that made it."
          } },
        { kind: "mcq", q: "Why does an alternator produce an alternating current?", options: ["Each side of the coil moves down through the field, then up, so the induced p.d. keeps reversing", "Its slip rings swap the connections every half turn", "The magnet spins round the coil", "The coil is made of two different metals"], answer: 0, why: "The direction of the induced p.d. depends on the direction of motion through the field, and each side of the spinning coil reverses its motion every half turn.",
          feedback: [
            "",
            "Slip rings are complete rings; they keep the same connections all the way round and simply let the current out of a spinning coil. It is the split ring in a dynamo that swaps connections. The a.c. comes from the coil's sides reversing their motion through the field.",
            "In a simple alternator the magnet is fixed and the coil spins. The current alternates because each side of the coil moves down through the field, then up, reversing the induced p.d.",
            "The metal does not decide the direction of the current. The induced p.d. reverses because the motion of each side of the coil through the field reverses every half turn."
          ] }
      ],
      modules: [
        {
          title: "Make the reading bigger",
          task: {
            kind: "mcq",
            q: "A coil connected to a voltmeter is moved through a magnetic field. Which change would increase the induced potential difference?",
            options: ["Moving the coil faster", "Using thicker insulation on the wire", "Holding the coil still inside the field", "Using fewer turns of wire"],
            answer: 0,
            feedback: [
              "",
              "Insulation keeps the turns from touching each other; it has no effect on how fast field lines are cut. Moving the coil faster is what increases the induced p.d.",
              "A coil held still in a steady field has nothing induced in it at all: no relative motion, no change, no p.d. Moving the coil faster increases the induced p.d.",
              "Each turn has its own p.d. induced and they add up, so fewer turns means a smaller p.d. More turns, a faster movement or a stronger field would increase it."
            ]
          },
          contexts: [
            { label: "Bike dynamo", q: "A bicycle dynamo lights a lamp dimly when the rider pedals slowly. Which change would increase the induced potential difference?" },
            { label: "Wind turbine", q: "A model wind turbine turns a coil in a magnetic field and lights a small lamp dimly. Which change would increase the induced potential difference?" },
            { label: "Hand-cranked torch", q: "A hand-cranked torch turns a coil in a magnetic field, and its lamp is dim. Which change would increase the induced potential difference?" }
          ],
          explain: "Say, in one sentence, the three things that make an induced potential difference bigger.",
          levels: {
            support: {
              steps: [
                "Recall the three ways: faster motion, stronger field, more turns.",
                "Check each option against the list.",
                "Anything that stops the motion gives zero.",
                "Fewer turns goes the wrong way."
              ],
              example: {
                q: "A magnet is dropped through a coil and the ammeter flicks. Suggest two changes that would make it flick further.",
                steps: ["Use a stronger magnet.", "Use a coil with more turns.", "(Or drop it from higher so it is moving faster.)"],
                answer: "A stronger magnet, more turns on the coil, or a faster-moving magnet."
              }
            },
            core: { hint: "Faster, stronger, more turns. Which option is one of these?" },
            stretch: { extend: "Explain why the induced p.d. would reverse if the coil were moved back the other way, and sketch what a voltmeter would show as the coil moves in and then out." }
          },
          why: "Faster movement cuts the field lines more quickly, so the induced p.d. is bigger. A stronger field or more turns would also increase it; no motion gives nothing; fewer turns gives less."
        },
        {
          title: "Alternator or dynamo?",
          task: {
            kind: "match",
            q: "Match each feature to the device it belongs to.",
            pairs: [
              ["Two slip rings", "Alternator"],
              ["Output that reverses direction every half turn", "Alternator's a.c. output"],
              ["Split-ring commutator", "Dynamo"],
              ["Output that varies but always flows the same way", "Dynamo's d.c. output"],
              ["Diaphragm fixed to a coil", "Microphone"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Slip rings are complete rings: the connections never swap, so the output reverses.",
                "A split ring swaps the connections every half turn, so the output never reverses.",
                "a.c. goes with the alternator; d.c. goes with the dynamo.",
                "The diaphragm is the part that sound moves."
              ],
              example: {
                q: "A d.c. motor and a dynamo look the same. What does each one have as its input and its output?",
                steps: ["Motor: electrical input, movement out (motor effect).", "Dynamo: movement in, electrical output (generator effect)."],
                answer: "Motor: current in, movement out. Dynamo: movement in, d.c. out."
              }
            },
            core: { hint: "Complete rings keep the connections; a split ring swaps them. That decides a.c. or d.c." },
            stretch: { extend: "Describe how the dynamo's output would change if the coil were spun twice as fast, mentioning both the peak value and the frequency." }
          },
          explain: "Say, in one sentence, what the slip rings and the split ring have in common and how they differ.",
          why: "Alternator: slip rings, a.c. that reverses every half turn. Dynamo: split-ring commutator, d.c. that varies but never reverses. Microphone: a diaphragm moves a coil in a field."
        },
        {
          title: "Describe the alternator's output (6 marks)",
          task: {
            kind: "written",
            q: "An alternator has a coil spinning at a steady speed in a uniform magnetic field. Describe how the induced potential difference changes during one turn of the coil, and explain what happens to the output if the coil is spun faster. (6 marks)",
            marks: 6,
            criteria: [
              "A potential difference is induced because the sides of the coil move through the magnetic field (generator effect)",
              "The p.d. is at its peak when the sides cut straight across the field lines, when the plane of the coil is parallel to the field",
              "The p.d. is zero when the sides move along the field lines, when the plane of the coil is perpendicular to the field",
              "Every half turn each side moves the opposite way through the field, so the p.d. reverses direction: the output is alternating",
              "Spinning faster gives a larger peak p.d., because the field lines are cut more quickly",
              "Spinning faster also increases the frequency: more cycles each second"
            ],
            model: "As the coil spins, its two long sides move through the magnetic field, so a potential difference is induced across the coil by the generator effect. The size of this p.d. changes as the coil turns. It is at its peak when the sides are cutting straight across the field lines, which is when the plane of the coil is parallel to the field. It falls to zero when the sides are moving along the field lines, when the plane of the coil is perpendicular to the field. Every half turn each side moves the opposite way through the field, so the induced p.d. reverses direction. The output is therefore an alternating p.d., rising to a peak, falling through zero to a negative peak and back once per turn. If the coil is spun faster, the sides cut the field lines more quickly, so the peak p.d. is larger, and the coil completes more turns each second, so the frequency of the output is higher."
          },
          levels: {
            support: {
              steps: [
                "Say what causes the p.d.: the sides moving through the field.",
                "Describe the peak and the zero, and link each to the position of the coil.",
                "Say why it reverses each half turn.",
                "Finish with the two effects of spinning faster: bigger peak, higher frequency."
              ],
              example: {
                q: "Describe the output of a dynamo, and explain why it is different from an alternator's. (3 marks)",
                steps: ["The output rises and falls like the alternator's but never changes direction.", "The split-ring commutator swaps the connections every half turn.", "So the current is always in the same direction: a varying d.c."],
                answer: "A dynamo gives a varying d.c., rising and falling but never reversing, because its split-ring commutator swaps the coil's connections every half turn."
              }
            },
            core: { hint: "Cause; peak position; zero position; why it reverses; faster means bigger peak and higher frequency." },
            stretch: { extend: "Add a sentence explaining why the alternator becomes harder to turn when a lamp is connected to its output." }
          },
          explain: "Say, in one sentence, where in the turn the induced p.d. is largest and why.",
          why: "Full marks come from linking the size of the p.d. to how fast the sides cut field lines (peak when the plane is parallel to the field, zero when perpendicular), the reversal every half turn, and both effects of faster spinning."
        }
      ]
    },
    /* ───────────── 6 · transformers and the National Grid (Physics only, Higher) ───────────── */
    {
      key: "transformers", n: 6, title: "Transformers and the National Grid",
      lead: "How two coils on an iron core change the size of an alternating potential difference, the two transformer equations, and why the National Grid runs at hundreds of thousands of volts. (Physics only, Higher.)",
      covers: [7, 8],
      pretext: {
        words: [
          { word: "transformer", means: "a device with two coils on an iron core that changes the size of an alternating p.d.", sentence: "A phone charger has a small transformer inside it." },
          { word: "primary coil", means: "the coil connected to the supply, which puts energy in", sentence: "The mains is connected to the primary coil." },
          { word: "secondary coil", means: "the coil that gives the output", sentence: "The phone is connected to the secondary coil." },
          { word: "step-up", means: "making the potential difference bigger", sentence: "A step-up transformer at the power station raises the p.d." },
          { word: "step-down", means: "making the potential difference smaller", sentence: "A step-down transformer near your home lowers the p.d. to 230 V." },
          { word: "efficient", means: "wasting very little energy", sentence: "A high p.d. makes the National Grid more efficient." }
        ],
        passage: [
          "A transformer has two coils of wire on an iron core.",
          "The primary coil is connected to an alternating supply.",
          "The alternating current makes a magnetic field that keeps changing.",
          "The iron core carries this changing field to the secondary coil.",
          "A changing field induces an alternating potential difference in the secondary coil.",
          "A steady direct current would not work, because its field does not change.",
          "More turns on the secondary than the primary gives a bigger p.d.: step-up.",
          "Fewer turns on the secondary gives a smaller p.d.: step-down.",
          "In a perfect transformer, the power out equals the power in.",
          "So a bigger p.d. means a smaller current.",
          "Power stations step the p.d. up to 400 000 V.",
          "A small current wastes less energy heating the cables.",
          "Near homes, the p.d. is stepped down to 230 V."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "جهاز فيه ملفّان على قلب من الحديد يغيّر مقدار فرق الجهد المتردّد (transformer)",
            "الملفّ الموصول بالمصدر، الذي يُدخل الطاقة (primary coil)",
            "الملفّ الذي يعطي الخرج (secondary coil)",
            "جعل فرق الجهد أكبر (step-up)",
            "جعل فرق الجهد أصغر (step-down)",
            "يُضيّع طاقة قليلة جداً (efficient)"
          ],
          "passage": [
            "المحوّل (transformer) فيه ملفّان من السلك على قلب من الحديد.",
            "الملفّ الابتدائي (primary coil) موصول بمصدر تيار متردّد.",
            "التيار المتردّد يصنع مجالاً مغناطيسياً يتغيّر باستمرار.",
            "ينقل قلب الحديد هذا المجال المتغيّر إلى الملفّ الثانوي (secondary coil).",
            "المجال المتغيّر يستحثّ فرق جهد متردّداً في الملفّ الثانوي.",
            "التيار المستمرّ الثابت لن يعمل، لأن مجاله لا يتغيّر.",
            "لفّات في الثانوي أكثر من الابتدائي تعطي فرق جهد (p.d.) أكبر: رافع (step-up).",
            "لفّات أقلّ في الثانوي تعطي فرق جهد أصغر: خافض (step-down).",
            "في المحوّل المثالي، القدرة الخارجة تساوي القدرة الداخلة.",
            "إذن فرق الجهد الأكبر يعني تياراً أصغر.",
            "محطّات الطاقة ترفع فرق الجهد إلى 400 000 V.",
            "التيار الصغير يُضيّع طاقة أقلّ في تسخين الكابلات.",
            "قرب المنازل، يُخفَّض فرق الجهد إلى 230 V."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "urządzenie z dwiema zwojnicami na żelaznym rdzeniu, które zmienia wielkość napięcia przemiennego (transformer)",
            "zwojnica podłączona do zasilania, która wprowadza energię (primary coil)",
            "zwojnica, która daje wyjście (secondary coil)",
            "zwiększanie napięcia (step-up)",
            "zmniejszanie napięcia (step-down)",
            "marnujący bardzo mało energii (efficient)"
          ],
          "passage": [
            "Transformator (transformer) ma dwie zwojnice z przewodu na żelaznym rdzeniu.",
            "Zwojnica pierwotna (primary coil) jest podłączona do zasilania prądem przemiennym.",
            "Prąd przemienny tworzy pole magnetyczne, które ciągle się zmienia.",
            "Żelazny rdzeń przenosi to zmieniające się pole do zwojnicy wtórnej (secondary coil).",
            "Zmieniające się pole indukuje w zwojnicy wtórnej przemienne napięcie (p.d.).",
            "Niezmienny prąd stały (direct current) by nie zadziałał, bo jego pole się nie zmienia.",
            "Więcej zwojów na wtórnej niż na pierwotnej daje większe napięcie (p.d.): step-up.",
            "Mniej zwojów na wtórnej daje mniejsze napięcie (p.d.): step-down.",
            "W idealnym transformatorze moc wyjściowa równa się mocy wejściowej.",
            "Więc większe napięcie (p.d.) oznacza mniejszy prąd.",
            "Elektrownie podnoszą napięcie (p.d.) do 400 000 V.",
            "Mały prąd marnuje mniej energii na ogrzewanie kabli.",
            "Blisko domów napięcie (p.d.) obniża się do 230 V."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um aparelho com duas bobinas num núcleo de ferro que muda o tamanho de uma d.d.p. (p.d.) alternada (transformer, transformador)",
            "a bobina ligada à fonte, que mete a energia (primary coil, bobina primária)",
            "a bobina que dá a saída (secondary coil, bobina secundária)",
            "tornar a diferença de potencial maior (step-up, elevador)",
            "tornar a diferença de potencial mais pequena (step-down, redutor)",
            "que desperdiça muito pouca energia (efficient, eficiente)"
          ],
          "passage": [
            "Um transformador (transformer) tem duas bobinas de fio num núcleo de ferro.",
            "A bobina primária (primary coil) está ligada a uma fonte alternada.",
            "A corrente alternada produz um campo magnético que muda o tempo todo.",
            "O núcleo de ferro leva este campo que muda até à bobina secundária (secondary coil).",
            "Um campo que muda induz uma diferença de potencial alternada na bobina secundária.",
            "Uma corrente contínua constante não funcionaria, porque o seu campo não muda.",
            "Mais voltas na secundária do que na primária dá uma d.d.p. (p.d.) maior: step-up (elevador).",
            "Menos voltas na secundária dá uma d.d.p. (p.d.) mais pequena: step-down (redutor).",
            "Num transformador perfeito, a potência que sai é igual à potência que entra.",
            "Por isso, uma d.d.p. (p.d.) maior quer dizer uma corrente mais pequena.",
            "As centrais elétricas elevam a d.d.p. (p.d.) até 400 000 V.",
            "Uma corrente pequena desperdiça menos energia a aquecer os cabos.",
            "Perto das casas, a d.d.p. (p.d.) é reduzida para 230 V."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qalab leh laba duub oo iron core saaran oo beddela cabbirka p.d. alternating (transformer)",
            "duubka ku xiran isha korontada, oo tamarta geliya (primary coil)",
            "duubka bixiya output-ka (secondary coil)",
            "potential difference ka weynaynta (step-up)",
            "potential difference ka yaraynta (step-down)",
            "tamar aad u yar lumiya (efficient)"
          ],
          "passage": [
            "Transformer wuxuu leeyahay laba duub silig oo iron core saaran.",
            "Primary coil-ku wuxuu ku xiran yahay isha koronto alternating ah.",
            "Alternating current-ku wuxuu samaystaa magnetic field sii beddelaya.",
            "Iron core-ku field-kan beddelaya wuxuu u qaadaa secondary coil-ka.",
            "Field beddelaya wuxuu secondary coil-ka ku kiciyaa (induces) alternating potential difference.",
            "Direct current joogto ah ma shaqayn lahayd, sababtoo ah field-keedu isma beddelo.",
            "Duubab ka badan secondary-ga marka loo eego primary-ga waxay bixiyaan p.d. ka weyn: step-up.",
            "Duubab ka yar secondary-ga waxay bixiyaan p.d. ka yar: step-down.",
            "Transformer dhammaystiran, awoodda baxaysa waxay la mid tahay awoodda gelaysa.",
            "Sidaas darteed p.d. ka weyn micnaheedu waa current ka yar.",
            "Saldhigyada korontada p.d. kor ayay ugu qaadaan 400 000 V.",
            "Current yar tamar yar ayuu ku lumiyaa kululaynta fiilooyinka.",
            "Guryaha agtooda, p.d. hoos ayaa loo dhigaa 230 V."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "пристрій із двома котушками на залізному осерді, який змінює величину змінної різниці потенціалів (transformer)",
            "котушка, під’єднана до джерела, яка подає енергію (primary coil)",
            "котушка, яка дає вихідну напругу (secondary coil)",
            "збільшення різниці потенціалів (step-up)",
            "зменшення різниці потенціалів (step-down)",
            "такий, що витрачає дуже мало енергії марно (efficient)"
          ],
          "passage": [
            "Трансформатор (transformer) має дві котушки з проводу на залізному осерді.",
            "Первинна котушка (primary coil) під’єднана до джерела змінного струму.",
            "Змінний струм створює магнітне поле, яке постійно змінюється.",
            "Залізне осердя передає це змінне поле до вторинної котушки (secondary coil).",
            "Змінне поле наводить змінну різницю потенціалів у вторинній котушці.",
            "Сталий постійний струм не працював би, бо його поле не змінюється.",
            "Більше витків на вторинній котушці, ніж на первинній, дає більшу напругу (p.d.): підвищувальний (step-up).",
            "Менше витків на вторинній котушці дає меншу напругу (p.d.): знижувальний (step-down).",
            "В ідеальному трансформаторі вихідна потужність дорівнює вхідній.",
            "Отже, більша напруга (p.d.) означає менший струм.",
            "Електростанції підвищують напругу до 400 000 V.",
            "Малий струм витрачає менше енергії на нагрівання кабелів.",
            "Біля домівок напругу знижують до 230 V."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "لوہے کے core پر دو کنڈلیوں والا آلہ جو متبادل p.d. کا سائز بدلتا ہے (transformer)",
            "وہ کنڈلی جو سپلائی سے جڑی ہو، جو توانائی اندر ڈالتی ہے (primary coil)",
            "وہ کنڈلی جو آؤٹ پٹ دیتی ہے (secondary coil)",
            "potential difference کو بڑا کرنا (step-up)",
            "potential difference کو چھوٹا کرنا (step-down)",
            "بہت کم توانائی ضائع کرنے والا (efficient)"
          ],
          "passage": [
            "Transformer میں لوہے کے core پر تار کی دو کنڈلیاں ہوتی ہیں۔",
            "Primary coil ایک متبادل سپلائی سے جڑی ہوتی ہے۔",
            "متبادل کرنٹ ایک ایسا مقناطیسی میدان بناتا ہے جو مسلسل بدلتا رہتا ہے۔",
            "لوہے کا core اس بدلتے میدان کو secondary coil تک لے جاتا ہے۔",
            "بدلتا ہوا میدان secondary coil میں ایک متبادل potential difference induce کرتا ہے۔",
            "ایک مستقل یک رخا کرنٹ کام نہ کرتا، کیونکہ اس کا میدان نہیں بدلتا۔",
            "primary سے زیادہ چکر secondary پر ہوں تو p.d. بڑا ملتا ہے: step-up۔",
            "secondary پر کم چکر ہوں تو p.d. چھوٹا ملتا ہے: step-down۔",
            "ایک کامل transformer میں باہر جانے والی طاقت اندر آنے والی طاقت کے برابر ہوتی ہے۔",
            "اس لیے بڑے p.d. کا مطلب ہے چھوٹا کرنٹ۔",
            "بجلی گھر p.d. کو 400 000 V تک step up کرتے ہیں۔",
            "چھوٹا کرنٹ تاروں کو گرم کرنے میں کم توانائی ضائع کرتا ہے۔",
            "گھروں کے پاس p.d. کو 230 V تک step down کیا جاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "How a transformer works, and why it needs a.c.",
          paragraphs: [
            "A transformer is two coils of insulated wire wound on the same iron core. The primary coil is connected to the supply; the secondary coil is connected to whatever the transformer is powering. The two coils are not joined to each other electrically. Energy crosses from one to the other through the magnetic field.",
            "An alternating current in the primary coil makes a magnetic field that is constantly changing in size and direction. The iron core is easily magnetised and demagnetised, so it carries this changing field through the middle of the secondary coil. A changing magnetic field around a conductor induces a potential difference in it (the generator effect), so an alternating p.d. appears across the secondary coil.",
            "This is why a transformer only works with a.c. A steady direct current would give a steady magnetic field, and a field that is not changing induces nothing. The deck's slow-motion slides show it: switch a d.c. supply on and you get a single pulse in the secondary as the field builds up, and then nothing, however long you wait."
          ],
          tip: "The chain for 'explain how a transformer works': alternating current in the primary → changing magnetic field in the iron core → alternating p.d. induced across the secondary."
        },
        {
          heading: "Step-up, step-down, and Vp / Vs = np / ns",
          paragraphs: [
            "The size of the output p.d. depends on the number of turns on each coil. If the secondary coil has more turns than the primary, the p.d. is stepped up: this is a step-up transformer. If the secondary has fewer turns, the p.d. is stepped down: a step-down transformer. Phone chargers, games consoles and electric toothbrushes all use step-down transformers from the 230 V mains.",
            "The equation is: potential difference across the primary ÷ potential difference across the secondary = number of turns on the primary ÷ number of turns on the secondary, written Vp / Vs = np / ns. The p.d.s are in volts; the numbers of turns have no unit. It is on the equation sheet, so your job is to rearrange it.",
            "To find Vs, multiply both sides out: Vs = Vp × ns ÷ np. To find ns: ns = np × Vs ÷ Vp. A quick sanity check saves marks: in a step-down transformer the secondary has fewer turns and a smaller p.d.; if your answer gives the secondary a bigger p.d. than the primary when it has fewer turns, something is upside down."
          ],
          worked: {
            q: "A phone charger transformer has 2000 turns on its primary coil and 50 turns on its secondary. The primary is connected to the 230 V mains. Calculate the potential difference across the secondary coil.",
            steps: [
              "Write the equation: Vp / Vs = np / ns.",
              "Rearrange for Vs: Vs = Vp × ns ÷ np.",
              "Substitute: Vs = 230 × 50 ÷ 2000.",
              "Vs = 5.75 V. Fewer turns on the secondary, smaller p.d.: a step-down transformer, as expected."
            ],
            answer: "5.75 V",
            check: "230 * 50 / 2000"
          }
        },
        {
          heading: "Power in, power out: Vp Ip = Vs Is",
          paragraphs: [
            "A transformer cannot create energy. In a perfect transformer, one that is 100 % efficient, the power supplied to the primary coil equals the power delivered by the secondary coil. Electrical power is potential difference × current, so Vp × Ip = Vs × Is, with p.d. in volts, current in amperes and power in watts.",
            "This has a consequence that surprises people. A step-up transformer increases the p.d., so to keep the power the same the current in the secondary must be smaller than in the primary. A step-down transformer lowers the p.d. and raises the current. Bigger p.d. means smaller current, and the other way round.",
            "Real transformers are not perfectly efficient. The coils have resistance, so a current in them heats them, and some energy is transferred to the surroundings. Good transformers get above 95 % efficient, which is why the equation is used as if they were perfect at GCSE."
          ],
          worked: {
            q: "A power-station step-up transformer takes 25 000 V at a current of 800 A on its primary side. Its output is at 400 000 V. Assuming it is 100 % efficient, calculate the current in the secondary coil.",
            steps: [
              "Write the equation: Vp Ip = Vs Is.",
              "Rearrange for Is: Is = Vp × Ip ÷ Vs.",
              "Substitute: Is = 25 000 × 800 ÷ 400 000.",
              "Is = 50 A. The p.d. went up 16 times, so the current came down 16 times."
            ],
            answer: "50 A",
            check: "25000 * 800 / 400000"
          },
          tip: "Power is the quantity that stays the same. Work out Vp × Ip first; that number is the power, and the secondary must deliver the same power."
        },
        {
          heading: "Why the National Grid runs at 400 000 V",
          paragraphs: [
            "The National Grid carries electricity from power stations to homes, offices and factories. A power station's generator produces electricity at about 25 000 V. A step-up transformer raises this to about 400 000 V for the long transmission cables. Near the places that use it, step-down transformers bring it down in stages, to 230 V for homes.",
            "The reason is efficiency. Cables have resistance, and a current in a resistance heats it: the moving electrons collide with the ions in the metal and transfer energy to them. The bigger the current, the hotter the cables and the more energy is wasted to the surroundings. Power = p.d. × current, so the same power can be sent with a huge p.d. and a small current. Stepping the p.d. up reduces the current, so less energy is wasted heating the cables and the Grid is more efficient.",
            "The high p.d. is dangerous, which is why transmission cables are hung high on pylons or buried, and why they are stepped back down before they reach anything you touch."
          ],
          tip: "The 6-mark National Grid answer needs the chain: step-up transformer → higher p.d. → lower current for the same power → less heating of the cables → less energy wasted → more efficient; then step-down for safety at home."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why does a transformer only work with an alternating current?", options: ["Only a changing current gives a changing magnetic field, and only a changing field induces a p.d. in the secondary coil", "Direct current cannot flow through an iron core", "Alternating current is stronger than direct current", "The iron core only conducts electricity one way"], answer: 0, why: "Induction needs a changing field. A steady d.c. gives a steady field and induces nothing after the first instant.",
          feedback: [
            "",
            "No current flows through the core in either case: the coils are insulated from the core and from each other, and energy crosses through the magnetic field. A.c. is needed because only a changing current gives the changing field that induces a p.d.",
            "A.c. is not 'stronger'; a direct current of the same size makes a field of the same size. The difference is that an alternating current's field keeps changing, and only a changing field induces a p.d. in the secondary.",
            "The core is not meant to conduct any electricity between the coils; it carries the magnetic field. A transformer needs a.c. because only a changing field induces a p.d."
          ] },
        { kind: "numeric", q: "A transformer is 100 % efficient. The primary coil takes 230 V at a current of 0.5 A. The secondary coil gives 11.5 V. Calculate the current in the secondary coil in amperes.", answer: 10, tolerance: 0, units: "A", check: "230 * 0.5 / 11.5", why: "Vp Ip = Vs Is, so Is = 230 × 0.5 ÷ 11.5 = 10 A (exact). The p.d. fell 20 times, so the current rose 20 times.",
          misconceptions: [
            { answer: 0.025, check: "11.5 * 0.5 / 230", says: "You divided by the primary p.d. instead of the secondary. Power is the same on both sides: Is = Vp Ip ÷ Vs = 230 × 0.5 ÷ 11.5 = 10 A." },
            { answer: 115, check: "230 * 0.5", says: "That is the power, 115 W, not the current. Divide the power by the secondary p.d.: 115 ÷ 11.5 = 10 A." },
            { answer: 20, check: "230 / 11.5", says: "That is the ratio of the p.d.s. The current goes up by that ratio, so multiply the primary current by it: 0.5 × 20 = 10 A." }
          ] },
        { kind: "gap", q: "In a step-up transformer the secondary coil has ___ turns than the primary coil.", answer: "more", options: ["more", "fewer", "the same number of"], why: "Vp / Vs = np / ns: a bigger Vs needs a bigger ns.",
          feedback: {
            "fewer": "Fewer turns on the secondary gives a smaller p.d.: that is a step-down transformer. Step-up means a bigger output p.d., so the secondary has more turns.",
            "the same number of": "Equal turns gives the same p.d. out as in, which changes nothing. A step-up transformer has more turns on the secondary, so Vs is bigger than Vp."
          } }
      ],
      modules: [
        {
          title: "Step it down (Higher)",
          task: { kind: "numeric", q: "A step-down transformer has 920 turns on its primary coil and 40 turns on its secondary coil. The primary coil is connected to the 230 V mains. Calculate the potential difference across the secondary coil in volts.", answer: 10, tolerance: 0, units: "V", check: "230 * 40 / 920", why: "Vp / Vs = np / ns, so Vs = Vp × ns ÷ np = 230 × 40 ÷ 920 = 10 V (exact). Fewer turns, smaller p.d.",
            misconceptions: [
              { answer: 5290, check: "230 * 920 / 40", says: "You turned the ratio upside down: that gives a secondary p.d. far bigger than the primary, but a step-down transformer with fewer secondary turns must give a smaller p.d. Vs = 230 × 40 ÷ 920 = 10 V." },
              { answer: 23, check: "920 / 40", says: "That is the turns ratio, 23, not a p.d. Divide the primary p.d. by it: 230 ÷ 23 = 10 V." },
              { answer: 5.75, check: "230 / 40", says: "You divided the p.d. by the secondary turns only. Use the ratio of turns: Vs = 230 × 40 ÷ 920 = 10 V." }
            ] },
          contexts: [
            { label: "Games console", q: "The power supply for a games console contains a step-down transformer with 920 turns on the primary coil and 40 turns on the secondary. The primary is connected to the 230 V mains. Calculate the potential difference across the secondary coil in volts." },
            { label: "Doorbell", q: "A doorbell transformer has 920 turns on its primary coil and 40 turns on its secondary coil. Its primary is connected to the 230 V mains. Calculate the potential difference supplied to the bell, in volts." },
            { label: "Model railway", q: "A model railway controller uses a step-down transformer with 920 turns on the primary and 40 turns on the secondary, connected to the 230 V mains. Calculate the potential difference across the secondary coil in volts." }
          ],
          explain: "Say, in one sentence, how you can tell before calculating that the answer must be less than 230 V.",
          levels: {
            support: {
              steps: ["Write Vp / Vs = np / ns.", "Rearrange: Vs = Vp × ns ÷ np.", "Substitute the numbers and calculate.", "Check: fewer turns on the secondary should give a smaller p.d."],
              example: { q: "A transformer has 460 turns on its primary and 24 turns on its secondary. The primary p.d. is 230 V. Calculate the secondary p.d.", steps: ["Vs = Vp × ns ÷ np.", "Vs = 230 × 24 ÷ 460.", "Vs = 12 V."], answer: "12 V", check: "230 * 24 / 460" }
            },
            core: { hint: "Vs = Vp × ns ÷ np. Fewer secondary turns means a smaller answer." },
            stretch: { extend: "The same transformer is 100 % efficient and the secondary delivers 2 A. Find the current in the primary coil and explain why it is smaller." }
          },
          why: "Vs = Vp × ns ÷ np = 230 × 40 ÷ 920 = 10 V. The secondary has 23 times fewer turns, so the p.d. is 23 times smaller."
        },
        {
          title: "How many turns? (Higher)",
          task: { kind: "numeric", q: "A step-up transformer at a power station has 500 turns on its primary coil, which is supplied at 25 000 V. The output across the secondary coil is 400 000 V. Calculate the number of turns on the secondary coil.", answer: 8000, tolerance: 0, units: "turns", check: "500 * 400000 / 25000", why: "ns = np × Vs ÷ Vp = 500 × 400 000 ÷ 25 000 = 8000 turns (exact). The p.d. is 16 times bigger, so there are 16 times as many turns.",
            misconceptions: [
              { answer: 31.3, check: "500 * 25000 / 400000", says: "You turned the ratio upside down. A step-up transformer needs more turns on the secondary, not fewer: ns = np × Vs ÷ Vp = 500 × 400 000 ÷ 25 000 = 8000." },
              { answer: 16, check: "400000 / 25000", says: "That is the ratio of the p.d.s. The secondary has 16 times as many turns as the primary, so multiply: 500 × 16 = 8000 turns." },
              { answer: 800, check: "400000 / 500", says: "You divided the secondary p.d. by the primary turns, which mixes the two coils. Keep each ratio together: ns = np × Vs ÷ Vp = 8000 turns." }
            ] },
          contexts: [
            { label: "Power station", q: "The step-up transformer at a power station has 500 turns on its primary coil, supplied at 25 000 V, and gives 400 000 V across its secondary. Calculate the number of turns on the secondary coil." },
            { label: "Wind farm", q: "A wind farm's step-up transformer has 500 turns on its primary coil, supplied at 25 000 V. It feeds the Grid at 400 000 V. Calculate the number of turns on the secondary coil." }
          ],
          explain: "Say, in one sentence, how the ratio of turns is related to the ratio of potential differences.",
          levels: {
            support: {
              steps: ["Write Vp / Vs = np / ns.", "Rearrange: ns = np × Vs ÷ Vp.", "Substitute and calculate.", "Check: step-up, so the secondary must have more turns than 500."],
              example: { q: "A transformer steps 12 V up to 240 V. Its primary has 60 turns. How many turns are on the secondary?", steps: ["ns = np × Vs ÷ Vp.", "ns = 60 × 240 ÷ 12.", "ns = 1200 turns."], answer: "1200 turns", check: "60 * 240 / 12" }
            },
            core: { hint: "ns = np × Vs ÷ Vp. The answer must be bigger than 500." },
            stretch: { extend: "If this transformer is 100 % efficient and the primary current is 800 A, state the secondary current and explain why stepping up the p.d. helps the Grid." }
          },
          why: "ns = np × Vs ÷ Vp = 500 × 400 000 ÷ 25 000 = 8000 turns. The p.d. ratio and the turns ratio are the same, 16 to 1."
        },
        {
          title: "Why so high? (6 marks)",
          task: {
            kind: "written",
            q: "Explain why the National Grid uses step-up transformers to transmit electricity at a very high potential difference, and why step-down transformers are needed before the electricity reaches homes. (6 marks)",
            marks: 6,
            criteria: [
              "Step-up transformers increase the potential difference (to about 400 000 V) for the transmission cables",
              "For the same power, a higher p.d. means a lower current (Vp Ip = Vs Is, or power = p.d. × current)",
              "A current in a cable heats it because the cable has resistance; less current means less heating",
              "So less energy is wasted to the surroundings and the transmission is more efficient",
              "Step-down transformers reduce the p.d. to 230 V for homes",
              "A very high p.d. would be dangerous and unsuitable for appliances"
            ],
            model: "At the power station a step-up transformer increases the potential difference to about 400 000 V. Power equals potential difference multiplied by current, so for the same power a higher p.d. means a much smaller current in the cables. The cables have resistance, and a current in them heats them, transferring energy to the surroundings. A smaller current means far less heating, so much less energy is wasted and the transmission is more efficient. Near homes and offices, step-down transformers reduce the p.d. to 230 V. This is needed because 400 000 V would be extremely dangerous and because appliances are designed to work at 230 V."
          },
          levels: {
            support: {
              steps: [
                "Start at the power station: step-up, to about 400 000 V.",
                "Link p.d. to current using power = p.d. × current: higher p.d., lower current.",
                "Say why a lower current matters: less heating of the cables, less energy wasted.",
                "Finish at the house: step-down to 230 V, for safety and for appliances."
              ],
              example: {
                q: "A transformer that is 100 % efficient steps 25 000 V up to 400 000 V. The primary current is 800 A. Calculate the secondary current and state why it is smaller.",
                steps: ["Is = Vp × Ip ÷ Vs = 25 000 × 800 ÷ 400 000.", "Is = 50 A.", "The power is the same on both sides, so a higher p.d. means a lower current."],
                answer: "50 A, because the power is the same on both sides so raising the p.d. lowers the current.",
                check: "25000 * 800 / 400000"
              }
            },
            core: { hint: "Step-up → high p.d. → low current → less heating → efficient; step-down → 230 V → safe." },
            stretch: { extend: "Add a sentence explaining, in terms of electrons and ions, why a current heats a cable." }
          },
          explain: "Say, in one sentence, why a smaller current wastes less energy in the cables.",
          why: "The marks follow the chain: step-up gives a high p.d.; for the same power the current is lower; a lower current heats the cables less; so less energy is wasted and the Grid is efficient; step-down makes it safe and usable at 230 V."
        }
      ]
    }
  ],

  sources: {
    deckDump: "sc_ks4_phys_p15_electromagnetism.txt",
    decksUsed: [
      "P15.1 Magnetic fields   .pptx",
      "P15.2 Magnetic fields of electric current   .pptx",
      "P15.3 Electromagnets in devices (H) .pptx",
      "P15.4 The motor effect.pptx",
      "P15.5 The generator effect (H).pptx",
      "P15.6 The alternating current generator (H)  .pptx",
      "P15.7 Transformers (H)   .pptx",
      "P15.8 Transformers in action (H)  .pptx"
    ],
    notes: "Lesson titles and order from the eight department decks. House furniture skipped (blue Prior Learning/Components sheet, the four EM-spectrum Recall slides repeated on every deck, the 'Motor Key Example' picture slides). Board answers on the Grade-banded question slides were read only to see what the deck teaches; no answer slide is reproduced and no exam-board question (toothbrush charger, phone charger abroad) is reused. Beyond-spec deck content (B = k/r, the couple of forces, Fleming's right-hand rule, resistance as ion collisions) is left out or kept qualitative: see NOTES.md. Every number is original and recomputed by verify.py. No pretext.l1 (translation pass comes later)."
  }
};
