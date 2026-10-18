// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Physics 8463 · P14 Light (4.6.2.4 reflection, 4.6.2.5 lenses, 4.6.2.6 visible light,
// with 4.6.1.2 refraction and Required practical 20) · PHYSICS ONLY (not in Combined Science 8464) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression) and are recomputed; each `misconceptions[]` entry
//   carries its own `check` that must reproduce the wrong answer and differ from the right one.
//   worked examples / support examples whose answer contains a number carry `checks:[{expr, value, tol}]`.
//   every "a ÷ b = c", "a × b = c", "a + b = c", "a − b = c" written anywhere in the text is recomputed, so every
//   magnification quoted in prose is recomputed too.
//   every mcq / gap answer is compared with the independent answer key held in verify.py; every "order" task with the
//   canonical sequences held there.
//   lints: angle of incidence = angle of reflection wherever both are quoted together; air→glass never "away from the
//   normal" and never "speeds up", glass→air never "towards the normal" and never "slows down"; a concave lens never
//   forms a real image; a plane mirror image is never "upside down"; magnification never carries a unit; red light is
//   never the shortest wavelength; primary colours of light are never yellow/cyan/magenta; no copyright fingerprints.
//   astra/2: feedback on every mcq/gap, misconceptions on every numeric, explain on every module, contexts share the
//   task's numbers exactly, ≥ 1 context module per chapter, connections ⊂ glossary, spacing [2,7,30], no constellation,
//   no pretext.l1.
// (Higher) marks AQA Physics HT-only content (4.6.1.2: wave front explanation of refraction).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["triple-light"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "triple-light",
    subjectKey: "triple",
    subject: "Physics (Triple Science)",
    board: "AQA",
    spec: "8463",
    specRef: "4.6.2.4 Reflection of waves, 4.6.2.5 Lenses, 4.6.2.6 Visible light (Physics only), with 4.6.1.2 Refraction and Required practical 20 (reflection and refraction of light)",
    year: 11,
    tier: "GCSE Higher and Foundation (Physics only; not in Combined Science)",
    title: "Light",
    sub: "Mirrors, glass blocks, coloured filters and lenses: how light bounces, bends and builds an image. Physics only.",
    bigQuestion: "How does a flat mirror, a glass block or a curved lens change the path of light, and how do we use that to make the images we see?",
    lessonCount: 5,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "P14.1 Reflection of light", question: "How is light reflected by a plane mirror, and why do smooth and rough surfaces reflect it differently?", keywords: ["normal", "angle of incidence", "angle of reflection", "virtual image", "specular reflection", "diffuse reflection"] },
    { n: 2, title: "P14.2 Refraction of light", question: "Why does light change direction when it crosses from air into glass, and how can you investigate it?", keywords: ["refraction", "boundary", "medium", "normal", "angle of refraction", "wave front"] },
    { n: 3, title: "P14.3 Light and colour", question: "Why do objects look different colours in different light, and what does a colour filter do?", keywords: ["spectrum", "wavelength", "absorb", "reflect", "transmit", "filter", "transparent", "translucent", "opaque"] },
    { n: 4, title: "P14.4 Lenses", question: "What do convex and concave lenses do to light, and how is magnification calculated?", keywords: ["convex lens", "concave lens", "principal focus", "focal length", "real image", "virtual image", "magnification"] },
    { n: 5, title: "P14.5 Using lenses", question: "How does a ray diagram show the image a lens makes, in a camera and in a magnifying glass?", keywords: ["ray diagram", "real image", "virtual image", "inverted", "upright", "magnified", "diminished"] }
  ],

  glossary: [
    { term: "normal", means: "A line drawn at right angles (90°) to a surface at the point where a ray hits it. All angles are measured from the normal.", chapter: "reflection" },
    { term: "angle of incidence", means: "The angle between the incoming (incident) ray and the normal.", chapter: "reflection" },
    { term: "specular reflection", means: "Reflection from a smooth surface, such as a mirror, in a single direction. It gives a clear image.", chapter: "reflection" },
    { term: "diffuse reflection", means: "Reflection from a rough surface, which scatters the light in many directions. No image is formed.", chapter: "reflection" },
    { term: "virtual image", means: "An image that light rays only appear to come from. It cannot be put on a screen. A plane mirror makes one.", chapter: "reflection" },
    { term: "refraction", means: "The change in direction of a wave as it crosses a boundary from one medium to another, because its speed changes.", chapter: "refraction" },
    { term: "filter", means: "A sheet of coloured material that transmits (lets through) its own colour of light and absorbs the rest.", chapter: "colour" },
    { term: "transparent", means: "Lets light pass straight through, so you can see clearly through it. Clear glass and water are transparent.", chapter: "colour" },
    { term: "translucent", means: "Lets light through but scatters it, so you cannot see clearly through it. Frosted glass is translucent.", chapter: "colour" },
    { term: "opaque", means: "Does not let light through: it absorbs or reflects the light, so it casts a shadow.", chapter: "colour" },
    { term: "convex lens", means: "A lens that is thicker in the middle. It brings parallel rays together (converges them) at the principal focus.", chapter: "lenses" },
    { term: "concave lens", means: "A lens that is thinner in the middle. It spreads parallel rays out (diverges them) as if they came from the principal focus.", chapter: "lenses" },
    { term: "principal focus", means: "The point where parallel rays meet after a convex lens, or appear to come from after a concave lens.", chapter: "lenses" },
    { term: "focal length", means: "The distance from the centre of a lens to its principal focus.", chapter: "lenses" },
    { term: "real image", means: "An image formed where the rays actually meet. It can be caught on a screen, as in a camera.", chapter: "lenses" },
    { term: "magnification", means: "Image height ÷ object height. It is a ratio, so it has no units.", chapter: "magnification" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used. Group 4 follows the AQA sentence
  // "A lens forms an image by refracting light", so it mixes the refraction, lenses and magnification chapters on purpose.
  connections: [
    { group: "Light meets a mirror", terms: ["normal", "angle of incidence", "specular reflection", "diffuse reflection"] },
    { group: "Light meets a material", terms: ["filter", "transparent", "translucent", "opaque"] },
    { group: "Parts of a lens diagram", terms: ["convex lens", "concave lens", "principal focus", "focal length"] },
    { group: "How a lens makes an image", terms: ["refraction", "real image", "virtual image", "magnification"] }
  ],

  chapters: [
    /* ───────────── 1 · reflection ───────────── */
    {
      key: "reflection", n: 1, title: "Reflection and the plane mirror",
      lead: "The law of reflection, how to draw it, the image a flat mirror makes, and why a mirror gives an image but a wall does not.",
      covers: [1],
      pretext: {
        words: [
          { word: "normal", means: "a line at right angles to the surface where the ray hits", sentence: "Draw the normal first, then measure every angle from it." },
          { word: "angle of incidence", means: "the angle between the incoming ray and the normal", sentence: "The angle of incidence was 40°, measured from the normal." },
          { word: "angle of reflection", means: "the angle between the reflected ray and the normal", sentence: "The angle of reflection is always equal to the angle of incidence." },
          { word: "virtual image", means: "an image the rays only seem to come from; it cannot go on a screen", sentence: "Your face in the mirror is a virtual image behind the glass." },
          { word: "specular reflection", means: "reflection from a smooth surface, in one direction", sentence: "A still lake gives specular reflection, so you see the trees in it." },
          { word: "diffuse reflection", means: "reflection from a rough surface, scattered in many directions", sentence: "Paper gives diffuse reflection, so it looks the same from every side." }
        ],
        passage: [
          "Light travels in straight lines called rays.",
          "When a ray hits a mirror, it bounces off.",
          "This is called reflection.",
          "The normal is a line at right angles to the mirror.",
          "We measure angles from the normal, not from the mirror.",
          "The angle of incidence is between the incoming ray and the normal.",
          "The angle of reflection is between the reflected ray and the normal.",
          "These two angles are always equal.",
          "A mirror makes an image that seems to be behind the glass.",
          "This is a virtual image, so you cannot put it on a screen.",
          "A smooth surface reflects light in one direction, so you see a clear image.",
          "A rough surface scatters light in many directions, so there is no image.",
          "That is why you see yourself in a mirror but not in a brick wall."
        ]
      },
      sections: [
        {
          heading: "The law of reflection",
          paragraphs: [
            "A ray diagram shows the path of light as straight lines with arrows. When a ray meets a plane (flat) mirror, draw the normal first: a dotted line at right angles to the mirror surface at the point where the ray hits. Every angle in reflection is measured from this normal, never from the mirror itself.",
            "The angle of incidence, i, is the angle between the incident ray and the normal. The angle of reflection, r, is the angle between the reflected ray and the normal. The law of reflection says that the angle of incidence equals the angle of reflection: i = r.",
            "Reflection does not change the wave itself. The speed, frequency and wavelength of the light are the same before and after it reflects, because the light stays in the same medium, the air."
          ],
          worked: {
            q: "A ray of light hits a plane mirror at 40° to the surface of the mirror. Find the angle of incidence, the angle of reflection, and the angle between the incident ray and the reflected ray.",
            steps: [
              "The angle given is measured from the mirror, so convert it to the normal: angle of incidence = 90° − 40° = 50°.",
              "Use the law of reflection: the angle of reflection equals the angle of incidence, so it is also 50°.",
              "The two rays sit either side of the normal, so the angle between them = 50° + 50° = 100°."
            ],
            answer: "Angle of incidence 50°, angle of reflection 50°; the two rays are 100° apart.",
            checks: [{ expr: "90 - 40", value: 50, tol: 0 }, { expr: "50 + 50", value: 100, tol: 0 }]
          },
          tip: "If a question gives the angle between the ray and the mirror surface, subtract it from 90° to find the angle of incidence."
        },
        {
          heading: "The image in a plane mirror",
          paragraphs: [
            "Look at yourself in a mirror and the image seems to be behind the glass. Light from your face reflects off the mirror into your eye. Your brain assumes the rays travelled in straight lines, so it places the image where the rays appear to come from. No light actually reaches that point behind the mirror, so it is a virtual image.",
            "The image in a plane mirror is the same size as the object and the same distance behind the mirror as the object is in front. It is upright, and it is laterally inverted: left and right are swapped, but it is not upside down. That is why writing looks back to front in a mirror.",
            "A real image is different: the rays actually meet there, so it can be caught on a screen, like the picture on a cinema screen. You will meet real images again with lenses in Chapter 4."
          ],
          tip: "Virtual: the rays only appear to come from it. Real: the rays really meet there, and a screen could catch it."
        },
        {
          heading: "Specular and diffuse reflection",
          paragraphs: [
            "Every surface obeys the law of reflection, but a mirror and a sheet of paper look very different. A mirror is smooth, so every ray in a beam meets the surface at the same angle and reflects in the same direction. This is specular reflection, and it is what makes a clear image.",
            "Paper, cloth, skin and brick are rough on a tiny scale. Neighbouring rays meet bits of surface that face different ways, so they reflect at different angles and scatter in many directions. This is diffuse reflection. Each ray still obeys the law, but the beam is broken up, so there is no image.",
            "Diffuse reflection is why you can see most objects from any direction: they scatter light from the room towards your eyes wherever you stand."
          ]
        },
        {
          heading: "Required practical: reflection by different surfaces",
          paragraphs: [
            "Stand a plane mirror upright on a sheet of paper and draw along its reflecting face. Use a ray box with a single slit to shine a narrow ray at the mirror. Mark the incident and reflected rays with pencil dots, remove the mirror, and join the dots with a ruler. Draw the normal where the ray met the mirror and measure i and r with a protractor.",
            "Repeat for several angles of incidence, for example 20°, 40° and 60°. Each time the angle of reflection should come out the same as the angle of incidence, within a degree or two of measuring error. Then replace the mirror with other surfaces: white paper, a sheet of acrylic, a piece of card. A smooth, shiny surface gives one clear reflected ray; a matt surface gives a faint spread of light with no single ray.",
            "Sources of error: a wide ray makes its centre hard to judge, so use a narrow slit; dots far apart give a more accurate line than dots close together; and draw the normal with a set square so it really is at 90° to the surface."
          ],
          tip: "A 'describe how you would investigate' question wants the method in order, the measurements you take, and one way of making the results more accurate."
        }
      ],
      gate: [
        { kind: "mcq", q: "In a ray diagram of reflection, what is the normal?", options: ["A line at right angles to the mirror at the point where the ray hits", "The reflected ray", "A line drawn along the surface of the mirror", "The incoming ray"], answer: 0, why: "The normal is drawn at 90° to the surface where the ray meets it. Both angles are measured from the normal.",
          feedback: [
            "",
            "The reflected ray is the light leaving the mirror; the normal is a construction line, not a ray. It is drawn at right angles to the mirror at the point where the ray hits.",
            "A line along the mirror surface is the mirror itself. The normal is the line at right angles to that surface, and angles are measured from the normal, not from the surface.",
            "The incoming ray is the incident ray. The normal is the dotted line at 90° to the mirror that the incident ray's angle is measured from."
          ] },
        { kind: "numeric", q: "A ray hits a plane mirror with an angle of incidence of 35°. What is the angle of reflection, in degrees?", answer: 35, tolerance: 0, units: "°", check: "35", why: "The law of reflection: the angle of reflection equals the angle of incidence, so it is 35°. Exact.",
          misconceptions: [
            { answer: 55, check: "90 - 35", says: "You subtracted from 90°. That gives the angle between the ray and the mirror surface. Both angles here are measured from the normal, and they are equal, so the answer is 35°." },
            { answer: 70, check: "2 * 35", says: "You doubled the angle. 70° is the angle between the incident ray and the reflected ray. The angle asked for is measured from the normal and equals the angle of incidence, 35°." }
          ] },
        { kind: "gap", q: "Reflection from a rough surface that scatters light in many directions is called ___ reflection.", answer: "diffuse", options: ["diffuse", "specular", "total"], why: "Diffuse reflection is scattering from a rough surface. Specular reflection is from a smooth surface, in one direction.",
          feedback: {
            "specular": "Specular reflection is the opposite case: a smooth surface such as a mirror, reflecting in a single direction and giving an image. A rough surface scatters the light, which is diffuse reflection.",
            "total": "'Total' belongs to total internal reflection, a different effect inside glass. Scattering from a rough surface is diffuse reflection."
          } }
      ],
      modules: [
        {
          title: "Angles from the surface",
          task: { kind: "numeric", q: "A ray of light strikes a plane mirror at 25° to the surface of the mirror. What is the angle of reflection, in degrees?", answer: 65, tolerance: 0, units: "°", check: "90 - 25", why: "The angle of incidence is measured from the normal: 90° − 25° = 65°. The angle of reflection equals it, so 65°. Exact.",
            misconceptions: [
              { answer: 25, check: "25", says: "You used the angle to the mirror surface as if it were measured from the normal. Convert it first: 90° − 25° = 65° from the normal, and the reflected ray makes the same 65° with the normal." },
              { answer: 50, check: "2 * 25", says: "You doubled 25°. Doubling gives the angle between the two rays only after you have found the angle from the normal. Convert first: 90° − 25° = 65°, and that is the answer." },
              { answer: 115, check: "90 + 25", says: "You added 25° to 90°. The ray lies between the mirror and the normal, so the angle from the normal is 90° − 25° = 65°, and the reflected ray makes the same 65°." }
            ] },
          contexts: [
            { label: "Periscope", q: "In a periscope, a ray of light strikes the top plane mirror at 25° to the mirror's surface. What is the angle of reflection, in degrees?" },
            { label: "Dentist's mirror", q: "A dentist's small plane mirror is lit by a ray at 25° to its surface. What is the angle of reflection, in degrees?" },
            { label: "Shop window", q: "Sunlight strikes a flat shop window at 25° to the surface of the glass, and some of it reflects. What is the angle of reflection, in degrees?" }
          ],
          explain: "Say, in one sentence, why the answer is not 25°.",
          levels: {
            support: {
              steps: [
                "Draw the mirror as a line and the normal as a dotted line at 90° to it.",
                "The ray is 25° from the mirror, so it is 90° − 25° from the normal. That is the angle of incidence.",
                "Use the law of reflection: angle of reflection = angle of incidence.",
                "Write the answer in degrees."
              ],
              example: {
                q: "A ray hits a plane mirror at 30° to the mirror surface. What is the angle of reflection?",
                steps: ["From the normal: 90° − 30° = 60°, so the angle of incidence is 60°.", "The angle of reflection equals it: 60°."],
                answer: "60°",
                checks: [{ expr: "90 - 30", value: 60, tol: 0 }]
              }
            },
            core: { hint: "Angles are measured from the normal. 25° is measured from the surface. What is 90° − 25°?" },
            stretch: { extend: "The mirror is now turned so the ray meets it at 10° to the surface instead. Explain what happens to the angle of reflection, and sketch both situations on one diagram." }
          },
          why: "Angles of incidence and reflection are measured from the normal. A ray 25° from the surface is 90° − 25° = 65° from the normal, and the reflected ray makes the same 65° with the normal."
        },
        {
          title: "Where is the image?",
          task: { kind: "numeric", q: "A candle stands 1.2 m in front of a plane mirror. How far behind the mirror is its image, in metres?", answer: 1.2, tolerance: 0, units: "m", check: "1.2", why: "The image in a plane mirror is as far behind the mirror as the object is in front: 1.2 m. Exact.",
            misconceptions: [
              { answer: 2.4, check: "2 * 1.2", says: "You doubled it. 2.4 m is the distance from the candle to its image. The image itself sits 1.2 m behind the mirror, the same distance as the candle is in front." },
              { answer: 0.6, check: "1.2 / 2", says: "You halved it. The mirror does not sit halfway between the candle and the image: the image is exactly as far behind the mirror as the candle is in front, so 1.2 m." }
            ] },
          contexts: [
            { label: "Cat", q: "A cat sits 1.2 m in front of a plane mirror. How far behind the mirror is its image, in metres?" },
            { label: "Bathroom", q: "You stand 1.2 m from the bathroom mirror. How far behind the mirror is your image, in metres?" }
          ],
          explain: "Say, in one sentence, why this image is called virtual.",
          levels: {
            support: {
              steps: [
                "Recall the plane mirror rule: image distance behind = object distance in front.",
                "Find the object distance in the question.",
                "Write the same number as the image distance, with its unit."
              ],
              example: {
                q: "A torch is 50 cm in front of a plane mirror. How far behind the mirror is its image?",
                steps: ["The object is 50 cm in front.", "The image is the same distance behind: 50 cm."],
                answer: "50 cm behind the mirror",
                checks: [{ expr: "50", value: 50, tol: 0 }]
              }
            },
            core: { hint: "Same distance behind as in front. No doubling, no halving." },
            stretch: { extend: "The candle is moved 0.3 m closer to the mirror. Work out the new distance between the candle and its image, and explain why the image also moves." }
          },
          why: "A plane mirror forms a virtual image the same distance behind the mirror as the object is in front, the same size, upright and laterally inverted."
        },
        {
          title: "Smooth or rough?",
          task: {
            kind: "match",
            q: "Match each surface to the kind of reflection it gives.",
            pairs: [
              ["A plane mirror", "Specular reflection: one clear reflected ray, and an image"],
              ["A sheet of white paper", "Diffuse reflection: the light is scattered, so no image"],
              ["A still pond", "Specular reflection: you can see the trees reflected in it"],
              ["A brick wall", "Diffuse reflection: you can see the wall from any angle"]
            ]
          },
          explain: "Say, in one sentence, how diffuse reflection still obeys the law of reflection.",
          levels: {
            support: {
              steps: [
                "Ask: is the surface smooth or rough on a tiny scale?",
                "Smooth means every ray reflects the same way: specular, and an image.",
                "Rough means rays reflect in many directions: diffuse, no image.",
                "Match the two you are surest of first."
              ],
              example: {
                q: "Polished steel spoon or a woollen jumper: which gives specular reflection?",
                steps: ["The spoon is smooth and shiny, so the rays reflect together: specular.", "Wool is rough, so it scatters light: diffuse."],
                answer: "The spoon gives specular reflection; the jumper gives diffuse reflection."
              }
            },
            core: { hint: "Can you see a picture of something else in the surface? Then it is specular." },
            stretch: { extend: "Explain why a wet road at night shows clear reflections of car headlights but a dry road does not." }
          },
          why: "Smooth surfaces (mirror, still water) reflect in a single direction, which is specular reflection and gives an image. Rough surfaces (paper, brick) scatter the light, which is diffuse reflection and gives no image."
        }
      ]
    },

    /* ───────────── 2 · refraction ───────────── */
    {
      key: "refraction", n: 2, title: "Refraction: light crossing a boundary",
      lead: "Why light bends when it enters glass, which way it bends, how wave fronts explain it, and how to measure it with a glass block.",
      covers: [2],
      pretext: {
        words: [
          { word: "refraction", means: "the change in direction of a wave when it crosses into a different material", sentence: "Refraction makes a straw in a glass of water look bent." },
          { word: "boundary", means: "the surface where two materials meet", sentence: "The ray changes direction at the boundary between the air and the glass." },
          { word: "medium", means: "a material that light travels through", sentence: "Glass is a denser medium than air, so light travels more slowly in it." },
          { word: "angle of refraction", means: "the angle between the refracted ray and the normal, inside the second material", sentence: "The angle of refraction in the glass was smaller than the angle of incidence." },
          { word: "wave front", means: "a line joining the crests of neighbouring waves", sentence: "Each wave front turns as one end of it slows down in the glass." }
        ],
        passage: [
          "Light travels at different speeds in different materials.",
          "It is fastest in air and slower in water, glass or Perspex.",
          "A material that light travels through is called a medium.",
          "The surface where two media meet is called a boundary.",
          "When light crosses a boundary at an angle, it changes direction.",
          "This bending is called refraction.",
          "Going from air into glass, the ray slows down and bends towards the normal.",
          "Going from glass into air, the ray speeds up and bends away from the normal.",
          "A ray that travels along the normal does not bend at all.",
          "The frequency of the light stays the same.",
          "Its speed and its wavelength both change.",
          "Refraction is why a swimming pool looks shallower than it really is."
        ]
      },
      sections: [
        {
          heading: "Crossing a boundary",
          paragraphs: [
            "Refraction is the change in direction of a wave when it crosses the boundary from one medium into another. It happens because the wave changes speed. Light travels at about 300 000 km/s in air but at only about 200 000 km/s in glass.",
            "When a ray goes from air into glass at an angle, it slows down and bends towards the normal: the angle of refraction is smaller than the angle of incidence. When the ray leaves the glass and goes back into air, it speeds up and bends away from the normal: the angle of refraction is bigger than the angle of incidence.",
            "A ray that hits the boundary along the normal (angle of incidence 0°) still changes speed but does not change direction. Only rays that arrive at an angle are bent."
          ],
          worked: {
            q: "A ray enters a parallel-sided glass block with an angle of incidence of 30°. Inside the glass the angle of refraction is measured as 19°. The ray then reaches the far face, which is parallel to the first. At what angle to the normal does it leave the block, and how is it travelling compared with the original ray?",
            steps: [
              "At the first face the ray bent towards the normal: 19° is less than 30°, as expected for air to glass.",
              "Inside the block the ray meets the second face at 19° to its normal, because the two faces are parallel.",
              "At the second face it goes from glass to air, so it bends away from the normal by the same amount it bent in.",
              "It leaves at 30° to the normal, parallel to the incident ray but shifted sideways."
            ],
            answer: "It leaves at 30° to the normal, parallel to the original ray.",
            checks: [{ expr: "30", value: 30, tol: 0 }]
          },
          tip: "Towards the normal going in (slower), away from the normal coming out (faster). Draw the normal before you draw anything else."
        },
        {
          heading: "Explaining refraction with wave fronts (Higher)",
          paragraphs: [
            "Think of a beam of light as a set of wave fronts: lines joining the crests, at right angles to the direction of travel, like a row of people marching side by side.",
            "When the row meets the glass at an angle, one end reaches the boundary first and slows down while the other end is still in air, moving fast. The fast end swings round towards the slow end, so the whole row turns towards the normal. Once every part is in the glass they all move at the new, slower speed and travel in a straight line again.",
            "The frequency of the wave does not change at the boundary, because wave fronts arrive at the same rate they leave. The speed does change, so, using wave speed = frequency × wavelength, the wavelength changes too: in glass the wave fronts are closer together."
          ],
          tip: "Frequency is fixed by the source, so it never changes at a boundary. Speed and wavelength change together."
        },
        {
          heading: "Required practical: refraction in a glass block",
          paragraphs: [
            "Put the glass (or Perspex) block in the middle of a sheet of paper and draw round it. Take the block away and draw a normal at right angles to one long side, about halfway along. Use a protractor to draw an incident ray at 30° to the normal.",
            "Replace the block exactly on its outline. Shine a narrow ray from the ray box along the incident ray you drew, and mark where the light leaves the far side with two pencil dots. Remove the block, join the dots to draw the emergent ray, and join the point where the ray entered the block to the point where it left, to draw the refracted ray inside it.",
            "Draw the normal at the exit point and measure the angle of refraction inside the block and the angle of the emergent ray. Repeat for an angle of incidence of 50°, and another angle if you have time. Then swap the glass block for a Perspex block, or a rectangular tray of water, to compare different substances."
          ],
          tip: "Two dots far apart on the emergent ray give a more accurate line than one dot close to the block."
        },
        {
          heading: "Dispersion, and why a pool looks shallow",
          paragraphs: [
            "White light is a mixture of all the colours of the spectrum. In glass, violet light travels slightly more slowly than red light, so violet is refracted the most and red the least. A triangular prism refracts the light twice, in at one face and out at another, so the colours spread out into a spectrum. This spreading is called dispersion.",
            "Refraction also plays tricks on your eyes. Light from a coin at the bottom of a pool bends away from the normal as it leaves the water. Your brain assumes the light travelled in a straight line, so it places the coin higher up: the pool looks shallower than it is. The fishing example in your lesson is the same idea: aim where the fish seems to be and you will miss."
          ]
        }
      ],
      gate: [
        { kind: "mcq", q: "What is refraction?", options: ["A change in direction of a wave as it crosses a boundary between two media", "A wave bouncing back from a surface", "A wave spreading out as it passes through a gap", "A wave being absorbed by a material"], answer: 0, why: "Refraction is the change in direction when a wave crosses a boundary, caused by the change in speed.",
          feedback: [
            "",
            "Bouncing back from a surface is reflection. Refraction is when the wave goes through the boundary into the new medium and changes direction because its speed changes.",
            "Spreading out through a gap is diffraction. Refraction is a change in direction at a boundary between two different media, because the wave changes speed.",
            "Absorption is when the medium takes in the wave's energy. Refraction is the wave carrying on into the new medium but changing direction, because its speed changes."
          ] },
        { kind: "gap", q: "When a ray of light passes from air into glass at an angle, it slows down and bends ___ the normal.", answer: "towards", options: ["towards", "away from", "along"], why: "Air to glass: the light slows down and bends towards the normal, so the angle of refraction is smaller than the angle of incidence.",
          feedback: {
            "away from": "Bending away from the normal is what happens on the way out, when light leaves glass and goes back into air and speeds up. Going from air into glass the light slows down, so it bends towards the normal.",
            "along": "A ray only travels along the normal if it arrived along the normal in the first place. A ray that arrives at an angle keeps an angle, but a smaller one: going from air into glass it bends towards the normal."
          } },
        { kind: "mcq", q: "Which quantity does NOT change when light passes from air into glass?", options: ["Frequency", "Speed", "Wavelength", "Direction, if it arrives at an angle"], answer: 0, why: "Frequency is fixed by the source. Speed and wavelength both change, and the direction changes unless the ray is along the normal.",
          feedback: [
            "",
            "The speed does change: light slows down as it enters glass, and that change in speed is what causes refraction. The quantity that stays the same is the frequency.",
            "The wavelength does change, because the speed changes and the frequency does not. Wave speed = frequency × wavelength, so a slower wave has a shorter wavelength. The frequency stays the same.",
            "A ray that arrives at an angle does change direction; that is what refraction is. Only a ray along the normal keeps its direction. The quantity that never changes is the frequency."
          ] }
      ],
      modules: [
        {
          title: "Out of the glass",
          task: {
            kind: "mcq",
            q: "A ray of light travels from inside a glass block out into the air, meeting the boundary at an angle. What happens to it?",
            options: ["It speeds up and bends away from the normal", "It slows down and bends towards the normal", "It speeds up and bends towards the normal", "It carries straight on with no change"],
            answer: 0,
            feedback: [
              "",
              "Slowing down and bending towards the normal is what happens going into the glass from air. Coming out is the reverse: the light speeds up in air and bends away from the normal.",
              "The light does speed up in air, but a wave that speeds up bends away from the normal, not towards it. Towards the normal goes with slowing down.",
              "A ray only carries straight on if it meets the boundary along the normal. This ray arrives at an angle, so it refracts: it speeds up and bends away from the normal."
            ]
          },
          contexts: [
            { label: "Swimming pool", q: "Light from a coin on the bottom of a swimming pool travels up through the water and out into the air, meeting the surface at an angle. What happens to it?" },
            { label: "Fish tank", q: "Light from a fish passes through the glass side of its tank and out into the air of the room, meeting the boundary at an angle. What happens to it?" },
            { label: "Raindrop", q: "Sunlight inside a raindrop reaches the drop's surface at an angle and passes out into the air. What happens to it?" }
          ],
          explain: "Say, in one sentence, which way a ray bends when it speeds up.",
          levels: {
            support: {
              steps: [
                "Decide the direction: this ray is going from glass (slow) into air (fast).",
                "Faster means the ray bends away from the normal.",
                "Check it is the opposite of air to glass, which is slower and towards the normal.",
                "Pick the option that has both parts right: speed and direction."
              ],
              example: {
                q: "A ray goes from air into water at an angle. What happens to its speed and its direction?",
                steps: ["Water is denser than air, so the light slows down.", "Slowing down means it bends towards the normal."],
                answer: "It slows down and bends towards the normal."
              }
            },
            core: { hint: "Into glass: slower, towards. Out of glass: the reverse of both." },
            stretch: { extend: "Use the wave front model to explain why the ray bends away from the normal as it leaves the glass. Which end of each wave front speeds up first?" }
          },
          why: "Leaving glass for air the light speeds up, so it bends away from the normal and the angle of refraction is bigger than the angle of incidence. It is the exact reverse of entering the glass."
        },
        {
          title: "Through a parallel-sided block",
          task: { kind: "numeric", q: "A ray enters one face of a parallel-sided Perspex block with an angle of incidence of 40°. It passes through and leaves by the opposite, parallel face. What angle does the emergent ray make with the normal, in degrees?", answer: 40, tolerance: 0, units: "°", check: "40", why: "The ray bends towards the normal on the way in and away from the normal by the same amount on the way out, so it emerges at 40°, parallel to the incident ray. Exact.",
            misconceptions: [
              { answer: 0, check: "0", says: "You may have thought the ray straightens up along the normal. It does not: the bend in at the first face is undone at the second, so it leaves at the same angle it arrived, 40°." },
              { answer: 50, check: "90 - 40", says: "You subtracted from 90°. The angle to the normal is asked for, and because the two faces are parallel the ray leaves at the same angle to the normal as it entered: 40°." },
              { answer: 80, check: "2 * 40", says: "You doubled it, as if the ray bent further in the same direction on the way out. It bends back by the same amount, so it emerges parallel to the incident ray, at 40°." }
            ] },
          contexts: [
            { label: "Window pane", q: "A ray of sunlight enters a flat window pane with an angle of incidence of 40° and leaves by the inside face, which is parallel to the outside face. What angle does the emergent ray make with the normal, in degrees?" },
            { label: "Practical", q: "In the refraction practical a ray enters a glass block with an angle of incidence of 40° and leaves by the opposite, parallel face into the air. What angle does the emergent ray make with the normal, in degrees?" },
            { label: "Thick ruler", q: "A ray enters the flat face of a thick Perspex ruler with an angle of incidence of 40° and leaves by the parallel face on the other side, back into air. What angle does the emergent ray make with the normal, in degrees?" }
          ],
          explain: "Say, in one sentence, why the emergent ray is parallel to the incident ray.",
          levels: {
            support: {
              steps: [
                "At the first face the ray bends towards the normal by some amount.",
                "The two faces are parallel, so inside the block the ray meets the second face at the same angle it had after the first bend.",
                "At the second face it bends away from the normal by exactly the same amount.",
                "So it comes out at the angle it went in."
              ],
              example: {
                q: "A ray enters a parallel-sided glass block with an angle of incidence of 55°. At what angle to the normal does it leave the far face?",
                steps: ["Bends towards the normal going in.", "Bends away by the same amount coming out.", "Leaves at the original angle."],
                answer: "55°",
                checks: [{ expr: "55", value: 55, tol: 0 }]
              }
            },
            core: { hint: "In and out are mirror images of each other. Whatever bend happened at the first face is undone at the second." },
            stretch: { extend: "The ray comes out parallel to where it went in, but not along the same line. Sketch the block and explain why the emergent ray is shifted sideways, and what would make the shift bigger." }
          },
          why: "The bend towards the normal at the first face is reversed at the parallel second face, so the emergent ray is at 40° to the normal and parallel to the incident ray, displaced sideways."
        },
        {
          title: "The refraction practical, step by step",
          task: {
            kind: "order",
            q: "Put the steps of the refraction practical in the correct order.",
            items: [
              "Draw round the block, remove it, and draw a normal at right angles to one long side",
              "Draw an incident ray at 30° to the normal and replace the block on its outline",
              "Shine a narrow ray along the incident ray and mark where the light leaves the far side",
              "Remove the block, draw the emergent ray, and join the entry and exit points to draw the refracted ray",
              "Draw the normal at the exit point and measure the angles with a protractor",
              "Repeat for an angle of incidence of 50°"
            ]
          },
          explain: "Say, in one sentence, why you draw the normal before you measure any angle.",
          levels: {
            support: {
              steps: [
                "You cannot draw a ray at an angle until you have a normal to measure it from, so the normal comes first.",
                "The block has to be in place before you shine the light, and out of the way before you draw.",
                "You can only measure angles once the refracted ray is drawn.",
                "Repeating comes last."
              ],
              example: {
                q: "Put these cooking steps in order: eat, cook, buy the food, wash up.",
                steps: ["You need the food first: buy.", "Then cook, then eat.", "Washing up is last."],
                answer: "buy the food, cook, eat, wash up"
              }
            },
            core: { hint: "Draw, replace, shine, remove and draw, measure, repeat." },
            stretch: { extend: "Explain two things you would do to make the angle measurements more accurate, and why a pencil line is better than a pen line here." }
          },
          why: "Outline and normal first, then the incident ray, then light the block and mark the exit, then remove it and complete the ray paths, then measure, then repeat at a second angle."
        }
      ]
    },

    /* ───────────── 3 · colour ───────────── */
    {
      key: "colour", n: 3, title: "Visible light and colour",
      lead: "The spectrum, why a red jumper is red, what it looks like in blue light, how filters work, and transparent, translucent and opaque.",
      covers: [3],
      pretext: {
        words: [
          { word: "spectrum", means: "the range of colours that white light is made of", sentence: "A prism splits white light into a spectrum from red to violet." },
          { word: "wavelength", means: "the length of one complete wave; each colour has its own", sentence: "Red light has a longer wavelength than blue light." },
          { word: "absorb", means: "to take in light so it does not come back out", sentence: "A black car absorbs all the colours of light." },
          { word: "transmit", means: "to let light pass through", sentence: "A red filter transmits red light and absorbs the rest." },
          { word: "filter", means: "coloured material that lets its own colour through and absorbs the others", sentence: "The stage light had a blue filter in front of it." },
          { word: "opaque", means: "does not let any light through", sentence: "A wooden door is opaque, so it casts a shadow." }
        ],
        passage: [
          "White light is a mixture of all the colours of the rainbow.",
          "A prism can split it into a spectrum: red, orange, yellow, green, blue, indigo, violet.",
          "Each colour has its own wavelength.",
          "Red light has the longest wavelength and violet the shortest.",
          "Objects do not make their own colour.",
          "A red jumper reflects red light and absorbs the other colours.",
          "A white object reflects all the colours.",
          "A black object absorbs all the colours.",
          "In blue light, a red jumper looks black, because there is no red light to reflect.",
          "A colour filter lets its own colour through and absorbs the rest.",
          "Transparent materials let light pass straight through.",
          "Translucent materials let light through but scatter it.",
          "Opaque materials do not let light through at all."
        ]
      },
      sections: [
        {
          heading: "The visible spectrum",
          paragraphs: [
            "Visible light is the part of the electromagnetic spectrum that our eyes detect. Each colour has its own narrow band of wavelength and frequency. Red light has the longest wavelength, about 700 nm, and the lowest frequency; violet has the shortest wavelength, about 400 nm, and the highest frequency. One nanometre (nm) is a millionth of a millimetre.",
            "White light contains all the colours mixed together, and a prism separates them by dispersion (Chapter 2). The three primary colours of light are red, green and blue. Mixing two of them gives the secondary colours: red and green make yellow, green and blue make cyan, red and blue make magenta. All three together make white."
          ],
          tip: "In science the primary colours are red, green and blue: coloured light adding together. The red, yellow and blue of the art room are paints, which take colours away."
        },
        {
          heading: "Why objects have colour",
          paragraphs: [
            "An opaque object has colour because of which wavelengths it reflects. A red bus reflects red light strongly and absorbs the other colours. A white wall reflects all wavelengths equally; a black car absorbs all of them, which is one reason it gets so hot in the sun. The pigments in a surface decide which wavelengths it absorbs.",
            "Change the light and you change what the object can reflect. In red light a red bus still looks red, because red light is there to be reflected. In blue light there is no red to reflect: the bus absorbs the blue and looks black. A white wall takes on the colour of whatever light falls on it.",
            "An object can reflect more than one colour. Something that reflects red and blue but absorbs green looks magenta in white light. Reasoning from 'reflects' and 'absorbs' to the colour you see is exactly what the exam asks you to do."
          ],
          worked: {
            q: "A T-shirt reflects green light and blue light and absorbs red light. What colour does it look in white light? What colour does it look in red light?",
            steps: [
              "White light contains red, green and blue. The shirt absorbs the red and reflects the green and the blue.",
              "Green and blue together make cyan, so in white light the shirt looks cyan.",
              "Red light contains only red. The shirt absorbs red and has nothing to reflect.",
              "So in red light the shirt looks black."
            ],
            answer: "Cyan in white light; black in red light."
          },
          tip: "Ask two questions every time: which colours arrive, and which of those does the surface reflect? Whatever it reflects is the colour you see; nothing reflected means black."
        },
        {
          heading: "How colour filters work",
          paragraphs: [
            "A colour filter is a sheet of coloured transparent material. A red filter transmits (lets through) the red part of the light and absorbs all the other wavelengths. So white light through a red filter comes out red, and a stage lamp with a green filter in front of it gives green light.",
            "Put two different primary filters together and almost no light gets through. A red filter passes only red; a green filter then absorbs that red and has no green to pass. The result is black. A magenta filter (which passes red and blue) followed by a red filter passes red, because red can get through both.",
            "A filter does not add colour to light. It takes colours away by absorbing them; what you see is whatever is left."
          ]
        },
        {
          heading: "Transparent, translucent, opaque",
          paragraphs: [
            "Materials sort into three groups by what they do to light. Transparent materials, such as clear glass, water and Perspex, transmit light with almost no scattering, so you see a clear picture through them. A small amount of light is always absorbed, which is why very thick glass looks slightly green or grey.",
            "Translucent materials, such as frosted glass, tracing paper and thin plastic, let light through but scatter it at the surface or inside, so shapes beyond them look blurred. Opaque materials, such as wood, metal and brick, transmit no light: they absorb some of it and reflect the rest, and they cast sharp shadows.",
            "Whether an object is transparent, translucent or opaque is about transmission. Its colour is about which wavelengths it reflects or transmits."
          ]
        }
      ],
      gate: [
        { kind: "mcq", q: "Which colour of visible light has the longest wavelength?", options: ["Red", "Green", "Blue", "Violet"], answer: 0, why: "Wavelength decreases from red (about 700 nm) to violet (about 400 nm) across the visible spectrum.",
          feedback: [
            "",
            "Green sits in the middle of the visible spectrum. Red, at one end, has the longest wavelength; violet, at the other, has the shortest.",
            "Blue is near the short-wavelength end of the spectrum, next to violet. The longest wavelength belongs to red.",
            "Violet has the shortest wavelength (and the highest frequency) of the visible colours. Red has the longest wavelength. A common mix-up: the spectrum runs red to violet with wavelength getting shorter, not longer."
          ] },
        { kind: "gap", q: "In white light a blue book looks blue because it reflects blue light and ___ the other colours.", answer: "absorbs", options: ["absorbs", "transmits", "reflects"], why: "The colour of an opaque object is the colour it reflects. The wavelengths that are not reflected are absorbed.",
          feedback: {
            "transmits": "An opaque book does not let any light through, so it cannot transmit the other colours. Transmission is what filters and transparent materials do. The book absorbs the colours it does not reflect.",
            "reflects": "If the book reflected the other colours as well as blue it would reflect everything and look white. It looks blue because blue is the only colour it reflects; the rest are absorbed."
          } },
        { kind: "mcq", q: "What does a green filter do to white light?", options: ["Transmits green light and absorbs the other colours", "Reflects green light back towards the lamp", "Adds green to the white light", "Absorbs green light and transmits the rest"], answer: 0, why: "A filter works by absorbing some wavelengths and transmitting others. A green filter lets green through and absorbs the rest.",
          feedback: [
            "",
            "A filter is for light to pass through, not bounce off. A green filter transmits the green and absorbs the other colours, so green light comes out the far side.",
            "A filter cannot add anything: white light already contains green. The filter takes the other colours away by absorbing them, leaving only the green to pass through.",
            "That is the wrong way round. A green filter lets green through and stops the rest. If it absorbed green, no green light could get through and it would not be a green filter."
          ] }
      ],
      modules: [
        {
          title: "Coloured object, coloured light",
          task: {
            kind: "mcq",
            q: "A red jumper is lit only by blue light. What colour does it look?",
            options: ["Black", "Red", "Blue", "Magenta"],
            answer: 0,
            feedback: [
              "",
              "The jumper can only reflect red light, and there is no red light arriving: the lamp gives out blue only. With nothing to reflect, the jumper absorbs the blue and looks black.",
              "A red jumper absorbs blue light; it does not reflect it. Only a white or blue object would look blue here. The jumper reflects nothing, so it looks black.",
              "Magenta is red plus blue reflected together, which would need red light to be present. Only blue arrives and the jumper absorbs it, so it looks black."
            ]
          },
          contexts: [
            { label: "Red car", q: "A red car is parked under a street lamp that gives out only blue light. What colour does the car look?" },
            { label: "Red apple", q: "A red apple is placed in a dark room lit only by a blue lamp. What colour does the apple look?" },
            { label: "Red flag", q: "A red flag is lit on stage by a spotlight fitted with a blue filter. What colour does the flag look?" }
          ],
          explain: "Say, in one sentence, what the jumper does to the blue light.",
          levels: {
            support: {
              steps: [
                "Which colours arrive? Only blue.",
                "Which colours can a red jumper reflect? Only red.",
                "Is red arriving? No. So nothing is reflected; the blue is absorbed.",
                "Nothing reflected means black."
              ],
              example: {
                q: "A green leaf is lit only by red light. What colour does it look?",
                steps: ["Only red arrives.", "A green leaf reflects only green and absorbs red.", "Nothing is reflected."],
                answer: "Black"
              }
            },
            core: { hint: "An object can only reflect colours that are actually shining on it." },
            stretch: { extend: "Predict what the same red jumper looks like under a magenta light (red and blue mixed), and explain why the answer is different." }
          },
          why: "A red jumper reflects red and absorbs other colours. In blue light there is no red to reflect, so it absorbs the blue and appears black."
        },
        {
          title: "From reflects and absorbs to colour",
          task: {
            kind: "match",
            q: "Each object is in white light. Match what it does to the colours with the colour it appears.",
            pairs: [
              ["Reflects red and green, absorbs blue", "Yellow"],
              ["Reflects green and blue, absorbs red", "Cyan"],
              ["Reflects red, green and blue", "White"],
              ["Absorbs red, green and blue", "Black"],
              ["Reflects only green, absorbs the rest", "Green"]
            ]
          },
          explain: "Say, in one sentence, how you work out an object's colour from the colours it reflects.",
          levels: {
            support: {
              steps: [
                "Ignore what is absorbed: only reflected light reaches your eye.",
                "One primary reflected: that primary colour.",
                "Two primaries reflected: a secondary colour (red + green = yellow, green + blue = cyan, red + blue = magenta).",
                "All three reflected: white. None reflected: black."
              ],
              example: {
                q: "A bag reflects red and blue light and absorbs green. What colour is it in white light?",
                steps: ["Reflected: red and blue.", "Red + blue = magenta."],
                answer: "Magenta"
              }
            },
            core: { hint: "Add up only the reflected primaries. Two primaries make a secondary colour." },
            stretch: { extend: "The yellow object (reflects red and green) is now lit by cyan light (green and blue). Work out and explain the colour it appears." }
          },
          why: "The colour you see is the mix of the colours reflected: red + green = yellow, green + blue = cyan, all three = white, none = black, one primary alone = that primary."
        },
        {
          title: "Stage lights (6 marks)",
          task: {
            kind: "written",
            q: "A dancer wears a white top and green trousers. The stage is lit by one spotlight fitted with a red filter. Explain what colour the top and the trousers appear, and why. (6 marks)",
            marks: 6,
            criteria: [
              "States that the red filter transmits only red light and absorbs the other colours, so only red light reaches the stage",
              "Explains that a white object reflects all the colours of light that fall on it",
              "Concludes that the top looks red, because red is the only colour there to reflect",
              "Explains that green trousers reflect green light and absorb the other colours",
              "Concludes that the trousers look black, because no green light arrives and the red light is absorbed",
              "Uses absorb, reflect and transmit correctly, in a logical order"
            ],
            model: "The red filter transmits only red light and absorbs the other colours in the white light from the lamp, so only red light reaches the stage. A white top reflects every colour that falls on it. The only colour falling on it is red, so the top reflects red light and looks red. Green trousers reflect green light and absorb the other colours. No green light reaches the stage, so the trousers have nothing to reflect: they absorb the red light and look black."
          },
          contexts: [
            { label: "Football kit", q: "A footballer wears a white shirt and green shorts. The pitch is lit for a photo by one lamp fitted with a red filter. Explain what colour the shirt and the shorts appear, and why. (6 marks)" },
            { label: "Shop display", q: "A shop window shows a white dress next to a green dress, lit at night by a single lamp with a red filter. Explain what colour each dress appears, and why. (6 marks)" }
          ],
          explain: "Say, in one sentence, why the white top does not look white.",
          levels: {
            support: {
              steps: [
                "Start with the light: what does a red filter let through?",
                "Then the top: what does white reflect, and what is there to reflect?",
                "Then the trousers: what do they reflect, and is it arriving?",
                "Finish each part with 'so it looks …'."
              ],
              example: {
                q: "A blue scarf is lit by a lamp with a green filter. Explain the colour it appears. (3 marks)",
                steps: ["The green filter transmits only green light.", "A blue scarf reflects only blue and absorbs green.", "Nothing is reflected, so the scarf looks black."],
                answer: "The filter transmits only green; the blue scarf absorbs green and reflects nothing, so it looks black."
              }
            },
            core: { hint: "Light first, then each object: what arrives, what is reflected, so what colour." },
            stretch: { extend: "A second spotlight with a green filter is switched on as well. Explain what colour the top and the trousers appear now." }
          },
          why: "Filter: transmits red only. White top: reflects what arrives, so red. Green trousers: reflect only green, none arrives, red absorbed, so black. The marks come from linking each colour to what arrives and what is reflected."
        }
      ]
    },

    /* ───────────── 4 · lenses ───────────── */
    {
      key: "lenses", n: 4, title: "Lenses and ray diagrams",
      lead: "What convex and concave lenses do to light, when the image is real or virtual, how to draw the ray diagram, and lenses in cameras and magnifying glasses.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "convex lens", means: "a lens that is thicker in the middle and brings rays together", sentence: "A magnifying glass is a convex lens." },
          { word: "concave lens", means: "a lens that is thinner in the middle and spreads rays out", sentence: "Glasses for short sight use a concave lens." },
          { word: "principal focus", means: "the point where parallel rays meet after a convex lens", sentence: "Sunlight through a convex lens makes a bright spot at the principal focus." },
          { word: "focal length", means: "the distance from the centre of the lens to the principal focus", sentence: "A fat lens has a short focal length." },
          { word: "real image", means: "an image where the rays really meet, so it can go on a screen", sentence: "A camera makes a real image on its sensor." },
          { word: "ray diagram", means: "a scale drawing that uses two rays to find the image", sentence: "The ray diagram showed the image was upside down." }
        ],
        passage: [
          "A lens is a curved piece of glass or plastic.",
          "It forms an image by refracting light.",
          "A convex lens is thicker in the middle.",
          "It brings parallel rays together at one point.",
          "This point is called the principal focus.",
          "The distance from the lens to the principal focus is the focal length.",
          "A concave lens is thinner in the middle.",
          "It spreads parallel rays out, as if they came from the principal focus.",
          "A convex lens can make a real image, which can be caught on a screen.",
          "If the object is very close to a convex lens, the image is virtual and magnified.",
          "A concave lens always makes a virtual image.",
          "A ray diagram shows where the image is and what it is like."
        ]
      },
      sections: [
        {
          heading: "Two kinds of lens",
          paragraphs: [
            "A lens works by refraction. Light bends towards the normal as it enters the glass and away from the normal as it leaves, and because the surfaces are curved, different parts of the lens bend the light by different amounts.",
            "A convex (converging) lens is thicker in the middle than at the edges. Rays arriving parallel to the axis are brought together, or converge, at a single point called the principal focus, F. The distance from the centre of the lens to F is the focal length. A fat, strongly curved lens has a short focal length.",
            "A concave (diverging) lens is thinner in the middle. Parallel rays spread out, or diverge, after passing through it, as if they had come from a principal focus on the incoming side. In diagrams a convex lens is drawn as a line with outward arrowheads at each end, and a concave lens as a line with inward arrowheads; the principal focus is marked at the same distance on both sides."
          ],
          tip: "ConVEX: thick in the middle, conVERGES. ConCAVE: thin in the middle, like a cave, dIVERGES."
        },
        {
          heading: "Real or virtual? The lens rules",
          paragraphs: [
            "Where the image forms, and what it is like, depends on where the object is compared with the principal focus. For a convex lens: if the object is further from the lens than F, the rays that pass through the lens really do meet on the other side and form a real image. It is inverted (upside down) and it can be caught on a screen. In a camera the object is far away and the real image is much smaller than the object; if the object is between F and 2F, the real image is larger, which is how a projector works.",
            "If the object is nearer to the lens than F, the rays leaving the lens are still spreading out, so they never meet. Your eye traces them back and sees a virtual image on the same side as the object: upright, magnified, and impossible to put on a screen. This is how a magnifying glass works.",
            "A concave lens always makes a virtual image, whatever the object distance: upright, smaller than the object, and on the same side of the lens as the object."
          ],
          worked: {
            q: "An object is placed 15 cm from a convex lens that has a focal length of 10 cm. Is the image real or virtual, and which way up is it?",
            steps: [
              "Compare the object distance with the focal length: the object is further from the lens than the principal focus.",
              "For a convex lens, an object beyond F means the refracted rays really meet on the far side.",
              "So the image is real, and real images from a convex lens are inverted."
            ],
            answer: "A real, inverted image, which could be caught on a screen."
          },
          tip: "Convex lens: object beyond F gives real and inverted; object inside F gives virtual, upright and magnified. Concave lens: always virtual."
        },
        {
          heading: "Drawing a ray diagram",
          paragraphs: [
            "A ray diagram finds the image using two special rays from the top of the object. Draw the principal axis, a vertical line for the lens, and mark F on both sides at the focal length. Draw the object as an upright arrow standing on the axis.",
            "Ray 1 leaves the top of the object parallel to the axis; at the lens it refracts and passes through F on the far side. Ray 2 passes through the centre of the lens and carries straight on without bending. Where the two rays cross is the top of the image; draw the image arrow from the axis to that point. If the object is beyond F the rays cross on the far side (real, inverted). If the object is inside F the rays diverge: extend them backwards with dotted lines until they meet on the object's side (virtual, upright).",
            "For a concave lens, Ray 1 leaves the lens as if it came from F on the incoming side (extend it back with a dotted line), and Ray 2 again goes straight through the centre. The dotted ray and the straight ray meet on the object's side: a virtual, upright, smaller image."
          ],
          tip: "Use a ruler and a sharp pencil. Dotted lines for rays that are traced back, solid for rays that really travel."
        },
        {
          heading: "Lenses at work",
          paragraphs: [
            "A camera uses a convex lens to form a real, inverted, diminished image of a distant scene on the sensor or film. Moving the lens forwards or backwards changes where the image lands, so that it is sharp. Your eye does the same job with its own convex lens, forming a real, inverted image on the retina that your brain turns the right way up.",
            "A magnifying glass is a convex lens held close to a small object, inside its focal length, so the image is virtual, upright and magnified. Microscopes and telescopes combine lenses to magnify further.",
            "Your lessons also look at glasses. A short-sighted eye focuses light before it reaches the retina, so a concave lens is used to spread the rays slightly first. A long-sighted eye focuses too late, so a convex lens helps to bring the rays together. The eye itself is not examined on AQA 8463, but the lens rules behind it are."
          ]
        }
      ],
      gate: [
        { kind: "mcq", q: "What does a convex lens do to rays of light that arrive parallel to its axis?", options: ["Brings them together at the principal focus", "Spreads them out as if they came from the principal focus", "Reflects them back the way they came", "Lets them pass through without changing direction"], answer: 0, why: "A convex (converging) lens refracts parallel rays so that they meet at the principal focus.",
          feedback: [
            "",
            "Spreading parallel rays out is what a concave (diverging) lens does. A convex lens is the converging one: it brings parallel rays together at the principal focus.",
            "A lens is transparent: it refracts light passing through it, it does not reflect it like a mirror. A convex lens refracts parallel rays so they meet at the principal focus.",
            "Only a flat sheet of glass lets rays through unchanged in direction. A lens has curved faces, and a convex lens bends parallel rays inwards to meet at the principal focus."
          ] },
        { kind: "gap", q: "The distance from the centre of a lens to its principal focus is called the ___.", answer: "focal length", options: ["focal length", "optical axis", "object distance"], why: "Focal length is the distance from the lens to the principal focus. It is marked the same on both sides in a ray diagram.",
          feedback: {
            "optical axis": "The optical (principal) axis is the straight line through the centre of the lens at right angles to it; it is a line, not a distance. The distance from the lens to the principal focus is the focal length.",
            "object distance": "The object distance is how far the object is from the lens, and it changes every time you move the object. The fixed distance from the lens to its principal focus is the focal length."
          } },
        { kind: "mcq", q: "What kind of image does a concave lens form?", options: ["Always a virtual image", "Always a real image", "A real image if the object is far away", "A real image if the object is close"], answer: 0, why: "A concave lens diverges the rays, so they never meet after the lens. The image is always virtual, upright and smaller.",
          feedback: [
            "",
            "A concave lens cannot form a real image: it spreads the rays out, so they never meet to form one. Every image from a concave lens is virtual.",
            "Distance makes no difference for a concave lens, because the rays always diverge after it and never meet. The image is virtual whatever the object distance.",
            "Object position changes the image for a convex lens, not a concave one. A concave lens always diverges the rays, so its image is always virtual."
          ] }
      ],
      modules: [
        {
          title: "Inside the focal length",
          task: {
            kind: "mcq",
            q: "A small beetle is placed closer to a convex lens than its principal focus. Which describes the image?",
            options: ["Virtual, upright and magnified", "Real, inverted and magnified", "Real, inverted and smaller", "Virtual, upright and smaller"],
            answer: 0,
            feedback: [
              "",
              "A real, inverted image needs the rays to meet on the far side, which only happens when the object is beyond F. Inside F the rays diverge after the lens, so the image is virtual and upright.",
              "Real, inverted and smaller is the camera case: object far beyond F. This object is inside F, so the rays never meet; the image is virtual, upright and magnified, as in a magnifying glass.",
              "Virtual, upright and smaller describes a concave lens. A convex lens with the object inside F gives a virtual, upright image that is larger than the object."
            ]
          },
          contexts: [
            { label: "Stamp", q: "A collector holds a magnifying glass, a convex lens, over a stamp, with the stamp closer to the lens than its principal focus. Which describes the image?" },
            { label: "Map", q: "You read a map through a convex lens, holding it so the map is closer to the lens than its principal focus. Which describes the image?" },
            { label: "Jeweller", q: "A jeweller looks at a ring through a convex lens, with the ring closer to the lens than its principal focus. Which describes the image?" }
          ],
          explain: "Say, in one sentence, why this image cannot be caught on a screen.",
          levels: {
            support: {
              steps: [
                "Where is the object: beyond F or inside F? Here, inside F.",
                "Inside F, the rays leaving a convex lens spread out and never meet.",
                "Your eye traces them back to a virtual image on the object's side.",
                "That image is upright and bigger than the object: the magnifying glass."
              ],
              example: {
                q: "A tree far away is viewed through a convex lens. Describe the image.",
                steps: ["The tree is far beyond F.", "The rays meet on the far side: a real image.", "Real images from a convex lens are inverted, and a distant object gives a small one."],
                answer: "Real, inverted and smaller than the tree."
              }
            },
            core: { hint: "Inside F is the magnifying-glass case." },
            stretch: { extend: "Draw the ray diagram for this case, using dotted lines where you trace the rays back, and explain why the image appears on the same side of the lens as the beetle." }
          },
          why: "With the object inside the focal length of a convex lens the refracted rays diverge, so the image is virtual, on the same side as the object, upright and magnified."
        },
        {
          title: "Which image, which device?",
          task: {
            kind: "match",
            q: "Match each use of a lens to the image it forms.",
            pairs: [
              ["Camera: convex lens, object far away", "Real, inverted and smaller than the object"],
              ["Magnifying glass: convex lens, object inside F", "Virtual, upright and larger than the object"],
              ["Concave lens, any object distance", "Virtual, upright and smaller than the object"],
              ["Projector: convex lens, object between F and 2F", "Real, inverted and larger than the object"]
            ]
          },
          explain: "Say, in one sentence, what all real images from a convex lens have in common.",
          levels: {
            support: {
              steps: [
                "Concave lens: always virtual, upright, smaller. Match that one first.",
                "Convex with object inside F: virtual, upright, magnified (the magnifying glass).",
                "Convex with object beyond F: real and inverted. Far away gives small; between F and 2F gives large.",
                "Real goes with inverted; virtual goes with upright."
              ],
              example: {
                q: "Which image does the eye form on the retina, and is it like a camera or a magnifying glass?",
                steps: ["The eye's lens is convex and the object is well beyond F.", "So the image is real and inverted, and smaller.", "That is the camera case."],
                answer: "Real, inverted and smaller: like a camera."
              }
            },
            core: { hint: "Real pairs with inverted; virtual pairs with upright. Then decide bigger or smaller." },
            stretch: { extend: "Explain why a camera can record its image on a sensor but a magnifying glass cannot project its image onto a piece of paper." }
          },
          why: "Camera: real, inverted, diminished. Magnifying glass: virtual, upright, magnified. Concave lens: virtual, upright, diminished. Projector: real, inverted, magnified. Real images are always inverted; virtual ones upright."
        },
        {
          title: "Build the ray diagram",
          task: {
            kind: "order",
            q: "Put the steps for drawing the ray diagram of a convex lens forming a real image in the correct order.",
            items: [
              "Draw the principal axis, the lens line, and mark F at the focal length on both sides",
              "Draw the object as an upright arrow on the axis, further from the lens than F",
              "Draw ray 1 from the top of the object parallel to the axis, refracting at the lens to pass through F on the far side",
              "Draw ray 2 from the top of the object straight through the centre of the lens",
              "Mark where the two rays cross and draw the image arrow from the axis to that point",
              "Label the image: real and inverted"
            ]
          },
          explain: "Say, in one sentence, why the ray through the centre of the lens is drawn straight.",
          levels: {
            support: {
              steps: [
                "You need the axis, lens and F before you can place anything else.",
                "The object goes on before any rays can leave it.",
                "Two rays from the top of the object: parallel-then-through-F, and straight through the centre.",
                "The image is where they cross; label it last."
              ],
              example: {
                q: "Put these steps for plotting a graph in order: draw axes, plot the points, draw the line of best fit, label the axes.",
                steps: ["Axes first, then labels.", "Then the points.", "The line of best fit comes last."],
                answer: "draw axes, label the axes, plot the points, draw the line of best fit"
              }
            },
            core: { hint: "Set up the diagram, place the object, draw two rays, find the crossing, label." },
            stretch: { extend: "Draw the same diagram with the object moved to inside F and explain what changes about the two rays and about the image." }
          },
          why: "Axis and F first, then the object, then the two construction rays (parallel-to-F and through-the-centre), then the image where they cross, then the label."
        }
      ]
    },

    /* ───────────── 5 · magnification ───────────── */
    {
      key: "magnification", n: 5, title: "Magnification",
      lead: "The equation, its units (none), converting mm and cm, rearranging it, and the lens practical where you measure it.",
      covers: [4],
      pretext: {
        words: [
          { word: "magnification", means: "how many times bigger the image is than the object", sentence: "A magnification of 3 means the image is three times as tall as the object." },
          { word: "image height", means: "how tall the image is", sentence: "She measured the image height on the screen with a ruler." },
          { word: "object height", means: "how tall the real object is", sentence: "The object height of the crosswires was 3 cm." },
          { word: "ratio", means: "one quantity divided by another, so the units cancel", sentence: "Magnification is a ratio, so it has no units." },
          { word: "magnified", means: "bigger than the object", sentence: "A magnifying glass gives a magnified image." },
          { word: "diminished", means: "smaller than the object", sentence: "A camera gives a diminished image on its sensor." }
        ],
        passage: [
          "Magnification tells you how many times bigger the image is than the object.",
          "Magnification = image height ÷ object height.",
          "If the image is 6 cm tall and the object is 2 cm tall, the magnification is 3.",
          "Magnification is a ratio, so it has no units.",
          "Measure both heights in the same unit, such as cm or mm.",
          "A magnification bigger than 1 means the image is larger than the object.",
          "We say the image is magnified.",
          "A magnification smaller than 1 means the image is smaller than the object.",
          "We say the image is diminished.",
          "A camera makes a diminished image.",
          "A magnifying glass makes a magnified image.",
          "You can rearrange the equation to find the object height or the image height."
        ]
      },
      sections: [
        {
          heading: "The magnification equation",
          paragraphs: [
            "Magnification compares the size of the image with the size of the object: magnification = image height ÷ object height. On the AQA equation sheet it is written with image height on top. Magnification is a ratio, one length divided by another, so the units cancel and the answer has no units.",
            "The two heights must be in the same unit before you divide. If the image is in centimetres and the object in millimetres, convert one of them first: there are 10 mm in 1 cm, so 4 mm is 0.4 cm.",
            "A magnification greater than 1 means the image is bigger than the object (magnified); less than 1 means it is smaller (diminished); exactly 1 means the same size, as in a plane mirror."
          ],
          worked: {
            q: "In the lens practical a pupil measures the image of the crosswires as 7.5 cm tall. The crosswires themselves are 3 cm tall. Calculate the magnification.",
            steps: [
              "Write the equation: magnification = image height ÷ object height.",
              "Both heights are in cm, so no conversion is needed.",
              "Magnification = 7.5 ÷ 3 = 2.5.",
              "No units: magnification is a ratio."
            ],
            answer: "2.5 (no units)",
            checks: [{ expr: "7.5 / 3", value: 2.5, tol: 0 }]
          },
          tip: "Write the unit next to each height before you divide. If they differ, convert first. Never write a unit after the magnification."
        },
        {
          heading: "Rearranging the equation",
          paragraphs: [
            "Sometimes you know the magnification and one height. Rearrange: image height = magnification × object height, and object height = image height ÷ magnification. Use the triangle: image height on top, magnification and object height underneath.",
            "Check that your answer makes sense. A magnifying glass with magnification 5 must give an image 5 times taller than the object, so if your 'object' comes out bigger than the image, the equation is upside down."
          ],
          worked: {
            q: "A projector gives a magnification of 40. The image of a slide on the screen is 1.2 m tall. How tall is the picture on the slide, in centimetres?",
            steps: [
              "Object height = image height ÷ magnification.",
              "Convert to cm first: 1.2 m is 120 cm.",
              "Object height = 120 ÷ 40 = 3 cm."
            ],
            answer: "3 cm",
            checks: [{ expr: "120 / 40", value: 3, tol: 0 }, { expr: "1.2 * 100", value: 120, tol: 0 }]
          },
          tip: "Cover the quantity you want on the triangle: what is left tells you whether to multiply or divide."
        },
        {
          heading: "Investigating a convex lens",
          paragraphs: [
            "Set up a metre rule with a lamp and crosswires (the object) at one end. Put the convex lens at the 10 cm mark, so the object distance is 10 cm, and move a white screen along the rule until the image of the crosswires is sharp.",
            "Measure the height of the object and the height of its image, using the grid on the screen, and record the image distance from the lens to the screen. Move the lens to the 20 cm, 30 cm, 40 cm, 50 cm and 60 cm marks and repeat. Calculate the magnification for each object distance.",
            "You should find that the image is real and inverted, and that as the object distance increases the image gets smaller and the magnification falls. When the object is inside the focal length, no sharp image can be found on the screen at all, because the image is virtual."
          ],
          tip: "Your table needs five columns: object distance, image distance, object height, image height, magnification. Only the last column has no unit in its heading."
        }
      ],
      gate: [
        { kind: "numeric", q: "The image of an insect is 6 cm tall. The insect itself is 2 cm tall. Calculate the magnification.", answer: 3, tolerance: 0, units: "", check: "6 / 2", why: "Magnification = image height ÷ object height = 6 ÷ 2 = 3. No units. Exact.",
          misconceptions: [
            { answer: 0.33, check: "2 / 6", says: "You divided the object height by the image height, the wrong way up. Image height goes on top: 6 ÷ 2 = 3." },
            { answer: 12, check: "6 * 2", says: "You multiplied the two heights. Magnification is a division: image height ÷ object height = 6 ÷ 2 = 3." },
            { answer: 4, check: "6 - 2", says: "You subtracted. Magnification is how many times bigger, not how much bigger, so divide: 6 ÷ 2 = 3." }
          ] },
        { kind: "mcq", q: "What is the unit of magnification?", options: ["It has no units", "cm", "mm", "m"], answer: 0, why: "Magnification is a ratio of two lengths, so the units cancel.",
          feedback: [
            "",
            "Centimetres are what you measure the heights in, but when you divide cm by cm the units cancel. Magnification is a ratio with no units.",
            "Millimetres are a unit of length. Magnification is one length divided by another, so the units cancel and it has none.",
            "Metres measure a length. Magnification is not a length but a ratio: image height ÷ object height, with the units cancelling."
          ] },
        { kind: "gap", q: "Magnification = image height ÷ ___ height.", answer: "object", options: ["object", "lens", "focal"], why: "Magnification = image height ÷ object height.",
          feedback: {
            "lens": "The lens does not have a height in this equation. Magnification compares the image with the real thing: image height ÷ object height.",
            "focal": "Focal length is a distance along the axis, not a height, and it does not appear in the magnification equation. Magnification = image height ÷ object height."
          } }
      ],
      modules: [
        {
          title: "Mixed units",
          task: { kind: "numeric", q: "Through a magnifying glass, the image of an ant is 4.8 cm tall. The ant itself is 4 mm tall. Calculate the magnification.", answer: 12, tolerance: 0, units: "", check: "4.8 / 0.4", why: "Convert first: 4 mm is 0.4 cm. Magnification = 4.8 ÷ 0.4 = 12. No units. Exact.",
            misconceptions: [
              { answer: 1.2, check: "4.8 / 4", says: "You divided 4.8 by 4 without converting. One height is in cm and the other in mm. Change 4 mm to 0.4 cm first: 4.8 ÷ 0.4 = 12." },
              { answer: 0.083, check: "0.4 / 4.8", says: "You converted correctly but divided the wrong way up. Image height goes on top: 4.8 ÷ 0.4 = 12." },
              { answer: 120, check: "4.8 / 0.04", says: "You converted 4 mm to 0.04 cm. There are 10 mm in 1 cm, so 4 mm is 0.4 cm, and 4.8 ÷ 0.4 = 12." }
            ] },
          contexts: [
            { label: "Seed", q: "Seen through a hand lens, the image of a seed is 4.8 cm long. The seed is 4 mm long. Calculate the magnification." },
            { label: "Grain of sand", q: "Under a magnifying glass the image of a grain of sand is 4.8 cm across. The grain is 4 mm across. Calculate the magnification." },
            { label: "Watch screw", q: "A watchmaker's lens shows a screw head as an image 4.8 cm across. The screw head is 4 mm across. Calculate the magnification." }
          ],
          explain: "Say, in one sentence, why you must convert the millimetres before you divide.",
          levels: {
            support: {
              steps: [
                "Write both heights with their units: image 4.8 cm, object 4 mm.",
                "They differ, so convert: 10 mm = 1 cm, so 4 mm = 0.4 cm.",
                "Magnification = image height ÷ object height = 4.8 ÷ 0.4.",
                "Write the answer with no units."
              ],
              example: {
                q: "The image of a seed is 3.5 cm long and the seed is 5 mm long. Calculate the magnification.",
                steps: ["Convert: 5 mm = 0.5 cm.", "Magnification = 3.5 ÷ 0.5 = 7.", "No units."],
                answer: "7",
                checks: [{ expr: "3.5 / 0.5", value: 7, tol: 0 }]
              }
            },
            core: { hint: "Same units first. 10 mm in a cm." },
            stretch: { extend: "Explain why you would get the same magnification if you converted the other way, turning 4.8 cm into millimetres instead, and show it." }
          },
          why: "4 mm = 0.4 cm. Magnification = 4.8 ÷ 0.4 = 12. A magnification has no units because it is a length divided by a length in the same unit."
        },
        {
          title: "Finding the object",
          task: { kind: "numeric", q: "A convex lens gives a magnification of 6. The image is 15 cm tall. Calculate the height of the object, in cm.", answer: 2.5, tolerance: 0, units: "cm", check: "15 / 6", why: "Object height = image height ÷ magnification = 15 ÷ 6 = 2.5 cm. Exact.",
            misconceptions: [
              { answer: 90, check: "15 * 6", says: "You multiplied. That would make the object six times bigger than its own magnified image. Object height = image height ÷ magnification = 15 ÷ 6 = 2.5 cm." },
              { answer: 0.4, check: "6 / 15", says: "You divided the magnification by the image height, upside down. Object height = image height ÷ magnification = 15 ÷ 6 = 2.5 cm." },
              { answer: 9, check: "15 - 6", says: "You subtracted. Magnification is a ratio, not a difference: object height = 15 ÷ 6 = 2.5 cm." }
            ] },
          contexts: [
            { label: "Projector", q: "A projector lens gives a magnification of 6. The image on the screen is 15 cm tall. Calculate the height of the picture on the slide, in cm." },
            { label: "Enlarger", q: "A photographic enlarger lens gives a magnification of 6. The print is 15 cm tall. Calculate the height of the negative, in cm." },
            { label: "Coin", q: "A magnifying glass gives a magnification of 6 and shows an image of a coin 15 cm across. Calculate the real width of the coin, in cm." }
          ],
          explain: "Say, in one sentence, how you can tell the object must be smaller than 15 cm before you calculate.",
          levels: {
            support: {
              steps: [
                "Cover 'object height' on the triangle: image height is over magnification, so divide.",
                "Object height = image height ÷ magnification.",
                "Put the numbers in and divide.",
                "The object is a length, so give the unit: cm."
              ],
              example: {
                q: "A lens gives a magnification of 5. The image is 12 cm tall. How tall is the object?",
                steps: ["Object height = image height ÷ magnification.", "12 ÷ 5 = 2.4 cm."],
                answer: "2.4 cm",
                checks: [{ expr: "12 / 5", value: 2.4, tol: 0 }]
              }
            },
            core: { hint: "The image is 6 times taller than the object, so the object is the image divided by 6." },
            stretch: { extend: "Explain why the object height has a unit (cm) but the magnification you were given does not." }
          },
          why: "Rearranging magnification = image height ÷ object height gives object height = image height ÷ magnification = 15 ÷ 6 = 2.5 cm."
        },
        {
          title: "Smaller than the object",
          task: { kind: "numeric", q: "A camera lens forms an image of a person who is 1.8 m tall. The image on the sensor is 3.6 cm tall. Calculate the magnification.", answer: 0.02, tolerance: 0, units: "", check: "3.6 / 180", why: "Convert: 1.8 m is 180 cm. Magnification = 3.6 ÷ 180 = 0.02. No units, and less than 1 because the image is diminished. Exact.",
            misconceptions: [
              { answer: 2, check: "3.6 / 1.8", says: "You divided centimetres by metres without converting. 1.8 m is 180 cm, so magnification = 3.6 ÷ 180 = 0.02." },
              { answer: 50, check: "180 / 3.6", says: "You divided the wrong way up: 50 is how many times smaller the image is. Magnification = image height ÷ object height = 3.6 ÷ 180 = 0.02." },
              { answer: 0.5, check: "1.8 / 3.6", says: "You divided metres by centimetres, upside down and without converting. Convert 1.8 m to 180 cm, then 3.6 ÷ 180 = 0.02." }
            ] },
          contexts: [
            { label: "Door", q: "A camera photographs a door 1.8 m tall. The image on the sensor is 3.6 cm tall. Calculate the magnification." },
            { label: "Goalkeeper", q: "A sports photographer's camera forms an image of a goalkeeper 1.8 m tall. The image on the sensor is 3.6 cm tall. Calculate the magnification." }
          ],
          explain: "Say, in one sentence, what a magnification less than 1 tells you about the image.",
          levels: {
            support: {
              steps: [
                "Write both heights with units: image 3.6 cm, object 1.8 m.",
                "Convert so they match: 1.8 m = 180 cm.",
                "Magnification = image height ÷ object height = 3.6 ÷ 180.",
                "Expect a small answer: a camera image is diminished."
              ],
              example: {
                q: "A camera forms an image 3 cm tall of a tree 6 m tall. Calculate the magnification.",
                steps: ["6 m = 600 cm.", "Magnification = 3 ÷ 600 = 0.005.", "Less than 1: diminished, as expected for a camera."],
                answer: "0.005",
                checks: [{ expr: "3 / 600", value: 0.005, tol: 0 }]
              }
            },
            core: { hint: "Metres to centimetres first. The answer should be much less than 1." },
            stretch: { extend: "The photographer steps back so the person's image is only 1.8 cm tall. Calculate the new magnification and explain what has happened to it." }
          },
          why: "1.8 m = 180 cm. Magnification = 3.6 ÷ 180 = 0.02, less than 1 because the camera forms a diminished image."
        }
      ]
    },

    /* ───────────── 6 · exam skills ───────────── */
    {
      key: "exam-skills", n: 6, title: "Exam skills: ray diagrams and 6-mark answers",
      lead: "How to draw diagrams the examiner can credit, read the command word, plan, and write the 6-mark answers this unit asks for.",
      covers: [1, 2, 3, 4, 5],
      pretext: {
        words: [
          { word: "command word", means: "the word that tells you what kind of answer to give", sentence: "The command word 'explain' means you must give reasons." },
          { word: "describe", means: "say what happens or what you do, in order", sentence: "Describe how you would measure the angle of refraction." },
          { word: "explain", means: "give reasons, linked with because and so", sentence: "Explain why the red flag looks black in blue light." },
          { word: "labelled diagram", means: "a drawing with the key parts named", sentence: "A labelled diagram showed the normal and both angles." },
          { word: "method", means: "the steps of a practical, in order", sentence: "Her method listed every step of the glass block practical." }
        ],
        passage: [
          "Light questions often ask you to draw as well as write.",
          "Use a ruler and a sharp pencil for every ray.",
          "Put an arrow on each ray to show which way the light travels.",
          "Draw the normal as a dotted line at right angles to the surface.",
          "Label the angle of incidence and the angle of reflection or refraction.",
          "In a lens diagram, mark the principal focus on both sides.",
          "Read the command word before you write.",
          "Describe means say what happens, in order.",
          "Explain means give reasons, using because and so.",
          "Six-mark answers are marked on the whole answer, not word by word.",
          "Plan the key words first, then write them in full sentences.",
          "Check that every number has a unit, except magnification."
        ]
      },
      sections: [
        {
          heading: "Drawing marks: ray diagrams the examiner can follow",
          paragraphs: [
            "Ray diagrams earn marks for specific features, so give the examiner each one clearly. For reflection: a straight incident ray and reflected ray drawn with a ruler, arrows on both, a dotted normal at right angles to the surface, and angles that look equal and are labelled i and r.",
            "For refraction into a block: the ray bends towards the normal at the first face and away from the normal at the second, and leaves parallel to the incident ray. For a convex lens: two rays from the top of the object, one parallel to the axis then through F, one straight through the centre, with the image drawn where they cross, and dotted lines for any ray that is traced back.",
            "Common lost marks: freehand wavy rays; no arrows; angles measured from the surface instead of the normal; the normal missing; the image arrow not drawn; a magnification written with a unit."
          ],
          tip: "Dotted: the normal, or a ray traced backwards. Solid: a ray that really travels."
        },
        {
          heading: "Command words and planning",
          paragraphs: [
            "Describe wants what happens, in order: describe how to carry out the refraction practical. Explain wants reasons: explain why a red object looks black in blue light. Compare wants similarities and differences side by side: compare the images formed by a camera and a magnifying glass.",
            "Plan before you write. Jot the key words down the margin in the order you will use them, then turn each into a full sentence. Link reasons with because and so, and use the unit's words exactly: normal, angle of incidence, refract, absorb, transmit, principal focus, virtual."
          ],
          worked: {
            q: "Plan an answer to: 'Explain why a white shirt looks red under a red stage light, and why green trousers look black.' (6 marks)",
            steps: [
              "Command word: explain, so every point needs a because or a so.",
              "Plan, the light: red filter transmits red only, absorbs the rest.",
              "Plan, the shirt: white reflects all colours that arrive; only red arrives; so red.",
              "Plan, the trousers: green reflects only green; no green arrives; red absorbed; so black.",
              "Write it up in that order, using transmit, reflect and absorb."
            ],
            answer: "A six-point plan: filter transmits red; white reflects whatever arrives; so red; green reflects only green; none arrives and red is absorbed; so black."
          },
          tip: "For 'compare', use 'both' for similarities and 'whereas' or 'however' for differences."
        },
        {
          heading: "Levels of response: how 6-markers are marked",
          paragraphs: [
            "The examiner reads the whole answer and places it in a level. The top level is detailed, accurate, logically ordered and uses the key words correctly. The middle level has most of the physics but with gaps or a muddled order. The bottom level is a few correct points with no reasoning joining them.",
            "A short, accurate, well-ordered answer beats a long muddled one. Finish by checking: command word answered? Key words used? Every step linked? A unit on every length, and none on the magnification?"
          ],
          tip: "Count your points before you write: a 6-marker usually needs six linked statements."
        }
      ],
      gate: [
        { kind: "mcq", q: "In a ray diagram, how should the normal be drawn?", options: ["As a dotted line at right angles to the surface where the ray hits", "As a solid line along the surface", "As a curved line through the lens", "It is not needed if the angles are labelled"], answer: 0, why: "The normal is a construction line at 90° to the surface at the point of incidence, drawn dotted. Every angle is measured from it.",
          feedback: [
            "",
            "A line along the surface is the mirror or block itself, not the normal. The normal stands at right angles to the surface where the ray hits, and is drawn dotted.",
            "The normal is always a straight line at 90° to the surface at the point where the ray meets it; it is never curved. In a lens diagram the straight line through the lens centre is the axis, not a normal.",
            "The angles are measured from the normal, so without it the labels mean nothing and the angle marks are lost. Draw it dotted, at right angles to the surface."
          ] },
        { kind: "gap", q: "The command word ___ asks you to give reasons, linked with because and so.", answer: "explain", options: ["explain", "describe", "state"], why: "'Explain' asks why. 'Describe' asks what happens; 'state' asks for a short fact.",
          feedback: {
            "describe": "Describe asks what happens or what you do, in order, with no reasons needed. Many pupils describe when asked to explain and lose the reasoning marks. The word that asks for reasons is explain.",
            "state": "State asks for a short fact or a value, with no reasons. The word that asks for reasons linked with because and so is explain."
          } },
        { kind: "mcq", q: "A pupil writes the answer to a magnification calculation as '2.5 cm'. What is wrong?", options: ["Magnification is a ratio and has no units", "The answer should be in millimetres", "The answer should be in metres", "Magnification must be a whole number"], answer: 0, why: "Magnification is image height ÷ object height. The units cancel, so it has none.",
          feedback: [
            "",
            "Changing cm to mm does not help: no unit of length belongs on a magnification. It is a length divided by a length, so the units cancel.",
            "Metres are still a unit of length, and a magnification has no unit at all: it is a ratio of two heights measured in the same unit.",
            "A magnification can be any positive number, including a decimal like 2.5 or a value below 1 for a diminished image. The error here is the unit: a ratio has none."
          ] }
      ],
      modules: [
        {
          title: "Describe the refraction practical (6 marks)",
          task: {
            kind: "written",
            q: "Describe how you would investigate the refraction of light by a rectangular glass block, including how you would make your results accurate. (6 marks)",
            marks: 6,
            criteria: [
              "Draw round the block on paper, remove it and draw a normal at right angles to one side",
              "Draw an incident ray at a chosen angle to the normal (e.g. 30°) and replace the block on its outline",
              "Shine a narrow ray from a ray box along the incident ray and mark the emergent ray with two dots",
              "Remove the block, draw the emergent ray and the refracted ray inside the block, draw the normal at the exit point",
              "Measure the angle of incidence and the angle of refraction with a protractor and repeat for other angles (e.g. 50°)",
              "Accuracy: narrow slit, sharp pencil, dots far apart, normal drawn with a set square, repeat readings"
            ],
            model: "Place the rectangular block in the middle of a sheet of paper and draw round it. Remove the block and use a set square to draw a normal at right angles to one long side. With a protractor, draw an incident ray at 30° to the normal, then put the block back exactly on its outline. Using a ray box with a narrow slit, shine the ray along the incident line and mark two pencil dots, far apart, on the ray where it comes out of the far side. Remove the block, join the dots to draw the emergent ray, and join the entry and exit points to draw the refracted ray inside the block. Draw a normal at the exit point and measure the angle of incidence and the angle of refraction with a protractor. Repeat for an angle of incidence of 50° and other angles, and repeat each reading to check it. A narrow slit, a sharp pencil and widely spaced dots make the lines and angles more accurate."
          },
          contexts: [
            { label: "Perspex block", q: "Describe how you would investigate the refraction of light by a rectangular Perspex block, including how you would make your results accurate. (6 marks)" },
            { label: "Comparing substances", q: "Your teacher asks you to compare refraction in glass and in Perspex. Describe how you would investigate the refraction of light by one rectangular block, including how you would make your results accurate. (6 marks)" }
          ],
          explain: "Say, in one sentence, which step in your method makes the angle measurements more accurate, and why.",
          levels: {
            support: {
              steps: [
                "Set-up: draw round the block, remove it, draw the normal.",
                "Rays: draw the incident ray at 30°, replace the block, shine the ray, mark the exit with two dots.",
                "Drawing: remove the block, draw the emergent and refracted rays, draw the exit normal.",
                "Measuring and accuracy: protractor, repeat at 50°, narrow slit, sharp pencil, dots far apart."
              ],
              example: {
                q: "Describe how you would measure the angle of reflection from a plane mirror. (3 marks)",
                steps: ["Draw along the mirror, shine a narrow ray at it and mark both rays with dots.", "Remove the mirror, draw the rays and the normal at the point of incidence.", "Measure the angle between the reflected ray and the normal with a protractor."],
                answer: "Mark the mirror line and both rays, remove the mirror, draw the rays and the normal, then measure the reflected ray's angle from the normal with a protractor."
              }
            },
            core: { hint: "Four blocks: set up, shine and mark, remove and draw, measure and improve." },
            stretch: { extend: "Add one sentence on how you would use the same method to compare glass with Perspex, and what you would keep the same for a fair comparison." }
          },
          why: "A top answer gives the steps in order (outline, normal, incident ray, block, shine, mark, remove, draw, measure, repeat) and names specific accuracy improvements, not just 'be careful'."
        },
        {
          title: "Explain the magnifying glass (6 marks)",
          task: {
            kind: "written",
            q: "A magnifying glass is a convex lens. Explain, with reference to the principal focus, how it forms the image you see, and describe that image. (6 marks)",
            marks: 6,
            criteria: [
              "States that the object is placed closer to the lens than the principal focus (inside the focal length)",
              "States that the lens refracts the light from the object",
              "Explains that the rays leaving the lens still diverge, so they never meet",
              "Explains that the eye traces the rays back to where they appear to come from, on the same side as the object",
              "Describes the image as virtual, upright and magnified",
              "States that the image cannot be formed on a screen because the rays do not actually meet there"
            ],
            model: "The object is held closer to the convex lens than its principal focus. The lens refracts the light from the object, but because the object is inside the focal length the rays leaving the lens are still spreading out, so they never meet on the far side. The eye traces these diverging rays back in straight lines to the point they appear to come from, which is on the same side of the lens as the object. The image is therefore virtual: no light actually reaches it, so it cannot be caught on a screen. It is upright and magnified, larger than the object."
          },
          explain: "Say, in one sentence, why the word 'virtual' is the key to this answer.",
          levels: {
            support: {
              steps: [
                "Where is the object? Inside F.",
                "What does the lens do? Refracts the light, but the rays still diverge.",
                "What does the eye do? Traces them back to a point on the object's side.",
                "Describe the image: virtual, upright, magnified; no screen can catch it."
              ],
              example: {
                q: "Explain why a camera can form its image on a sensor. (3 marks)",
                steps: ["The object is far beyond the principal focus.", "The convex lens refracts the rays so they really meet on the far side.", "Where they meet is a real image, so a sensor there records it."],
                answer: "The object is beyond F, the lens brings the rays together so they actually meet, and that real image can be recorded on a sensor placed where they meet."
              }
            },
            core: { hint: "Inside F, rays diverge, eye traces back, virtual upright magnified." },
            stretch: { extend: "Add a sentence on what changes if the object is moved to beyond the principal focus, and why you would then need a screen to see the image clearly." }
          },
          why: "The physics chain is: object inside F, refraction, rays diverge, traced back by the eye, virtual image on the object's side, upright and magnified, not catchable on a screen."
        },
        {
          title: "Compare mirror and paper (6 marks)",
          task: {
            kind: "written",
            q: "Compare what happens to light when it reflects from a plane mirror and when it reflects from a sheet of white paper, and explain why you see an image in one but not the other. (6 marks)",
            marks: 6,
            criteria: [
              "States that both surfaces reflect light and that every ray obeys the law of reflection (angle of incidence = angle of reflection)",
              "Mirror: smooth surface, so all the rays in a beam reflect in the same direction (specular reflection)",
              "Paper: rough surface on a tiny scale, so the rays reflect at different angles and scatter (diffuse reflection)",
              "Explains that the ordered reflection from the mirror lets the eye trace the rays back to form an image",
              "Explains that the scattered rays from paper cannot be traced back to one place, so no image forms",
              "Uses comparison words (both, whereas, however) to set the two side by side"
            ],
            model: "Both the mirror and the paper reflect light, and at every point the angle of incidence equals the angle of reflection. However, the mirror is smooth, so every ray in a beam meets the surface at the same angle and all the reflected rays leave in the same direction. This is specular reflection. The paper is rough on a tiny scale, so neighbouring rays meet parts of the surface facing different ways and reflect in many different directions. This is diffuse reflection. Because the rays from the mirror stay ordered, your eye can trace them back to where they appear to come from, and you see an image. The scattered rays from the paper cannot be traced back to a single place, so you see the paper itself but no image in it."
          },
          explain: "Say, in one sentence, what the mirror and the paper have in common.",
          levels: {
            support: {
              steps: [
                "Start with 'Both …': both reflect, both obey the law of reflection.",
                "Then 'However, the mirror …': smooth, same direction, specular.",
                "Then 'The paper …': rough, many directions, diffuse.",
                "Finish with the image: ordered rays can be traced back; scattered rays cannot."
              ],
              example: {
                q: "Compare a real image and a virtual image. (3 marks)",
                steps: ["Both are images formed by light from an object.", "A real image is where rays actually meet, so it can go on a screen.", "A virtual image is where rays only appear to come from, so it cannot."],
                answer: "Both are images of an object, but a real image forms where rays actually meet and can be caught on a screen, whereas a virtual image is only where the rays appear to come from and cannot."
              }
            },
            core: { hint: "Same law, different smoothness, different outcome. Use both / however / whereas." },
            stretch: { extend: "Add a sentence explaining why a sheet of paper can still be seen clearly from every angle of the room, while a mirror seen from the side shows almost nothing of itself." }
          },
          why: "A top answer sets the two side by side: same law of reflection for every ray, but smooth versus rough gives specular versus diffuse, and only ordered (specular) reflection can be traced back to an image."
        }
      ]
    }
  ],

  sources: {
    deckDump: "sc_ks4_phys_p14_light.txt",
    decksUsed: [
      "P14.1 Reflection of light  .pptx",
      "P14.2 Refraction of light.pptx",
      "P14.3 Light and colour .pptx",
      "P14.4 Lenses .pptx",
      "P14.5 Using lenses .pptx"
    ],
    notes: "Lesson titles and order from the five department decks. House furniture skipped (blue Prior Learning/Components sheet, the P13 EM-spectrum Recall rounds on four decks and the P2 thermal-physics Recall round on P14.3, the Bohr-model bell task on P14.3, the Leroy Hood quotation on P14.5 slide 3, the mirror-writing gag word on P14.1 slide 15 (a Disney/Sherman coinage, in copyright)). Board answers on the Grade 3-4 to 7-8 Progress Check slides were used only to see what the deck teaches; no answer slide is reproduced and every question is original. Deck arithmetic errors on P14.4 slide 38 were not carried over (see NOTES.md). Explanations are original and written to AQA 8463 4.6.2.4, 4.6.2.5, 4.6.2.6 and 4.6.1.2; the wave front explanation of refraction is marked (Higher). The unit is Physics only: lenses, colour, specular/diffuse reflection and Required practical 20 are not in Combined Science 8464. Deck content beyond the specification (dispersion in a prism, the eye and short/long sight, the department's lens-magnification practical) is kept briefly because the department teaches it, and is flagged in NOTES.md. astra/2 (17 Oct 2026): feedback, misconceptions, explain, contexts, glossary chapters, connections and spacing included from the start; no meta.constellation (engine lays the stars out); no pretext.l1 (translation pass to follow)."
  }
};
