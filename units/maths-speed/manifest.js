// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest (schema astra/2) — Maths, Year 7, Unit 13: Speed, Distance and Time.
// Every numeric item carries `check`: a plain Python expression recomputed by verify.py.
//   numeric / gap      -> check evaluates to the answer
//   mcq (numbers)      -> check evaluates to the value of the one correct option
//   mcq (statements)   -> check evaluates to a list of booleans, one per option, exactly one True
//   order              -> check evaluates to the list of item values in the correct order
//   match              -> check evaluates to the list of right-hand values, pair by pair
//   worked / example   -> check evaluates to the value(s) in `answer`
//   misconceptions[]   -> each `check` reproduces that wrong answer from the pupil's likely working
// Conversion factors (60, 24, 12, 365, 366, 1000, 100) may appear in a check without appearing in the
// question; every other number in a check must come from the question. verify.py also recomputes every
// pure-arithmetic statement (=, <, >) in prose, and every time-conversion sentence such as
// "2.5 hours is 2 hours and 30 minutes".
// astra/2: feedback on every mcq / gap, misconceptions on every numeric item, `explain` on every module,
// `contexts` on twelve modules, glossary chapters + connections, meta.spacing. No widgets (nothing in this
// unit is a number line or a circuit), no meta.constellation, no pretext.l1 (translation pass comes later).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["maths-speed"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "maths-speed",
    subjectKey: "maths",
    subject: "Mathematics",
    board: "AQA",
    spec: "KS3 → 8300",
    specRef: "Measures: units of time; compound measures: speed, distance and time; distance–time graphs",
    year: 7,
    tier: "KS3",
    title: "Speed, Distance and Time",
    sub: "Year 7, Unit 13: converting units of time, reading timetables, calculating speed, and telling the story of a journey from a distance–time graph.",
    bigQuestion: "How do we measure time and movement, and how do speed, distance and time fit together?",
    lessonCount: 8,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Convert between milliseconds, seconds, minutes and hours", question: "How do we change between milliseconds, seconds, minutes and hours?", keywords: ["convert", "millisecond", "fraction of an hour", "decimal hours"] },
    { n: 2, title: "Convert between hours, days and years", question: "How many hours are in a day and days in a year, and how do we use that to convert?", keywords: ["day", "month", "leap year", "convert"] },
    { n: 3, title: "Solve problems with tables and timetables", question: "How do we read a timetable and work out how long a journey takes?", keywords: ["timetable", "two-way table", "journey time", "24-hour clock"] },
    { n: 4, title: "Solve problems with time and the calendar", question: "How do we find start and finish times, and use a calendar?", keywords: ["duration", "start time", "finish time", "calendar"] },
    { n: 5, title: "Calculate speed", question: "What is speed, and how do we work it out from distance and time?", keywords: ["speed", "average speed", "mph", "km/h", "m/s"] },
    { n: 6, title: "Solve problems with speed, distance and time", question: "How do we find a distance or a time when we know the speed?", keywords: ["distance = speed × time", "time = distance ÷ speed", "matching units"] },
    { n: 7, title: "Interpret distance–time graphs", question: "What does a distance–time graph tell us about a journey?", keywords: ["distance–time graph", "stationary", "horizontal line", "return journey"] },
    { n: 8, title: "Draw distance–time graphs and calculate speed", question: "How do we draw a distance–time graph and find a speed from it?", keywords: ["plot", "steeper", "speed from a graph", "average speed"] }
  ],

  glossary: [
    { term: "convert", means: "To change a measurement into a different unit, like hours into minutes.", chapter: "units-of-time" },
    { term: "millisecond", means: "One thousandth of a second. There are 1000 milliseconds in a second.", chapter: "units-of-time" },
    { term: "leap year", means: "A year with 366 days instead of 365. It happens every four years.", chapter: "units-of-time" },
    { term: "timetable", means: "A table of the times buses or trains leave and arrive at each stop.", chapter: "timetables-calendar" },
    { term: "duration", means: "How long something lasts, from its start time to its finish time.", chapter: "timetables-calendar" },
    { term: "24-hour clock", means: "Times written from 00:00 to 23:59, so 4 pm is 16:00.", chapter: "timetables-calendar" },
    { term: "speed", means: "How fast something moves: the distance travelled in one unit of time.", chapter: "calculate-speed" },
    { term: "average speed", means: "The total distance divided by the total time for a whole journey.", chapter: "calculate-speed" },
    { term: "mph", means: "Miles per hour: how many miles are travelled in one hour.", chapter: "calculate-speed" },
    { term: "metres per second", means: "A unit of speed, written m/s: how many metres are travelled in one second.", chapter: "calculate-speed" },
    { term: "formula", means: "A rule written with words or letters, like distance = speed × time.", chapter: "distance-time" },
    { term: "distance", means: "How far something travels, measured in metres, kilometres or miles.", chapter: "distance-time" },
    { term: "distance–time graph", means: "A graph with time along the bottom and distance up the side that shows a journey.", chapter: "reading-graphs" },
    { term: "stationary", means: "Not moving. On a distance–time graph this is a flat, horizontal line.", chapter: "reading-graphs" },
    { term: "horizontal", means: "Level, going straight across like the horizon.", chapter: "reading-graphs" },
    { term: "steeper", means: "Rising more sharply. A steeper line on a distance–time graph means a faster speed.", chapter: "graphs-speed" }
  ],

  // Connections game: 4 groups × 4 terms, all drawn from the glossary above.
  connections: [
    { group: "Words about speed", terms: ["speed", "average speed", "mph", "metres per second"] },
    { group: "Reading a distance–time graph", terms: ["distance–time graph", "stationary", "horizontal", "steeper"] },
    { group: "Measuring time", terms: ["convert", "millisecond", "leap year", "24-hour clock"] },
    { group: "Planning a journey", terms: ["timetable", "duration", "formula", "distance"] }
  ],

  chapters: [
    // ───────────────────────────────────────────── Chapter 1
    {
      key: "units-of-time", n: 1,
      title: "Converting units of time",
      lead: "Change between milliseconds, seconds, minutes, hours, days and years, and avoid the decimal trap.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "convert", means: "to change into a different unit", sentence: "Convert 3 hours into minutes." },
          { word: "millisecond", means: "one thousandth of a second", sentence: "A camera flash lasts a few milliseconds." },
          { word: "equivalent", means: "worth the same amount", sentence: "90 minutes is equivalent to 1.5 hours." },
          { word: "fraction of an hour", means: "a part of an hour, like a half or a quarter", sentence: "15 minutes is a quarter of an hour." },
          { word: "leap year", means: "a year with 366 days", sentence: "A leap year comes every four years." }
        ],
        passage: [
          "Time has many units.",
          "There are 60 seconds in a minute.",
          "There are 60 minutes in an hour.",
          "There are 24 hours in a day.",
          "A year has 365 days, or 366 in a leap year.",
          "To change hours into minutes, multiply by 60.",
          "To change minutes into hours, divide by 60.",
          "Half an hour is 30 minutes.",
          "A quarter of an hour is 15 minutes.",
          "Be careful with decimals.",
          "2.5 hours is 2 hours and 30 minutes, not 2 hours and 50 minutes.",
          "A millisecond is one thousandth of a second."
        ]
      },
      sections: [
        {
          heading: "Seconds, minutes and hours",
          paragraphs: [
            "The units of time do not go up in tens like metres and centimetres. There are 60 seconds in a minute and 60 minutes in an hour. So to change a bigger unit into a smaller one, you multiply by 60. To change a smaller unit into a bigger one, you divide by 60.",
            "Think of the conversion chain: milliseconds, seconds, minutes, hours. Going right along the chain you divide: by 1000, then by 60, then by 60. Going left you multiply by the same numbers.",
            "A sentence helps you check the direction. Minutes are smaller than hours, so there are more of them: 4 hours is 240 minutes, because 4 × 60 = 240. Going the other way, 180 minutes is 3 hours, because 180 ÷ 60 = 3."
          ],
          worked: {
            q: "Convert 4.5 hours into minutes.",
            steps: ["Hours are bigger than minutes, so there will be more minutes than hours: multiply.", "1 hour is 60 minutes, so multiply by 60.", "4.5 × 60 = 270."],
            answer: "270 minutes", check: "4.5 * 60"
          },
          tip: "Bigger unit to smaller unit: multiply. Smaller unit to bigger unit: divide."
        },
        {
          heading: "Fractions and decimals of an hour",
          paragraphs: [
            "An hour splits into fractions neatly. Half an hour is 30 minutes. A quarter of an hour is 15 minutes, and three quarters is 45 minutes. A third of an hour is 20 minutes, because 60 ÷ 3 = 20.",
            "Decimals are where mistakes happen. 3.25 hours does not mean 3 hours and 25 minutes. The 0.25 is a quarter of an hour, which is 15 minutes. So 3.25 hours is 3 hours and 15 minutes.",
            "To turn minutes into a decimal of an hour, divide by 60. 36 minutes is 36 ÷ 60 = 0.6 of an hour. To turn a decimal of an hour into minutes, multiply by 60. 0.4 of an hour is 0.4 × 60 = 24 minutes."
          ],
          worked: {
            q: "Write 2.75 hours in hours and minutes.",
            steps: ["The whole number part is 2, so there are 2 whole hours.", "The decimal part is 0.75, which is three quarters of an hour.", "0.75 × 60 = 45, so that is 45 minutes.", "2.75 hours is 2 hours and 45 minutes."],
            answer: "2 hours 45 minutes", check: "list(divmod(2.75 * 60, 60))"
          },
          tip: "The digits after the decimal point are not minutes. Multiply them by 60 first."
        },
        {
          heading: "Hours, days, months and years",
          paragraphs: [
            "There are 24 hours in a day, 7 days in a week and 12 months in a year. A year has 365 days. Every fourth year is a leap year with 366 days, because February gets an extra day.",
            "To change days into hours, multiply by 24. 3 days is 72 hours, because 3 × 24 = 72. To change hours into days, divide by 24. 120 hours is 5 days, because 120 ÷ 24 = 5.",
            "Sometimes the answer is not a whole number of days. Then give it in days and hours. 55 hours is 2 days and 7 hours, because two days use up 48 hours and 55 − 48 = 7."
          ],
          worked: {
            q: "Write 80 hours in days and hours.",
            steps: ["How many whole days fit into 80 hours? 24 × 3 = 72, which fits. 24 × 4 = 96, which is too many.", "So there are 3 whole days.", "80 − 72 = 8 hours are left over.", "80 hours is 3 days and 8 hours."],
            answer: "3 days 8 hours", check: "list(divmod(80, 24))"
          },
          tip: "For days and hours, find how many 24s fit, then write down what is left."
        },
        {
          heading: "Milliseconds",
          paragraphs: [
            "The prefix milli- means one thousandth, just as in millimetre. So 1 second is 1000 milliseconds, and 1 millisecond is 0.001 seconds.",
            "To change seconds into milliseconds, multiply by 1000. To change milliseconds into seconds, divide by 1000. 360 milliseconds is 360 ÷ 1000 = 0.36 seconds, not 3.6 seconds.",
            "Milliseconds are used for very short times: a sprinter's reaction time, or how long a computer takes to respond."
          ],
          worked: {
            q: "Change 4500 milliseconds into seconds.",
            steps: ["Milliseconds are smaller than seconds, so there will be fewer seconds: divide.", "1000 milliseconds make a second, so divide by 1000.", "4500 ÷ 1000 = 4.5."],
            answer: "4.5 seconds", check: "4500 / 1000"
          },
          tip: "Milli- means thousandth: divide by 1000 to get seconds."
        }
      ],
      gate: [
        { kind: "numeric", q: "How many minutes are there in 3.5 hours?", answer: 210, tolerance: 0, units: "minutes", check: "3.5 * 60",
          misconceptions: [
            { answer: 350, says: "You treated 3.5 hours as 350 minutes, as if an hour had 100 minutes. An hour has 60 minutes, so 3.5 × 60 = 210.", check: "3.5 * 100" },
            { answer: 180, says: "You converted the 3 whole hours but forgot the half hour. 3 hours is 180 minutes and the extra half hour is 30 more, so the total is 210.", check: "int(3.5) * 60" }
          ],
          why: "1 hour is 60 minutes, so 3.5 hours is 3.5 × 60 = 210 minutes." },
        { kind: "mcq", q: "Which of these is the same length of time as 45 minutes?", options: ["0.45 hours", "¾ of an hour", "4.5 hours", "½ an hour"], answer: 1,
          feedback: [
            "You wrote the minutes after a decimal point. Minutes are out of 60, not 100: 45 ÷ 60 = 0.75, so 45 minutes is 0.75 hours, not 0.45 hours.",
            "",
            "4.5 hours is 4 hours and 30 minutes, far longer than 45 minutes. 45 minutes is less than one hour.",
            "Half an hour is 30 minutes. 45 minutes is three quarters of an hour."
          ],
          why: "An hour is 60 minutes, and 45 is three quarters of 60. So 45 minutes is ¾ of an hour." },
        { kind: "numeric", q: "How many hours are there in 5 days?", answer: 120, tolerance: 0, units: "hours", check: "5 * 24",
          misconceptions: [
            { answer: 60, says: "You multiplied by 12. There are 12 months in a year, but 24 hours in a day: 5 × 24 = 120.", check: "5 * 12" },
            { answer: 29, says: "You added 24 instead of multiplying. Each of the 5 days has 24 hours, so you need 5 × 24 = 120.", check: "5 + 24" }
          ],
          why: "Each day has 24 hours, so 5 days is 5 × 24 = 120 hours." }
      ],
      modules: [
        {
          title: "Hours and minutes as a decimal",
          task: { kind: "numeric", q: "A film lasts 2 hours 36 minutes. Write this time as a decimal number of hours.", answer: 2.6, tolerance: 0, units: "hours", check: "2 + 36 / 60",
                  misconceptions: [
                    { answer: 2.36, says: "You wrote the minutes straight after the decimal point. Minutes are out of 60, not 100: 36 ÷ 60 = 0.6, so the time is 2.6 hours.", check: "2 + 36 / 100" },
                    { answer: 156, says: "You found 156 minutes, which is correct, but the question asks for hours. Keep the 2 whole hours and change 36 minutes into 36 ÷ 60 = 0.6 of an hour: 2.6 hours.", check: "2 * 60 + 36" }
                  ] },
          explain: "Say, in one sentence, why 36 minutes is 0.6 of an hour and not 0.36 of an hour.",
          contexts: [
            { label: "Train journey", q: "A train journey takes 2 hours 36 minutes. Write this time as a decimal number of hours.",
              why: "The 2 hours stay as 2. The 36 minutes are 36 ÷ 60 = 0.6 of an hour. So the journey is 2.6 hours." },
            { label: "Football tournament", q: "A football tournament lasts 2 hours 36 minutes. Write this time as a decimal number of hours.",
              why: "2 whole hours, plus 36 ÷ 60 = 0.6 of an hour, makes 2.6 hours." },
            { label: "Homework", q: "Nijah spends 2 hours 36 minutes on her homework this week. Write this time as a decimal number of hours.",
              why: "Keep the 2 hours. 36 minutes is 36 ÷ 60 = 0.6 of an hour. The total is 2.6 hours." }
          ],
          levels: {
            support: {
              steps: ["Keep the whole hours as the whole-number part.", "Divide the minutes by 60 to get the decimal part.", "Put the two parts together."],
              example: { q: "Write 1 hour 45 minutes as a decimal number of hours.",
                         steps: ["The whole hours are 1.", "45 ÷ 60 = 0.75.", "1 hour 45 minutes is 1.75 hours."],
                         answer: "1.75 hours", check: "1 + 45 / 60" }
            },
            core: { hint: "Only the minutes need converting: divide them by 60." },
            stretch: { extend: "Max writes 2 hours 36 minutes as 2.36 hours. Write a sentence that explains his mistake, then find a number of minutes that would make the decimal exactly 2.36 hours." }
          },
          why: "The 2 hours stay as 2. The 36 minutes are 36 ÷ 60 = 0.6 of an hour. So the film lasts 2.6 hours."
        },
        {
          title: "Days and hours",
          task: { kind: "mcq", q: "Which of these is the same as 100 hours?", options: ["4 days 4 hours", "10 days", "4 days 16 hours", "5 days 10 hours"], answer: 0, check: "list(divmod(100, 24))",
                  feedback: [
                    "",
                    "You divided 100 by 10. A day has 24 hours, not 10, so 100 hours is just over 4 days.",
                    "4 days is 96 hours. 100 − 96 = 4, so only 4 hours are left over, not 16.",
                    "5 days is already 120 hours, which is more than 100 hours."
                  ] },
          explain: "Say, in one sentence, how you worked out how many whole days there are in 100 hours.",
          contexts: [
            { label: "Phone battery", q: "A phone battery lasts 100 hours on standby. Which of these is the same length of time?",
              why: "4 days is 4 × 24 = 96 hours, and 100 − 96 = 4 hours are left. So 100 hours is 4 days 4 hours." },
            { label: "Space mission", q: "A space mission lasts 100 hours. Which of these is the same length of time?",
              why: "4 × 24 = 96 hours make 4 days. The 4 hours left over give 4 days 4 hours." }
          ],
          levels: {
            support: {
              steps: ["Count how many lots of 24 fit into the hours: that is the number of days.", "Multiply the days by 24 and subtract from the total to find the hours left over.", "Write the answer as days and hours."],
              example: { q: "Write 60 hours in days and hours.",
                         steps: ["24 × 2 = 48 fits into 60, but 24 × 3 = 72 does not.", "So there are 2 whole days.", "60 − 48 = 12 hours are left.", "60 hours is 2 days 12 hours."],
                         answer: "2 days 12 hours", check: "list(divmod(60, 24))" }
            },
            core: { hint: "How many 24s fit into 100? Then what is left over?" },
            stretch: { extend: "A friend writes 100 hours as 4.16 days, because 4 days and 16 hours were left over. Explain the mistake and write 100 hours as a decimal number of days, correct to two decimal places." }
          },
          why: "4 days is 4 × 24 = 96 hours. 100 − 96 = 4, so 100 hours is 4 days and 4 hours."
        },
        {
          title: "Years and months",
          task: { kind: "numeric", q: "Nijah has had her bike for 3.5 years. For how many months has she had it?", answer: 42, tolerance: 0, units: "months", check: "3.5 * 12",
                  misconceptions: [
                    { answer: 1277.5, says: "You multiplied by 365 and found the number of days. The question asks for months, and there are 12 months in a year: 3.5 × 12 = 42.", check: "3.5 * 365" },
                    { answer: 36, says: "You converted the 3 whole years but forgot the half year. 3 years is 36 months and half a year is 6 more months, so the total is 42.", check: "int(3.5) * 12" }
                  ] },
          explain: "Say, in one sentence, why half a year is 6 months.",
          contexts: [
            { label: "Phone contract", q: "A phone contract lasts 3.5 years. How many months is that?",
              why: "3 years is 3 × 12 = 36 months, and half a year is 6 months. 36 + 6 = 42 months." },
            { label: "Pet", q: "Eva's pet rabbit is 3.5 years old. How old is the rabbit in months?",
              why: "There are 12 months in a year, so 3.5 × 12 = 42 months." }
          ],
          levels: {
            support: {
              steps: ["Remember that 1 year is 12 months.", "Years are bigger than months, so multiply by 12.", "Check the half year on its own: half of 12 is 6."],
              example: { q: "How many months are there in 1.5 years?",
                         steps: ["1 year is 12 months.", "Half a year is 6 months.", "1.5 × 12 = 18."],
                         answer: "18 months", check: "1.5 * 12" }
            },
            core: { hint: "Multiply by the number of months in a year." },
            stretch: { extend: "Assume there are no leap years. Work out roughly how many days 3.5 years is, and explain why the real answer could be one day more." }
          },
          why: "A year has 12 months, so 3.5 years is 3.5 × 12 = 42 months."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 2
    {
      key: "timetables-calendar", n: 2,
      title: "Timetables, durations and the calendar",
      lead: "Read a timetable, work out how long a journey takes, find start and finish times, and use a calendar.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "timetable", means: "a table of leaving and arriving times", sentence: "The bus timetable shows the 08:40 bus reaching town at 09:05." },
          { word: "duration", means: "how long something lasts", sentence: "The duration of the film was 95 minutes." },
          { word: "24-hour clock", means: "times from 00:00 to 23:59, with no am or pm", sentence: "On the 24-hour clock, 4 pm is 16:00." },
          { word: "two-way table", means: "a table that sorts things in two ways at once", sentence: "The two-way table shows boys and girls in each year group." },
          { word: "calendar", means: "a chart of the days and weeks in each month", sentence: "The calendar shows that 1 May is a Thursday." }
        ],
        passage: [
          "A timetable shows when buses or trains leave and arrive.",
          "Read down a column to follow one bus.",
          "Read across a row to see one stop.",
          "To find how long a journey takes, count on from the start time.",
          "Do not just subtract the digits.",
          "A bus leaves at 09:48 and arrives at 10:20.",
          "Count on 12 minutes to reach 10:00.",
          "Then count on 20 more minutes.",
          "The journey takes 32 minutes.",
          "The 24-hour clock runs from 00:00 to 23:59.",
          "3 pm is 15:00 on the 24-hour clock.",
          "A calendar shows the days of each month."
        ]
      },
      sections: [
        {
          heading: "Reading a timetable",
          paragraphs: [
            "A bus timetable has a row for each stop and a column for each bus. Imagine the first column reads Oakfield 08:05, Mill Lane 08:19, Station 08:31. That is one bus: it leaves Oakfield at 08:05 and gets to the Station at 08:31.",
            "To find how long that bus takes from Oakfield to the Station, count on from 08:05 to 08:31. That is 26 minutes, because 31 − 5 = 26.",
            "When the journey crosses an hour, count on in two steps. From 08:19 to 09:00 is 41 minutes, because 60 − 19 = 41. Then add the minutes after the hour. Never subtract 08:19 from 09:00 as if the times were ordinary numbers: 900 − 819 = 81, and 81 minutes is wrong."
          ],
          worked: {
            q: "A train leaves Oakfield at 11:52 and arrives at Riverton at 12:31. How long does the journey take?",
            steps: ["Count on from 11:52 to 12:00. That is 60 − 52 = 8 minutes.", "Count on from 12:00 to 12:31. That is 31 minutes.", "8 + 31 = 39."],
            answer: "39 minutes", check: "(60 - 52) + 31"
          },
          tip: "Count on to the next o'clock first, then add the minutes after it."
        },
        {
          heading: "Start and finish times",
          paragraphs: [
            "The 24-hour clock avoids am and pm. The morning times look the same: 09:30 is 9:30 am. For the afternoon, add 12 to the hour: 4:20 pm is 16:20, and 11:05 pm is 23:05. Midnight is 00:00.",
            "To find a finish time, add the duration in friendly chunks. A film starts at 14:35 and lasts 95 minutes. 95 minutes is 1 hour and 35 minutes. Add 1 hour to reach 15:35, then add 25 minutes to reach 16:00, then the last 10 minutes to reach 16:10.",
            "To find a start time, count back from the finish in the same way. A match that finishes at 4:25 pm and lasts 155 minutes started 2 hours 35 minutes earlier. Back 2 hours is 2:25 pm, back 25 minutes is 2:00 pm, and back 10 more minutes is 1:50 pm."
          ],
          worked: {
            q: "A film starts at 14:35 and lasts 95 minutes. What time does it finish?",
            steps: ["95 minutes is 1 hour and 35 minutes.", "Add 1 hour: 14:35 becomes 15:35.", "Add 25 minutes to reach 16:00.", "Add the remaining 10 minutes: 16:10."],
            answer: "16:10", check: "14 * 60 + 35 + 95"
          },
          tip: "Split the minutes so that one jump lands exactly on the next o'clock."
        },
        {
          heading: "Two-way tables",
          paragraphs: [
            "A two-way table sorts information in two ways at once. For example, the rows might be Year 7 and Year 8 and the columns might be favourite subjects. Each cell holds a count, and the Total row and Total column add everything up.",
            "To fill a missing cell, use a total. If 52 people belong to a club and 31 of them are adults, then 52 − 31 = 21 are children. If 18 of the adults are female, then 31 − 18 = 13 adults are male.",
            "Always check your completed table: every row should add up to its row total, and every column to its column total."
          ],
          worked: {
            q: "A sports club has 52 members. 31 are adults and the rest are children. 18 of the adults are female. How many adults are male?",
            steps: ["The question is about the adults, so use the adult total: 31.", "18 of the 31 adults are female.", "31 − 18 = 13 adults are male."],
            answer: "13", check: "31 - 18"
          },
          tip: "Find the total that the missing number belongs to, then subtract what you know."
        },
        {
          heading: "The calendar",
          paragraphs: [
            "A calendar page shows one month as rows of weeks. Each column is a day of the week, so moving straight down one row adds 7 days. If the 3rd is a Tuesday, then the 10th, 17th, 24th and 31st are Tuesdays too.",
            "Months have 30 or 31 days, except February, which has 28 days, or 29 in a leap year. A month is not simply 365 ÷ 12 days: that is about 30.4, and no real month has that many.",
            "Months have four or five of each weekday, not always four. A 31-day month has five of three different weekdays, so a statement like 'every month has exactly four Tuesdays' is false."
          ],
          worked: {
            q: "The 3rd of a month is a Tuesday. What day of the week is the 24th?",
            steps: ["Find the gap between the dates: 24 − 3 = 21 days.", "21 days is exactly 3 weeks, because 21 ÷ 7 = 3.", "Whole weeks land on the same weekday, so the 24th is also a Tuesday."],
            answer: "Tuesday"
          },
          tip: "A gap that is a multiple of 7 lands on the same day of the week."
        }
      ],
      gate: [
        { kind: "numeric", q: "A bus leaves at 10:47 and arrives at 11:23. How many minutes does the journey take?", answer: 36, tolerance: 0, units: "minutes", check: "(60 - 47) + 23",
          misconceptions: [
            { answer: 76, says: "You subtracted the digits as if the times were ordinary numbers: 1123 − 1047 = 76. An hour has only 60 minutes, so count on instead: 13 minutes to 11:00, then 23 more, which is 36.", check: "(11 * 100 + 23) - (10 * 100 + 47)" },
            { answer: 23, says: "You only counted the minutes after 11:00. Add the 13 minutes from 10:47 to 11:00 as well: 13 + 23 = 36.", check: "23" }
          ],
          why: "From 10:47 to 11:00 is 13 minutes. From 11:00 to 11:23 is 23 minutes. 13 + 23 = 36." },
        { kind: "mcq", q: "Which of these is 4:20 pm written on the 24-hour clock?", options: ["04:20", "14:20", "16:20", "20:16"], answer: 2, check: "4 * 60 + 20 + 12 * 60",
          feedback: [
            "04:20 is twenty past four in the morning. For an afternoon time, add 12 to the hour: 4 + 12 = 16.",
            "You added 10 to the hour. The 24-hour clock adds 12 for pm times: 4 + 12 = 16, so 4:20 pm is 16:20.",
            "",
            "You swapped the hours and minutes. The hours come first: 16 for 4 pm, then the 20 minutes."
          ],
          why: "For pm times, add 12 to the hour: 4 + 12 = 16. So 4:20 pm is 16:20." },
        { kind: "gap", q: "There are ___ days in a leap year.", answer: "366", options: ["365", "366", "360"], check: "365 + 1",
          feedback: {
            "365": "365 is the number of days in an ordinary year. A leap year has one extra day in February, so it has 366.",
            "360": "No year has 360 days. An ordinary year has 365 and a leap year has 366."
          },
          why: "A leap year adds one day, 29 February, to the usual 365 days, making 366." }
      ],
      modules: [
        {
          title: "Journey time from a timetable",
          task: { kind: "numeric", q: "A bus leaves Ashby at 08:52, Brook at 09:07, Castle Street at 09:21 and Dale End at 09:34. How long does the bus take from Ashby to Dale End, in minutes?", answer: 42, tolerance: 0, units: "minutes", check: "(60 - 52) + 34",
                  misconceptions: [
                    { answer: 82, says: "You subtracted the times as if they were ordinary numbers: 934 − 852 = 82. Minutes only go up to 60. Count on instead: 8 minutes to 09:00, then 34 more.", check: "(9 * 100 + 34) - (8 * 100 + 52)" },
                    { answer: 29, says: "You stopped at Castle Street, 09:21. The question asks for the time to Dale End, which is 09:34, so the journey is 13 minutes longer than 29.", check: "(60 - 52) + 21" },
                    { answer: 34, says: "You read the minutes of the arrival time, 34, as the journey time. The bus left at 08:52, so add the 8 minutes from 08:52 to 09:00 as well.", check: "34" }
                  ] },
          explain: "Say, in one sentence, why you cannot simply subtract 08:52 from 09:34 like ordinary numbers.",
          contexts: [
            { label: "Train", q: "A train leaves Ashby at 08:52, Brook at 09:07, Castle Street at 09:21 and Dale End at 09:34. How long does the train take from Ashby to Dale End, in minutes?",
              why: "From 08:52 to 09:00 is 8 minutes. From 09:00 to 09:34 is 34 minutes. 8 + 34 = 42." },
            { label: "Tram", q: "A tram leaves Ashby at 08:52, Brook at 09:07, Castle Street at 09:21 and Dale End at 09:34. How long does the tram take from Ashby to Dale End, in minutes?",
              why: "Count on 8 minutes to 09:00, then 34 more minutes to 09:34. The journey takes 8 + 34 = 42 minutes." }
          ],
          levels: {
            support: {
              steps: ["Find the leaving time at the first stop and the arriving time at the last stop.", "Count on from the leaving time to the next o'clock.", "Count on from the o'clock to the arriving time.", "Add the two parts."],
              example: { q: "A bus leaves Fern Road at 07:41 and reaches Green Park at 08:16. How long does the journey take?",
                         steps: ["From 07:41 to 08:00 is 60 − 41 = 19 minutes.", "From 08:00 to 08:16 is 16 minutes.", "19 + 16 = 35."],
                         answer: "35 minutes", check: "(60 - 41) + 16" }
            },
            core: { hint: "Only the first and last stops matter. Count on to 09:00 first." },
            stretch: { extend: "The next bus leaves Ashby at 09:27 and takes exactly the same time between stops. Write out its full timetable and explain how you know each time." }
          },
          why: "From 08:52 to 09:00 is 8 minutes. From 09:00 to 09:34 is 34 minutes. 8 + 34 = 42 minutes."
        },
        {
          title: "Find the start time",
          task: { kind: "mcq", q: "A swimming lesson lasts 85 minutes and finishes at 17:10. What time did it start?", options: ["15:45", "16:25", "15:25", "16:85"], answer: 0, check: "17 * 60 + 10 - 85",
                  feedback: [
                    "",
                    "You went back only 45 minutes. 85 minutes is 1 hour and 25 minutes, so go back 1 hour to 16:10 and then 25 more minutes.",
                    "You went back 1 hour and 45 minutes. 85 minutes is 1 hour and 25 minutes: back 1 hour is 16:10, back 10 more is 16:00, and back the last 15 is 15:45.",
                    "16:85 is not a real time, because the minutes only go up to 59. You took 85 minutes off the hour digits instead of counting back properly."
                  ] },
          explain: "Say, in one sentence, how you split 85 minutes to make counting back easier.",
          contexts: [
            { label: "Film", q: "A film lasts 85 minutes and finishes at 17:10. What time did it start?",
              why: "85 minutes is 1 hour 25 minutes. Back 1 hour from 17:10 is 16:10. Back 10 minutes is 16:00, and back the last 15 minutes is 15:45." },
            { label: "Football match", q: "A football match, including half time, lasts 85 minutes and finishes at 17:10. What time did it start?",
              why: "Go back 1 hour to 16:10, then 10 minutes to 16:00, then 15 minutes to 15:45. That is 85 minutes in total." },
            { label: "Exam", q: "An exam lasts 85 minutes and finishes at 17:10. What time did it start?",
              why: "85 minutes is 1 hour 25 minutes. 17:10 back 1 hour is 16:10, and back 25 minutes more is 15:45." }
          ],
          levels: {
            support: {
              steps: ["Change the duration into hours and minutes.", "Count back the whole hours first.", "Count back the minutes in two jumps: land on the o'clock, then go back the rest."],
              example: { q: "A play lasts 100 minutes and finishes at 20:30. What time did it start?",
                         steps: ["100 minutes is 1 hour 40 minutes.", "Back 1 hour: 19:30.", "Back 30 minutes: 19:00. Back 10 more: 18:50."],
                         answer: "18:50", check: "20 * 60 + 30 - 100" }
            },
            core: { hint: "85 minutes is 1 hour and 25 minutes. Go back the hour first." },
            stretch: { extend: "The pool opens at 07:00 and runs 85-minute lessons back to back with a 5-minute gap between them. Does a lesson finish at exactly 17:10? Show your working." }
          },
          why: "85 minutes is 1 hour 25 minutes. Back 1 hour from 17:10 is 16:10. Back 10 minutes is 16:00, and back another 15 minutes is 15:45."
        },
        {
          title: "Reasoning with a calendar",
          task: { kind: "mcq", q: "1 May is a Thursday. What day of the week is 29 May?", options: ["Wednesday", "Thursday", "Friday", "Saturday"], answer: 1,
                  feedback: [
                    "You went back a day. From the 1st to the 29th is 28 days, which is exactly 4 weeks, so the weekday does not change.",
                    "",
                    "You went forward a day. 29 − 1 = 28 days, and 28 is a multiple of 7, so the 29th is the same weekday as the 1st.",
                    "You counted the 29th as 30 days later. The gap is 29 − 1 = 28 days, exactly 4 weeks, so it is still a Thursday."
                  ] },
          explain: "Say, in one sentence, why a gap of 28 days lands on the same day of the week.",
          levels: {
            support: {
              steps: ["Find the gap between the two dates by subtracting.", "Divide the gap by 7 to see how many whole weeks it is.", "Whole weeks land on the same weekday; any days left over move the weekday on."],
              example: { q: "1 March is a Monday. What day of the week is 17 March?",
                         steps: ["17 − 1 = 16 days.", "16 = 14 + 2, which is 2 weeks and 2 days.", "Two weeks later is still Monday. Two more days is Wednesday."],
                         answer: "Wednesday" }
            },
            core: { hint: "How many days is it from the 1st to the 29th? Is that a multiple of 7?" },
            stretch: { extend: "Which dates in May fall on a Saturday, and how many Saturdays are there in May? Explain how you can answer without drawing the whole calendar." }
          },
          why: "From 1 May to 29 May is 28 days, which is exactly 4 weeks. So 29 May is also a Thursday."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 3
    {
      key: "calculate-speed", n: 3,
      title: "Calculating speed",
      lead: "Understand what speed means, divide distance by time, and make the units match.",
      covers: [5],
      pretext: {
        words: [
          { word: "speed", means: "how fast something moves", sentence: "The speed limit in town is 30 mph." },
          { word: "average speed", means: "total distance divided by total time", sentence: "The train's average speed was 80 mph, even though it slowed down in places." },
          { word: "distance", means: "how far something travels", sentence: "The distance from home to school is 2 km." },
          { word: "mph", means: "miles per hour", sentence: "A car travelling at 60 mph covers 60 miles in an hour." },
          { word: "metres per second", means: "a speed unit, written m/s, for short distances and times", sentence: "A sprinter runs at about 10 metres per second." }
        ],
        passage: [
          "Speed tells you how fast something moves.",
          "It is the distance travelled in one unit of time.",
          "A car at 30 km/h goes 30 km in one hour.",
          "To find speed, divide the distance by the time.",
          "Speed = distance ÷ time.",
          "A bus goes 90 miles in 3 hours.",
          "90 ÷ 3 = 30, so its speed is 30 mph.",
          "Over a journey the speed changes, so we find the average speed.",
          "The units must match.",
          "Metres and seconds give metres per second.",
          "If the time is in minutes, change it into a fraction of an hour first.",
          "20 minutes is one third of an hour."
        ]
      },
      sections: [
        {
          heading: "What speed means",
          paragraphs: [
            "The speed of an object is a measure of how fast it is moving. A fast object travels a large distance each second; a slow one travels a small distance each second. Speed is always a distance per unit of time: miles per hour (mph), kilometres per hour (km/h) or metres per second (m/s).",
            "If a car travels at 65 mph, it goes 65 miles in one hour. So if it travels 195 miles in 3 hours, its speed is 195 ÷ 3 = 65 mph: we share the distance equally between the hours.",
            "This gives the average speed. Over a real journey a car speeds up and slows down, so the average speed is the steady speed that would cover the same distance in the same time. Mo says dividing distance by time gives the speed; Eva says it gives the average speed. Both are right: dividing distance by time gives the speed, but it is the average speed, not the speed at one moment."
          ],
          worked: {
            q: "A lorry travels 216 km in 4 hours. Work out its average speed in km/h.",
            steps: ["Speed is distance divided by time.", "The distance is in km and the time in hours, so the answer will be in km/h.", "216 ÷ 4 = 54."],
            answer: "54 km/h", check: "216 / 4"
          },
          tip: "Speed = distance ÷ time. The unit of the answer comes from the units you divided."
        },
        {
          heading: "Speed in metres per second",
          paragraphs: [
            "For short distances and times we use metres and seconds. A dog that runs 20 metres in 8 seconds covers 20 ÷ 8 = 2.5 metres every second, so its speed is 2.5 m/s.",
            "If the time is given in minutes and seconds, change it all into seconds first. 1 minute 20 seconds is 60 + 20 = 80 seconds. A runner who covers 400 m in that time has a speed of 400 ÷ 80 = 5 m/s.",
            "Always check the unit the question asks for before you divide. Metres divided by seconds give m/s, so the time must be in seconds, not minutes."
          ],
          worked: {
            q: "A runner covers 300 m in 1 minute 15 seconds. Work out her average speed in metres per second.",
            steps: ["Change the time into seconds: 1 minute is 60 seconds, so 60 + 15 = 75 seconds.", "Speed = distance ÷ time = 300 ÷ 75.", "300 ÷ 75 = 4."],
            answer: "4 m/s", check: "300 / (1 * 60 + 15)"
          },
          tip: "For m/s, the time must be in seconds. Change minutes into seconds first."
        },
        {
          heading: "When the time is in minutes",
          paragraphs: [
            "Speeds like mph and km/h are per hour, so the time must be in hours. If a bird flies 4 miles in 10 minutes, do not divide 4 by 10. Ten minutes is one sixth of an hour, so the bird would fly 6 times as far in a whole hour: 4 × 6 = 24 mph.",
            "Another way is to write the minutes as a fraction or decimal of an hour and divide. 30 minutes is 0.5 hours, so 12 km in 30 minutes is 12 ÷ 0.5 = 24 km/h. 15 minutes is 0.25 hours, so 6 miles in 15 minutes is 6 ÷ 0.25 = 24 mph.",
            "Dividing miles by minutes gives miles per minute, which is not what the question asks. It is also a tiny number, which is a warning sign: 4 ÷ 10 = 0.4 is not a sensible speed for a bird in mph."
          ],
          worked: {
            q: "A bird flies 6 miles in 15 minutes. Work out its average speed in mph.",
            steps: ["The speed is per hour, so change 15 minutes into hours: 15 ÷ 60 = 0.25 hours.", "Speed = distance ÷ time = 6 ÷ 0.25.", "6 ÷ 0.25 = 24. Check: a quarter of an hour, so it flies 4 times as far in an hour, and 6 × 4 = 24."],
            answer: "24 mph", check: "6 / (15 / 60)"
          },
          tip: "Never divide miles by minutes. Turn the minutes into a fraction of an hour first."
        },
        {
          heading: "Hours and minutes together",
          paragraphs: [
            "Many journeys take a mixture of hours and minutes, like 2 hours 45 minutes. Write the time as a decimal of an hour before you divide. 45 minutes is 45 ÷ 60 = 0.75 of an hour, so 2 hours 45 minutes is 2.75 hours.",
            "A plane that flies 1100 km in 2 hours 45 minutes has an average speed of 1100 ÷ 2.75 = 400 km/h. If you divided by 2.45 instead, your answer would be wrong, because 2.45 hours is 2 hours 27 minutes, not 2 hours 45 minutes.",
            "When the answer is not exact, round it as the question asks, usually to one decimal place. Write the units with your answer every time."
          ],
          worked: {
            q: "A train travels 210 km in 1 hour 45 minutes. Work out its average speed in km/h.",
            steps: ["45 minutes is 45 ÷ 60 = 0.75 of an hour, so the time is 1.75 hours.", "Speed = distance ÷ time = 210 ÷ 1.75.", "210 ÷ 1.75 = 120."],
            answer: "120 km/h", check: "210 / (1 + 45 / 60)"
          },
          tip: "Write hours and minutes as a decimal of an hour: minutes ÷ 60."
        }
      ],
      gate: [
        { kind: "numeric", q: "A car travels 150 miles in 3 hours. What is its average speed in mph?", answer: 50, tolerance: 0, units: "mph", check: "150 / 3",
          misconceptions: [
            { answer: 450, says: "You multiplied the distance by the time. Speed is distance divided by time: 150 ÷ 3 = 50 mph.", check: "150 * 3" },
            { answer: 147, says: "You subtracted the time from the distance. Speed shares the distance equally between the hours, so divide: 150 ÷ 3 = 50.", check: "150 - 3" }
          ],
          why: "Speed = distance ÷ time = 150 ÷ 3 = 50 mph." },
        { kind: "mcq", q: "Which of these is a unit of speed?", options: ["km", "km/h", "hours", "m"], answer: 1,
          feedback: [
            "km is a unit of distance. Speed needs a distance and a time together, like km per hour.",
            "",
            "Hours measure time. Speed is a distance divided by a time, like km/h.",
            "m, metres, measure distance. Metres per second, m/s, would be a speed."
          ],
          why: "Speed is a distance per unit of time, so its units are distance ÷ time: km/h, mph or m/s." },
        { kind: "numeric", q: "A cyclist rides 12 km in 30 minutes. What is her average speed in km/h?", answer: 24, tolerance: 0, units: "km/h", check: "12 / (30 / 60)",
          misconceptions: [
            { answer: 0.4, says: "You divided 12 by 30 and got a speed in kilometres per minute, not per hour. 30 minutes is half an hour, so 12 ÷ 0.5 = 24 km/h.", check: "12 / 30" },
            { answer: 6, says: "You multiplied by the fraction of an hour instead of dividing. In half an hour she went 12 km, so in a whole hour she would go twice as far: 24 km.", check: "12 * (30 / 60)" }
          ],
          why: "30 minutes is 0.5 hours. Speed = 12 ÷ 0.5 = 24 km/h. Check: twice 12 km in twice the time, one hour." }
      ],
      modules: [
        {
          title: "Speed from distance and time",
          task: { kind: "numeric", q: "A coach travels 180 miles in 4 hours. Work out its average speed in mph.", answer: 45, tolerance: 0, units: "mph", check: "180 / 4",
                  misconceptions: [
                    { answer: 720, says: "You multiplied 180 by 4. Speed is the distance shared between the hours, so divide: 180 ÷ 4 = 45 mph.", check: "180 * 4" },
                    { answer: 176, says: "You subtracted 4 from 180. Speed is distance divided by time: 180 ÷ 4 = 45.", check: "180 - 4" }
                  ] },
          explain: "Say, in one sentence, why dividing 180 by 4 tells you how far the coach goes in one hour.",
          contexts: [
            { label: "Ferry", q: "A ferry sails 180 miles in 4 hours. Work out its average speed in mph.",
              why: "Share the 180 miles equally between the 4 hours: 180 ÷ 4 = 45 miles in each hour, so 45 mph." },
            { label: "Lorry", q: "A lorry drives 180 miles in 4 hours. Work out its average speed in mph.",
              why: "Speed = distance ÷ time = 180 ÷ 4 = 45 mph." },
            { label: "Train", q: "A slow train covers 180 miles in 4 hours. Work out its average speed in mph.",
              why: "180 miles shared between 4 hours is 180 ÷ 4 = 45 miles each hour: 45 mph." }
          ],
          levels: {
            support: {
              steps: ["Write down the distance and the time.", "Check the units: miles and hours give mph.", "Divide the distance by the time."],
              example: { q: "A van travels 120 miles in 3 hours. Work out its average speed in mph.",
                         steps: ["Distance 120 miles, time 3 hours.", "Miles and hours, so the answer is in mph.", "120 ÷ 3 = 40."],
                         answer: "40 mph", check: "120 / 3" }
            },
            core: { hint: "Speed = distance ÷ time." },
            stretch: { extend: "The coach kept to a 30 mph limit for the first hour. Explain why its speed for the rest of the journey must have been more than 45 mph, and work out what it was." }
          },
          why: "Speed = distance ÷ time = 180 ÷ 4 = 45 mph."
        },
        {
          title: "Minutes into a fraction of an hour",
          task: { kind: "numeric", q: "A bus travels 9 km in 20 minutes. What is its average speed in km/h?", answer: 27, tolerance: 0, units: "km/h", check: "9 / (20 / 60)",
                  misconceptions: [
                    { answer: 0.45, says: "You divided 9 by 20, which gives kilometres per minute. For km/h the time must be in hours: 20 minutes is a third of an hour, so the bus goes 3 times as far in an hour, 27 km.", check: "9 / 20" },
                    { answer: 3, says: "You multiplied by the fraction of an hour instead of dividing. In one third of an hour the bus went 9 km, so in a whole hour it would go 3 × 9 = 27 km.", check: "9 * (20 / 60)" },
                    { answer: 180, says: "You multiplied the distance by the minutes. Speed is distance divided by time, and the time must be in hours: 9 ÷ (20 ÷ 60) = 27.", check: "9 * 20" }
                  ] },
          explain: "Say, in one sentence, why 20 minutes has to become a fraction of an hour before you divide.",
          contexts: [
            { label: "Tram", q: "A tram travels 9 km in 20 minutes. What is its average speed in km/h?",
              why: "20 minutes is one third of an hour. In a whole hour the tram would go 3 × 9 = 27 km, so its speed is 27 km/h." },
            { label: "Taxi", q: "A taxi travels 9 km in 20 minutes. What is its average speed in km/h?",
              why: "Divide the distance by the time in hours: 9 ÷ (20 ÷ 60) = 27 km/h." },
            { label: "Racing cyclist", q: "A racing cyclist rides 9 km in 20 minutes. What is her average speed in km/h?",
              why: "Three lots of 20 minutes make an hour, so three lots of 9 km make 27 km. Her speed is 27 km/h." }
          ],
          levels: {
            support: {
              steps: ["Ask how many of these time chunks fit into one hour.", "Multiply the distance by that number to find the distance in one hour.", "That distance per hour is the speed in km/h."],
              example: { q: "A boat travels 5 km in 15 minutes. What is its average speed in km/h?",
                         steps: ["15 minutes fits into an hour 4 times.", "4 × 5 = 20 km in one hour.", "The speed is 20 km/h."],
                         answer: "20 km/h", check: "5 / (15 / 60)" }
            },
            core: { hint: "How many lots of 20 minutes make an hour?" },
            stretch: { extend: "A friend gets 0.45 km/h. Explain what the 0.45 actually measures, and explain how to tell straight away that it cannot be the speed of a bus in km/h." }
          },
          why: "20 minutes is one third of an hour, so the bus goes 3 × 9 = 27 km in an hour. Its speed is 27 km/h."
        },
        {
          title: "Speed in metres per second",
          task: { kind: "numeric", q: "A dog runs 150 m in 2 minutes 5 seconds. Work out its average speed in m/s.", answer: 1.2, tolerance: 0, units: "m/s", check: "150 / (2 * 60 + 5)",
                  misconceptions: [
                    { answer: 75, says: "You divided by 2, the number of minutes. The speed is in metres per second, so the time must be in seconds: 2 minutes 5 seconds is 125 seconds, and 150 ÷ 125 = 1.2.", check: "150 / 2" },
                    { answer: 30, says: "You divided by 5, the seconds only, and ignored the 2 minutes. The whole time is 2 × 60 + 5 = 125 seconds.", check: "150 / 5" }
                  ] },
          explain: "Say, in one sentence, how you changed 2 minutes 5 seconds into seconds.",
          levels: {
            support: {
              steps: ["Change the whole time into seconds: minutes × 60, then add the extra seconds.", "Check the units: metres and seconds give m/s.", "Divide the distance by the time in seconds."],
              example: { q: "A cat runs 90 m in 1 minute 15 seconds. Work out its average speed in m/s.",
                         steps: ["1 minute 15 seconds is 60 + 15 = 75 seconds.", "Metres and seconds give m/s.", "90 ÷ 75 = 1.2."],
                         answer: "1.2 m/s", check: "90 / (1 * 60 + 15)" }
            },
            core: { hint: "First write 2 minutes 5 seconds as a number of seconds." },
            stretch: { extend: "A tortoise moves at 0.25 m/s. How long would it take to cover the same 150 m? Give your answer in minutes, and explain each step." }
          },
          why: "2 minutes 5 seconds is 2 × 60 + 5 = 125 seconds. Speed = 150 ÷ 125 = 1.2 m/s."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 4
    {
      key: "distance-time", n: 4,
      title: "Finding distance and time",
      lead: "Use the speed to find how far something travels, or how long it takes, including journeys in more than one part.",
      covers: [6],
      pretext: {
        words: [
          { word: "formula", means: "a rule written in words or letters", sentence: "The formula is distance = speed × time." },
          { word: "rearrange", means: "to change a formula round to find a different thing", sentence: "Rearrange the formula to find the time." },
          { word: "time taken", means: "how long the journey lasts", sentence: "The time taken was 3 hours." },
          { word: "per", means: "for each", sentence: "40 km per hour means 40 km for each hour." },
          { word: "total", means: "everything added together", sentence: "The total distance was 27 km." }
        ],
        passage: [
          "Speed, distance and time are linked.",
          "If you know two of them, you can find the third.",
          "Speed = distance ÷ time.",
          "Distance = speed × time.",
          "Time = distance ÷ speed.",
          "A car goes at 40 km/h for 3 hours.",
          "40 × 3 = 120, so it travels 120 km.",
          "A boat goes 100 km at 25 km/h.",
          "100 ÷ 25 = 4, so it takes 4 hours.",
          "Check that the units match before you multiply or divide.",
          "Half an hour is 0.5 hours, not 0.3 hours.",
          "For a journey in parts, work out each part and then add."
        ]
      },
      sections: [
        {
          heading: "Finding the distance",
          paragraphs: [
            "The units of speed tell you the formula. Kilometres per hour means kilometres for each hour, so a car at 45 km/h covers 45 km in every hour. In 3 hours it covers 3 × 45 = 135 km. So distance = speed × time.",
            "If the time has minutes in it, change it to hours first. A cyclist riding at 20 km/h for 2 hours 30 minutes rides for 2.5 hours, so she covers 20 × 2.5 = 50 km.",
            "A quick sense check: a car travelling at 65 km/h for 13 hours would cover far more than 65 km, because 13 hours is far more than one hour. If your answer is smaller than the speed and the time is more than an hour, something has gone wrong."
          ],
          worked: {
            q: "A cyclist rides at 18 km/h for 2 hours 30 minutes. How far does she ride?",
            steps: ["Change the time to hours: 30 minutes is half an hour, so the time is 2.5 hours.", "Distance = speed × time = 18 × 2.5.", "18 × 2.5 = 45."],
            answer: "45 km", check: "18 * (2 + 30 / 60)"
          },
          tip: "Distance = speed × time. Time in hours for km/h and mph; time in seconds for m/s."
        },
        {
          heading: "Finding the time",
          paragraphs: [
            "If a car travels at 45 km/h, every 45 km takes one hour. So to find how long 225 km takes, ask how many lots of 45 fit into 225: 225 ÷ 45 = 5 hours. Time = distance ÷ speed.",
            "The answer may not be a whole number of hours. 84 km at 24 km/h takes 84 ÷ 24 = 3.5 hours, which is 3 hours 30 minutes. Remember that the 0.5 means half an hour, not 50 minutes.",
            "For speeds in m/s the time comes out in seconds. A helicopter at 58 m/s takes 232 ÷ 58 = 4 seconds to travel 232 m."
          ],
          worked: {
            q: "A ferry travels 84 km at 24 km/h. How long does the crossing take?",
            steps: ["Time = distance ÷ speed = 84 ÷ 24.", "84 ÷ 24 = 3.5.", "3.5 hours is 3 hours 30 minutes."],
            answer: "3.5 hours", check: "84 / 24"
          },
          tip: "Time = distance ÷ speed. Change a decimal answer back into hours and minutes to make sense of it."
        },
        {
          heading: "Let the units choose the formula",
          paragraphs: [
            "You do not need to memorise three separate formulas. Start from speed = distance ÷ time and read the units. If the speed is 9 metres per second, then every second adds 9 metres: 20 seconds adds 20 × 9 = 180 m. That is distance = speed × time.",
            "To find the time, ask how many lots of the speed make up the distance. At 9 metres per second, 450 m takes 450 ÷ 9 = 50 seconds. That is time = distance ÷ speed.",
            "Before you calculate, name what you are finding: distance, speed or time. Then write the formula, then put the numbers in. Writing it out stops you from multiplying when you should divide."
          ],
          worked: {
            q: "A cat runs at 6 m/s. How far does it run in 1 minute 10 seconds?",
            steps: ["The speed is in metres per second, so the time must be in seconds: 60 + 10 = 70 seconds.", "We are finding a distance, so distance = speed × time.", "6 × 70 = 420."],
            answer: "420 m", check: "6 * (1 * 60 + 10)"
          },
          tip: "Say what you are finding first: distance, speed or time."
        },
        {
          heading: "Journeys in more than one part",
          paragraphs: [
            "Some journeys have two or more parts at different speeds. Work out the distance for each part separately, then add them to find the total distance.",
            "Suppose Mo walks for 45 minutes at 4 mph, then runs for 30 minutes at 8 mph. Walking: 45 minutes is 0.75 of an hour, so 4 × 0.75 = 3 miles. Running: 30 minutes is 0.5 of an hour, so 8 × 0.5 = 4 miles. Total: 3 + 4 = 7 miles.",
            "The total time is found the same way, by adding the parts. Then the average speed for the whole journey is the total distance divided by the total time: 7 miles in 1.25 hours is 7 ÷ 1.25 = 5.6 mph."
          ],
          worked: {
            q: "Mo walks for 45 minutes at 4 mph, then runs for 30 minutes at 8 mph. How far does he go in total?",
            steps: ["Walking: 45 minutes is 0.75 of an hour, so 4 × 0.75 = 3 miles.", "Running: 30 minutes is 0.5 of an hour, so 8 × 0.5 = 4 miles.", "Add the parts: 3 + 4 = 7."],
            answer: "7 miles", check: "4 * (45 / 60) + 8 * (30 / 60)"
          },
          tip: "Work out each part of the journey on its own line, then add."
        }
      ],
      gate: [
        { kind: "numeric", q: "A train travels at 90 km/h for 4 hours. How far does it travel, in km?", answer: 360, tolerance: 0, units: "km", check: "90 * 4",
          misconceptions: [
            { answer: 22.5, says: "You divided the speed by the time. Every hour adds 90 km, so in 4 hours the train goes 90 × 4 = 360 km.", check: "90 / 4" },
            { answer: 94, says: "You added 90 and 4. The train covers 90 km in each of the 4 hours, so multiply: 90 × 4 = 360.", check: "90 + 4" }
          ],
          why: "Distance = speed × time = 90 × 4 = 360 km." },
        { kind: "numeric", q: "A bus travels 120 miles at 40 mph. How many hours does the journey take?", answer: 3, tolerance: 0, units: "hours", check: "120 / 40",
          misconceptions: [
            { answer: 4800, says: "You multiplied 120 by 40. To find a time, ask how many lots of 40 miles fit into 120 miles: 120 ÷ 40 = 3 hours.", check: "120 * 40" },
            { answer: 80, says: "You subtracted 40 from 120. Each hour covers 40 miles, so divide: 120 ÷ 40 = 3.", check: "120 - 40" }
          ],
          why: "Time = distance ÷ speed = 120 ÷ 40 = 3 hours." },
        { kind: "mcq", q: "Which formula gives the time taken for a journey?", options: ["time = speed × distance", "time = distance ÷ speed", "time = speed ÷ distance", "time = distance × speed"], answer: 1,
          feedback: [
            "Multiplying speed by distance gives a huge number with no meaning. Time is how many lots of the speed fit into the distance, so divide the distance by the speed.",
            "",
            "You divided the wrong way round. 120 miles at 40 mph takes 3 hours, which is 120 ÷ 40, not 40 ÷ 120.",
            "Multiplying the distance by the speed gives a huge number. Divide the distance by the speed instead."
          ],
          why: "Speed = distance ÷ time, so time = distance ÷ speed. For example, 120 miles at 40 mph takes 120 ÷ 40 = 3 hours." }
      ],
      modules: [
        {
          title: "Distance when the time is in minutes",
          task: { kind: "numeric", q: "A car travels at 54 km/h for 40 minutes. How far does it travel, in km?", answer: 36, tolerance: 0, units: "km", check: "54 * (40 / 60)",
                  misconceptions: [
                    { answer: 2160, says: "You multiplied 54 by 40 minutes. The speed is per hour, so the time must be in hours: 40 minutes is two thirds of an hour, and two thirds of 54 is 36.", check: "54 * 40" },
                    { answer: 81, says: "You divided the speed by the fraction of an hour. To find a distance, multiply: 54 × two thirds = 36 km. Dividing gives more than 54 km, which cannot be right for less than an hour.", check: "54 / (40 / 60)" },
                    { answer: 21.6, says: "You wrote 40 minutes as 0.4 of an hour. Minutes are out of 60, not 100: 40 ÷ 60 is two thirds, and two thirds of 54 is 36.", check: "54 * (40 / 100)" }
                  ] },
          explain: "Say, in one sentence, why the car travels less than 54 km.",
          contexts: [
            { label: "Tram", q: "A tram travels at 54 km/h for 40 minutes. How far does it travel, in km?",
              why: "40 minutes is two thirds of an hour. Two thirds of 54 km is 36 km." },
            { label: "Boat", q: "A boat sails at 54 km/h for 40 minutes. How far does it travel, in km?",
              why: "Distance = speed × time = 54 × (40 ÷ 60) = 36 km." },
            { label: "Lorry", q: "A lorry drives at 54 km/h for 40 minutes. How far does it travel, in km?",
              why: "In an hour it would cover 54 km. In two thirds of an hour it covers two thirds of that: 36 km." }
          ],
          levels: {
            support: {
              steps: ["Change the minutes into a fraction of an hour: minutes ÷ 60.", "You are finding a distance, so multiply the speed by the time in hours.", "Check: less than an hour should give less than the speed."],
              example: { q: "A bus travels at 42 km/h for 20 minutes. How far does it travel, in km?",
                         steps: ["20 minutes is 20 ÷ 60, which is one third of an hour.", "Distance = speed × time: one third of 42.", "42 ÷ 3 = 14."],
                         answer: "14 km", check: "42 * (20 / 60)" }
            },
            core: { hint: "40 minutes is two thirds of an hour. What is two thirds of 54?" },
            stretch: { extend: "How many minutes would the car need to travel exactly 54 km, and how many to travel 81 km? Explain what happens to the distance when you double the time." }
          },
          why: "40 minutes is 40 ÷ 60, which is two thirds of an hour. Distance = 54 × two thirds = 36 km."
        },
        {
          title: "Time when the speed is known",
          task: { kind: "numeric", q: "A plane flies 2400 km at an average speed of 800 km/h. How long does the flight take, in hours?", answer: 3, tolerance: 0, units: "hours", check: "2400 / 800",
                  misconceptions: [
                    { answer: 1920000, says: "You multiplied the distance by the speed. Time is how many lots of 800 km fit into 2400 km: 2400 ÷ 800 = 3 hours.", check: "2400 * 800" },
                    { answer: 1600, says: "You subtracted the speed from the distance. Every hour covers 800 km, so divide: 2400 ÷ 800 = 3.", check: "2400 - 800" }
                  ] },
          explain: "Say, in one sentence, why dividing 2400 by 800 tells you the number of hours.",
          contexts: [
            { label: "Holiday flight", q: "A holiday flight covers 2400 km at an average speed of 800 km/h. How long does the flight take, in hours?",
              why: "Each hour covers 800 km. 2400 ÷ 800 = 3, so the flight takes 3 hours." },
            { label: "Cargo flight", q: "A cargo plane flies 2400 km at an average speed of 800 km/h. How long does the flight take, in hours?",
              why: "Time = distance ÷ speed = 2400 ÷ 800 = 3 hours." }
          ],
          levels: {
            support: {
              steps: ["Write down the distance and the speed.", "You are finding a time, so divide the distance by the speed.", "The speed is per hour, so the answer is in hours."],
              example: { q: "A ship sails 600 km at an average speed of 40 km/h. How long does it take, in hours?",
                         steps: ["Distance 600 km, speed 40 km/h.", "Time = distance ÷ speed = 600 ÷ 40.", "600 ÷ 40 = 15."],
                         answer: "15 hours", check: "600 / 40" }
            },
            core: { hint: "How many lots of 800 km make 2400 km?" },
            stretch: { extend: "The plane takes off at 09:40. A strong headwind cuts its average speed to 600 km/h. What time does it land? Explain why the flight is longer." }
          },
          why: "Time = distance ÷ speed = 2400 ÷ 800 = 3 hours."
        },
        {
          title: "A journey in two parts",
          task: { kind: "numeric", q: "Whitney cycles for 1 hour 30 minutes at 16 km/h, then walks for 30 minutes at 6 km/h. How far does she travel in total, in km?", answer: 27, tolerance: 0, units: "km", check: "16 * (1 + 30 / 60) + 6 * (30 / 60)",
                  misconceptions: [
                    { answer: 23.8, says: "You wrote 1 hour 30 minutes as 1.3 hours. 30 minutes is half an hour, so the cycling time is 1.5 hours and 16 × 1.5 = 24 km, not 20.8 km. With the 3 km walk the total is 27 km.", check: "16 * (1 + 30 / 100) + 6 * (30 / 60)" },
                    { answer: 22, says: "You added the two speeds, 16 + 6 = 22. Speeds cannot be added like that. Work out each distance with distance = speed × time, then add the distances: 24 + 3 = 27.", check: "16 + 6" },
                    { answer: 21, says: "You took the walk away instead of adding it. Both parts move Whitney further on, so add them: 24 + 3 = 27 km.", check: "16 * (1 + 30 / 60) - 6 * (30 / 60)" }
                  ] },
          explain: "Say, in one sentence, why you have to find the two distances separately before you add.",
          levels: {
            support: {
              steps: ["Deal with one part at a time.", "For each part, change the time into hours, then multiply speed × time to get its distance.", "Add the two distances for the total."],
              example: { q: "Max runs for 30 minutes at 10 km/h, then walks for 1 hour 15 minutes at 4 km/h. How far does he travel in total, in km?",
                         steps: ["Running: 30 minutes is 0.5 hours, so 10 × 0.5 = 5 km.", "Walking: 1 hour 15 minutes is 1.25 hours, so 4 × 1.25 = 5 km.", "Total: 5 + 5 = 10 km."],
                         answer: "10 km", check: "10 * (30 / 60) + 4 * (1 + 15 / 60)" }
            },
            core: { hint: "Cycling distance first: 1.5 hours at 16 km/h. Then the walking distance. Then add." },
            stretch: { extend: "Work out Whitney's average speed for the whole 2 hours. Explain why it is not halfway between 16 km/h and 6 km/h." }
          },
          why: "Cycling: 1.5 hours at 16 km/h is 16 × 1.5 = 24 km. Walking: 0.5 hours at 6 km/h is 6 × 0.5 = 3 km. Total 24 + 3 = 27 km."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 5
    {
      key: "reading-graphs", n: 5,
      title: "Reading distance–time graphs",
      lead: "Tell the story of a journey from a distance–time graph: when someone moved, stopped and came home.",
      covers: [7],
      pretext: {
        words: [
          { word: "distance–time graph", means: "a graph that shows a journey, with time along the bottom and distance up the side", sentence: "The distance–time graph shows Whitney's walk to school." },
          { word: "axis", means: "one of the two lines with numbers on a graph", sentence: "The time axis runs along the bottom." },
          { word: "horizontal", means: "flat, going straight across", sentence: "A horizontal line means the distance is not changing." },
          { word: "stationary", means: "not moving", sentence: "Ron was stationary while he waited for the bus." },
          { word: "return journey", means: "a journey there and back again", sentence: "On a return journey the line comes back down to zero." }
        ],
        passage: [
          "A distance–time graph tells the story of a journey.",
          "Time goes along the bottom.",
          "Distance goes up the side.",
          "A sloping line means the person is moving.",
          "A flat, horizontal line means they have stopped.",
          "The distance is not changing, so they are stationary.",
          "A line that comes back down to zero shows a return home.",
          "The graph does not show hills.",
          "Up on the graph means further away, not uphill.",
          "Read the scale carefully on both axes.",
          "One square might be 10 minutes or 5 km."
        ]
      },
      sections: [
        {
          heading: "The axes and the story",
          paragraphs: [
            "A distance–time graph has time along the horizontal axis and distance up the vertical axis. Each point on the line answers the question: at this time, how far from the start was the person? Reading the graph from left to right tells the journey in order.",
            "Here is a graph described in words. Eva's walk to school starts at (0 minutes, 0 m). The line rises steadily to (12 minutes, 800 m). It then runs flat to (20 minutes, 800 m). Finally it rises again to (35 minutes, 1400 m).",
            "So Eva walked 800 m in the first 12 minutes. From 12 minutes to 20 minutes her distance stayed at 800 m: she had stopped, perhaps waiting for a friend. Then she walked the last 600 m, because 1400 − 800 = 600, and reached school after 35 minutes."
          ],
          worked: {
            q: "Eva's graph rises to 800 m at 12 minutes, is flat until 20 minutes, then rises to 1400 m at 35 minutes. For how many minutes was she waiting, and how far did she walk in total?",
            steps: ["The flat part runs from 12 minutes to 20 minutes.", "20 − 12 = 8, so she waited for 8 minutes.", "The line finishes at 1400 m, and she never came back, so she walked 1400 m in total."],
            answer: "8 minutes, 1400 m", check: "[20 - 12, 1400]"
          },
          tip: "Read the graph left to right and say what happened in each part."
        },
        {
          heading: "Stationary, moving and coming back",
          paragraphs: [
            "Ron says you can tell when someone is stationary because the graph is horizontal. He is right. A horizontal line means the distance is not changing while time passes, so the person is not moving. The longer the flat part, the longer the stop.",
            "A line sloping upwards means the person is getting further from the start. A line sloping downwards means they are coming back towards the start. When the line reaches zero again, they are home.",
            "Max thinks a graph that goes up and then down shows someone cycling uphill and then downhill. That is a common mistake. The graph shows distance from home, not height. Going up on the graph means getting further away; coming down means coming back."
          ],
          worked: {
            q: "Mo's graph: the line rises from 0 km to 3 km between 11:00 and 11:45, stays flat until 12:30, then falls back to 0 km at 13:15. How long did Mo stay at his friend's house?",
            steps: ["The stay is the flat part of the graph, when the distance did not change.", "The flat part runs from 11:45 to 12:30.", "From 11:45 to 12:00 is 15 minutes, and from 12:00 to 12:30 is 30 minutes: 15 + 30 = 45."],
            answer: "45 minutes", check: "(12 * 60 + 30) - (11 * 60 + 45)"
          },
          tip: "Flat means stopped. Sloping down means coming back."
        },
        {
          heading: "Distance from home and total distance",
          paragraphs: [
            "The vertical axis often says 'distance from home'. On a return journey the line goes up and comes back down, so the furthest point is the highest the line reaches, but the total distance travelled is more than that.",
            "If a car drives 40 km away from home and then 40 km back, the graph rises to 40 km and falls to 0. The total distance driven is 40 + 40 = 80 km, not 40 km. The statement 'the car travels a total of 40 km' would be false.",
            "To find the distance for one part of the journey, subtract the readings at the start and end of that part. If the line rises from 20 km to 40 km between C and D, the car travels 40 − 20 = 20 km in that part."
          ],
          worked: {
            q: "A graph shows a car driving from home to a town 40 km away and then back home. What is the total distance driven?",
            steps: ["The line rises to 40 km: that is 40 km there.", "The line falls back to 0: that is another 40 km back.", "Total distance is 40 + 40 = 80 km."],
            answer: "80 km", check: "40 + 40"
          },
          tip: "Distance from home is not the same as distance travelled. On a return journey, add there and back."
        },
        {
          heading: "Reading the scale",
          paragraphs: [
            "Before you read anything, work out what one square is worth on each axis. If the time axis is labelled 1 pm, 2 pm, 3 pm with one small mark between each, then each small mark is half an hour, so a mark after 3 pm is 3:30 pm.",
            "If the distance axis goes up in steps of 10 km, a point halfway between 40 and 50 is 45 km. Check both axes separately: they often use different scales.",
            "Then read the time at the start and end of each part. A flat part from 2 pm to 3:30 pm lasts 1 hour 30 minutes, not 1 hour 30 squares: always turn squares back into real units."
          ],
          worked: {
            q: "On a graph the line is flat from 2 pm to 3:30 pm. For how long is the person stationary?",
            steps: ["From 2 pm to 3 pm is 1 hour.", "From 3 pm to 3:30 pm is 30 minutes.", "The stop lasts 1 hour 30 minutes."],
            answer: "1 hour 30 minutes", check: "list(divmod((3 * 60 + 30) - (2 * 60), 60))"
          },
          tip: "Work out what one square is worth on each axis before you read anything."
        }
      ],
      gate: [
        { kind: "mcq", q: "On a distance–time graph, what does a horizontal line show?", options: ["moving at a steady speed", "stationary, not moving", "speeding up", "travelling uphill"], answer: 1,
          feedback: [
            "A steady speed is a straight sloping line. A horizontal line means the distance is not changing at all, so the person has stopped.",
            "",
            "Speeding up would make the line get steeper. A horizontal line has no slope at all: no distance is being covered.",
            "A distance–time graph never shows hills. The vertical axis is distance from the start, not height."
          ],
          why: "On a horizontal line time passes but the distance stays the same, so the person is stationary." },
        { kind: "numeric", q: "Dora's graph rises from 0 m to 1200 m between 0 and 15 minutes, stays flat until 24 minutes, then rises to 2000 m at 40 minutes. For how many minutes was Dora stationary?", answer: 9, tolerance: 0, units: "minutes", check: "24 - 15",
          misconceptions: [
            { answer: 15, says: "You read the time she stopped at, 15 minutes, rather than how long she stopped for. The flat part runs from 15 to 24 minutes, which is 24 − 15 = 9 minutes.", check: "15" },
            { answer: 16, says: "You measured the last sloping part, from 24 to 40 minutes. She was moving then. The stop is the flat part, from 15 to 24 minutes.", check: "40 - 24" }
          ],
          why: "The flat part of the graph runs from 15 minutes to 24 minutes. 24 − 15 = 9 minutes." },
        { kind: "mcq", q: "Which axis shows time on a distance–time graph?", options: ["the horizontal axis, along the bottom", "the vertical axis, up the side", "either axis, it does not matter"], answer: 0,
          feedback: [
            "",
            "The vertical axis shows the distance. Time runs along the bottom, from left to right.",
            "It does matter. Time always goes along the bottom, so that reading left to right tells the journey in order."
          ],
          why: "Time runs along the horizontal axis, so the graph reads like a story from left to right." }
      ],
      modules: [
        {
          title: "Read the journey",
          task: { kind: "numeric", q: "Max's graph: the line rises from 0 km to 2 km between 09:00 and 09:30, is flat from 09:30 to 10:15, then falls from 2 km to 0 km between 10:15 and 10:45. How many minutes did Max spend at the shop?", answer: 45, tolerance: 0, units: "minutes", check: "(10 * 60 + 15) - (9 * 60 + 30)",
                  misconceptions: [
                    { answer: 30, says: "You read the first sloping part, 09:00 to 09:30, which is when Max was walking to the shop. The time at the shop is the flat part, 09:30 to 10:15.", check: "(9 * 60 + 30) - (9 * 60)" },
                    { answer: 75, says: "You measured from 09:30 all the way to 10:45, but after 10:15 the line slopes down, so Max was walking home then. The flat part ends at 10:15.", check: "(10 * 60 + 45) - (9 * 60 + 30)" },
                    { answer: 15, says: "You read the minutes digits of 10:15 as the time at the shop. The flat part starts at 09:30: from 09:30 to 10:00 is 30 minutes and then 15 more, which is 45.", check: "15" }
                  ] },
          explain: "Say, in one sentence, how you can tell from the graph that Max was at the shop and not walking.",
          contexts: [
            { label: "Library", q: "Max's graph: the line rises from 0 km to 2 km between 09:00 and 09:30, is flat from 09:30 to 10:15, then falls from 2 km to 0 km between 10:15 and 10:45. How many minutes did Max spend at the library?",
              why: "The flat part, when Max was stationary, runs from 09:30 to 10:15. From 09:30 to 10:00 is 30 minutes, then 15 more: 45 minutes." },
            { label: "Friend's house", q: "Max's graph: the line rises from 0 km to 2 km between 09:00 and 09:30, is flat from 09:30 to 10:15, then falls from 2 km to 0 km between 10:15 and 10:45. How many minutes did Max spend at his friend's house?",
              why: "The stay is the horizontal part of the graph, from 09:30 to 10:15, which is 45 minutes." }
          ],
          levels: {
            support: {
              steps: ["Find the flat part of the graph: that is when he was stationary.", "Read the time at the start and the end of the flat part.", "Count on from the start time to the end time."],
              example: { q: "Eva's graph: the line rises from 0 km to 1 km between 14:00 and 14:20, is flat from 14:20 to 14:50, then falls to 0 km at 15:10. How many minutes did Eva spend at the park?",
                         steps: ["The flat part runs from 14:20 to 14:50.", "From 14:20 to 14:50 is 30 minutes.", "She spent 30 minutes at the park."],
                         answer: "30 minutes", check: "(14 * 60 + 50) - (14 * 60 + 20)" }
            },
            core: { hint: "The time at the shop is the flat part of the line. When does it start and end?" },
            stretch: { extend: "Max walked 2 km there in 30 minutes and 2 km back in 30 minutes. Was his speed the same both ways? Explain how the two sloping parts of the graph show this." }
          },
          why: "The flat part runs from 09:30 to 10:15. From 09:30 to 10:00 is 30 minutes, then 15 more to 10:15: 45 minutes in total."
        },
        {
          title: "Total distance on a return journey",
          task: { kind: "numeric", q: "A graph shows a bike ride. The line rises from 0 km to 12 km in the first hour, is flat for half an hour, then falls back to 0 km over the next hour. What is the total distance cycled, in km?", answer: 24, tolerance: 0, units: "km", check: "12 + 12",
                  misconceptions: [
                    { answer: 12, says: "You read the highest point of the graph, 12 km. That is the furthest distance from home. The rider then cycled 12 km back, so the total is 12 + 12 = 24 km.", check: "12" },
                    { answer: 0, says: "You read the final point of the graph. It is 0 because the rider is back home, not because no distance was travelled. Add the 12 km there and the 12 km back.", check: "12 - 12" }
                  ] },
          explain: "Say, in one sentence, why the total distance is more than the highest point on the graph.",
          contexts: [
            { label: "Run", q: "A graph shows a run. The line rises from 0 km to 12 km in the first hour, is flat for half an hour, then falls back to 0 km over the next hour. What is the total distance run, in km?",
              why: "12 km out and 12 km back: 12 + 12 = 24 km." },
            { label: "Drive", q: "A graph shows a car journey. The line rises from 0 km to 12 km in the first hour, is flat for half an hour, then falls back to 0 km over the next hour. What is the total distance driven, in km?",
              why: "The car went 12 km away and then 12 km back home. The total distance is 12 + 12 = 24 km." }
          ],
          levels: {
            support: {
              steps: ["Find how far the line rises: that is the distance there.", "Find how far it falls back: that is the distance back.", "Add the two distances. Ignore the flat part: no distance is covered while stationary."],
              example: { q: "A graph of a walk rises from 0 km to 3 km, is flat for 20 minutes, then falls back to 0 km. What is the total distance walked, in km?",
                         steps: ["The walk out is 3 km.", "The walk back is another 3 km.", "3 + 3 = 6 km."],
                         answer: "6 km", check: "3 + 3" }
            },
            core: { hint: "The rider went out and came back. How far is each part?" },
            stretch: { extend: "The rider took 1 hour to go out and 1 hour to come back. Explain how the graph would look different if the ride home had taken only 30 minutes." }
          },
          why: "The rider cycled 12 km away from home and 12 km back. Total distance 12 + 12 = 24 km."
        },
        {
          title: "True or false about a graph",
          task: { kind: "mcq", q: "A graph of a car journey: the line slopes up from 0 km to 20 km between 0 and 1 hour, is flat from 1 hour to 1 hour 30 minutes, then slopes up more steeply to 50 km at 2 hours 30 minutes. Which statement is true?",
                  options: ["The car is stationary for 1 hour", "The car travels 30 km in the final part", "The car goes uphill in the final part", "The car travels 20 km in total"], answer: 1,
                  feedback: [
                    "The flat part runs from 1 hour to 1 hour 30 minutes, so the car is stationary for 30 minutes, not an hour.",
                    "",
                    "A steeper line means a faster speed, not a hill. A distance–time graph never shows height.",
                    "20 km is only the distance covered in the first hour. The line finishes at 50 km, so the car travels 50 km in total."
                  ] },
          explain: "Say, in one sentence, how you worked out the distance covered in the final part of the journey.",
          levels: {
            support: {
              steps: ["Take each statement in turn.", "For a stationary time, read the start and end of the flat part.", "For a distance in one part, subtract the reading at its start from the reading at its end.", "Remember that the graph never shows hills."],
              example: { q: "A graph rises from 0 km to 15 km in the first hour, is flat for 20 minutes, then rises to 35 km. Is the statement 'the car travels 20 km in the final part' true or false?",
                         steps: ["The final part starts at 15 km and ends at 35 km.", "35 − 15 = 20.", "The statement is true."],
                         answer: "true" }
            },
            core: { hint: "Subtract the distance at the start of the final part from the distance at its end." },
            stretch: { extend: "Rewrite the three false statements so that each one becomes true, and explain what was wrong with each original." }
          },
          why: "The final part rises from 20 km to 50 km, so the car travels 50 − 20 = 30 km. The stop lasts 30 minutes, the graph shows no hills, and the total is 50 km."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 6
    {
      key: "graphs-speed", n: 6,
      title: "Drawing graphs and finding speed",
      lead: "Draw a distance–time graph from a story, see that steeper means faster, and work out speeds from the graph.",
      covers: [8],
      pretext: {
        words: [
          { word: "plot", means: "to mark a point on a graph", sentence: "Plot the point for 20 minutes and 2 km." },
          { word: "scale", means: "what each square on an axis is worth", sentence: "On this scale, one square is 10 minutes." },
          { word: "steeper", means: "rising more sharply", sentence: "The steeper line shows the faster runner." },
          { word: "section", means: "one part of the journey", sentence: "Find the speed for each section of the graph." },
          { word: "average speed", means: "total distance divided by total time", sentence: "Her average speed for the whole race was 12 km/h." }
        ],
        passage: [
          "You can draw a distance–time graph from a story.",
          "Plot the time along the bottom and the distance up the side.",
          "Join the points with straight lines.",
          "A rest is a flat line.",
          "The steeper the line, the faster the speed.",
          "A flat line has a speed of zero.",
          "To find the speed of one part, read its distance and its time.",
          "Then divide the distance by the time.",
          "A line that rises 20 km in half an hour shows 40 km/h.",
          "For a whole journey, divide the total distance by the total time.",
          "Include any stops in the total time."
        ]
      },
      sections: [
        {
          heading: "Drawing the graph from a story",
          paragraphs: [
            "To draw a distance–time graph, turn each part of the story into a point. Start at (0, 0). After each part, add the time taken to the time so far, and add the distance covered to the distance so far. During a rest the time moves on but the distance does not.",
            "Amir runs 2 km in 12 minutes, rests for 4 minutes, then runs 3 km in 24 minutes. The points are (0 min, 0 km), then (12 min, 2 km), then (16 min, 2 km) after the rest, then (40 min, 5 km). Join them with straight lines: up, flat, up.",
            "Ron drew a graph where the line went down during a stop. That is a mistake: during a stop the line must be flat, because the distance from home stays the same. A line going down would mean walking back towards home."
          ],
          worked: {
            q: "Amir runs 2 km in 12 minutes, rests for 4 minutes, then runs 3 km in 24 minutes. At what time, in minutes, does his graph finish?",
            steps: ["Add up the times: 12 + 4 + 24 = 40.", "The graph finishes at 40 minutes.", "Check the distance: 2 + 3 = 5 km, so the last point is (40, 5)."],
            answer: "40 minutes", check: "12 + 4 + 24"
          },
          tip: "Each part of the story adds to the time. Only the moving parts add to the distance."
        },
        {
          heading: "Steeper means faster",
          paragraphs: [
            "Compare two runners on the same graph. The one whose line is steeper covers more distance in the same time, so she is faster. Amir is right when he says a coach is going faster where its graph is steeper.",
            "In a race, the first runner to reach the finishing distance has the line that reaches the top first. If two lines cross, the runners are at the same distance at the same moment: one is overtaking the other.",
            "A flat line is the least steep of all. Its speed is zero, because no distance is covered."
          ],
          worked: {
            q: "Eva and Annie both run 100 m. Eva's line reaches 100 m at 16 seconds and Annie's reaches 100 m at 20 seconds. Who is faster, and what is Eva's average speed in m/s?",
            steps: ["Eva reaches 100 m first, so her line is steeper and she is faster.", "Speed = distance ÷ time = 100 ÷ 16.", "100 ÷ 16 = 6.25."],
            answer: "6.25 m/s", check: "100 / 16"
          },
          tip: "Same distance, less time: steeper line, faster runner."
        },
        {
          heading: "Speed from one section of the graph",
          paragraphs: [
            "To find the speed in one section, read how far the line rises and how long it takes. Then divide. If a line rises from 10 km to 40 km between 1 pm and 2:30 pm, the distance is 40 − 10 = 30 km and the time is 1.5 hours.",
            "The speed in that section is 30 ÷ 1.5 = 20 km/h. Remember to turn minutes into a fraction of an hour before you divide: 1 hour 30 minutes is 1.5 hours, and 20 minutes is one third of an hour.",
            "On a drone's graph, if the line rises 2 km in 20 minutes, the speed is 2 km divided by one third of an hour, which is 6 km/h. Dividing by one third is the same as multiplying by 3."
          ],
          worked: {
            q: "On a graph the line rises from 10 km to 40 km between 1 pm and 2:30 pm. What is the average speed for this section, in km/h?",
            steps: ["Distance: 40 − 10 = 30 km.", "Time: from 1 pm to 2:30 pm is 1 hour 30 minutes, which is 1.5 hours.", "Speed = 30 ÷ 1.5 = 20."],
            answer: "20 km/h", check: "(40 - 10) / ((2 * 60 + 30 - 1 * 60) / 60)"
          },
          tip: "Speed of a section = rise in distance ÷ time taken, with the time in hours."
        },
        {
          heading: "Average speed for the whole journey",
          paragraphs: [
            "For the average speed of a whole journey, use the total distance and the total time. If the question says 'for the whole journey', the stops count in the time, because the clock keeps running while you rest.",
            "A runner covers 12 km in 50 minutes, rests for 10 minutes, then runs 6 km in 30 minutes. Total distance 12 + 6 = 18 km. Total time 50 + 10 + 30 = 90 minutes, which is 1.5 hours. Average speed 18 ÷ 1.5 = 12 km/h.",
            "Sometimes a question asks for the average speed only while moving. Then leave the stops out of the time. Read the question carefully to see which is wanted."
          ],
          worked: {
            q: "A runner covers 12 km in 50 minutes, rests for 10 minutes, then runs 6 km in 30 minutes. What is her average speed for the whole race, in km/h?",
            steps: ["Total distance: 12 + 6 = 18 km.", "Total time, including the rest: 50 + 10 + 30 = 90 minutes, which is 1.5 hours.", "Average speed = 18 ÷ 1.5 = 12."],
            answer: "12 km/h", check: "(12 + 6) / ((50 + 10 + 30) / 60)"
          },
          tip: "Whole journey: total distance ÷ total time, stops included."
        }
      ],
      gate: [
        { kind: "mcq", q: "Two lines on a distance–time graph show two cars. Line P is steeper than line Q. What does this tell you?", options: ["Car P is faster", "Car Q is faster", "Car P travels further in total", "Car P is driving up a hill"], answer: 0,
          feedback: [
            "",
            "A steeper line covers more distance in the same time, so the steeper line, P, is the faster car.",
            "Steepness shows speed, not total distance. A steep line can still stop early and cover less distance overall.",
            "A distance–time graph does not show hills. The vertical axis is distance, not height."
          ],
          why: "A steeper line means more distance in the same time, which means a greater speed." },
        { kind: "numeric", q: "A line on a distance–time graph rises from 0 km to 30 km between 2 pm and 3 pm. What is the speed in km/h?", answer: 30, tolerance: 0, units: "km/h", check: "30 / (3 - 2)",
          misconceptions: [
            { answer: 15, says: "You divided by the clock reading 2. The time taken is from 2 pm to 3 pm, which is 3 − 2 = 1 hour, so the speed is 30 ÷ 1 = 30 km/h.", check: "30 / 2" },
            { answer: 10, says: "You divided by the clock reading 3. Use the time taken, 1 hour, not the time on the clock: 30 km in 1 hour is 30 km/h.", check: "30 / 3" }
          ],
          why: "The time taken is 1 hour and the distance is 30 km, so the speed is 30 ÷ 1 = 30 km/h." },
        { kind: "numeric", q: "A flat line on a distance–time graph lasts for 20 minutes. What is the speed during this time, in km/h?", answer: 0, tolerance: 0, units: "km/h", check: "0 * 20",
          misconceptions: [
            { answer: 20, says: "You gave the time as the speed. During a flat line no distance is covered, so the speed is 0 km/h however long it lasts.", check: "20" }
          ],
          why: "A flat line means the distance does not change. No distance in 20 minutes is a speed of 0." }
      ],
      modules: [
        {
          title: "Speed from a section of the graph",
          task: { kind: "numeric", q: "On Nijah's graph the line rises from 5 km to 35 km between 10:00 and 11:30. What is her average speed for this section, in km/h?", answer: 20, tolerance: 0, units: "km/h", check: "(35 - 5) / ((11 * 60 + 30 - 10 * 60) / 60)",
                  misconceptions: [
                    { answer: 30, says: "You found the distance, 35 − 5 = 30 km, but did not divide by the time. The section takes 1.5 hours, so the speed is 30 ÷ 1.5 = 20 km/h.", check: "35 - 5" },
                    { answer: 15, says: "You divided the 30 km by 2, counting the labelled hours 10 and 11. The time taken is from 10:00 to 11:30, which is 1.5 hours: 30 ÷ 1.5 = 20.", check: "(35 - 5) / (11 - 10 + 1)" },
                    { answer: 40, says: "You added the two distance readings: 35 + 5 = 40. The distance covered is the rise from 5 km to 35 km, which is 35 − 5 = 30 km, and then you still need to divide by the time.", check: "35 + 5" }
                  ] },
          explain: "Say, in one sentence, why you subtract 5 from 35 before you work out the speed.",
          contexts: [
            { label: "Canal boat", q: "On a canal boat's graph the line rises from 5 km to 35 km between 10:00 and 11:30. What is its average speed for this section, in km/h?",
              why: "Distance 35 − 5 = 30 km. Time 10:00 to 11:30 is 1.5 hours. Speed 30 ÷ 1.5 = 20 km/h." },
            { label: "Horse ride", q: "On a horse ride's graph the line rises from 5 km to 35 km between 10:00 and 11:30. What is the average speed for this section, in km/h?",
              why: "The line rises 30 km in 1.5 hours, so the speed is 30 ÷ 1.5 = 20 km/h." },
            { label: "Tractor", q: "On a tractor's graph the line rises from 5 km to 35 km between 10:00 and 11:30. What is its average speed for this section, in km/h?",
              why: "Rise in distance 35 − 5 = 30 km; time taken 1.5 hours; 30 ÷ 1.5 = 20 km/h." }
          ],
          levels: {
            support: {
              steps: ["Find the rise in distance: the end reading minus the start reading.", "Find the time taken: from the start time to the end time, in hours.", "Divide the distance by the time."],
              example: { q: "A line rises from 10 km to 50 km between 13:00 and 15:00. What is the average speed for this section, in km/h?",
                         steps: ["Distance: 50 − 10 = 40 km.", "Time: 13:00 to 15:00 is 2 hours.", "Speed: 40 ÷ 2 = 20 km/h."],
                         answer: "20 km/h", check: "(50 - 10) / (15 - 13)" }
            },
            core: { hint: "The distance covered is 35 − 5. The time is from 10:00 to 11:30, in hours." },
            stretch: { extend: "After 11:30 Nijah's line is flat until 12:00, then falls back to 5 km at 13:00. Work out the speed of the return section and explain why a falling line still has a positive speed." }
          },
          why: "Distance covered: 35 − 5 = 30 km. Time taken: 10:00 to 11:30 is 1.5 hours. Speed = 30 ÷ 1.5 = 20 km/h."
        },
        {
          title: "Average speed for the whole journey",
          task: { kind: "numeric", q: "A coach drives 90 miles in 1 hour 30 minutes, stops for 30 minutes, then drives 60 miles in 1 hour. What is its average speed for the whole journey, including the stop, in mph?", answer: 50, tolerance: 0, units: "mph", check: "(90 + 60) / ((1 + 30 / 60) + (30 / 60) + 1)",
                  misconceptions: [
                    { answer: 60, says: "You left the stop out of the time. The whole journey takes 1.5 + 0.5 + 1 = 3 hours, so the average speed is 150 ÷ 3 = 50 mph. Leaving out the stop gives 150 ÷ 2.5 = 60.", check: "(90 + 60) / ((1 + 30 / 60) + 1)" },
                    { answer: 150, says: "You found the total distance, 90 + 60 = 150 miles, but did not divide by the total time of 3 hours.", check: "90 + 60" }
                  ] },
          explain: "Say, in one sentence, why the stop makes the average speed lower.",
          levels: {
            support: {
              steps: ["Add the distances to find the total distance.", "Add all the times, including the stop, and write the total in hours.", "Divide the total distance by the total time."],
              example: { q: "A van drives 40 miles in 1 hour, stops for 30 minutes, then drives 20 miles in 30 minutes. What is its average speed for the whole journey, including the stop, in mph?",
                         steps: ["Total distance: 40 + 20 = 60 miles.", "Total time: 1 + 0.5 + 0.5 = 2 hours.", "Average speed: 60 ÷ 2 = 30 mph."],
                         answer: "30 mph", check: "(40 + 20) / (1 + 30 / 60 + 30 / 60)" }
            },
            core: { hint: "Total distance is 150 miles. The total time, with the stop, is 3 hours." },
            stretch: { extend: "The coach's speed was 60 mph in both driving sections. Explain why the average speed for the whole journey is not 60 mph, and sketch in words what the graph looks like." }
          },
          why: "Total distance 90 + 60 = 150 miles. Total time 1.5 + 0.5 + 1 = 3 hours. Average speed 150 ÷ 3 = 50 mph."
        },
        {
          title: "Plot the journey",
          task: { kind: "order", q: "Amir walks 1 km in 15 minutes, rests for 5 minutes, then walks 2 km in 30 minutes. Put the points of his distance–time graph in the order they are plotted, as (minutes, km).",
                  items: ["(0, 0)", "(15, 1)", "(20, 1)", "(50, 3)"] },
          explain: "Say, in one sentence, why the second and third points have the same distance.",
          levels: {
            support: {
              steps: ["Every graph starts at (0, 0).", "After each part, add its time to the minutes so far. Add its distance to the km so far, but add nothing for a rest.", "Write each new point as (minutes, km)."],
              example: { q: "Eva runs 2 km in 10 minutes, rests for 5 minutes, then runs 1 km in 10 minutes. List the points of her graph as (minutes, km).",
                         steps: ["Start at (0, 0).", "After the first run: (10, 2).", "After the rest: time 15, distance still 2, so (15, 2).", "After the last run: (25, 3)."],
                         answer: "(0, 0), (10, 2), (15, 2), (25, 3)" }
            },
            core: { hint: "The time keeps adding up. The distance only grows when Amir is walking." },
            stretch: { extend: "Work out Amir's average speed for the whole walk in km/h, and explain which of the two walking sections has the steeper line." }
          },
          why: "Start at (0, 0). After 15 minutes he has walked 1 km: (15, 1). The rest adds 5 minutes but no distance: (20, 1). The last walk adds 30 minutes and 2 km: (50, 3)."
        }
      ]
    }
  ],

  sources: {
    deckDump: "ma_y07_13_main.txt",
    decksUsed: [
      "01. Convert between milliseconds, seconds, minutes and hours.pptx",
      "02. Convert between hours, days and years.pptx",
      "03. Solve problems with tables and timetables.pptx",
      "04. Solve problems with Time and the calendar (1).pptx",
      "05. Calculate Speed.pptx",
      "06 & 07. Solve problems with speed distance and time.pptx",
      "08. Interpret distance, Time graphs.pptx",
      "09 & 10. Draw distance time graphs and calculate speed.pptx"
    ],
    notes: "Lesson sequence and titles come from the eight MAIN decks in the dump. The department numbers them 1–10 because two decks ('06 & 07' and '09 & 10') each cover a double lesson; lessons[] lists the eight decks as the dump evidences them. The skills, contexts (bus and train timetables, the calendar, journeys described as stories, drone and race graphs), scaffolds (the 'I do / We do / You do' model, the conversion chain ms–s–min–h, 'let the units tell you the formula') and misconceptions (3.25 hours read as 3 h 25 min, 120 minutes read as 2 seconds, subtracting clock times as ordinary numbers, dividing miles by minutes, a steep graph read as a hill, total distance read as distance from home) are the decks' own. Every question uses original numbers; no deck question, answer or GCSE past-paper item was reproduced. Distance–time graphs cannot be drawn in text, so every graph is described in words as a list of points and sections. No slide images were available, so no number was read from a layout-lost slide. See NOTES.md."
  }
};
