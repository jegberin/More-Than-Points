import type { VarkKey } from "@/lib/guides";

export type QuizQuestion = {
  q: string;
  a: { t: string; k: VarkKey }[];
};

// Option order is deliberately rotated across questions to avoid positional bias.
export const QUESTIONS: QuizQuestion[] = [
  {
    q: "You're revising a topic you find hard. What actually helps most?",
    a: [
      { t: "Redrawing it as a diagram or mind map", k: "V" },
      { t: "Rewriting your notes in your own words", k: "R" },
      { t: "Explaining it out loud to someone, or to yourself", k: "A" },
      { t: "Working through practice questions and examples", k: "K" },
    ],
  },
  {
    q: "A teacher explains something new. You understand it best when…",
    a: [
      { t: "They talk it through and you can ask questions", k: "A" },
      { t: "There's a diagram or slide on the board", k: "V" },
      { t: "You get to try it yourself straight after", k: "K" },
      { t: "You have the notes or textbook in front of you", k: "R" },
    ],
  },
  {
    q: "Someone gives you directions to a place you've never been.",
    a: [
      { t: "You want to see it on a map", k: "V" },
      { t: "You want it written down as a list of turns", k: "R" },
      { t: "You'd rather just head off and figure it out", k: "K" },
      { t: "You want them to talk you through it", k: "A" },
    ],
  },
  {
    q: "Your notes usually look like…",
    a: [
      { t: "Colour, arrows, boxes, highlighting", k: "V" },
      { t: "Neat headings, bullet points, full sentences", k: "R" },
      { t: "Fairly sparse — you don't take many", k: "K" },
      { t: "Whatever you scribbled while listening", k: "A" },
    ],
  },
  {
    q: "One free hour the night before a test. What's the most useful way to spend it?",
    a: [
      { t: "Reading over and condensing your notes", k: "R" },
      { t: "Going through it with a friend on a call", k: "A" },
      { t: "Making a one-page visual summary", k: "V" },
      { t: "Doing a past paper against the clock", k: "K" },
    ],
  },
  {
    q: "You remember something from class last year. What comes back first?",
    a: [
      { t: "What the page or the board looked like", k: "V" },
      { t: "The teacher's voice, or a conversation about it", k: "A" },
      { t: "Doing the experiment, the trip, the activity", k: "K" },
      { t: "The words — you can nearly recite the definition", k: "R" },
    ],
  },
  {
    q: "You're learning something new outside school — a game, a skill, an app.",
    a: [
      { t: "You just start, and learn by getting it wrong", k: "K" },
      { t: "You watch someone do it on video first", k: "V" },
      { t: "You read the instructions properly", k: "R" },
      { t: "You get someone to talk you through it", k: "A" },
    ],
  },
  {
    q: "Group project. What role do you drift into?",
    a: [
      { t: "Doing the talking and the presenting", k: "A" },
      { t: "Writing it up and keeping everyone organised", k: "R" },
      { t: "Making it look right — slides, layout, design", k: "V" },
      { t: "Actually building or making the thing", k: "K" },
    ],
  },
  {
    q: "Two hours of study. Which is closest to how it really goes?",
    a: [
      { t: "Head down at a desk, working through it in order", k: "R" },
      { t: "Up and down, short bursts, moving around", k: "K" },
      { t: "Reading things aloud, or muttering to yourself", k: "A" },
      { t: "Highlighters and colour everywhere", k: "V" },
    ],
  },
  {
    q: "Something just isn't going in. What's your instinct?",
    a: [
      { t: "Ask someone to explain it a different way", k: "A" },
      { t: "Find a video or a diagram of it", k: "V" },
      { t: "Read a different explanation of it", k: "R" },
      { t: "Try an example and see where it falls apart", k: "K" },
    ],
  },
  {
    q: "You're learning key terms or vocabulary.",
    a: [
      { t: "Write them out again and again", k: "R" },
      { t: "Flashcards with colour or images", k: "V" },
      { t: "Say them out loud, or record and listen back", k: "A" },
      { t: "Use them — in sentences, in conversation, in practice", k: "K" },
    ],
  },
  {
    q: "Be honest — when do you take in the least?",
    a: [
      { t: "Sitting still and listening for a long time", k: "K" },
      { t: "When there's nothing to look at, just talking", k: "V" },
      { t: "Reading silently on your own for ages", k: "A" },
      { t: "When it's all discussion and nothing gets written down", k: "R" },
    ],
  },
];

export const STYLES: Record<VarkKey, { name: string; desc: string; strategies: string[] }> = {
  V: {
    name: "Seeing it",
    desc: "You get most from diagrams, layout, colour and anything you can picture.",
    strategies: [
      "Turn a topic into one page — a mind map, a flowchart, a timeline. The act of laying it out is where the learning happens, not the finished sheet.",
      "Colour-code by meaning, not decoration. One colour for causes, one for effects, one for examples.",
      "Before an exam, try to picture your one-page summary and redraw it from memory.",
      "Use the margins. Small sketches beside a paragraph give you something to hook the words onto.",
    ],
  },
  A: {
    name: "Hearing it",
    desc: "You get most from talking things through, explaining, and listening.",
    strategies: [
      "Explain the topic out loud as if teaching someone who knows nothing about it. Where you stumble is exactly what you don't know yet.",
      "Record yourself reading your notes and listen back on the walk or the bus.",
      "Study with one other person and take turns asking each other questions.",
      "Read tricky passages aloud rather than silently — it slows you down at the points that need it.",
    ],
  },
  R: {
    name: "Reading and writing it",
    desc: "You get most from words on a page — reading, note-taking, rewriting.",
    strategies: [
      "Rewrite your notes shorter each time. Two pages, then one, then five bullet points. The compression is the revision.",
      "Write your own exam questions and full answers, then mark them against the marking scheme.",
      "Keep a running list of definitions in your own words, not the textbook's.",
      "Careful: neat notes can feel like progress without being it. Always close the book and write from memory too.",
    ],
  },
  K: {
    name: "Doing it",
    desc: "You get most from practice, movement and working things through yourself.",
    strategies: [
      "Go to past papers early. Not at the end of revision — at the start, to find out what you can't do yet.",
      "Study in short blocks with real breaks. Twenty-five minutes on, five up and moving.",
      "Turn abstract topics into something physical — cards you can sort, a model, a walk-through of the steps.",
      "Where a subject has a practical version, do that version. Experiments, fieldwork, building it, using it.",
    ],
  },
};

export const VARK_ORDER: VarkKey[] = ["V", "A", "R", "K"];
