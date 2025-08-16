interface QuestionData {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

const quizData = [
  {
    id: 1,
    category: "Notes",
    question: "How many letters are used to name musical notes?",
    options: ["5", "7", "8", "12"],
    correct: "7",
    explanation: "We use 7 letters: A, B, C, D, E, F, and G to name all musical notes."
  },
  {
    id: 2,
    category: "Staff",
    question: "How many lines does a musical staff have?",
    options: ["4", "5", "6", "7"],
    correct: "5",
    explanation: "A musical staff has 5 horizontal lines where we place notes."
  },
  {
    id: 3,
    category: "Note Values",
    question: "Which note lasts the longest?",
    options: ["Quarter note", "Half note", "Whole note", "Eighth note"],
    correct: "Whole note",
    explanation: "A whole note lasts for 4 beats, making it the longest basic note value."
  },
  {
    id: 4,
    category: "Piano Keys",
    question: "What color are most of the keys on a piano?",
    options: ["Black", "White", "Gray", "Brown"],
    correct: "White",
    explanation: "A piano has mostly white keys, with black keys in between some of them."
  },
  {
    id: 5,
    category: "Time Signature",
    question: "What does the top number in 4/4 time tell us?",
    options: ["How fast to play", "How many beats per measure", "What clef to use", "How loud to play"],
    correct: "How many beats per measure",
    explanation: "The top number tells us there are 4 beats in each measure."
  },
  {
    id: 6,
    category: "Clefs",
    question: "Which clef looks like a fancy letter G?",
    options: ["Bass clef", "Alto clef", "Treble clef", "Tenor clef"],
    correct: "Treble clef",
    explanation: "The treble clef symbol looks like a decorative letter G and is the most common clef."
  },
  {
    id: 7,
    category: "Instruments",
    question: "Which instrument has 88 keys?",
    options: ["Guitar", "Violin", "Piano", "Flute"],
    correct: "Piano",
    explanation: "A full-size piano has 88 keys - 52 white keys and 36 black keys."
  },
  {
    id: 8,
    category: "Tempo",
    question: "What does 'tempo' mean in music?",
    options: ["How loud the music is", "How fast or slow the music is", "What key the music is in", "How many instruments are playing"],
    correct: "How fast or slow the music is",
    explanation: "Tempo refers to the speed of the music - whether it's fast, slow, or somewhere in between."
  },
  {
    id: 9,
    category: "Note Values",
    question: "How many quarter notes equal one whole note?",
    options: ["2", "3", "4", "5"],
    correct: "4",
    explanation: "It takes 4 quarter notes to equal the length of 1 whole note."
  },
  {
    id: 10,
    category: "Dynamics",
    question: "What does 'forte' mean in music?",
    options: ["Soft", "Loud", "Fast", "Slow"],
    correct: "Loud",
    explanation: "Forte (f) is an Italian word meaning 'loud' or 'strong' in music."
  },
  {
    id: 11,
    category: "Sharps and Flats",
    question: "What does a sharp (#) do to a note?",
    options: ["Makes it lower", "Makes it higher", "Makes it louder", "Makes it softer"],
    correct: "Makes it higher",
    explanation: "A sharp raises a note by a half step, making it sound higher."
  },
  {
    id: 12,
    category: "Basic Chords",
    question: "How many different notes make up a basic chord?",
    options: ["2", "3", "4", "5"],
    correct: "3",
    explanation: "A basic chord (called a triad) is made up of 3 different notes played together."
  },
  {
    id: 13,
    category: "Rhythm",
    question: "What do we call the steady pulse in music?",
    options: ["Melody", "Harmony", "Beat", "Scale"],
    correct: "Beat",
    explanation: "The beat is the steady pulse you feel in music - like a musical heartbeat."
  },
  {
    id: 14,
    category: "Scales",
    question: "How many notes are in a major scale?",
    options: ["5", "6", "7", "8"],
    correct: "8",
    explanation: "A major scale has 8 notes, starting and ending on the same letter (like C to C)."
  },
  {
    id: 15,
    category: "Instruments",
    question: "Which instrument uses a bow to make sound?",
    options: ["Piano", "Guitar", "Violin", "Trumpet"],
    correct: "Violin",
    explanation: "The violin uses a bow that's drawn across the strings to create sound."
  }
];

export default quizData as QuestionData[];