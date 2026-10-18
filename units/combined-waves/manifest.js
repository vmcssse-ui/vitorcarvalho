// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Combined Science: Trilogy 8464 · Physics P12 Wave Properties · schema astra/2
//
// MACHINE CHECKS (recomputed by verify.py in this folder):
//   check:"<python expression>"  on every numeric item, every computable mcq, and every worked / example
//                                answer that contains a number. verify.py evaluates it and compares it with
//                                `answer` (numeric: within `tolerance`; worked: the first number in the answer
//                                string, which must be correctly rounded; mcq: exactly one option matches).
//   wave:{f, lam, v}             SI values (Hz, m, m/s) of every v = f λ calculation used; verify.py confirms
//   waves:[{f, lam, v}, …]       v = f × lam for each one, and that the numbers quoted in the text are these
//                                values after the unit conversion the text states.
//   period:{f, T}                every T = 1 ÷ f calculation; verify.py confirms f × T = 1.
//   unit conversions             every "A kHz = B Hz", "A cm = B m", "A MHz = B Hz" … written in the text is
//                                parsed and recomputed (verify.py lints the whole manifest for them).
//   misconceptions[].check       (astra/2) every wrong answer offered as a misconception carries the arithmetic
//                                that produces it; verify.py confirms it reproduces `answer` and differs from the
//                                right answer, so the "says" text names a real slip, not an invented one.
//   contexts[].q                 (astra/2) carry exactly the same numbers as the task q (checked as a multiset,
//                                with grouped digits such as 300 000 000 read as one number), so the shared
//                                answer is right by construction.
//   Physics-only content         Chapter 6 (hearing, ultrasound, seismic waves) and the labelled sections of
//                                chapters 4 and 5 are AQA Physics 8463 only (4.6.1.3–4.6.1.5). They are kept
//                                because the department teaches them in the Combined sequence, and every one is
//                                labelled "(Physics only)" in its title or heading; verify.py checks the labels.
//                                See NOTES.md.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["combined-waves"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "combined-waves",
    subjectKey: "combined",
    subject: "Physics (Combined Science)",
    board: "AQA",
    spec: "8464",
    specRef: "Physics 6.6.1 Waves in air, fluids and solids (transverse and longitudinal waves; amplitude, wavelength, frequency, period; wave speed v = f λ; required practical: ripple tank and waves on a string). Chapter 6 and the labelled sections are Physics 8463 only.",
    year: 11,
    tier: "GCSE Higher and Foundation",
    title: "Wave Properties",
    sub: "From a ripple on a pond to the equation that links speed, frequency and wavelength, and the practical that measures them.",
    bigQuestion: "How do waves carry energy from place to place, and how do we measure them?",
    lessonCount: 6,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "P12.1 The nature of waves", question: "What is a wave, and how are transverse and longitudinal waves different?", keywords: ["wave", "vibration", "transverse", "longitudinal", "compression", "rarefaction", "medium", "mechanical wave"] },
    { n: 2, title: "P12.2 The properties of waves", question: "How do we describe a wave, and how are its speed, frequency and wavelength linked?", keywords: ["amplitude", "wavelength", "crest", "trough", "frequency", "hertz", "period", "wave speed", "v = f λ"] },
    { n: 3, title: "P12.3 Reflection and refraction", question: "What happens to a wave when it meets a boundary between two materials?", keywords: ["boundary", "incident ray", "reflection", "normal", "angle of incidence", "refraction", "wavefront", "transmission", "absorption"] },
    { n: 4, title: "P12.4 More about waves", question: "How does sound travel, and how can we measure the speed of a wave?", keywords: ["sound", "medium", "vacuum", "echo", "speed of sound", "ripple tank", "stretched string", "signal generator"] },
    { n: 5, title: "P12.5 Sound Waves (H)", question: "What decides the pitch and loudness of a sound, and how do we hear? (Physics only)", keywords: ["pitch", "loudness", "oscilloscope", "hearing range", "infrasound", "ultrasound", "echo location"] },
    { n: 6, title: "P12.6 The uses of ultrasound (H)", question: "How are reflected ultrasound waves used to measure distances and make images? (Physics only)", keywords: ["ultrasound", "transducer", "boundary", "echo", "distance = ½ × speed × time", "crack detection", "non-ionising"] }
  ],

  glossary: [
    { term: "wave", means: "A vibration that transfers energy from one place to another without transferring matter.", chapter: "nature-of-waves" },
    { term: "transverse wave", means: "A wave whose vibrations are at right angles to the direction of energy transfer, like ripples on water.", chapter: "nature-of-waves" },
    { term: "longitudinal wave", means: "A wave whose vibrations are parallel to the direction of energy transfer, like sound.", chapter: "nature-of-waves" },
    { term: "medium", means: "The material a wave travels through: a solid, a liquid or a gas.", chapter: "nature-of-waves" },
    { term: "amplitude", means: "The maximum displacement of a point on a wave from its rest position.", chapter: "describing-waves" },
    { term: "wavelength (λ)", means: "The distance from one point on a wave to the same point on the next wave, such as crest to crest; measured in metres.", chapter: "describing-waves" },
    { term: "frequency (f)", means: "The number of waves passing a point each second; measured in hertz (Hz).", chapter: "describing-waves" },
    { term: "period (T)", means: "The time for one complete wave to pass a point; measured in seconds; T = 1 ÷ f.", chapter: "describing-waves" },
    { term: "wave speed (v)", means: "How far a wave travels each second; measured in metres per second (m/s); v = f λ.", chapter: "wave-equation" },
    { term: "kilohertz (kHz)", means: "One thousand hertz: 1 kHz = 1000 Hz.", chapter: "wave-equation" },
    { term: "reflection", means: "A wave bouncing off a surface or barrier; the angle of incidence equals the angle of reflection.", chapter: "reflection-refraction" },
    { term: "refraction", means: "A wave changing direction as it crosses a boundary into a material where its speed is different.", chapter: "reflection-refraction" },
    { term: "normal", means: "A line drawn at right angles to a surface at the point where a ray meets it; angles are measured from it.", chapter: "reflection-refraction" },
    { term: "ripple tank", means: "A shallow tray of water, lit from above, used to study water waves.", chapter: "measuring-waves" },
    { term: "echo", means: "A reflected sound, heard after the original sound because it has travelled further.", chapter: "measuring-waves" },
    { term: "ultrasound", means: "Sound with a frequency above 20 000 Hz, too high for humans to hear.", chapter: "sound-and-ultrasound" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 drawn from the glossary above.
  connections: [
    { group: "Two kinds of wave, and what they travel through", terms: ["wave", "transverse wave", "longitudinal wave", "medium"] },
    { group: "Quantities you measure on a wave", terms: ["amplitude", "wavelength (λ)", "frequency (f)", "period (T)"] },
    { group: "Finding how fast a wave goes", terms: ["wave speed (v)", "kilohertz (kHz)", "ripple tank", "echo"] },
    { group: "What happens at a boundary", terms: ["reflection", "refraction", "normal", "ultrasound"] }
  ],

  chapters: [
    /* ───────────── 1 · the nature of waves ───────────── */
    {
      key: "nature-of-waves", n: 1, title: "What is a wave?",
      lead: "This chapter gives you the two kinds of wave, what they carry, and the difference between a wave that needs a material and one that does not.",
      covers: [1],
      pretext: {
        words: [
          { word: "wave", means: "a vibration that carries energy from place to place", sentence: "A wave carried the energy of the splash to the edge of the pond." },
          { word: "vibration", means: "a quick movement backwards and forwards, or up and down", sentence: "You can feel the vibration of a drum skin after you hit it." },
          { word: "transverse", means: "vibrating at right angles to the way the wave travels", sentence: "Ripples on water are transverse waves." },
          { word: "longitudinal", means: "vibrating along the same line as the way the wave travels", sentence: "Sound is a longitudinal wave." },
          { word: "medium", means: "the material a wave travels through", sentence: "Air is the medium that carries sound to your ears." }
        ],
        passage: [
          "Drop a stone into a pond and ripples spread out.",
          "The ripples are waves.",
          "A leaf on the water bobs up and down as a ripple passes.",
          "But the leaf does not travel across the pond with the ripple.",
          "Waves carry energy from place to place, not the water itself.",
          "In a transverse wave, the vibrations are at right angles to the way the wave travels.",
          "Ripples on water and light are transverse waves.",
          "In a longitudinal wave, the vibrations are along the same line as the wave travels.",
          "Sound is a longitudinal wave.",
          "Sound needs a material to travel through, such as air, water or metal.",
          "We call this material the medium.",
          "Light does not need a medium, so it can cross empty space from the Sun."
        ]
      },
      sections: [
        {
          heading: "Waves transfer energy, not matter",
          paragraphs: [
            "Watch a duck on a pond when a boat goes past. The ripples make the duck bob up and down, but when the ripples have gone the duck is still in the same place. The water did not travel across the pond; the wave did. A wave is a vibration that transfers energy (and sometimes information) from one place to another without transferring matter.",
            "The same is true of a crowd doing a wave round a stadium. Each person stands up and sits down on the spot, yet the wave travels all the way round. In a wave, the parts of the material vibrate about a fixed rest position, and it is the disturbance that moves along, passing its energy from one part to the next.",
            "All waves can be described by the same set of words and the same equation, whether they are ripples, sound, light or the waves from an earthquake. That is why this topic matters: learn it once and you can use it everywhere."
          ],
          worked: {
            q: "A cork floats on a pond. A ripple passes. Describe the motion of the cork and explain why it does not end up at the far side of the pond.",
            steps: [
              "Identify what is moving: the cork is on the water, so it moves with the water at that point.",
              "The water at one point vibrates up and down about its rest position as the ripple passes.",
              "So the cork bobs up and down and returns to where it started.",
              "The ripple carries energy across the pond, not water, so nothing carries the cork across."
            ],
            answer: "The cork bobs up and down on the spot. The wave transfers energy, not water, so the cork is not carried along."
          },
          tip: "Waves carry energy, not stuff. The duck stays where it is."
        },
        {
          heading: "Transverse waves",
          paragraphs: [
            "Hold one end of a long spring or rope with a friend holding the other end, and flick your hand up and down. A hump travels along to your friend, but each coil of the spring only moves up and down. The coils vibrate at right angles (perpendicular) to the direction the wave travels. This is a transverse wave.",
            "The high points of a transverse wave are called crests (or peaks) and the low points are called troughs. Ripples on water, waves on a rope and all light and radio waves are transverse waves. So are the S-waves of an earthquake.",
            "On a diagram, a transverse wave is drawn as a smooth up-and-down curve. The direction of energy transfer is along the wave, and the vibration is across it."
          ],
          tip: "Transverse: the vibration is across the direction of travel. Think of the T in transverse as a right angle."
        },
        {
          heading: "Longitudinal waves",
          paragraphs: [
            "Now push and pull the same spring along its length. A squashed-up section travels along the spring, but each coil only moves backwards and forwards along the spring. The coils vibrate parallel to the direction the wave travels. This is a longitudinal wave.",
            "The squashed-up sections, where the coils are closer together, are called compressions. The stretched-out sections, where the coils are further apart, are called rarefactions. Sound is a longitudinal wave: a loudspeaker cone moves backwards and forwards and sends compressions and rarefactions through the air. The P-waves of an earthquake are longitudinal too.",
            "When you are asked to describe a longitudinal wave, say two things: the vibrations are parallel to the direction of energy transfer, and the wave is made of compressions and rarefactions."
          ],
          tip: "Longitudinal: the vibration is along the direction of travel. Sound is the example to remember."
        },
        {
          heading: "Mechanical and electromagnetic waves",
          paragraphs: [
            "Sound, water waves and waves on a spring are mechanical waves. They need a medium, a material to travel through, because it is the particles of the medium that vibrate and pass the energy on. In a vacuum there are no particles, so a mechanical wave cannot travel. That is why, if the air is pumped out of a jar with a ringing bell inside, the bell falls silent while you can still see it shaking.",
            "Light, radio waves and microwaves are electromagnetic waves. They do not need a medium: they can travel through a vacuum, which is how light reaches us from the Sun across empty space. All electromagnetic waves are transverse, and in a vacuum they all travel at the same speed, 300 000 000 m/s.",
            "So there are two ways to sort waves: by how they vibrate (transverse or longitudinal) and by whether they need a medium (mechanical or electromagnetic). Sound is longitudinal and mechanical; light is transverse and electromagnetic; a water wave is transverse and mechanical."
          ],
          tip: "No particles, no sound. Light does not care: it crosses empty space."
        }
      ],
      gate: [
        { kind: "gap", q: "In a transverse wave, the vibrations are ___ to the direction of energy transfer.", answer: "at right angles", options: ["at right angles", "parallel", "opposite"], why: "Transverse means across: the vibrations are at right angles (perpendicular) to the direction the wave travels.",
          feedback: {
            "parallel": "Parallel vibrations are the longitudinal case, like sound. In a transverse wave the vibration is across the direction of travel, at right angles to it.",
            "opposite": "A vibration goes both ways, so 'opposite' does not describe it. In a transverse wave the vibration is at right angles to the direction the wave travels."
          } },
        { kind: "mcq", q: "Which of these is a longitudinal wave?", options: ["a ripple on a pond", "a sound wave", "a light wave", "a wave on a shaken rope"], answer: 1, why: "Sound is longitudinal: the air vibrates backwards and forwards along the direction the sound travels, making compressions and rarefactions.",
          feedback: [
            "A ripple on a pond is transverse: the water surface moves up and down while the ripple travels across. Sound is the longitudinal wave here.",
            "",
            "Light is an electromagnetic wave, and all electromagnetic waves are transverse. Sound is the longitudinal wave here.",
            "Shaking a rope up and down makes a transverse wave: the rope moves across the direction of travel. Sound is the longitudinal wave here."
          ] },
        { kind: "mcq", q: "What does a wave transfer from one place to another?", options: ["energy", "matter", "particles", "water"], answer: 0, why: "A wave transfers energy (and information) without transferring matter. The material vibrates on the spot.",
          feedback: [
            "",
            "Matter is not carried along by a wave. The particles vibrate about their rest position and return to it; it is energy that moves along.",
            "The particles of the medium vibrate on the spot and stay where they are, like a duck bobbing on a pond. The wave transfers energy, not particles.",
            "Water is only the medium for one kind of wave, and even then it is not carried along. A wave transfers energy."
          ] }
      ],
      modules: [
        {
          title: "Transverse or longitudinal?",
          task: { kind: "mcq", q: "A pupil holds one end of a long spring that lies along the floor and pushes and pulls it along its length. What type of wave travels along the spring, and why?", options: [
            "longitudinal, because the coils vibrate parallel to the direction the wave travels",
            "transverse, because the coils vibrate at right angles to the direction the wave travels",
            "longitudinal, because the coils travel all the way along the spring with the wave",
            "transverse, because the wave travels along the spring"
          ], answer: 0, why: "Pushing and pulling along the spring makes the coils vibrate backwards and forwards along the spring, parallel to the direction of travel: a longitudinal wave of compressions and rarefactions.",
            feedback: [
              "",
              "You named the right-angle case. Pushing and pulling along the spring makes the coils move along the spring, not across it, so the vibration is parallel to the direction of travel: longitudinal.",
              "The type is right but the reason is not. The coils do not travel along with the wave; each coil vibrates backwards and forwards about its own rest position. It is longitudinal because that vibration is parallel to the direction of travel.",
              "Every wave travels along the spring, so that does not tell you the type. Look at the vibration: here it is along the spring, parallel to the direction of travel, so the wave is longitudinal."
            ] },
          contexts: [
            { label: "Loudspeaker", q: "A loudspeaker cone moves backwards and forwards, pushing and pulling the air in front of it. What type of wave travels through the air, and why?" },
            { label: "Earthquake P-wave", q: "In an earthquake, a P-wave pushes and pulls the rock backwards and forwards along the line it is travelling. What type of wave is it, and why?" }
          ],
          levels: {
            support: {
              steps: ["Find the direction the wave travels (along the spring, through the air, through the rock).", "Find the direction of the vibration: is it along that same line, or across it?", "Along the same line = parallel = longitudinal. Across it = at right angles = transverse."],
              example: { q: "A pupil flicks the end of a rope up and down. The hump travels along the rope. What type of wave is it, and why?", steps: ["The wave travels along the rope.", "The rope moves up and down, across the direction of travel.", "Across = at right angles = transverse."], answer: "Transverse, because the vibration is at right angles to the direction the wave travels." }
            },
            core: { hint: "Compare the direction of the vibration with the direction the wave travels." },
            stretch: { extend: "A sound wave is often drawn as an up-and-down curve on an oscilloscope screen. Explain why the drawing looks transverse even though sound is longitudinal, and what the curve's height actually shows." }
          },
          why: "The vibration (backwards and forwards along the spring) is parallel to the direction the wave travels, so the wave is longitudinal.",
          explain: "Say, in one sentence, how you can tell a longitudinal wave from a transverse one by looking at the vibration."
        },
        {
          title: "Why does the duck stay put?",
          task: { kind: "written", q: "A duck floats on a lake. Waves pass under it, but it stays in the same place. Explain what the water is doing and what the wave is transferring.", marks: 4,
            criteria: [
              "The water at any point moves up and down about its rest position as the wave passes.",
              "The water (and so the duck) returns to where it started after each wave; it is not carried along.",
              "The wave transfers energy from one place to another.",
              "The wave does not transfer matter (the water itself)."
            ],
            model: "As each wave passes, the water under the duck moves up and then down again, vibrating about its rest position. The water is not carried along with the wave, so the duck rises and falls but stays where it is. What travels across the lake is the disturbance: the wave transfers energy from one place to another without transferring the water itself." },
          levels: {
            support: {
              steps: ["Describe the movement of the water at one point as a wave passes (up, then down, back to where it was).", "Say what that means for the duck.", "Finish with the key idea: the wave transfers energy, not matter."],
              example: { q: "A crowd at a stadium does a wave. Explain what each person does and what travels round the stadium.", steps: ["Each person stands up and sits down on the spot.", "Nobody moves round the stadium.", "The pattern of standing up, and the energy of the movement, travels round."], answer: "Each person vibrates up and down on the spot; what travels round is the disturbance (the wave), not the people." }
            },
            core: { hint: "Four marks: what the water does, what that means for the duck, what the wave transfers, and what it does not transfer." },
            stretch: { extend: "A surfer, unlike the duck, does travel towards the beach. Suggest why a breaking wave near the shore behaves differently from the waves passing under the duck." }
          },
          why: "The water vibrates up and down about its rest position and returns to it, so the duck is not carried along; the wave transfers energy, not matter.",
          explain: "Say, in one sentence, what the wave carries across the lake and what it leaves behind."
        },
        {
          title: "Match the wave words",
          task: { kind: "match", q: "Match each word to its meaning.", pairs: [
            ["transverse wave", "the vibrations are at right angles to the direction of energy transfer"],
            ["longitudinal wave", "the vibrations are parallel to the direction of energy transfer"],
            ["mechanical wave", "a wave that needs a medium and cannot travel through a vacuum"],
            ["electromagnetic wave", "a wave that can travel through a vacuum at 300 000 000 m/s"],
            ["medium", "the material a wave travels through, such as air, water or metal"]
          ] },
          levels: {
            support: {
              steps: ["Two of the words are about the direction of the vibration: across (transverse) or along (longitudinal).", "Two of the words are about whether a medium is needed: mechanical waves need one, electromagnetic waves do not.", "The word left is the medium itself: the material the wave travels through."],
              example: { q: "Match: compression; rarefaction; crest.", steps: ["Compression: a part of a longitudinal wave where the particles are squashed together.", "Rarefaction: a part where the particles are spread out.", "Crest: the highest point of a transverse wave."], answer: "compression = particles close together; rarefaction = particles spread out; crest = top of a transverse wave" }
            },
            core: { hint: "Sort the five words into two pairs and one odd one out before you match." },
            stretch: { extend: "Sound is mechanical and longitudinal; light is electromagnetic and transverse. Explain whether a wave could be mechanical and transverse, and give an example." }
          },
          why: "Transverse and longitudinal describe the direction of vibration; mechanical and electromagnetic describe whether a medium is needed; the medium is the material itself.",
          explain: "Say which pair of words describes the direction of vibration and which pair describes whether a medium is needed."
        }
      ]
    },

    /* ───────────── 2 · describing waves ───────────── */
    {
      key: "describing-waves", n: 2, title: "Describing a wave: amplitude, wavelength, frequency and period",
      lead: "This chapter gives you the four measurements that describe any wave, their units, and the link between period and frequency.",
      covers: [2],
      pretext: {
        words: [
          { word: "amplitude", means: "the height of a wave above its rest position", sentence: "The amplitude of the ripple was only one centimetre." },
          { word: "wavelength", means: "the distance from one crest to the next crest", sentence: "The wavelength of the sea waves was about ten metres." },
          { word: "crest", means: "the highest point of a wave", sentence: "The surfer waited on the crest of the wave." },
          { word: "frequency", means: "the number of waves that pass a point each second", sentence: "The frequency of the ripples was two waves per second." },
          { word: "period", means: "the time for one whole wave to pass a point", sentence: "The period of the swing was two seconds." },
          { word: "hertz", means: "the unit of frequency, written Hz", sentence: "A frequency of five hertz means five waves every second." }
        ],
        passage: [
          "Look at a wave drawn on paper.",
          "The highest points are the crests and the lowest points are the troughs.",
          "The flat line through the middle is the rest position.",
          "The amplitude is the height of a crest above the rest position.",
          "The wavelength is the distance from one crest to the next crest.",
          "We measure wavelength in metres.",
          "Now imagine the waves passing a post.",
          "The frequency is the number of waves that pass the post each second.",
          "We measure frequency in hertz, written Hz.",
          "Two waves every second is a frequency of 2 Hz.",
          "The period is the time for one whole wave to pass the post.",
          "We measure period in seconds.",
          "If two waves pass each second, each one takes half a second.",
          "So the period is 1 divided by the frequency."
        ]
      },
      sections: [
        {
          heading: "Amplitude and wavelength",
          paragraphs: [
            "Draw a transverse wave as a smooth curve. The line through the middle, where the surface would be if there were no wave, is the rest position (or undisturbed position). The amplitude is the maximum displacement of a point on the wave from the rest position: the height of a crest above the line, or the depth of a trough below it. It is not the distance from a crest to a trough; that is twice the amplitude.",
            "The wavelength is the distance from a point on one wave to the same point on the next wave: crest to crest, or trough to trough. For a longitudinal wave it is the distance from one compression to the next. The symbol for wavelength is the Greek letter lambda, λ, and it is measured in metres (m).",
            "A diagram often shows several waves in a row. To find the wavelength, measure the whole length of the row and divide by the number of complete waves in it. That is more accurate than measuring one wave on its own."
          ],
          worked: {
            q: "A diagram shows 3 complete waves fitting into a length of 6 m. The vertical distance from the top of a crest to the bottom of a trough is 0.8 m. Find the wavelength and the amplitude.",
            steps: [
              "Wavelength: 3 complete waves fit in 6 m, so λ = 6 ÷ 3 = 2 m.",
              "Crest to trough is twice the amplitude.",
              "Amplitude = 0.8 ÷ 2 = 0.4 m."
            ],
            answer: "Wavelength 2 m; amplitude 0.4 m",
            check: "6 / 3"
          },
          tip: "Amplitude: rest position to crest. Wavelength: crest to crest."
        },
        {
          heading: "Frequency",
          paragraphs: [
            "Stand by a post in the water and count the crests that pass it. The frequency is the number of complete waves passing a point each second. It is measured in hertz (Hz): 1 Hz means one wave per second, 2 Hz means two waves per second, and 0.5 Hz means one wave every two seconds.",
            "Frequencies can be large. A kilohertz (kHz) is a thousand hertz: 1 kHz = 1000 Hz. A megahertz (MHz) is a million hertz: 1 MHz = 1 000 000 Hz. Sound you can hear ranges from about 20 Hz to 20 kHz; radio stations broadcast at tens or hundreds of megahertz.",
            "The frequency of a wave is set by whatever makes it: the dipper in a ripple tank, the loudspeaker cone, the shaking hand. When the wave moves into a different material, its frequency does not change, because the source has not changed."
          ],
          worked: {
            q: "A pupil counts 12 complete waves passing a post in 4 s. Calculate the frequency.",
            steps: [
              "Frequency = number of waves ÷ time taken.",
              "f = 12 ÷ 4.",
              "f = 3 Hz: three waves pass the post every second."
            ],
            answer: "3 Hz",
            check: "12 / 4"
          },
          tip: "Hertz = waves per second. Count the waves, divide by the seconds."
        },
        {
          heading: "Period, and the link with frequency: T = 1 ÷ f",
          paragraphs: [
            "The period of a wave is the time taken for one complete wave to pass a point. Its symbol is T and it is measured in seconds (s). Period and frequency are two ways of describing the same thing: if 4 waves pass each second, each wave takes a quarter of a second. So period = 1 ÷ frequency, or T = 1 ÷ f, and the other way round, f = 1 ÷ T.",
            "A high frequency means a short period, and a low frequency means a long period. A 50 Hz mains hum has a period of 0.02 s; a sea wave with a period of 10 s has a frequency of 0.1 Hz.",
            "A displacement–time graph shows how one point moves as time passes: the distance along the time axis between one crest and the next is the period. A displacement–distance graph is a snapshot of the whole wave at one instant: the distance between crests is the wavelength. Check the label on the horizontal axis before you read either."
          ],
          worked: {
            q: "A loudspeaker vibrates at a frequency of 50 Hz. Calculate the period of the sound wave.",
            steps: [
              "Write the equation: T = 1 ÷ f.",
              "Substitute: T = 1 ÷ 50.",
              "Calculate and add the unit: T = 0.02 s."
            ],
            answer: "0.02 s",
            check: "1 / 50",
            period: { f: 50, T: 0.02 }
          },
          tip: "Period is in seconds, frequency in hertz. T = 1 ÷ f. Horizontal axis says time? You are reading a period."
        }
      ],
      gate: [
        { kind: "numeric", q: "A wave has a frequency of 20 Hz. Calculate its period in seconds.", answer: 0.05, tolerance: 0, units: "s", check: "1 / 20", why: "T = 1 ÷ f = 1 ÷ 20 = 0.05 s (exact).", period: { f: 20, T: 0.05 },
          misconceptions: [
            { answer: 20, check: "20 / 1", says: "You have written the frequency down as the period. Period is 1 ÷ frequency: 1 ÷ 20 = 0.05 s." },
            { answer: 0.5, check: "1 / 2", says: "Check the decimal point: 1 ÷ 20 is 0.05, not 0.5. Twenty waves each second means each wave takes a twentieth of a second." },
            { answer: 3, check: "60 / 20", says: "You divided 60 by the frequency, as if it were waves per minute. Hertz means waves per second, so T = 1 ÷ 20 = 0.05 s." }
          ] },
        { kind: "mcq", q: "Which distance is the amplitude of a wave?", options: ["from the rest position to the top of a crest", "from the top of a crest to the bottom of the next trough", "from one crest to the next crest", "from one compression to the next compression"], answer: 0, why: "Amplitude is the maximum displacement from the rest position: rest position to crest (or to trough).",
          feedback: [
            "",
            "Crest to trough is twice the amplitude. Amplitude is measured from the rest position in the middle to the top of a crest.",
            "Crest to crest is the wavelength, a distance along the wave. Amplitude is the height of a crest above the rest position.",
            "Compression to compression is the wavelength of a longitudinal wave. Amplitude is the maximum displacement from the rest position."
          ] },
        { kind: "mcq", q: "What is the unit of frequency?", options: ["metre (m)", "second (s)", "hertz (Hz)", "metre per second (m/s)"], answer: 2, why: "Frequency is measured in hertz, Hz, meaning waves per second.",
          feedback: [
            "The metre is the unit of wavelength and of amplitude. Frequency, the number of waves per second, is measured in hertz (Hz).",
            "The second is the unit of period, the time for one wave. Frequency, the number of waves per second, is measured in hertz (Hz).",
            "",
            "Metres per second is the unit of wave speed. Frequency is measured in hertz (Hz)."
          ] }
      ],
      modules: [
        {
          title: "Wavelength from a diagram",
          task: { kind: "numeric", q: "A diagram shows 4 complete waves fitting across a length of 10 m. Calculate the wavelength in metres.", answer: 2.5, tolerance: 0, units: "m", check: "10 / 4", why: "λ = whole length ÷ number of waves = 10 ÷ 4 = 2.5 m (exact).",
            misconceptions: [
              { answer: 40, check: "10 * 4", says: "You multiplied the length by the number of waves. Four waves share the 10 m, so each one is 10 ÷ 4 = 2.5 m long." },
              { answer: 0.4, check: "4 / 10", says: "You divided the wrong way up. The wavelength is the length divided by the number of waves: 10 ÷ 4 = 2.5 m." },
              { answer: 10, check: "10", says: "That is the length of all four waves together. One wavelength is the length of one wave: 10 ÷ 4 = 2.5 m." }
            ] },
          contexts: [
            { label: "Skipping rope", q: "Two pupils shake a 10 m rope so that 4 complete waves fit along it. Calculate the wavelength in metres." },
            { label: "Pond", q: "On a pond, 4 complete waves fit between two posts that are 10 m apart. Calculate the wavelength in metres." }
          ],
          levels: {
            support: {
              steps: ["Count the complete waves (crest to crest counts as one).", "Divide the whole length by the number of waves.", "Write the unit, m."],
              example: { q: "A diagram shows 5 complete waves across a length of 20 m. Calculate the wavelength.", steps: ["5 waves share 20 m.", "λ = 20 ÷ 5.", "λ = 4 m."], answer: "4 m", check: "20 / 5" }
            },
            core: { hint: "The 10 m is shared equally by the 4 waves." },
            stretch: { extend: "On the same diagram the crest-to-trough height is 0.6 m. State the amplitude, and explain why measuring across four waves gives a more accurate wavelength than measuring one." }
          },
          why: "Four equal waves share 10 m, so one wavelength is 10 ÷ 4 = 2.5 m.",
          explain: "Say why you divided the length by the number of waves instead of multiplying."
        },
        {
          title: "Period from frequency",
          task: { kind: "numeric", q: "A loudspeaker cone vibrates 250 times each second, so the frequency of the sound is 250 Hz. Calculate the period of the wave in seconds.", answer: 0.004, tolerance: 0, units: "s", check: "1 / 250", why: "T = 1 ÷ f = 1 ÷ 250 = 0.004 s (exact).", period: { f: 250, T: 0.004 },
            misconceptions: [
              { answer: 250, check: "250 / 1", says: "You have given the frequency as the period. Period is the time for one wave: T = 1 ÷ f = 1 ÷ 250 = 0.004 s." },
              { answer: 0.04, check: "10 / 250", says: "Check the decimal point: 1 ÷ 250 is 0.004, not 0.04. Two hundred and fifty waves a second means each takes four thousandths of a second." },
              { answer: 0.24, check: "60 / 250", says: "You used 60 ÷ f, as if the frequency were waves per minute. Hertz means waves per second, so T = 1 ÷ 250 = 0.004 s." }
            ] },
          contexts: [
            { label: "Guitar string", q: "A guitar string vibrates 250 times each second, so the frequency of the note is 250 Hz. Calculate the period of the wave in seconds." },
            { label: "Insect wing", q: "An insect beats its wings 250 times each second, making a buzz of frequency 250 Hz. Calculate the period of the sound wave in seconds." }
          ],
          levels: {
            support: {
              steps: ["Write T = 1 ÷ f.", "Divide 1 by the frequency in hertz.", "Write the unit, s."],
              example: { q: "A wave has a frequency of 100 Hz. Calculate its period.", steps: ["T = 1 ÷ f.", "T = 1 ÷ 100.", "T = 0.01 s."], answer: "0.01 s", check: "1 / 100", period: { f: 100, T: 0.01 } }
            },
            core: { hint: "Period and frequency are each 1 divided by the other." },
            stretch: { extend: "The frequency is doubled to 500 Hz. Without calculating from scratch, state the new period and explain why doubling the frequency halves it." }
          },
          why: "T = 1 ÷ f = 1 ÷ 250 = 0.004 s: each wave takes four thousandths of a second.",
          explain: "Say why a higher frequency always gives a shorter period."
        },
        {
          title: "Frequency from period",
          task: { kind: "numeric", q: "A buoy at sea bobs up and down once every 2.5 s, so the period of the waves is 2.5 s. Calculate the frequency of the waves in hertz.", answer: 0.4, tolerance: 0, units: "Hz", check: "1 / 2.5", why: "f = 1 ÷ T = 1 ÷ 2.5 = 0.4 Hz (exact).", period: { f: 0.4, T: 2.5 },
            misconceptions: [
              { answer: 2.5, check: "2.5 / 1", says: "You have given the period as the frequency. Frequency is 1 ÷ period: 1 ÷ 2.5 = 0.4 Hz, less than one wave a second." },
              { answer: 24, check: "60 / 2.5", says: "You worked out waves per minute (60 ÷ 2.5). Hertz means waves per second, so f = 1 ÷ 2.5 = 0.4 Hz." },
              { answer: 0.04, check: "1 / 25", says: "Check the decimal point: you seem to have divided by 25 instead of 2.5. f = 1 ÷ 2.5 = 0.4 Hz." }
            ] },
          contexts: [
            { label: "Rowing boat", q: "A moored rowing boat rocks up and down once every 2.5 s as waves pass, so the period of the waves is 2.5 s. Calculate the frequency of the waves in hertz." },
            { label: "Playground swing", q: "A swing completes one full back-and-forth swing every 2.5 s, so its period is 2.5 s. Calculate its frequency in hertz." }
          ],
          levels: {
            support: {
              steps: ["Write f = 1 ÷ T.", "Divide 1 by the period in seconds.", "Write the unit, Hz. An answer less than 1 Hz is fine: it means less than one wave per second."],
              example: { q: "A wave has a period of 0.5 s. Calculate its frequency.", steps: ["f = 1 ÷ T.", "f = 1 ÷ 0.5.", "f = 2 Hz."], answer: "2 Hz", check: "1 / 0.5", period: { f: 2, T: 0.5 } }
            },
            core: { hint: "Frequency is 1 divided by the period; a period longer than 1 s gives a frequency below 1 Hz." },
            stretch: { extend: "How many waves pass the buoy in one minute? Show how this number is linked to the frequency you found." }
          },
          why: "f = 1 ÷ T = 1 ÷ 2.5 = 0.4 Hz: four tenths of a wave each second, or one wave every 2.5 s.",
          explain: "Say what a frequency of 0.4 Hz means in everyday words."
        }
      ]
    },

    /* ───────────── 3 · the wave equation ───────────── */
    {
      key: "wave-equation", n: 3, title: "The wave equation: v = f λ",
      lead: "This chapter gives you the equation that links wave speed, frequency and wavelength, how to rearrange it, and how to handle kilohertz, megahertz and centimetres.",
      covers: [2],
      pretext: {
        words: [
          { word: "wave speed", means: "how far a wave travels each second", sentence: "The wave speed of the ripples was ten centimetres per second." },
          { word: "equation", means: "a rule written with symbols that links quantities together", sentence: "The wave equation links speed, frequency and wavelength." },
          { word: "kilohertz", means: "one thousand hertz, written kHz", sentence: "A bat squeaks at about forty kilohertz." },
          { word: "rearrange", means: "to change an equation round so it gives you a different quantity", sentence: "Rearrange the equation to make wavelength the subject." },
          { word: "convert", means: "to change a measurement into different units", sentence: "Convert the wavelength from centimetres to metres first." }
        ],
        passage: [
          "How fast does a wave travel?",
          "Wave speed is the distance a wave moves each second.",
          "We measure it in metres per second, written m/s.",
          "Each second, a wave moves forward by one wavelength for every wave made.",
          "So wave speed equals frequency times wavelength.",
          "We write this as v = f λ.",
          "The symbol λ is a Greek letter called lambda.",
          "It stands for wavelength.",
          "Before you use the equation, check the units.",
          "Frequency must be in hertz and wavelength in metres.",
          "One kilohertz is one thousand hertz.",
          "One centimetre is one hundredth of a metre.",
          "Light and radio waves travel at 300 000 000 m/s through empty space."
        ]
      },
      sections: [
        {
          heading: "Wave speed and the equation v = f λ",
          paragraphs: [
            "Wave speed is the speed at which the energy is transferred, or the speed at which a crest moves along. It is measured in metres per second (m/s). Think about why it depends on frequency and wavelength: if a source makes f waves every second, and each wave is λ metres long, then in one second the front of the wave train has moved f × λ metres.",
            "So wave speed = frequency × wavelength, written v = f λ, with v in metres per second (m/s), f in hertz (Hz) and λ in metres (m). This one equation works for every kind of wave: ripples, sound, light and radio.",
            "All electromagnetic waves travel through a vacuum at the same speed, 300 000 000 m/s. Sound in air travels at about 330 m/s. Ripples in a tank travel at a few centimetres per second. The equation is the same each time; only the numbers change."
          ],
          worked: {
            q: "Ripples on a pond have a frequency of 0.5 Hz and a wavelength of 0.12 m. Calculate the wave speed.",
            steps: [
              "Write the equation: v = f λ.",
              "Check the units: 0.5 Hz and 0.12 m are already in hertz and metres.",
              "Substitute: v = 0.5 × 0.12.",
              "Calculate and add the unit: v = 0.06 m/s."
            ],
            answer: "0.06 m/s",
            check: "0.5 * 0.12",
            wave: { f: 0.5, lam: 0.12, v: 0.06 }
          },
          tip: "Write v = f λ first, every time. Then substitute with units, then calculate."
        },
        {
          heading: "Rearranging: finding frequency or wavelength",
          paragraphs: [
            "Often you know the speed and one of the other two quantities. Rearrange v = f λ. To find the frequency, divide the speed by the wavelength: f = v ÷ λ. To find the wavelength, divide the speed by the frequency: λ = v ÷ f.",
            "A quick check that you have divided the right way up: a high frequency goes with a short wavelength, because the speed is fixed by the material. Sound travelling at 330 m/s has a wavelength of 3.3 m at 100 Hz but only 0.33 m at 1000 Hz."
          ],
          worked: {
            q: "A sound wave travels through air at 330 m/s. Its frequency is 150 Hz. Calculate its wavelength.",
            steps: [
              "Write the equation: v = f λ, so λ = v ÷ f.",
              "Substitute: λ = 330 ÷ 150.",
              "Calculate and add the unit: λ = 2.2 m."
            ],
            answer: "2.2 m",
            check: "330 / 150",
            wave: { f: 150, lam: 2.2, v: 330 }
          },
          tip: "Cover the letter you want in v = f λ. Covering f or λ leaves v over the other one: divide."
        },
        {
          heading: "Units: kHz, MHz and cm",
          paragraphs: [
            "The equation only works when the frequency is in hertz and the wavelength is in metres. Questions often give you kilohertz, megahertz or centimetres, so convert first. 1 kHz = 1000 Hz, so multiply a frequency in kHz by 1000. 1 MHz = 1 000 000 Hz, so multiply a frequency in MHz by 1 000 000. 1 cm = 0.01 m, so divide a length in cm by 100.",
            "Write the conversion down as a step of your working, for example 40 kHz = 40 000 Hz. If you convert in your head and slip, the examiner cannot give you the method mark.",
            "Large speeds are easier to handle in standard form: 300 000 000 m/s is 3 × 10⁸ m/s. Your calculator will take either; make sure you type the right number of zeros."
          ],
          worked: {
            q: "A radio station broadcasts at 100 MHz. Radio waves travel at 300 000 000 m/s. Calculate the wavelength.",
            steps: [
              "Convert the frequency: 100 MHz = 100 000 000 Hz.",
              "Write the equation: λ = v ÷ f.",
              "Substitute: λ = 300 000 000 ÷ 100 000 000.",
              "Calculate and add the unit: λ = 3 m."
            ],
            answer: "3 m",
            check: "300000000 / 100000000",
            wave: { f: 100000000, lam: 3, v: 300000000 }
          },
          tip: "kHz: × 1000. MHz: × 1 000 000. cm: ÷ 100. Convert first, then substitute."
        }
      ],
      gate: [
        { kind: "numeric", q: "A wave has a frequency of 5 Hz and a wavelength of 2 m. Calculate its speed in metres per second.", answer: 10, tolerance: 0, units: "m/s", check: "5 * 2", why: "v = f λ = 5 × 2 = 10 m/s. Whole-number data, so a whole-number answer.", wave: { f: 5, lam: 2, v: 10 },
          misconceptions: [
            { answer: 2.5, check: "5 / 2", says: "You divided the frequency by the wavelength. v = f λ means multiply: 5 × 2 = 10 m/s." },
            { answer: 0.4, check: "2 / 5", says: "You divided the wavelength by the frequency. Wave speed is frequency × wavelength: 5 × 2 = 10 m/s." },
            { answer: 7, check: "5 + 2", says: "You added the two numbers. v = f λ is a multiplication: 5 × 2 = 10 m/s." }
          ] },
        { kind: "mcq", q: "Which equation is the wave equation?", options: ["wave speed = frequency × wavelength", "wave speed = frequency ÷ wavelength", "wave speed = wavelength ÷ frequency", "wave speed = frequency + wavelength"], answer: 0, why: "v = f λ: wave speed equals frequency multiplied by wavelength.",
          feedback: [
            "",
            "Dividing frequency by wavelength would give a unit of hertz per metre, not metres per second. Wave speed = frequency × wavelength.",
            "Dividing wavelength by frequency gives a unit of metres per hertz, not metres per second. Wave speed = frequency × wavelength.",
            "You cannot add hertz to metres. Wave speed = frequency × wavelength, so the units multiply to give metres per second."
          ] },
        { kind: "gap", q: "1 kHz is the same as ___ Hz.", answer: "1000", options: ["1000", "100", "1 000 000"], why: "Kilo means a thousand: 1 kHz = 1000 Hz.",
          feedback: {
            "100": "Kilo means a thousand, not a hundred: 1 kHz = 1000 Hz. A hundred is the factor for centimetres to metres.",
            "1 000 000": "A million hertz is a megahertz, 1 MHz. Kilo means a thousand: 1 kHz = 1000 Hz."
          } }
      ],
      modules: [
        {
          title: "Wavelength of a sound",
          task: { kind: "numeric", q: "A flute plays a note of frequency 660 Hz. Sound travels through the air at 330 m/s. Calculate the wavelength of the sound in metres.", answer: 0.5, tolerance: 0, units: "m", check: "330 / 660", why: "λ = v ÷ f = 330 ÷ 660 = 0.5 m (exact).", wave: { f: 660, lam: 0.5, v: 330 },
            misconceptions: [
              { answer: 217800, check: "330 * 660", says: "You multiplied speed by frequency. To find wavelength, rearrange v = f λ to λ = v ÷ f: 330 ÷ 660 = 0.5 m." },
              { answer: 2, check: "660 / 330", says: "You divided the wrong way up. Wavelength is speed ÷ frequency: 330 ÷ 660 = 0.5 m. A high frequency should give a short wavelength." },
              { answer: 990, check: "330 + 660", says: "You added the two numbers. λ = v ÷ f is a division: 330 ÷ 660 = 0.5 m." }
            ] },
          contexts: [
            { label: "Car horn", q: "A car horn sounds at a frequency of 660 Hz. Sound travels through the air at 330 m/s. Calculate the wavelength of the sound in metres." },
            { label: "Smoke alarm", q: "A smoke alarm beeps at a frequency of 660 Hz. Sound travels through the air at 330 m/s. Calculate the wavelength of the sound in metres." }
          ],
          levels: {
            support: {
              steps: ["Write v = f λ and rearrange: λ = v ÷ f.", "Divide the speed by the frequency.", "Write the unit, m."],
              example: { q: "A note of frequency 165 Hz travels through air at 330 m/s. Calculate its wavelength.", steps: ["λ = v ÷ f.", "λ = 330 ÷ 165.", "λ = 2 m."], answer: "2 m", check: "330 / 165", wave: { f: 165, lam: 2, v: 330 } }
            },
            core: { hint: "Cover λ in v = f λ: you are left with v over f." },
            stretch: { extend: "The flute then plays a note one octave higher, at 1320 Hz. State its wavelength without a full calculation and explain your reasoning." }
          },
          why: "λ = v ÷ f = 330 ÷ 660 = 0.5 m: a high note has a short wavelength.",
          explain: "Say why a higher frequency gives a shorter wavelength when the speed stays the same."
        },
        {
          title: "Wavelength of a radio wave",
          task: { kind: "numeric", q: "A radio station broadcasts at a frequency of 200 MHz. Radio waves travel at 300 000 000 m/s. Calculate the wavelength in metres.", answer: 1.5, tolerance: 0, units: "m", check: "300000000 / 200000000", why: "200 MHz = 200 000 000 Hz. λ = v ÷ f = 300 000 000 ÷ 200 000 000 = 1.5 m (exact).", wave: { f: 200000000, lam: 1.5, v: 300000000 },
            misconceptions: [
              { answer: 1500000, check: "300000000 / 200", says: "You used 200 as the frequency. 200 MHz is 200 000 000 Hz; convert first, then λ = 300 000 000 ÷ 200 000 000 = 1.5 m." },
              { answer: 0.67, check: "200000000 / 300000000", says: "You divided frequency by speed, the wrong way up. λ = v ÷ f = 300 000 000 ÷ 200 000 000 = 1.5 m." },
              { answer: 1500, check: "300000000 / 200000", says: "You converted as if MHz were kHz (× 1000). Mega means a million: 200 MHz = 200 000 000 Hz, so λ = 1.5 m." }
            ] },
          contexts: [
            { label: "Ship's radio", q: "A ship's two-way radio transmits at a frequency of 200 MHz. Radio waves travel at 300 000 000 m/s. Calculate the wavelength in metres." },
            { label: "Weather satellite", q: "A weather satellite sends data to Earth at a frequency of 200 MHz. Radio waves travel at 300 000 000 m/s. Calculate the wavelength in metres." }
          ],
          levels: {
            support: {
              steps: ["Convert the frequency: multiply MHz by 1 000 000 to get Hz.", "Write λ = v ÷ f.", "Divide the speed by the frequency in hertz and write the unit, m."],
              example: { q: "A transmitter works at 150 MHz. Radio waves travel at 300 000 000 m/s. Calculate the wavelength.", steps: ["150 MHz = 150 000 000 Hz.", "λ = v ÷ f = 300 000 000 ÷ 150 000 000.", "λ = 2 m."], answer: "2 m", check: "300000000 / 150000000", wave: { f: 150000000, lam: 2, v: 300000000 } }
            },
            core: { hint: "Mega means a million. Write the frequency out in full before you divide." },
            stretch: { extend: "A different station at 100 MHz has a wavelength of 3 m. Use the two results to explain, in words, how wavelength changes when frequency doubles." }
          },
          why: "200 MHz = 200 000 000 Hz; λ = 300 000 000 ÷ 200 000 000 = 1.5 m.",
          explain: "Say what would have gone wrong if you had put 200 straight into the equation."
        },
        {
          title: "Speed of a bat's call",
          task: { kind: "numeric", q: "A bat's call has a frequency of 40 kHz and a wavelength in air of 0.85 cm. Calculate the speed of the sound in metres per second.", answer: 340, tolerance: 0, units: "m/s", check: "40000 * 0.0085", why: "40 kHz = 40 000 Hz; 0.85 cm = 0.0085 m. v = f λ = 40 000 × 0.0085 = 340 m/s (exact).", wave: { f: 40000, lam: 0.0085, v: 340 },
            misconceptions: [
              { answer: 34, check: "40 * 0.85", says: "You multiplied 40 by 0.85 without converting either unit. Change 40 kHz to 40 000 Hz and 0.85 cm to 0.0085 m first: v = 40 000 × 0.0085 = 340 m/s." },
              { answer: 34000, check: "40000 * 0.85", says: "You converted the frequency but left the wavelength in centimetres. 0.85 cm = 0.0085 m, so v = 40 000 × 0.0085 = 340 m/s." },
              { answer: 0.34, check: "40 * 0.0085", says: "You converted the wavelength but left the frequency in kilohertz. 40 kHz = 40 000 Hz, so v = 40 000 × 0.0085 = 340 m/s." }
            ] },
          contexts: [
            { label: "Dog whistle", q: "A dog whistle makes a sound of frequency 40 kHz with a wavelength in air of 0.85 cm. Calculate the speed of the sound in metres per second." },
            { label: "Ultrasonic cleaner", q: "An ultrasonic cleaner in a jeweller's shop vibrates at 40 kHz, making sound with a wavelength in air of 0.85 cm. Calculate the speed of the sound in metres per second." }
          ],
          levels: {
            support: {
              steps: ["Convert the frequency: kHz × 1000 = Hz.", "Convert the wavelength: cm ÷ 100 = m.", "Write v = f λ, multiply, and write the unit m/s."],
              example: { q: "A sound has a frequency of 2 kHz and a wavelength of 16.5 cm. Calculate its speed.", steps: ["2 kHz = 2000 Hz.", "16.5 cm = 0.165 m.", "v = f λ = 2000 × 0.165 = 330 m/s."], answer: "330 m/s", check: "2000 * 0.165", wave: { f: 2000, lam: 0.165, v: 330 } }
            },
            core: { hint: "Two conversions before you multiply: kilohertz to hertz, centimetres to metres." },
            stretch: { extend: "Your answer is the speed of sound in air. Explain why the bat's call, a dog whistle and a person speaking all give the same speed, even though their frequencies are very different." }
          },
          why: "After converting, v = 40 000 × 0.0085 = 340 m/s, the speed of sound in air.",
          explain: "Say which two unit conversions you made and why the equation needed them."
        }
      ]
    },

    /* ───────────── 4 · reflection and refraction ───────────── */
    {
      key: "reflection-refraction", n: 4, title: "Waves at a boundary: reflection and refraction",
      lead: "This chapter gives you the three things that can happen when a wave meets a new material, the rule for reflection, and why a wave bends when its speed changes.",
      covers: [3],
      pretext: {
        words: [
          { word: "boundary", means: "the surface where one material meets another", sentence: "Light slows down as it crosses the boundary from air into glass." },
          { word: "reflection", means: "a wave bouncing back off a surface", sentence: "You see your face by reflection in a mirror." },
          { word: "refraction", means: "a wave changing direction when its speed changes at a boundary", sentence: "Refraction makes a straw in a glass of water look bent." },
          { word: "normal", means: "a line drawn at right angles to a surface", sentence: "Measure the angle between the ray and the normal." },
          { word: "absorb", means: "to take in the wave's energy so that the material warms up", sentence: "Dark curtains absorb most of the light that falls on them." }
        ],
        passage: [
          "A wave often meets a new material.",
          "The surface where the two materials meet is called a boundary.",
          "Three things can happen there.",
          "The wave can bounce back, which is reflection.",
          "The wave can pass through, which is transmission.",
          "Or the material can soak up the energy, which is absorption.",
          "When a wave is reflected, it leaves at the same angle it arrived.",
          "We measure the angles from a line called the normal.",
          "The normal is at right angles to the surface.",
          "When a wave crosses into a new material, its speed changes.",
          "If it crosses at an angle, it also changes direction.",
          "This bending is called refraction.",
          "The frequency of the wave stays the same, but the wavelength changes."
        ]
      },
      sections: [
        {
          heading: "Three things that can happen at a boundary",
          paragraphs: [
            "A boundary is the surface where one material (medium) meets another: air and glass, air and water, water and the seabed. When a wave arrives at a boundary, some or all of it may be reflected, bouncing back into the first material. Some may be transmitted, passing on into the second material. And some may be absorbed, its energy taken in by the material, which warms up.",
            "What happens depends on the wave and the materials. Light is mostly transmitted by clear glass but mostly absorbed by dark glass. Microwaves are reflected by metal but pass through paper and plastic. A smooth hard wall reflects sound well, which is why you hear an echo from it; soft curtains absorb sound.",
            "The wave arriving at the boundary is called the incident wave (or incident ray, when we draw its direction as a straight line). The wave that bounces back is the reflected wave, and the wave that goes through is the transmitted wave. When we talk about a ray, we mean a line showing the direction the wave travels."
          ],
          tip: "Reflected, transmitted, absorbed. Three verbs for every boundary question."
        },
        {
          heading: "Reflection: the law of reflection (ray diagrams: Physics only)",
          paragraphs: [
            "In a ripple tank, straight waves hitting a straight barrier bounce off at the same angle they arrived. The same rule holds for light at a mirror and sound at a wall. To describe the angles, draw the normal: a line at right angles (90°) to the surface at the point where the ray meets it. The angle of incidence is the angle between the incident ray and the normal; the angle of reflection is the angle between the reflected ray and the normal.",
            "The law of reflection says that the angle of incidence equals the angle of reflection. Both angles are measured from the normal, not from the surface. A ray that arrives along the normal, straight at the surface, is reflected straight back along the same line.",
            "When a wave is reflected, its direction changes, but its speed, wavelength and frequency do not. It is still in the same material, so there is no reason for any of them to change. Drawing ray diagrams for reflection, and the glass-block practical that goes with them, are needed only for the separate Physics GCSE (8463); Combined Science pupils need the idea that waves can be reflected, transmitted or absorbed."
          ],
          worked: {
            q: "A ray of light hits a plane mirror at an angle of incidence of 35°. State the angle of reflection and describe where it is measured from.",
            steps: [
              "The law of reflection: angle of incidence = angle of reflection.",
              "So the angle of reflection is 35°.",
              "Both angles are measured between the ray and the normal, the line at 90° to the mirror."
            ],
            answer: "35°, measured between the reflected ray and the normal",
            check: "35"
          },
          tip: "Angles from the normal, never from the surface. i = r."
        },
        {
          heading: "Refraction: a change of speed makes a change of direction",
          paragraphs: [
            "When a wave crosses a boundary into a material where it travels at a different speed, it is refracted. In a ripple tank, a flat sheet of plastic makes the water shallower, and waves travel more slowly in shallow water. Light travels more slowly in glass or water than in air. In each case, if the wave meets the boundary at an angle, it changes direction. A wave that meets the boundary along the normal slows down but does not change direction.",
            "Two things stay the same and two things change. The frequency does not change: the waves are still being made at the same rate by the same source. The speed changes, so by v = f λ the wavelength must change too. Slower waves have shorter wavelengths, so the wavefronts (the lines drawn along each crest) bunch closer together in the slower material.",
            "Which way does it bend? Think of a wavefront arriving at an angle. One end of the wavefront reaches the slower material first and slows down, while the other end is still moving fast. The fast end catches up, so the wavefront swings round and the direction changes. Going from fast to slow (air into glass), the ray bends towards the normal. Going from slow to fast (glass into air), it bends away from the normal."
          ],
          worked: {
            q: "In a ripple tank, waves of frequency 4 Hz have a wavelength of 5 cm in the deep water. In the shallow water they travel at half the speed. Calculate their wavelength in the shallow water, and state their frequency there.",
            steps: [
              "Deep water: 5 cm = 0.05 m, so v = f λ = 4 × 0.05 = 0.2 m/s.",
              "Shallow water: speed halves, so v = 0.1 m/s.",
              "Frequency does not change at a boundary, so f is still 4 Hz.",
              "λ = v ÷ f = 0.1 ÷ 4 = 0.025 m, which is 2.5 cm: half the deep-water wavelength."
            ],
            answer: "2.5 cm (0.025 m); the frequency is still 4 Hz",
            check: "0.05 / 2 * 100",
            waves: [{ f: 4, lam: 0.05, v: 0.2 }, { f: 4, lam: 0.025, v: 0.1 }]
          },
          tip: "At a boundary: frequency same, speed changes, so wavelength changes. Slower = shorter."
        },
        {
          heading: "Investigating refraction with a glass block (Physics only)",
          paragraphs: [
            "Place a rectangular glass block on paper and draw round it. Shine a narrow ray from a ray box into one long side at an angle, and mark where the ray enters and where it leaves. Remove the block and join the marks to show the ray's path through the glass. Draw the normal at the point where the ray entered, then measure the angle of incidence and the angle of refraction with a protractor.",
            "Repeat for angles of incidence from 10° to 70° in 10° steps. Use the narrowest ray you can: a wide ray makes it hard to judge where its centre is, so the angles are less certain. You should find the angle of refraction is smaller than the angle of incidence, because the light bends towards the normal as it slows down in the glass, and that the ray leaving the far side is parallel to the ray that went in.",
            "This practical is a required practical for the separate Physics GCSE (8463) only. It is included here because the department teaches it in this lesson; for Combined Science the ideas of refraction return in the electromagnetic waves topic."
          ],
          tip: "Narrow ray, sharp pencil, angles from the normal."
        }
      ],
      gate: [
        { kind: "mcq", q: "When a wave is reflected from a barrier, which one of these changes?", options: ["its direction", "its speed", "its wavelength", "its frequency"], answer: 0, why: "Reflection changes only the direction of travel. The wave stays in the same material, so its speed, wavelength and frequency are unchanged.",
          feedback: [
            "",
            "The speed does not change on reflection: the wave is still travelling in the same material. Only the direction changes.",
            "The wavelength does not change on reflection, because neither the speed nor the frequency has changed. Only the direction changes.",
            "The frequency never changes at a boundary; it is set by the source. On reflection only the direction changes."
          ] },
        { kind: "gap", q: "The angle of incidence is ___ the angle of reflection.", answer: "equal to", options: ["equal to", "twice", "half"], why: "The law of reflection: angle of incidence = angle of reflection, both measured from the normal.",
          feedback: {
            "twice": "Reflection does not double the angle. The reflected ray leaves at the same angle to the normal as the incident ray arrived: the two angles are equal.",
            "half": "Reflection does not halve the angle. The reflected ray leaves at the same angle to the normal as the incident ray arrived: the two angles are equal."
          } },
        { kind: "mcq", q: "Water waves slow down as they pass from deep water into shallow water. What happens to their wavelength and frequency?", options: ["wavelength decreases; frequency stays the same", "wavelength increases; frequency stays the same", "wavelength stays the same; frequency decreases", "both wavelength and frequency decrease"], answer: 0, why: "Frequency is fixed by the source. With v = f λ and a smaller v, λ must be smaller: the wavefronts bunch up.",
          feedback: [
            "",
            "You have the change the wrong way round. Slower waves have shorter wavelengths: v = f λ with the same f and a smaller v gives a smaller λ.",
            "Frequency does not change at a boundary; it is set by the source making the waves. It is the wavelength that decreases when the waves slow down.",
            "The frequency cannot change, because the same source is still making waves at the same rate. Only the wavelength decreases."
          ] }
      ],
      modules: [
        {
          title: "Which way does it bend?",
          task: { kind: "mcq", q: "A ray of light travelling through air enters a glass block at an angle to the normal. Light travels more slowly in glass than in air. What happens to the ray at the boundary?", options: [
            "It slows down and bends towards the normal.",
            "It speeds up and bends away from the normal.",
            "It slows down but does not change direction.",
            "It speeds up and bends towards the normal."
          ], answer: 0, why: "Going from a faster material into a slower one at an angle, the wave bends towards the normal: the part of the wavefront that enters first slows down and the rest swings round.",
            feedback: [
              "",
              "The ray is going into the slower material, so it slows down, not speeds up. Slowing down at an angle bends it towards the normal. Bending away from the normal happens on the way out, from slow back to fast.",
              "It does slow down, but because it arrives at an angle to the normal it also changes direction. Only a ray travelling along the normal passes straight through without bending.",
              "The glass is the slower material, so the ray slows down. It is right that it bends towards the normal, but that is because it slows, not because it speeds up."
            ] },
          contexts: [
            { label: "Ripple tank", q: "In a ripple tank, water waves travelling through deep water reach shallow water at an angle to the normal. Waves travel more slowly in shallow water. What happens to the wave direction at the boundary?" },
            { label: "Swimming pool", q: "A ray of light from the air enters the water of a swimming pool at an angle to the normal. Light travels more slowly in water than in air. What happens to the ray at the boundary?" }
          ],
          levels: {
            support: {
              steps: ["Decide whether the wave is going into a faster or a slower material.", "Faster to slower: it slows down and bends towards the normal.", "Check it arrives at an angle to the normal; along the normal there is no bending at all."],
              example: { q: "A ray of light inside a glass block reaches the far side and passes out into the air at an angle to the normal. What happens?", steps: ["Glass to air is slow to fast, so the ray speeds up.", "Speeding up at an angle bends it away from the normal."], answer: "It speeds up and bends away from the normal." }
            },
            core: { hint: "Towards the normal when it slows down; away from the normal when it speeds up." },
            stretch: { extend: "Use a sketch of wavefronts to explain why the ray bends towards the normal when it slows down. Your sketch should show the wavefronts closer together in the glass." }
          },
          why: "Air to glass is fast to slow. The ray slows down and, because it arrived at an angle, bends towards the normal.",
          explain: "Say what would happen to the ray if it hit the glass along the normal instead."
        },
        {
          title: "Explain refraction with wavefronts",
          task: { kind: "written", q: "Water waves cross at an angle from deep water into shallow water, where they travel more slowly. Using the idea of wavefronts, explain why the waves change direction. (Higher tier)", marks: 4,
            criteria: [
              "The waves travel more slowly in the shallow water.",
              "The frequency stays the same, so the wavelength becomes shorter and the wavefronts are closer together.",
              "One end of each wavefront reaches the shallow water first and slows down while the other end is still travelling fast.",
              "So the wavefront swings round and the direction of travel changes (bending towards the normal); a wavefront arriving parallel to the boundary would not change direction."
            ],
            model: "The waves travel more slowly in the shallow water. Their frequency does not change, because the same source is making them, so by v = f λ their wavelength becomes shorter and the wavefronts are closer together. Because the waves arrive at an angle, one end of each wavefront reaches the shallow water first and slows down while the other end is still moving at the faster speed. The fast end gains on the slow end, so the wavefront turns and the waves change direction, bending towards the normal. If the wavefronts arrived parallel to the boundary, both ends would slow at the same moment and there would be no change of direction." },
          levels: {
            support: {
              steps: ["Start with the change in speed, and what it does to the wavelength (frequency fixed, so use v = f λ).", "Describe what happens to the two ends of one wavefront that arrives at an angle.", "Finish with the result: the wavefront turns, so the direction changes."],
              example: { q: "Explain why a ray of light crossing from air into glass along the normal does not change direction, even though it slows down.", steps: ["The whole wavefront reaches the glass at the same moment.", "So every part of it slows down together.", "No part gets ahead, so the wavefront does not turn."], answer: "Along the normal every part of the wavefront slows at the same time, so it is not turned; the wave slows and its wavelength shortens, but its direction is unchanged." }
            },
            core: { hint: "Four marks: speed, wavelength, one end slows first, wavefront turns." },
            stretch: { extend: "Explain what happens when the waves pass back from the shallow water into deep water at an angle, and why the wavefronts return to their original spacing." }
          },
          why: "Slower speed; same frequency so shorter wavelength; one end of the wavefront slows first; the wavefront turns and the direction changes.",
          explain: "Say why a wave that crosses the boundary along the normal does not change direction."
        },
        {
          title: "Wavelength after a boundary",
          task: { kind: "numeric", q: "A loudspeaker on a boat makes a sound of frequency 500 Hz. The sound travels through the air at 330 m/s and then passes into the sea water, where it travels at 1500 m/s. Calculate the wavelength of the sound in the water, in metres.", answer: 3, tolerance: 0, units: "m", check: "1500 / 500", why: "The frequency is unchanged at 500 Hz. In water, λ = v ÷ f = 1500 ÷ 500 = 3 m (exact). (In air it was 330 ÷ 500 = 0.66 m.)", waves: [{ f: 500, lam: 0.66, v: 330 }, { f: 500, lam: 3, v: 1500 }],
            misconceptions: [
              { answer: 0.66, check: "330 / 500", says: "You used the speed in air. The question asks about the wavelength in the water, where the speed is 1500 m/s: λ = 1500 ÷ 500 = 3 m." },
              { answer: 0.33, check: "500 / 1500", says: "You divided frequency by speed, the wrong way up. λ = v ÷ f = 1500 ÷ 500 = 3 m." },
              { answer: 750000, check: "1500 * 500", says: "You multiplied speed by frequency. To find wavelength, divide: λ = v ÷ f = 1500 ÷ 500 = 3 m." }
            ] },
          contexts: [
            { label: "Lifeguard's whistle", q: "A lifeguard's whistle makes a sound of frequency 500 Hz. The sound travels through the air at 330 m/s and then passes into the sea water, where it travels at 1500 m/s. Calculate the wavelength of the sound in the water, in metres." },
            { label: "Poolside alarm", q: "A poolside alarm sounds at 500 Hz. The sound travels through the air at 330 m/s and then passes into the pool water, where it travels at 1500 m/s. Calculate the wavelength of the sound in the water, in metres." }
          ],
          levels: {
            support: {
              steps: ["Frequency does not change at a boundary, so keep f the same.", "Use the speed in the second material.", "λ = v ÷ f, and write the unit, m."],
              example: { q: "A sound of frequency 300 Hz passes from air (330 m/s) into water (1500 m/s). Calculate its wavelength in the water.", steps: ["f stays at 300 Hz.", "λ = v ÷ f = 1500 ÷ 300.", "λ = 5 m."], answer: "5 m", check: "1500 / 300", wave: { f: 300, lam: 5, v: 1500 } }
            },
            core: { hint: "Same frequency, new speed. Which number is the speed in water?" },
            stretch: { extend: "Calculate the wavelength in air as well, and explain why the wavelength in water is longer even though the frequency is the same." }
          },
          why: "The frequency stays at 500 Hz; the speed in water is 1500 m/s, so λ = 1500 ÷ 500 = 3 m, longer than the 0.66 m in air.",
          explain: "Say which quantity stayed the same when the sound entered the water, and why."
        }
      ]
    },

    /* ───────────── 5 · sound and measuring waves ───────────── */
    {
      key: "measuring-waves", n: 5, title: "Sound, and measuring waves: the required practical",
      lead: "This chapter gives you sound as a wave, and the required practical: measuring the frequency, wavelength and speed of waves in a ripple tank and on a string.",
      covers: [4],
      pretext: {
        words: [
          { word: "ripple tank", means: "a shallow tray of water used to study waves", sentence: "We watched the ripples cross the ripple tank." },
          { word: "dipper", means: "the bar or ball that bobs in the water to make ripples", sentence: "The motor made the dipper bob up and down." },
          { word: "vibration generator", means: "a machine that shakes a string up and down at a set frequency", sentence: "The vibration generator made the string form three loops." },
          { word: "echo", means: "a reflected sound that you hear after the original sound", sentence: "We heard the echo of the clap come back from the wall." },
          { word: "loop", means: "one section of a vibrating string between two still points", sentence: "Each loop on the string was half a wavelength long." }
        ],
        passage: [
          "Sound is made when something vibrates.",
          "A loudspeaker cone moves back and forth and pushes the air.",
          "The push travels through the air as a longitudinal wave.",
          "When it reaches your ear, your eardrum vibrates.",
          "Sound cannot travel through empty space, because there are no particles to pass it on.",
          "In the lab we study waves in a ripple tank.",
          "A dipper bobs up and down and makes ripples in shallow water.",
          "A lamp above the tank casts a shadow of the ripples on a screen below.",
          "We count the waves to find the frequency.",
          "We measure across several waves on the screen to find the wavelength.",
          "We can also shake a string with a vibration generator.",
          "The string forms still loops, and each loop is half a wavelength.",
          "Then wave speed = frequency × wavelength."
        ]
      },
      sections: [
        {
          heading: "Sound is a longitudinal wave (speed in solids: Physics only)",
          paragraphs: [
            "A loudspeaker cone moves forwards and squashes the air in front of it, making a compression; then it moves back and leaves the air spread out, making a rarefaction. These compressions and rarefactions travel outwards as a longitudinal wave. When they reach your ear they make your eardrum vibrate, and that is how you hear.",
            "Sound is a mechanical wave, so it needs a medium. The particles of the medium pass the vibration on to their neighbours. In a vacuum there are no particles, so there is no sound: a bell ringing inside a jar goes quiet as the air is pumped out, although you can still see it moving. Sound travels through air at about 330 m/s.",
            "For the separate Physics GCSE only: sound also travels through liquids and solids, and faster in them than in air, because the particles are closer together and pass the vibration on more quickly. That is why you can hear through a wall, or under water."
          ],
          tip: "Sound needs particles. No particles, no sound."
        },
        {
          heading: "Required practical: waves in a ripple tank",
          paragraphs: [
            "A ripple tank is a shallow glass-bottomed tray of water. A lamp above it shines through the water onto a screen or white paper below, so the ripples show up as bright and dark lines that are easy to see and measure. A wooden bar (the dipper) just touching the water is driven up and down by a small motor or a signal generator, making straight waves.",
            "To find the frequency, count the number of waves passing a mark on the screen in 10 s, then divide by 10. If the dipper is driven by a signal generator, you can read the frequency from its dial instead. To find the wavelength, measure the distance across several waves on the screen with a ruler, or photograph the pattern with a ruler alongside it, then divide by the number of waves. Measuring across many waves, and repeating, makes the result more accurate.",
            "Then calculate the wave speed with v = f λ, remembering to change centimetres to metres. A second method is to time one wave crossing the tank: wave speed = distance ÷ time. Keep the water depth the same throughout, because changing the depth changes the speed."
          ],
          worked: {
            q: "The dipper makes 5 waves every second. On the screen, 10 wavelengths measure 24 cm. Calculate the wave speed.",
            steps: [
              "Frequency: f = 5 Hz.",
              "Wavelength: 24 cm ÷ 10 = 2.4 cm, and 2.4 cm = 0.024 m.",
              "Write the equation: v = f λ.",
              "Substitute and calculate: v = 5 × 0.024 = 0.12 m/s."
            ],
            answer: "0.12 m/s",
            check: "5 * 24 / 10 / 100",
            wave: { f: 5, lam: 0.024, v: 0.12 }
          },
          tip: "Measure across ten waves and divide by ten. Change cm to m before you use v = f λ."
        },
        {
          heading: "Required practical: waves on a string",
          paragraphs: [
            "Stretch a string from a vibration generator over a pulley, with masses hanging on the end to keep it taut. Connect the generator to a signal generator and switch on. Adjust the frequency until the string settles into a clear pattern of loops, with still points (nodes) between them. The loops are easiest to see when the string vibrates with a large amplitude.",
            "Measure the total length of several loops with a metre ruler and divide by the number of loops to find the length of one loop. Each loop is half a wavelength, so the wavelength is twice the loop length. Read the frequency from the signal generator, then calculate the wave speed with v = f λ.",
            "Measuring several loops at once, rather than one, reduces the error in your wavelength. Repeating at a different frequency should give the same speed, because the speed of the wave depends on the string and how tightly it is stretched, not on the frequency."
          ],
          worked: {
            q: "A string vibrates at 40 Hz and forms 4 loops across a length of 1.2 m. Calculate the wave speed.",
            steps: [
              "Loop length: 1.2 ÷ 4 = 0.3 m.",
              "Each loop is half a wavelength, so λ = 2 × 0.3 = 0.6 m.",
              "Write the equation: v = f λ.",
              "Substitute and calculate: v = 40 × 0.6 = 24 m/s."
            ],
            answer: "24 m/s",
            check: "40 * 2 * 1.2 / 4",
            wave: { f: 40, lam: 0.6, v: 24 }
          },
          tip: "One loop = half a wavelength. Two loops = one wavelength."
        },
        {
          heading: "Measuring the speed of sound in air",
          paragraphs: [
            "Stand a measured distance from a large flat wall and clap. The sound travels to the wall, is reflected, and comes back as an echo. Because the echo has travelled to the wall and back, the distance it covers is twice your distance from the wall. Measure the time between the clap and the echo, then speed = distance travelled ÷ time = 2 × distance to wall ÷ time.",
            "The time for one echo is very short, so timing it with a stopwatch is unreliable. Instead, clap in a steady rhythm so that each clap lands exactly on the echo of the one before, and time 20 claps. The time for one clap-to-echo is then the total time ÷ 20. Alternatively, use two microphones a measured distance apart connected to a data logger, and record the time the sound takes to pass from one to the other.",
            "Repeat the measurements and take an average. You should find a speed of about 330 m/s in air."
          ],
          worked: {
            q: "A pupil stands 66 m from a wall. The echo of a clap returns 0.40 s after the clap. Calculate the speed of sound.",
            steps: [
              "Distance travelled by the sound = there and back = 2 × 66 = 132 m.",
              "Speed = distance ÷ time.",
              "Speed = 132 ÷ 0.40 = 330 m/s."
            ],
            answer: "330 m/s",
            check: "2 * 66 / 0.40"
          },
          tip: "An echo travels there and back: double the distance to the wall."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why can sound not travel through a vacuum?", options: ["There are no particles to pass the vibration on.", "Sound travels too slowly to cross a vacuum.", "A vacuum absorbs all the sound energy.", "Sound is an electromagnetic wave and needs air."], answer: 0, why: "Sound is a mechanical wave: it is carried by particles passing the vibration on. A vacuum has no particles.",
          feedback: [
            "",
            "Speed is not the problem. Sound is carried by particles passing the vibration to their neighbours, and a vacuum has no particles at all.",
            "A vacuum is empty space; there is nothing in it to absorb energy. The problem is that there are no particles to carry the vibration.",
            "Sound is a mechanical wave, not an electromagnetic one. It needs particles (any medium, not just air) to pass the vibration on, and a vacuum has none."
          ] },
        { kind: "mcq", q: "In the ripple tank practical, which is the best way to measure the wavelength?", options: ["Measure the distance across several waves on the screen and divide by the number of waves.", "Measure one wave with a ruler held in the water.", "Count the waves passing a point in 10 seconds.", "Time one wave crossing the tank."], answer: 0, why: "Measuring across many waves on the screen (or a photograph of it) and dividing is accurate and does not disturb the water. Counting waves gives frequency; timing a wave gives speed.",
          feedback: [
            "",
            "A ruler in the water disturbs the ripples, and one wavelength is too small to measure accurately. Measure across several waves on the screen and divide.",
            "Counting waves passing a point in 10 s gives the frequency, not the wavelength. For wavelength, measure across several waves on the screen and divide.",
            "Timing a wave across a measured distance gives the wave speed, not the wavelength. For wavelength, measure across several waves on the screen and divide."
          ] },
        { kind: "numeric", q: "A vibrating string forms 3 loops across a length of 0.9 m. Calculate the wavelength in metres.", answer: 0.6, tolerance: 0, units: "m", check: "0.9 / 3 * 2", why: "Loop length = 0.9 ÷ 3 = 0.3 m; each loop is half a wavelength, so λ = 2 × 0.3 = 0.6 m (exact).",
          misconceptions: [
            { answer: 0.3, check: "0.9 / 3", says: "That is the length of one loop. A loop is only half a wavelength, so double it: λ = 2 × 0.3 = 0.6 m." },
            { answer: 0.9, check: "0.9", says: "That is the length of all three loops together. One loop is 0.9 ÷ 3 = 0.3 m, and a wavelength is two loops: 0.6 m." },
            { answer: 2.7, check: "0.9 * 3", says: "You multiplied the length by the number of loops. Divide to get one loop (0.3 m), then double it for a wavelength: 0.6 m." }
          ] }
      ],
      modules: [
        {
          title: "Wave speed from the ripple tank",
          task: { kind: "numeric", q: "In a ripple tank the dipper makes 6 waves every second. On the screen, 8 wavelengths measure 20 cm. Calculate the wave speed in metres per second.", answer: 0.15, tolerance: 0, units: "m/s", check: "6 * 20 / 8 / 100", why: "f = 6 Hz. λ = 20 ÷ 8 = 2.5 cm = 0.025 m. v = f λ = 6 × 0.025 = 0.15 m/s (exact).", wave: { f: 6, lam: 0.025, v: 0.15 },
            misconceptions: [
              { answer: 15, check: "6 * 20 / 8", says: "You left the wavelength in centimetres. 2.5 cm = 0.025 m, so v = 6 × 0.025 = 0.15 m/s." },
              { answer: 1.2, check: "6 * 20 / 100", says: "You used the whole 20 cm as one wavelength. Eight waves share the 20 cm, so one wavelength is 2.5 cm = 0.025 m, and v = 6 × 0.025 = 0.15 m/s." },
              { answer: 48, check: "6 * 8", says: "You multiplied the frequency by the number of waves. The equation needs the wavelength: 20 ÷ 8 = 2.5 cm = 0.025 m, so v = 6 × 0.025 = 0.15 m/s." }
            ] },
          contexts: [
            { label: "Garden pond", q: "A pupil taps the surface of a garden pond 6 times every second. In a photograph with a ruler beside the ripples, 8 wavelengths measure 20 cm. Calculate the wave speed in metres per second." },
            { label: "Museum wave tank", q: "In a long water tank at a science museum, a paddle makes 6 waves every second. On the glass side, 8 wavelengths measure 20 cm. Calculate the wave speed in metres per second." }
          ],
          levels: {
            support: {
              steps: ["Frequency: waves per second is already in hertz.", "Wavelength: divide the measured length by the number of waves, then change cm to m (÷ 100).", "v = f λ: multiply and write the unit m/s."],
              example: { q: "A dipper makes 4 waves every second. On the screen, 5 wavelengths measure 15 cm. Calculate the wave speed.", steps: ["f = 4 Hz.", "λ = 15 ÷ 5 = 3 cm = 0.03 m.", "v = f λ = 4 × 0.03 = 0.12 m/s."], answer: "0.12 m/s", check: "4 * 15 / 5 / 100", wave: { f: 4, lam: 0.03, v: 0.12 } }
            },
            core: { hint: "Find one wavelength in metres before you multiply." },
            stretch: { extend: "The dipper is sped up to 12 waves a second with the water depth unchanged. Predict the new wavelength and explain why the wave speed does not change." }
          },
          why: "λ = 20 ÷ 8 = 2.5 cm = 0.025 m; v = 6 × 0.025 = 0.15 m/s.",
          explain: "Say why measuring across eight waves gives a better wavelength than measuring one."
        },
        {
          title: "Speed of sound from an echo",
          task: { kind: "numeric", q: "A pupil stands 85 m from a wall and claps. The echo returns 0.50 s after the clap. Calculate the speed of sound in metres per second.", answer: 340, tolerance: 0, units: "m/s", check: "2 * 85 / 0.50", why: "The sound travels there and back: 2 × 85 = 170 m. Speed = 170 ÷ 0.50 = 340 m/s (exact).",
            misconceptions: [
              { answer: 170, check: "85 / 0.50", says: "You forgot that the echo travels to the wall and back. The distance is 2 × 85 = 170 m, so the speed is 170 ÷ 0.50 = 340 m/s." },
              { answer: 42.5, check: "85 * 0.50", says: "You multiplied distance by time. Speed is distance ÷ time, and the distance is there and back: 170 ÷ 0.50 = 340 m/s." },
              { answer: 0.0059, check: "0.50 / 85", says: "You divided time by distance, the wrong way up. Speed = distance ÷ time = 170 ÷ 0.50 = 340 m/s." }
            ] },
          contexts: [
            { label: "Cliff", q: "A walker stands 85 m from a cliff and shouts. The echo returns 0.50 s after the shout. Calculate the speed of sound in metres per second." },
            { label: "Ship's horn", q: "A ship is 85 m from a harbour wall. The echo of its horn returns 0.50 s after the horn sounds. Calculate the speed of sound in metres per second." }
          ],
          levels: {
            support: {
              steps: ["Work out the distance the sound travels: to the wall and back, so double it.", "Speed = distance ÷ time.", "Write the unit m/s."],
              example: { q: "A pupil stands 99 m from a wall. The echo returns 0.60 s after the clap. Calculate the speed of sound.", steps: ["Distance there and back = 2 × 99 = 198 m.", "Speed = 198 ÷ 0.60.", "Speed = 330 m/s."], answer: "330 m/s", check: "2 * 99 / 0.60" }
            },
            core: { hint: "How far does the sound travel before you hear the echo? Not 85 m." },
            stretch: { extend: "Explain why timing 20 clap-echo gaps and dividing by 20 gives a more accurate speed than timing one, and name one other source of error in this method." }
          },
          why: "The echo travels 2 × 85 = 170 m in 0.50 s, so the speed is 170 ÷ 0.50 = 340 m/s.",
          explain: "Say why the distance in your calculation is double the distance to the wall."
        },
        {
          title: "Plan the ripple tank practical",
          task: { kind: "written", q: "Describe how you would measure the speed of water waves in a ripple tank. Say what you would measure, how, and how you would use the measurements.", marks: 6,
            criteria: [
              "Set up: shallow tank, dipper driven by a motor or signal generator, lamp above and screen or paper below so the waves can be seen.",
              "Frequency: count the waves passing a point in a measured time (for example 10 s) and divide by the time, or read it from the signal generator.",
              "Wavelength: measure across several waves on the screen (or a photograph with a ruler) and divide by the number of waves; convert cm to m.",
              "Calculate wave speed with v = f λ.",
              "Repeat and average; measure across many waves to reduce error.",
              "Control: keep the water depth the same, because depth changes the wave speed. (Alternative method: time one wave over a measured distance and use speed = distance ÷ time.)"
            ],
            model: "I would use a shallow ripple tank with a dipper driven by a signal generator, a lamp above the tank and a sheet of white paper underneath so the ripples show as lines. To find the frequency I would count the waves passing a mark on the paper in 10 s and divide by 10, checking against the signal generator setting. To find the wavelength I would photograph the pattern with a ruler beside it, measure across ten waves and divide by ten, then change the answer from centimetres to metres. I would repeat each measurement three times and take an average. Finally I would calculate the wave speed using wave speed = frequency × wavelength. I would keep the water depth the same throughout, because the speed of the waves depends on the depth." },
          levels: {
            support: {
              steps: ["Start with the apparatus and how you make the waves visible.", "Say how you find the frequency and how you find the wavelength, including cm to m.", "Finish with the equation you use and one thing you keep the same."],
              example: { q: "Describe how you would measure the speed of a wave on a stretched string.", steps: ["Use a vibration generator driven by a signal generator; adjust the frequency until clear loops form.", "Measure the length of several loops and divide to get one loop; wavelength = 2 × loop length.", "Read the frequency from the signal generator and calculate v = f λ."], answer: "Make loops on the string with a vibration generator, find the wavelength from the loop length (one loop = half a wavelength), read the frequency and use v = f λ." }
            },
            core: { hint: "Six marks: set-up, frequency, wavelength, equation, repeats, control." },
            stretch: { extend: "Explain two reasons why measuring the wavelength from a photograph of the screen is better than holding a ruler in the water, and suggest how you could check your speed by a second method." }
          },
          why: "A full answer names the set-up, how frequency and wavelength are each measured (counting; measuring across many waves and converting units), the equation v = f λ, repeats, and the water depth as a control.",
          explain: "Say which measurement in this practical you think has the biggest error, and how you would reduce it."
        }
      ]
    },

    /* ───────────── 6 · hearing, ultrasound and seismic waves (Physics only) ───────────── */
    {
      key: "sound-and-ultrasound", n: 6, title: "Hearing, ultrasound and seismic waves (Physics only, Higher)",
      lead: "This chapter gives you pitch and loudness, the range of human hearing, how reflected sound measures distances and makes images, and what earthquake waves tell us about the Earth. It is examined in the separate Physics GCSE only.",
      covers: [5, 6],
      pretext: {
        words: [
          { word: "pitch", means: "how high or low a note sounds; it depends on frequency", sentence: "A whistle has a high pitch and a drum has a low pitch." },
          { word: "loudness", means: "how loud a sound is; it depends on amplitude", sentence: "Turning up the volume increases the loudness." },
          { word: "ultrasound", means: "sound too high-pitched for humans to hear, above 20 000 Hz", sentence: "The scanner uses ultrasound to make a picture of the baby." },
          { word: "echo sounding", means: "finding a depth or distance by timing a reflected pulse of sound", sentence: "The ship used echo sounding to measure the depth of the sea." },
          { word: "seismic wave", means: "a wave made by an earthquake that travels through the Earth", sentence: "Seismic waves were detected on the other side of the world." }
        ],
        passage: [
          "A high note has a high pitch.",
          "Pitch depends on frequency: more waves each second means a higher note.",
          "Loudness depends on amplitude: a bigger amplitude means a louder sound.",
          "Humans hear sounds from about 20 Hz up to 20 000 Hz.",
          "Sound above 20 000 Hz is called ultrasound.",
          "We cannot hear it, but bats and dolphins can.",
          "Ultrasound reflects from a boundary between two different materials.",
          "A ship sends a pulse of sound down to the seabed and times the echo.",
          "Half the time, times the speed, gives the depth.",
          "Doctors use ultrasound to make images of a baby before it is born.",
          "Engineers use it to find cracks inside metal.",
          "Earthquakes send seismic waves through the Earth.",
          "Studying these waves tells us what is deep inside the planet."
        ]
      },
      sections: [
        {
          heading: "Pitch, loudness and the range of hearing (Physics only)",
          paragraphs: [
            "A microphone connected to an oscilloscope turns a sound into a trace on a screen. Although sound is longitudinal, the trace is drawn as a transverse-looking wave of displacement against time, which makes it easy to read. The pitch of a sound depends on its frequency: more waves on the screen in the same time means a higher frequency and a higher-pitched note. The loudness depends on its amplitude: a taller trace means a bigger amplitude, more energy, and a louder sound. Amplitude and frequency are independent: you can change one without changing the other.",
            "Human hearing covers frequencies from about 20 Hz to 20 000 Hz (20 kHz). Sounds above 20 kHz are called ultrasound; sounds below 20 Hz are called infrasound. Other animals have different ranges: bats and dolphins hear well above 20 kHz, and elephants use infrasound. The range of human hearing is limited because sound waves have to make the solid parts of the ear vibrate, and the conversion of sound waves to vibrations of solids only works well over a limited range of frequencies.",
            "Sound reaches the ear and makes the eardrum vibrate. The vibrations pass through three small bones to the cochlea, which turns them into electrical signals that travel along a nerve to the brain."
          ],
          worked: {
            q: "An oscilloscope trace of a sound shows 4 complete waves in a time of 0.01 s. Calculate the frequency of the sound, and say whether a human could hear it.",
            steps: [
              "Frequency = number of waves ÷ time.",
              "f = 4 ÷ 0.01 = 400 Hz.",
              "400 Hz is between 20 Hz and 20 000 Hz, so it is within human hearing."
            ],
            answer: "400 Hz; yes, it is well inside the human hearing range",
            check: "4 / 0.01"
          },
          tip: "Pitch = frequency. Loudness = amplitude. Hearing: 20 Hz to 20 kHz."
        },
        {
          heading: "Echoes and echo sounding (Physics only)",
          paragraphs: [
            "An echo is a reflection of sound from a hard surface. The reflected sound arrives after the original because it has travelled further. Echo sounding uses this: a ship sends a pulse of ultrasound down through the water, the pulse reflects from the seabed, and a receiver on the ship detects the echo. The time between sending and receiving is measured.",
            "The pulse has travelled down to the seabed and back up again, so the distance it covers is twice the depth. Depth = ½ × speed × time, where the speed is the speed of sound in water, about 1500 m/s. The same method is used to find shoals of fish, map the seabed and, by bats and dolphins, to find food in the dark.",
            "Ultrasound is used rather than audible sound because a short pulse of high-frequency sound gives a sharper echo and a more precise measurement, and because it can be aimed in a narrow beam."
          ],
          worked: {
            q: "A ship sends a pulse of ultrasound towards the seabed. The echo returns after 0.60 s. The speed of sound in water is 1500 m/s. Calculate the depth of the water.",
            steps: [
              "The pulse travels down and back, so the depth is half the total distance.",
              "Depth = ½ × speed × time.",
              "Depth = ½ × 1500 × 0.60 = 450 m."
            ],
            answer: "450 m",
            check: "0.5 * 1500 * 0.60"
          },
          tip: "Down and back: halve it. Depth = ½ × speed × time."
        },
        {
          heading: "Ultrasound in medicine and industry (Physics only)",
          paragraphs: [
            "When a pulse of ultrasound reaches a boundary between two different materials, part of it is reflected and part is transmitted. How much is reflected depends on how different the two materials are: very little at a boundary between two similar soft tissues, a great deal at a boundary between soft tissue and bone, and almost all at a boundary between soft tissue and air.",
            "A medical scanner sends pulses into the body through a hand-held probe and detects the reflections from each boundary. The time each echo takes gives the distance to the boundary, and a computer builds up an image from thousands of echoes. Ultrasound is used to scan unborn babies because it is non-ionising, so unlike X-rays it does not damage cells.",
            "Engineers use the same idea to find cracks inside metal. A pulse sent into a metal block reflects from the far surface, but if there is a crack inside, an extra echo comes back sooner. Depth to the crack = ½ × speed of sound in the metal × time for the extra echo. Railway rails, aircraft parts and pipe welds are checked this way without cutting them open."
          ],
          worked: {
            q: "Ultrasound travels through a steel block at 5000 m/s. An echo from a crack returns after 0.000008 s (8 microseconds). How deep is the crack?",
            steps: [
              "The pulse goes down to the crack and back, so halve the total distance.",
              "Depth = ½ × speed × time.",
              "Depth = ½ × 5000 × 0.000008 = 0.02 m.",
              "0.02 m = 20 mm."
            ],
            answer: "0.02 m, which is 20 mm",
            check: "0.5 * 5000 * 0.000008"
          },
          tip: "A crack gives an early echo. Non-ionising means safer than X-rays."
        },
        {
          heading: "Seismic waves and the inside of the Earth (Physics only)",
          paragraphs: [
            "An earthquake sends seismic waves through the Earth. P-waves are longitudinal; they travel through solids and liquids, and are the first to arrive. S-waves are transverse; they travel through solids only, and arrive later because they are slower. Both are detected by seismometers at stations around the world.",
            "Studying where the waves arrive tells us about the Earth's interior. S-waves are not detected on the far side of the Earth from an earthquake: this S-wave shadow zone shows that the outer core is liquid, because transverse waves cannot travel through a liquid. P-waves are refracted as they pass into and out of the core, because their speed changes at the boundaries, and this leaves a P-wave shadow zone too. Weak P-waves detected inside the shadow zone show that there is a solid inner core that refracts them.",
            "Seismic waves also bend gradually as they pass through the mantle, because their speed changes with depth. The pattern of arrival times and the sizes of the shadow zones let scientists work out the size of the core and the state of each layer, even though no one can go there."
          ],
          tip: "S for solid only: S-waves stop at the liquid outer core. P passes through."
        }
      ],
      gate: [
        { kind: "gap", q: "Sound with a frequency above 20 000 Hz is called ___.", answer: "ultrasound", options: ["ultrasound", "infrasound", "an echo"], why: "Ultrasound is sound above the upper limit of human hearing, 20 000 Hz (20 kHz).",
          feedback: {
            "infrasound": "Infra means below: infrasound is sound below 20 Hz, too low to hear. Sound above 20 000 Hz is ultrasound.",
            "an echo": "An echo is a reflected sound of any frequency. Sound above 20 000 Hz, too high for humans to hear, is called ultrasound."
          } },
        { kind: "mcq", q: "Which change makes a sound louder?", options: ["a larger amplitude", "a higher frequency", "a shorter wavelength", "a longer period"], answer: 0, why: "Loudness depends on amplitude: a bigger amplitude carries more energy and sounds louder.",
          feedback: [
            "",
            "A higher frequency gives a higher pitch, not a louder sound. Loudness depends on amplitude.",
            "A shorter wavelength goes with a higher frequency and so a higher pitch. Loudness depends on amplitude.",
            "A longer period means a lower frequency and a lower pitch. Loudness depends on amplitude."
          ] },
        { kind: "numeric", q: "A ship's echo sounder sends a pulse towards the seabed. The echo returns after 0.20 s. Sound travels through water at 1500 m/s. Calculate the depth of the water in metres.", answer: 150, tolerance: 0, units: "m", check: "0.5 * 1500 * 0.20", why: "Depth = ½ × speed × time = ½ × 1500 × 0.20 = 150 m (exact).",
          misconceptions: [
            { answer: 300, check: "1500 * 0.20", says: "You forgot that the pulse goes down and back. 1500 × 0.20 = 300 m is the total distance travelled; the depth is half of it, 150 m." },
            { answer: 7500, check: "1500 / 0.20", says: "You divided speed by time. Distance is speed × time, and the depth is half of that: ½ × 1500 × 0.20 = 150 m." },
            { answer: 0.00013, check: "0.20 / 1500", says: "You divided time by speed, the wrong way round. Distance = speed × time, then halve it: ½ × 1500 × 0.20 = 150 m." }
          ] }
      ],
      modules: [
        {
          title: "How echo sounding works",
          task: { kind: "order", q: "Put the steps of echo sounding in the order they happen.", items: [
            "A transmitter on the ship sends a short pulse of ultrasound down into the water.",
            "The pulse travels down through the water and is reflected from the seabed.",
            "The reflected pulse (the echo) is detected by a receiver on the ship.",
            "The time between sending the pulse and detecting the echo is measured.",
            "Depth = ½ × speed of sound in water × time gives the depth of the water."
          ] },
          levels: {
            support: {
              steps: ["Nothing can be measured until a pulse has been sent, so sending comes first.", "Follow the pulse: down, reflect, back up, detected.", "Only then can the time be measured and the depth calculated."],
              example: { q: "Put in order the steps of hearing an echo from a wall: the clap is heard at the wall and reflected; you clap; you hear the echo; the sound travels back to you.", steps: ["You clap first.", "The sound reaches the wall and is reflected.", "It travels back.", "You hear it."], answer: "You clap; the sound reaches the wall and is reflected; it travels back to you; you hear the echo." }
            },
            core: { hint: "Send, travel and reflect, detect, time, calculate." },
            stretch: { extend: "Explain why the depth would be wrong if the ship used the speed of sound in air (330 m/s) in its calculation, and say whether the answer would be too big or too small." }
          },
          why: "Send the pulse, let it reflect from the seabed, detect the echo, measure the time, then use depth = ½ × speed × time.",
          explain: "Say why the equation uses half the time, in one sentence."
        },
        {
          title: "Depth of a crack",
          task: { kind: "numeric", q: "An engineer tests a metal rail with ultrasound. Sound travels through the metal at 4000 m/s. An echo from a crack returns after 0.00001 s (10 microseconds). Calculate the depth of the crack below the surface, in millimetres.", answer: 20, tolerance: 0, units: "mm", check: "0.5 * 4000 * 0.00001 * 1000", why: "Depth = ½ × speed × time = ½ × 4000 × 0.00001 = 0.02 m, and 0.02 m = 20 mm (exact).",
            misconceptions: [
              { answer: 40, check: "4000 * 0.00001 * 1000", says: "You forgot to halve. 4000 × 0.00001 = 0.04 m is the distance there and back; the crack is half as deep: 0.02 m = 20 mm." },
              { answer: 0.02, check: "0.5 * 4000 * 0.00001", says: "That is the right depth, but in metres. The question asks for millimetres: 0.02 m × 1000 = 20 mm." },
              { answer: 200, check: "0.5 * 4000 * 0.0001 * 1000", says: "Check the number of zeros in the time: 10 microseconds is 0.00001 s, not 0.0001 s. ½ × 4000 × 0.00001 = 0.02 m = 20 mm." }
            ] },
          contexts: [
            { label: "Pipe weld", q: "An engineer tests a welded metal pipe with ultrasound. Sound travels through the metal at 4000 m/s. An echo from a crack in the weld returns after 0.00001 s (10 microseconds). Calculate the depth of the crack below the surface, in millimetres." },
            { label: "Aircraft part", q: "A technician tests a metal aircraft part with ultrasound. Sound travels through the metal at 4000 m/s. An echo from a crack returns after 0.00001 s (10 microseconds). Calculate the depth of the crack below the surface, in millimetres." }
          ],
          levels: {
            support: {
              steps: ["Depth = ½ × speed × time (the pulse goes to the crack and back).", "Multiply, keeping track of the zeros, to get the depth in metres.", "Change metres to millimetres: × 1000."],
              example: { q: "Ultrasound travels through an aluminium block at 6000 m/s. An echo from a flaw returns after 0.000005 s. Calculate the depth of the flaw in millimetres.", steps: ["Depth = ½ × 6000 × 0.000005 = 0.015 m.", "0.015 m × 1000 = 15 mm."], answer: "15 mm", check: "0.5 * 6000 * 0.000005 * 1000" }
            },
            core: { hint: "Half of speed × time gives metres; the question wants millimetres." },
            stretch: { extend: "A second echo, from the far surface of the rail, returns after 0.00008 s. Calculate the thickness of the rail and explain why the crack echo arrives first." }
          },
          why: "½ × 4000 × 0.00001 = 0.02 m, which is 20 mm below the surface.",
          explain: "Say how the engineer knows the early echo comes from a crack and not from the far side of the rail."
        },
        {
          title: "What seismic waves tell us",
          task: { kind: "match", q: "Match each term to what it is or what it shows.", pairs: [
            ["P-wave", "longitudinal; travels through solids and liquids; arrives first"],
            ["S-wave", "transverse; travels through solids only; arrives later"],
            ["S-wave shadow zone", "evidence that the outer core is liquid"],
            ["weak P-waves inside the P-wave shadow zone", "evidence that the inner core is solid"],
            ["seismometer", "the instrument that detects seismic waves"]
          ] },
          levels: {
            support: {
              steps: ["P-waves are like sound: longitudinal, and they go through everything.", "S-waves are transverse and cannot pass through a liquid, which is what the shadow zone shows.", "Refraction of P-waves inside the core points to a solid inner core; the instrument is the odd one out."],
              example: { q: "Match: longitudinal wave; transverse wave; refraction.", steps: ["Longitudinal: vibrations parallel to the direction of travel.", "Transverse: vibrations at right angles to the direction of travel.", "Refraction: a change of direction when the speed changes at a boundary."], answer: "longitudinal = parallel vibrations; transverse = right-angle vibrations; refraction = bending when speed changes" }
            },
            core: { hint: "Think S for 'solids only', P for 'passes through'." },
            stretch: { extend: "Explain why P-waves are refracted when they enter the core, and how that refraction produces a P-wave shadow zone even though P-waves can travel through liquids." }
          },
          why: "P-waves are longitudinal and pass through solids and liquids; S-waves are transverse and stop at the liquid outer core, which gives the S-wave shadow zone; refracted P-waves reveal a solid inner core.",
          explain: "Say what the S-wave shadow zone tells us about the outer core, and why."
        }
      ]
    }
  ],

  sources: {
    deckDump: "sc_ks4_phys_p12_wave_properties.txt",
    decksUsed: [
      "P12.1 The nature of waves.pptx",
      "P12.2 The properties of waves.pptx",
      "P12.3 Reflection and refraction.pptx",
      "P12.4 More about waves.pptx",
      "P12.5 Sound Waves (H).pptx",
      "P12.6 The uses of ultrasound (H).pptx",
      "P12 Revision Lesson.pptx (ripple tank description, seismic waves, echo sounding; used for sequence and key words only)"
    ],
    notes: "Sequence, lesson titles, key words, models (slinky coils, tube of air, loudspeaker diaphragm, bell jar, oscilloscope traces, echo from a wall, echo sounding, crack detection, shadow zones) and the skills taught are from the six P12 decks and the P12 revision deck. All questions and numbers are original; no answer slide was copied and no exam-board wording (the bell tasks) is reproduced. Chapter 6 and the labelled sections of chapters 4 and 5 are Physics-only (8463) content that the department teaches in the Combined sequence; see NOTES.md. The forces recall slides, the SI-prefix slides, the KS2 'prior learning' slides, diffraction, dispersion and the cochlea biology are left out. See NOTES.md for deck errors."
  }
};
